import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  onSnapshot,
  query,
  orderBy,
  limit,
  serverTimestamp,
  type Firestore
} from "firebase/firestore";

/* ============================================================
   Firebase App & Firestore Initialization with Safe Fallback
   ============================================================ */

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

/**
 * Checks whether valid Firebase credentials have been configured
 */
export const isFirebaseConfigured = (): boolean => {
  return !!(
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
    !process.env.NEXT_PUBLIC_FIREBASE_API_KEY.includes("your-api-key")
  );
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

if (typeof window !== "undefined" && isFirebaseConfigured()) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  } catch (err) {
    console.warn("[Firebase] Could not initialize Firebase client, falling back to local storage:", err);
  }
}

export { app, db };

/* ============================================================
   Realtime Grades & Telemetry Synchronization
   ============================================================ */

export interface GradeRecord {
  studentId: string;
  course: string;
  grade: string;
  attendance: string;
  teacher?: string;
  updatedAt?: any;
}

/**
 * Subscribes to realtime grade updates.
 * When Firebase Firestore is configured, attaches an onSnapshot listener to the 'grades' collection.
 * Seamlessly falls back to localStorage and custom window events when offline or unconfigured.
 */
export function subscribeToGrades(
  callback: (roster: Record<string, GradeRecord>) => void
): () => void {
  // 1. Try Firebase Firestore Realtime listener
  if (db && isFirebaseConfigured()) {
    try {
      const gradesCol = collection(db, "grades");
      const unsubscribe = onSnapshot(
        gradesCol,
        (snapshot) => {
          const roster: Record<string, GradeRecord> = {};
          snapshot.forEach((docSnap) => {
            const data = docSnap.data() as GradeRecord;
            const key = docSnap.id; // Format: `${studentId}_${course}`
            roster[key] = { ...data };
          });

          // Mirror to localStorage for offline cache
          try {
            const localRoster = JSON.parse(localStorage.getItem("edusphere_grades_roster") || "{}");
            const merged = { ...localRoster, ...roster };
            localStorage.setItem("edusphere_grades_roster", JSON.stringify(merged));
          } catch {}

          callback(roster);
        },
        (error) => {
          console.warn("[Firebase] Firestore onSnapshot error, falling back to local cache:", error);
          loadLocalGrades(callback);
        }
      );
      return unsubscribe;
    } catch (err) {
      console.warn("[Firebase] Failed to bind realtime grades listener:", err);
    }
  }

  // 2. Local Fallback with Window Event Listener
  loadLocalGrades(callback);

  const handleLocalUpdate = (e: Event) => {
    const customEvent = e as CustomEvent;
    if (customEvent.detail) {
      loadLocalGrades(callback);
    }
  };

  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === "edusphere_grades_roster") {
      loadLocalGrades(callback);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("edusphere_grade_dispatched", handleLocalUpdate);
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("edusphere_grade_dispatched", handleLocalUpdate);
      window.removeEventListener("storage", handleStorageChange);
    };
  }

  return () => {};
}

function loadLocalGrades(callback: (roster: Record<string, GradeRecord>) => void) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem("edusphere_grades_roster");
    if (raw) {
      callback(JSON.parse(raw));
    }
  } catch {}
}

/**
 * Dispatches a grade record to Firestore in realtime and mirrors it to local storage.
 */
export async function dispatchGradeToFirebase(record: GradeRecord): Promise<void> {
  const compoundKey = `${record.studentId}_${record.course}`;

  // Always save to localStorage immediately for instant UI feedback
  if (typeof window !== "undefined") {
    try {
      const existing = JSON.parse(localStorage.getItem("edusphere_grades_roster") || "{}");
      existing[compoundKey] = {
        ...record,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem("edusphere_grades_roster", JSON.stringify(existing));

      // Broadcast event across components on same page
      window.dispatchEvent(
        new CustomEvent("edusphere_grade_dispatched", { detail: existing[compoundKey] })
      );
    } catch {}
  }

  // If Firebase is available, write directly to Cloud Firestore in realtime
  if (db && isFirebaseConfigured()) {
    try {
      const gradeDocRef = doc(db, "grades", compoundKey);
      await setDoc(
        gradeDocRef,
        {
          studentId: record.studentId,
          course: record.course,
          grade: record.grade,
          attendance: record.attendance,
          teacher: record.teacher || "Faculty Instructor",
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );
    } catch (err) {
      console.warn("[Firebase] Could not write grade to Firestore:", err);
    }
  }
}

/* ============================================================
   Realtime Academic Alerts & Notifications
   ============================================================ */

export interface AcademicNotification {
  id?: string;
  title: string;
  message: string;
  course?: string;
  teacher?: string;
  timestamp?: string;
  unread?: boolean;
  createdAt?: any;
}

/**
 * Subscribes to realtime academic notifications from Firestore.
 */
export function subscribeToNotifications(
  callback: (notifications: AcademicNotification[]) => void
): () => void {
  if (db && isFirebaseConfigured()) {
    try {
      const notifsCol = collection(db, "notifications");
      const q = query(notifsCol, orderBy("createdAt", "desc"), limit(20));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const list: AcademicNotification[] = [];
          snapshot.forEach((d) => {
            const data = d.data() as AcademicNotification;
            list.push({
              id: d.id,
              ...data
            });
          });

          // Mirror to localStorage
          try {
            localStorage.setItem("edusphere_notifications_list", JSON.stringify(list));
          } catch {}

          callback(list);
        },
        (error) => {
          console.warn("[Firebase] Notifications onSnapshot error, falling back to local:", error);
          loadLocalNotifications(callback);
        }
      );
      return unsubscribe;
    } catch (err) {
      console.warn("[Firebase] Failed to bind notifications listener:", err);
    }
  }

  // Local fallback
  loadLocalNotifications(callback);

  const handleLocalNotif = () => loadLocalNotifications(callback);
  if (typeof window !== "undefined") {
    window.addEventListener("edusphere_notif_added", handleLocalNotif);
    window.addEventListener("storage", handleLocalNotif);
    return () => {
      window.removeEventListener("edusphere_notif_added", handleLocalNotif);
      window.removeEventListener("storage", handleLocalNotif);
    };
  }

  return () => {};
}

function loadLocalNotifications(callback: (notifications: AcademicNotification[]) => void) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem("edusphere_notifications_list");
    if (raw) {
      callback(JSON.parse(raw));
    }
  } catch {}
}

/**
 * Sends a notification to Firestore and broadcasts it locally.
 */
export async function sendNotificationToFirebase(notif: AcademicNotification): Promise<void> {
  const notifId = notif.id || `notif_${Date.now()}`;
  const formatted: AcademicNotification = {
    ...notif,
    id: notifId,
    timestamp: notif.timestamp || new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    unread: true
  };

  // Local storage save & dispatch
  if (typeof window !== "undefined") {
    try {
      const existing: AcademicNotification[] = JSON.parse(
        localStorage.getItem("edusphere_notifications_list") || "[]"
      );
      const updated = [formatted, ...existing.filter((n) => n.id !== notifId)].slice(0, 20);
      localStorage.setItem("edusphere_notifications_list", JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent("edusphere_notif_added", { detail: formatted }));
    } catch {}
  }

  // Firestore write
  if (db && isFirebaseConfigured()) {
    try {
      const notifDocRef = doc(db, "notifications", notifId);
      await setDoc(notifDocRef, {
        ...formatted,
        createdAt: serverTimestamp()
      });
    } catch (err) {
      console.warn("[Firebase] Could not send notification to Firestore:", err);
    }
  }
}

/* ============================================================
   Pass & User Registrations (Students & Faculty)
   ============================================================ */

export async function saveStudentToFirebase(student: any): Promise<void> {
  const docId = student.passId || student.studentId || `stu_${Date.now()}`;

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("edusphere_student_pass", JSON.stringify(student));
    } catch {}
  }

  if (db && isFirebaseConfigured()) {
    try {
      const studentDoc = doc(db, "students", docId);
      await setDoc(studentDoc, {
        ...student,
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.warn("[Firebase] Could not save student to Firestore:", err);
    }
  }
}

export async function saveFacultyToFirebase(faculty: any): Promise<void> {
  const docId = faculty.credentialId || faculty.facultyId || `fac_${Date.now()}`;

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("edusphere_faculty_credential", JSON.stringify(faculty));
    } catch {}
  }

  if (db && isFirebaseConfigured()) {
    try {
      const facultyDoc = doc(db, "faculty", docId);
      await setDoc(facultyDoc, {
        ...faculty,
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.warn("[Firebase] Could not save faculty to Firestore:", err);
    }
  }
}

export async function saveFeedbackToFirebase(feedback: any): Promise<void> {
  const docId = feedback.id || `fb_${Date.now()}`;

  if (db && isFirebaseConfigured()) {
    try {
      const feedbackDoc = doc(db, "feedback", docId);
      await setDoc(feedbackDoc, {
        ...feedback,
        createdAt: serverTimestamp()
      });
    } catch (err) {
      console.warn("[Firebase] Could not save feedback to Firestore:", err);
    }
  }
}
