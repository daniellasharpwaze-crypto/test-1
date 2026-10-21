"use client";

import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import {
  subscribeToGrades,
  subscribeToNotifications,
  saveStudentToFirebase,
  saveFacultyToFirebase,
  saveCounselorReportToFirebase,
  isFirebaseConfigured
} from "@/lib/firebase";

/* ===== ICONS ===== */
function IconGraduationCap({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function IconTeacher({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M2 3h20v14H2z" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <circle cx="9" cy="8" r="2" />
      <path d="M5 14a4 4 0 0 1 8 0" />
      <line x1="15" y1="7" x2="19" y2="7" />
      <line x1="15" y1="10" x2="19" y2="10" />
    </svg>
  );
}

function IconBookOpen({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function IconBuilding({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="8" y1="6" x2="8" y2="6.01" />
      <line x1="16" y1="6" x2="16" y2="6.01" />
      <line x1="8" y1="10" x2="8" y2="10.01" />
      <line x1="16" y1="10" x2="16" y2="10.01" />
      <line x1="8" y1="14" x2="8" y2="14.01" />
      <line x1="16" y1="14" x2="16" y2="14.01" />
    </svg>
  );
}

function IconShield({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconBell({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconEyeOff() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function IconFileText() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function IconCheck({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconClose({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconRotate() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  );
}

function IconSparkles({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M12 3l1.912 5.885L20 10.8l-4.945 4.085L16.968 21 12 17.27 7.032 21l1.913-6.115L4 10.8l6.088-1.915L12 3z" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconArrow({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconChevronDown({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function IconCopy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

/* ===== UNIQUE STUDENT COUNTER HELPER ===== */
function countUniqueStudents(students: any[]): number {
  if (!Array.isArray(students) || students.length === 0) return 0;

  const valid = students.filter(s => {
    if (!s) return false;
    const id = (s.studentId || s.id || "").toString().trim().toLowerCase();
    const email = (s.email || "").toString().trim().toLowerCase();
    return id.length > 0 || email.length > 0;
  });

  if (valid.length === 0) return 0;

  const parent: number[] = valid.map((_, i) => i);
  const find = (i: number): number => {
    if (parent[i] === i) return i;
    parent[i] = find(parent[i]);
    return parent[i];
  };
  const union = (i: number, j: number) => {
    const rootI = find(i);
    const rootJ = find(j);
    if (rootI !== rootJ) parent[rootI] = rootJ;
  };

  const idMap = new Map<string, number>();
  const emailMap = new Map<string, number>();

  valid.forEach((s, idx) => {
    const id = (s.studentId || s.id || "").toString().trim().toLowerCase();
    const email = (s.email || "").toString().trim().toLowerCase();

    if (id) {
      if (idMap.has(id)) {
        union(idx, idMap.get(id)!);
      } else {
        idMap.set(id, idx);
      }
    }

    if (email) {
      if (emailMap.has(email)) {
        union(idx, emailMap.get(email)!);
      } else {
        emailMap.set(email, idx);
      }
    }
  });

  const uniqueRoots = new Set<number>();
  valid.forEach((_, idx) => {
    uniqueRoots.add(find(idx));
  });

  return uniqueRoots.size;
}

/* ===== ANIMATED COUNTER ===== */
function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useRef(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const animateTo = (target: number) => {
      if (timer) clearInterval(timer);
      if (target <= 0) {
        setCount(0);
        return;
      }
      let n = 0;
      const step = Math.max(1, Math.floor(target / 60));
      timer = setInterval(() => {
        n += step;
        if (n >= target) {
          setCount(target);
          if (timer) clearInterval(timer);
        } else {
          setCount(n);
        }
      }, 16);
    };

    if (isVisible.current) {
      animateTo(end);
      return () => {
        if (timer) clearInterval(timer);
      };
    }

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        isVisible.current = true;
        obs.disconnect();
        animateTo(end);
      }
    }, { threshold: 0.3 });

    if (ref.current) obs.observe(ref.current);
    return () => {
      obs.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ===== SCROLL REVEAL ===== */
function ScrollReveal({ children, delay = 0, direction = "up" }: { children: ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const getT = useCallback(() => ({
    up: "translateY(36px)",
    down: "translateY(-36px)",
    left: "translateX(36px)",
    right: "translateX(-36px)"
  }[direction]), [direction]);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVis(true);
        obs.unobserve(e.target);
      }
    }, { threshold: 0.05, rootMargin: "0px 0px -30px 0px" });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translate(0,0)" : getT(),
        filter: vis ? "blur(0px)" : "blur(5px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s, filter 0.6s ease ${delay}s`,
        willChange: "opacity, transform, filter"
      }}
    >
      {children}
    </div>
  );
}

/* ===== HELPERS & MINIMAL BUTTON STYLES ===== */
const NEO_FLAT = { background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-flat)", border: "1px solid var(--border-subtle)" };
const NEO_PRESSED = { background: "var(--neu-surface-pressed)", boxShadow: "var(--neu-shadow-pressed)", border: "1px solid var(--border-subtle)" };
const NEO_FLOAT = { background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-float)", border: "1px solid var(--border-subtle)" };

const iStyle = (err = false): React.CSSProperties => ({
  width: "100%",
  padding: "12px 14px",
  borderRadius: "12px",
  border: err ? "2px solid #ef4444" : "1px solid var(--border-subtle)",
  background: "var(--neu-input)",
  boxShadow: "var(--neu-shadow-input)",
  fontFamily: "'Outfit',sans-serif",
  fontSize: "0.92rem",
  color: "var(--text-title)",
  outline: "none",
  boxSizing: "border-box" as const,
  minHeight: "44px"
});

/* Minimal Button Helpers */
const minBtnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  padding: "9px 18px",
  borderRadius: "30px",
  border: "none",
  cursor: "pointer",
  fontFamily: "'Outfit',sans-serif",
  fontWeight: "600",
  fontSize: "0.86rem",
  transition: "all 0.2s ease",
  minHeight: "38px"
};

export default function Home() {
  /* Theme State (Light & Dark) */
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("edusphere_theme");
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (saved === "dark" || (!saved && prefersDark)) {
        setIsDark(true);
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        setIsDark(false);
        document.documentElement.removeAttribute("data-theme");
        document.documentElement.classList.remove("dark");
      }
    } catch (e) { }
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      try {
        if (next) {
          document.documentElement.setAttribute("data-theme", "dark");
          document.documentElement.classList.add("dark");
          localStorage.setItem("edusphere_theme", "dark");
        } else {
          document.documentElement.removeAttribute("data-theme");
          document.documentElement.classList.remove("dark");
          localStorage.setItem("edusphere_theme", "light");
        }
      } catch (e) { }
      return next;
    });
  };
  const [activeTab, setActiveTab] = useState<"student" | "faculty">("student");
  const [rolePopupOpen, setRolePopupOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const navMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target as Node)) {
        setNavMenuOpen(false);
      }
    };
    if (navMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navMenuOpen]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [gradeSentPopup, setGradeSentPopup] = useState(false);
  const [enrolledCount, setEnrolledCount] = useState(0);

  /* Grades, Attendance, and Notification State */
  const [gradesSent, setGradesSent] = useState(0);
  const [campusAttendance, setCampusAttendance] = useState("98.4%");
  const [studentAttendance, setStudentAttendance] = useState("98.4%");
  const [gradesRoster, setGradesRoster] = useState<Record<string, any>>({});
  const [notifBellOpen, setNotifBellOpen] = useState(false);
  const [notificationsList, setNotificationsList] = useState<any[]>([]);
  const [unreadNotifCount, setUnreadNotifCount] = useState(0);
  const [gradeNotifToast, setGradeNotifToast] = useState<{
    show: boolean;
    title: string;
    message: string;
    course?: string;
    teacher?: string;
    avgAttendance?: string;
  }>({
    show: false,
    title: "",
    message: "",
  });

  /* Multi-Step States */
  const [sStep, setSStep] = useState(1);
  const [fStep, setFStep] = useState(1);

  /* Student Form */
  const [sForm, setSForm] = useState({
    fullName: "",
    studentId: "",
    gradeLevel: "Grade 11 - Senior High",
    strand: "STEM (Science, Tech, Eng & Math)",
    section: "",
    email: "",
    guardianName: "",
    guardianPhone: "",
    password: "",
    confirmPassword: "",
    interests: [] as string[],
    agreeTerms: false
  });
  const [sErr, setSErr] = useState<Record<string, string>>({});
  const [sSubmitting, setSSubmitting] = useState(false);
  const [sDone, setSDone] = useState<any>(null);
  const [showSPwd, setShowSPwd] = useState(false);

  /* Student Auth Mode: "register" | "login" */
  const [studentAuthMode, setStudentAuthMode] = useState<"register" | "login">("register");
  const [loginForm, setLoginForm] = useState({ identifier: "", password: "" });
  const [loginErr, setLoginErr] = useState("");
  const [showLoginPwd, setShowLoginPwd] = useState(false);

  /* Faculty Form */
  const [fForm, setFForm] = useState({
    fullName: "",
    role: "Teacher / Faculty Instructor",
    facultyId: "",
    institution: "",
    department: "Science & Engineering Dept",
    email: "",
    phone: "",
    roomOffice: "",
    experienceYears: "5+ Years",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  const [fErr, setFErr] = useState<Record<string, string>>({});
  const [fSubmitting, setFSubmitting] = useState(false);
  const [fDone, setFDone] = useState<any>(null);
  const [showFPwd, setShowFPwd] = useState(false);

  /* Faculty / Admin Auth Mode: "register" | "login" */
  const [adminAuthMode, setAdminAuthMode] = useState<"register" | "login">("register");
  const [adminLoginForm, setAdminLoginForm] = useState({ identifier: "", password: "" });
  const [adminLoginErr, setAdminLoginErr] = useState("");
  const [showAdminLoginPwd, setShowAdminLoginPwd] = useState(false);

  const [legal, setLegal] = useState<{ open: boolean; tab: "privacy" | "safety" | "conduct" }>({
    open: false,
    tab: "privacy"
  });

  /* Feature 3: Counselor Reporting Modal State */
  const [counselorOpen, setCounselorOpen] = useState(false);
  const [counselorForm, setCounselorForm] = useState({
    category: "Bullying / Peer Harassment",
    description: "",
    urgency: "Medium",
    contactBack: "Anonymous"
  });
  const [counselorSubmittedTicket, setCounselorSubmittedTicket] = useState<string | null>(null);
  const [counselorSubmitting, setCounselorSubmitting] = useState(false);

  /* Function to sync live grades, attendance, and notifications */
  const syncGradeData = useCallback((notify = false, incomingNotif?: any) => {
    try {
      const total = parseInt(localStorage.getItem("total_grades_sent") || "0", 10);
      setGradesSent(total);

      const cAtt = localStorage.getItem("edusphere_campus_attendance") || "98.4%";
      setCampusAttendance(cAtt);
      const sAtt = localStorage.getItem("edusphere_student_attendance") || cAtt;
      setStudentAttendance(sAtt);

      const roster = JSON.parse(localStorage.getItem("edusphere_grades_roster") || "{}");
      setGradesRoster(roster);

      const notifs = JSON.parse(localStorage.getItem("edusphere_notifications_list") || "[]");
      setNotificationsList(notifs);
      const unreadCount = notifs.filter((n: any) => n.unread).length;
      setUnreadNotifCount(unreadCount);

      if (notify) {
        const notifData = incomingNotif || notifs[0] || {
          title: "Official Grades & Attendance Released",
          message: "Your instructor has dispatched verified grades and attendance to the portal.",
          course: "Faculty Gradebook",
          teacher: "Verified Faculty",
          avgAttendance: cAtt
        };

        setGradeNotifToast({
          show: true,
          title: notifData.title || "Official Grades & Attendance Released",
          message: notifData.message || "Your instructor has dispatched verified grades and attendance.",
          course: notifData.course || "",
          teacher: notifData.teacher || "Faculty Instructor",
          avgAttendance: notifData.avgAttendance || cAtt
        });

        setTimeout(() => {
          setGradeNotifToast(p => ({ ...p, show: false }));
        }, 8000);
      }
    } catch (e) {
      console.error("Error syncing grade data:", e);
    }
  }, []);

  /* Listen for Grades Sent & Live Attendance from Faculty across all channels (Firebase + Local) */
  useEffect(() => {
    syncGradeData(false);

    // 1. Realtime Firebase Firestore Subscriptions
    const unsubFirebaseGrades = subscribeToGrades((roster) => {
      setGradesRoster(roster);
      const count = Object.keys(roster).length;
      if (count > 0) setGradesSent(count);
    });

    const unsubFirebaseNotifs = subscribeToNotifications((notifs) => {
      setNotificationsList(notifs);
      const unreadCount = notifs.filter((n: any) => n.unread).length;
      setUnreadNotifCount(unreadCount);
      if (notifs.length > 0 && notifs[0]?.unread) {
        setGradeNotifToast({
          show: true,
          title: notifs[0].title || "Academic Notification",
          message: notifs[0].message || "New grade telemetry posted",
          course: notifs[0].course,
          teacher: notifs[0].teacher || "Verified Faculty",
          avgAttendance: campusAttendance
        });
        setTimeout(() => setGradeNotifToast(p => ({ ...p, show: false })), 8000);
      }
    });

    const latestNotifStr = localStorage.getItem("edusphere_latest_notification");
    if (latestNotifStr) {
      try {
        const latest = JSON.parse(latestNotifStr);
        if (latest && latest.unread) {
          syncGradeData(true, latest);
        }
      } catch (err) { }
    }

    let bc: BroadcastChannel | null = null;
    try {
      if (typeof window !== "undefined" && "BroadcastChannel" in window) {
        bc = new BroadcastChannel("edusphere_portal");
        bc.onmessage = (event) => {
          if (event.data?.type === "GRADES_SENT") {
            syncGradeData(true, event.data.notification);
          }
        };
      }
    } catch (e) { }

    const handleStorage = (e: StorageEvent) => {
      if (
        e.key === "grades_sent" ||
        e.key === "total_grades_sent" ||
        e.key === "edusphere_campus_attendance" ||
        e.key === "edusphere_grades_roster" ||
        e.key === "edusphere_notifications_list"
      ) {
        syncGradeData(true);
      }
    };
    window.addEventListener("storage", handleStorage);

    const handleCustomDispatch = (e: any) => {
      syncGradeData(true, e.detail);
    };
    window.addEventListener("edusphere_grade_dispatched", handleCustomDispatch);

    return () => {
      unsubFirebaseGrades();
      unsubFirebaseNotifs();
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("edusphere_grade_dispatched", handleCustomDispatch);
      if (bc) bc.close();
    };
  }, [syncGradeData, campusAttendance]);

  /* Load dynamic counts, saved role, and logged-in student or faculty session */
  useEffect(() => {
    const RESET_FLAG = "enrolled_students_reset_to_zero_v3";
    if (!localStorage.getItem(RESET_FLAG)) {
      localStorage.setItem(RESET_FLAG, "true");
      localStorage.setItem("enrolled_count", "0");
      localStorage.setItem("registered_students", "[]");
      setEnrolledCount(0);
    } else {
      try {
        const stored = JSON.parse(localStorage.getItem("registered_students") || "[]");
        const count = countUniqueStudents(stored);
        setEnrolledCount(count);
        localStorage.setItem("enrolled_count", count.toString());
      } catch {
        setEnrolledCount(0);
      }
    }

    const handleCounterStorage = (e: StorageEvent) => {
      if (e.key === "registered_students" || e.key === "enrolled_count") {
        try {
          const stored = JSON.parse(localStorage.getItem("registered_students") || "[]");
          setEnrolledCount(countUniqueStudents(stored));
        } catch {
          setEnrolledCount(0);
        }
      }
    };
    window.addEventListener("storage", handleCounterStorage);
    const savedStudent = localStorage.getItem("current_student");
    if (savedStudent) {
      try {
        const studentObj = JSON.parse(savedStudent);
        setSDone(studentObj);
        setSStep(5);
        setActiveTab("student");
        return;
      } catch (err) {
        console.error("Failed to load saved student session", err);
      }
    }
    const savedFaculty = localStorage.getItem("current_faculty") || localStorage.getItem("current_admin");
    if (savedFaculty) {
      try {
        const facultyObj = JSON.parse(savedFaculty);
        setFDone(facultyObj);
        setFStep(4);
        setActiveTab("faculty");
        return;
      } catch (err) {
        console.error("Failed to load saved faculty session", err);
      }
    }
    const savedRole = localStorage.getItem("edusphere_role");
    if (savedRole === "faculty" || savedRole === "admin") {
      setActiveTab("faculty");
    } else if (savedRole === "student") {
      setActiveTab("student");
    }
  }, []);

  /* Sign Out Handlers */
  const handleSignOut = () => {
    localStorage.removeItem("current_student");
    setSDone(null);
    setSStep(1);
    setStudentAuthMode("register");
    resetS();
    setTimeout(() => {
      const el = document.getElementById("registration");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const handleFacultySignOut = () => {
    localStorage.removeItem("current_faculty");
    localStorage.removeItem("current_admin");
    setFDone(null);
    setFStep(1);
    setAdminAuthMode("register");
    resetF();
    setTimeout(() => {
      const el = document.getElementById("registration");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  /* Prevent background scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = (rolePopupOpen || mobileOpen || legal.open) ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [rolePopupOpen, mobileOpen, legal.open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setRolePopupOpen(false);
        setMobileOpen(false);
        setLegal(p => ({ ...p, open: false }));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const chS = (field: string, val: any) => {
    setSForm(p => ({ ...p, [field]: val }));
    if (sErr[field]) setSErr(p => { const copy = { ...p }; delete copy[field]; return copy; });
  };

  const chF = (field: string, val: any) => {
    setFForm(p => ({ ...p, [field]: val }));
    if (fErr[field]) setFErr(p => { const copy = { ...p }; delete copy[field]; return copy; });
  };

  const toggleInterest = (i: string) => {
    setSForm(p => ({
      ...p,
      interests: p.interests.includes(i) ? p.interests.filter(x => x !== i) : [...p.interests, i]
    }));
  };

  /* Unified Role Selection Handler */
  const selectRole = (role: "student" | "faculty") => {
    setActiveTab(role);
    localStorage.setItem("edusphere_role", role);
    setRolePopupOpen(false);
    setMobileOpen(false);
    if (role === "student") setSStep(1);
    else setFStep(1);
    setTimeout(() => {
      const el = document.getElementById("registration");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  /* Student Validations */
  const valS = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!sForm.fullName.trim() || sForm.fullName.trim().length < 2) errs.fullName = "Full name is required.";
      if (!sForm.studentId.trim()) errs.studentId = "Student ID / LRN is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sForm.email)) errs.email = "Enter a valid email address.";
    }
    if (step === 2) {
      if (!sForm.guardianName.trim()) errs.guardianName = "Guardian name is required.";
      if (sForm.guardianPhone.replace(/\D/g, "").length < 7) errs.guardianPhone = "Valid phone number required.";
    }
    if (step === 4) {
      if (sForm.password.length < 6) errs.password = "Password must be at least 6 characters.";
      if (sForm.password !== sForm.confirmPassword) errs.confirmPassword = "Passwords do not match.";
      if (!sForm.agreeTerms) errs.agreeTerms = "You must accept the school policies.";
    }
    setSErr(errs);
    return Object.keys(errs).length === 0;
  };

  const nextS = () => {
    if (valS(sStep)) {
      if (sStep < 4) setSStep(s => s + 1);
      else submitS();
    }
  };
  const prevS = () => setSStep(s => Math.max(1, s - 1));

  const submitS = () => {
    setSSubmitting(true);
    setTimeout(() => {
      setSSubmitting(false);
      const newPass = {
        passId: `STU-PASS-${Math.floor(100000 + Math.random() * 900000)}`,
        ...sForm,
        section: sForm.section || "Archimedes - Room 204",
        issuedAt: new Date().toLocaleString()
      };
      setSDone(newPass);
      setSStep(5);

      /* Store registered account and active session in localStorage */
      try {
        let stored: any[] = JSON.parse(localStorage.getItem("registered_students") || "[]");
        if (!Array.isArray(stored)) stored = [];

        const formId = sForm.studentId.trim().toLowerCase();
        const formEmail = sForm.email.trim().toLowerCase();

        // Match by Student ID / LRN OR Email so same student always updates rather than duplicating
        const existingIdx = stored.findIndex((u: any) => {
          const uId = (u.studentId || u.id || "").toString().trim().toLowerCase();
          const uEmail = (u.email || "").toString().trim().toLowerCase();
          return (formId && uId && uId === formId) || (formEmail && uEmail && uEmail === formEmail);
        });

        const studentData = {
          ...newPass,
          studentId: sForm.studentId.trim(),
          email: sForm.email.trim(),
          password: sForm.password
        };

        if (existingIdx >= 0) {
          stored[existingIdx] = {
            ...stored[existingIdx],
            ...studentData
          };
        } else {
          stored.push(studentData);
        }

        const uniqueCount = countUniqueStudents(stored);
        localStorage.setItem("registered_students", JSON.stringify(stored));
        localStorage.setItem("enrolled_count", uniqueCount.toString());
        localStorage.setItem("current_student", JSON.stringify(newPass));
        setEnrolledCount(uniqueCount);

        try {
          saveStudentToFirebase(studentData);
        } catch { }
      } catch (err) {
        console.error("Failed to save registered account to localStorage", err);
      }
    }, 1000);
  };

  const handleStudentLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoginErr("");
    const idInput = loginForm.identifier.trim().toLowerCase();
    const pwdInput = loginForm.password;

    if (!idInput || !pwdInput) {
      setLoginErr("Please enter your Student ID / Email and password.");
      return;
    }

    try {
      let stored: any[] = JSON.parse(localStorage.getItem("registered_students") || "[]");
      if (!Array.isArray(stored)) stored = [];

      const matched = stored.find((u: any) => {
        const uId = (u.studentId || u.id || "").toString().trim().toLowerCase();
        const uEmail = (u.email || "").toString().trim().toLowerCase();
        return (uId === idInput || uEmail === idInput) && u.password === pwdInput;
      });

      const fallbackDemo = (!matched && (idInput === "lrn-2026-48910" || idInput === "janelle.gomez@students.edusphere.edu") && pwdInput === "StudentPass@2026")
        ? {
          passId: "STU-PASS-489100",
          fullName: "Janelle Marie Gomez",
          studentId: "LRN-2026-48910",
          gradeLevel: "Grade 11 - Senior High",
          strand: "STEM (Science, Tech, Eng & Math)",
          section: "Archimedes - Room 204",
          email: "janelle.gomez@students.edusphere.edu",
          guardianName: "Corazon Gomez (Mother)",
          guardianPhone: "+63 (917) 845-2901",
          interests: ["Robotics & AI Club", "Debate & Speech Society"],
          password: "StudentPass@2026",
          issuedAt: new Date().toLocaleString()
        }
        : null;

      const finalUser = matched || fallbackDemo;

      if (finalUser) {
        // Ensure user is registered and deduplicated by Student ID / LRN or Email
        const fId = (finalUser.studentId || finalUser.id || "").toString().trim().toLowerCase();
        const fEmail = (finalUser.email || "").toString().trim().toLowerCase();

        const existingIdx = stored.findIndex((u: any) => {
          const uId = (u.studentId || u.id || "").toString().trim().toLowerCase();
          const uEmail = (u.email || "").toString().trim().toLowerCase();
          return (fId && uId && uId === fId) || (fEmail && uEmail && uEmail === fEmail);
        });

        if (existingIdx === -1) {
          stored.push(finalUser);
          localStorage.setItem("registered_students", JSON.stringify(stored));
        }

        const uniqueCount = countUniqueStudents(stored);
        setEnrolledCount(uniqueCount);
        localStorage.setItem("enrolled_count", uniqueCount.toString());

        setSDone(finalUser);
        setSStep(5);
        setStudentAuthMode("register");
        localStorage.setItem("current_student", JSON.stringify(finalUser));
      } else {
        setLoginErr("Account not found or password incorrect. Please verify your credentials or register.");
      }
    } catch (err) {
      setLoginErr("Error verifying registered accounts.");
    }
  };

  const resetS = () => {
    localStorage.removeItem("current_student");
    setSForm({
      fullName: "",
      studentId: "",
      gradeLevel: "Grade 11 - Senior High",
      strand: "STEM (Science, Tech, Eng & Math)",
      section: "",
      email: "",
      guardianName: "",
      guardianPhone: "",
      password: "",
      confirmPassword: "",
      interests: [],
      agreeTerms: false
    });
    setSErr({});
    setSDone(null);
    setSStep(1);
  };

  const demoS = () => {
    setSForm({
      fullName: "Janelle Marie Gomez",
      studentId: "LRN-2026-48910",
      gradeLevel: "Grade 11 - Senior High",
      strand: "STEM (Science, Tech, Eng & Math)",
      section: "Archimedes - Room 204",
      email: "janelle.gomez@students.edusphere.edu",
      guardianName: "Corazon Gomez (Mother)",
      guardianPhone: "+63 (917) 845-2901",
      password: "StudentPass@2026",
      confirmPassword: "StudentPass@2026",
      interests: ["Robotics & AI Club", "Debate & Speech Society"],
      agreeTerms: true
    });
    setSErr({});
  };

  const downloadS = () => {
    if (!sDone) return;
    const txt = `========================================\nEDUSPHERE DIGITAL STUDENT PASS\n========================================\nPass ID: ${sDone.passId}\nIssued: ${sDone.issuedAt}\nStudent: ${sDone.fullName}\nLRN: ${sDone.studentId}\nGrade & Strand: ${sDone.gradeLevel} - ${sDone.strand}\nSection: ${sDone.section}\nEmail: ${sDone.email}\nGuardian: ${sDone.guardianName} (${sDone.guardianPhone})\nClubs: ${sDone.interests.length ? sDone.interests.join(", ") : "Standard Enrollee"}\nStatus: 100% GOAL CONVERTED & FERPA VERIFIED\n========================================`;
    const b = new Blob([txt], { type: "text/plain" });
    const u = URL.createObjectURL(b);
    const a = document.createElement("a");
    a.href = u;
    a.download = `StudentPass-${sDone.studentId}.txt`;
    a.click();
    URL.revokeObjectURL(u);
  };

  /* Faculty Validations */
  const valF = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!fForm.fullName.trim() || fForm.fullName.trim().length < 2) errs.fullName = "Full name and title required.";
      if (!fForm.facultyId.trim()) errs.facultyId = "Faculty / Employee ID required.";
      if (!fForm.institution.trim()) errs.institution = "School name is required.";
    }
    if (step === 2) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fForm.email)) errs.email = "Valid institutional email required.";
      if (fForm.phone.replace(/\D/g, "").length < 7) errs.phone = "Valid phone number required.";
    }
    if (step === 3) {
      if (fForm.password.length < 6) errs.password = "Password must be at least 6 characters.";
      if (fForm.password !== fForm.confirmPassword) errs.confirmPassword = "Passwords do not match.";
      if (!fForm.agreeTerms) errs.agreeTerms = "You must pledge to the educator ethics policies.";
    }
    setFErr(errs);
    return Object.keys(errs).length === 0;
  };

  const nextF = () => {
    if (valF(fStep)) {
      if (fStep < 3) setFStep(s => s + 1);
      else submitF();
    }
  };
  const prevF = () => setFStep(s => Math.max(1, s - 1));

  const submitF = () => {
    setFSubmitting(true);
    setTimeout(() => {
      setFSubmitting(false);
      const newCred = {
        credentialId: `FAC-AUTH-${Math.floor(100000 + Math.random() * 900000)}`,
        ...fForm,
        roomOffice: fForm.roomOffice || "Executive Admin Wing, Rm 101",
        issuedAt: new Date().toLocaleString()
      };
      setFDone(newCred);
      setFStep(4);

      /* Store registered account and active session in localStorage */
      try {
        const stored = JSON.parse(localStorage.getItem("registered_admins") || localStorage.getItem("registered_faculty") || "[]");
        const filtered = stored.filter((u: any) => u.facultyId?.toLowerCase() !== fForm.facultyId.trim().toLowerCase());
        filtered.push({
          ...newCred,
          password: fForm.password
        });
        localStorage.setItem("registered_admins", JSON.stringify(filtered));
        localStorage.setItem("registered_faculty", JSON.stringify(filtered));
        localStorage.setItem("current_faculty", JSON.stringify(newCred));
        localStorage.setItem("current_admin", JSON.stringify(newCred));

        try {
          saveFacultyToFirebase(newCred);
        } catch { }
      } catch (err) {
        console.error("Failed to save registered admin account to localStorage", err);
      }
    }, 1000);
  };

  const handleAdminLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setAdminLoginErr("");
    const idInput = adminLoginForm.identifier.trim().toLowerCase();
    const pwdInput = adminLoginForm.password;

    if (!idInput || !pwdInput) {
      setAdminLoginErr("Please enter your Faculty / Employee ID or Email and password.");
      return;
    }

    try {
      const stored = JSON.parse(localStorage.getItem("registered_admins") || localStorage.getItem("registered_faculty") || "[]");
      const matched = stored.find((u: any) =>
        (u.facultyId?.toLowerCase() === idInput || u.email?.toLowerCase() === idInput) &&
        u.password === pwdInput
      );

      const fallbackDemo = (!matched && (idInput === "fac-adm-2026-004" || idInput === "jorge.escober@principals.edusphere.edu") && pwdInput === "PrincipalMaster@2026")
        ? {
          credentialId: "FAC-ADM-2026-004",
          fullName: "Dr. Jorge Michael Escober, Ph.D.",
          role: "Principal / Head of School",
          facultyId: "FAC-ADM-2026-004",
          institution: "Metropolitan Academic Science Institute",
          department: "Office of the Principal & Academic Affairs",
          email: "jorge.escober@principals.edusphere.edu",
          phone: "+63 (918) 552-3140",
          roomOffice: "Executive Admin Wing, Rm 101",
          experienceYears: "15+ Years",
          issuedAt: new Date().toLocaleString()
        }
        : null;

      const finalUser = matched || fallbackDemo;

      if (finalUser) {
        setFDone(finalUser);
        setFStep(4);
        setAdminAuthMode("register");
        localStorage.setItem("current_faculty", JSON.stringify(finalUser));
        localStorage.setItem("current_admin", JSON.stringify(finalUser));
        localStorage.setItem("edusphere_role", "faculty");
      } else {
        setAdminLoginErr("Account not found or password incorrect. Please verify your credentials or register.");
      }
    } catch (err) {
      setAdminLoginErr("Error verifying registered accounts.");
    }
  };

  const resetF = () => {
    localStorage.removeItem("current_faculty");
    localStorage.removeItem("current_admin");
    setFForm({
      fullName: "",
      role: "Teacher / Faculty Instructor",
      facultyId: "",
      institution: "",
      department: "Science & Engineering Dept",
      email: "",
      phone: "",
      roomOffice: "",
      experienceYears: "5+ Years",
      password: "",
      confirmPassword: "",
      agreeTerms: false
    });
    setFErr({});
    setFDone(null);
    setFStep(1);
  };

  const demoF = () => {
    setFForm({
      fullName: "Dr. Jorge Michael Escober, Ph.D.",
      role: "Principal / Head of School",
      facultyId: "FAC-ADM-2026-004",
      institution: "Metropolitan Academic Science Institute",
      department: "Office of the Principal & Academic Affairs",
      email: "jorge.escober@principals.edusphere.edu",
      phone: "+63 (918) 552-3140",
      roomOffice: "Executive Admin Wing, Rm 101",
      experienceYears: "15+ Years",
      password: "PrincipalMaster@2026",
      confirmPassword: "PrincipalMaster@2026",
      agreeTerms: true
    });
    setFErr({});
  };

  const downloadF = () => {
    if (!fDone) return;
    const txt = `========================================\nEDUSPHERE FACULTY CLEARANCE PASS\n========================================\nCredential ID: ${fDone.credentialId}\nIssued: ${fDone.issuedAt}\nFaculty: ${fDone.fullName}\nRole: ${fDone.role}\nFaculty ID: ${fDone.facultyId}\nInstitution: ${fDone.institution}\nDepartment: ${fDone.department}\nOffice: ${fDone.roomOffice}\nEmail: ${fDone.email}\nPhone: ${fDone.phone}\nClearance: Tier-1 Master Authorization\nStatus: 100% GOAL CONVERTED & FERPA AUDITED\n========================================`;
    const b = new Blob([txt], { type: "text/plain" });
    const u = URL.createObjectURL(b);
    const a = document.createElement("a");
    a.href = u;
    a.download = `FacultyPass-${fDone.facultyId}.txt`;
    a.click();
    URL.revokeObjectURL(u);
  };

  const copyCredential = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPass(true);
    setTimeout(() => setCopiedPass(false), 2000);
  };

  const handleSendGrades = () => {
    setGradeSentPopup(true);
    setTimeout(() => setGradeSentPopup(false), 3000);
  };

  /* Theming */
  const isStudent = activeTab === "student";
  const accentColor = isStudent ? "#3b82f6" : "#8b5cf6";
  const accentGrad = isStudent
    ? "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    : "linear-gradient(135deg, #8b5cf6, #6d28d9)";

  /* Multi-Step & Goal Conversion Calculations */
  const sSteps = [
    { label: "Identity", sub: "LRN & Details", icon: "1" },
    { label: "Guardian", sub: "Emergency Contact", icon: "2" },
    { label: "Clubs", sub: "Extracurriculars", icon: "3" },
    { label: "Security", sub: "Password & Terms", icon: "4" }
  ];
  const fSteps = [
    { label: "Profile", sub: "Role & School", icon: "1" },
    { label: "Contact", sub: "Email & Office", icon: "2" },
    { label: "Security", sub: "Password & Pledge", icon: "3" }
  ];

  const currentSteps = isStudent ? sSteps : fSteps;
  const currentStep = isStudent ? sStep : fStep;
  const totalSteps = currentSteps.length;
  const isSuccess = isStudent ? sStep === 5 : fStep === 4;

  /* Goal Conversion Percentage */
  const goalPercentage = isSuccess
    ? 100
    : Math.round(((currentStep - 1) / totalSteps) * 100);

  const goalTitle = isStudent
    ? "Goal: Issue Official Student Digital Pass"
    : "Goal: Issue Faculty Tier-1 Clearance Pass";

  const modules = [
    {
      icon: <IconBookOpen size={24} />,
      title: "Digital Classrooms",
      desc: "Lesson repository, homework submission dropboxes, and interactive lecture syllabus accessible 24/7.",
      features: ["Syllabus Downloads", "Homework Dropboxes", "Quiz Portals", "Class Discussions"],
      color: "#3b82f6"
    },
    {
      icon: <IconTarget />,
      title: "Gradebook & Analytics",
      desc: "Automated GPA computation, transparent term grade reports, and instant parent communication.",
      features: ["Quarterly Grade Telemetry", "Class Rank Analytics", "Parent Portal Sync", "Attendance Logs"],
      color: "#10b981"
    },
    {
      icon: <IconShield size={24} />,
      title: "Campus Child Safety",
      desc: "RFID gate check-in alerts, digital clinic passes, and confidential counselor reporting.",
      features: ["Parent Gate SMS Alerts", "Anti-Bullying Channel", "Nurse Clinic Pass", "FERPA Shielding"],
      color: "#8b5cf6"
    },
    {
      icon: <IconBuilding size={24} />,
      title: "Executive Governance",
      desc: "Administrative toolsets for principals and subject heads to audit curricula and manage staff schedules.",
      features: ["Faculty Matrix", "DepEd Compliance", "Room Allocation", "Official E-Forms"],
      color: "#f59e0b"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Roberto M. Reyes",
      role: "High School Principal, Metropolitan Science Academy",
      text: "EduSphere transformed our campus operations. One central pass for both students and instructors eliminated 90% of paperwork.",
      rating: 5,
      avatar: "RR"
    },
    {
      name: "Prof. Maria Elena Santos",
      role: "Department Chair, STEM & Natural Sciences",
      text: "Setting up laboratory rosters and posting assignments takes seconds now. The mobile view makes checking attendance effortless.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Kirsten Andrea C.",
      role: "Grade 11 Student & SSC President",
      text: "Getting our digital ID pass and seeing schedules right on our phones without messy apps is the best upgrade our school ever had.",
      rating: 5,
      avatar: "KC"
    }
  ];

  return (
    <div data-theme={isDark ? "dark" : "light"} style={{ background: "var(--neu-bg)", minHeight: "100vh", fontFamily: "'Outfit',sans-serif", color: "var(--text-body)", overflowX: "hidden", transition: "background 0.3s ease, color 0.3s ease" }}>

      {/* ===== STICKY MINIMAL NAVBAR ===== */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "var(--neu-nav)", backdropFilter: "blur(16px)", boxShadow: isDark ? "0 2px 14px rgba(0,0,0,0.5)" : "0 2px 14px rgba(163,177,198,0.35)", padding: "0 1rem", borderBottom: "1px solid var(--border-subtle)", transition: "background 0.3s ease" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px" }}>

          {/* Brand */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "var(--neu-shadow-small)", flexShrink: 0 }}>
              <IconGraduationCap size={18} />
            </div>
            <div>
              <span style={{ fontWeight: "800", fontSize: "1.1rem", color: "var(--text-title)", letterSpacing: "-0.4px" }}>Edu<span style={{ color: "#3b82f6" }}>Sphere</span></span>
            </div>
          </a>

          {/* MINIMIZED CAMPUS NAVIGATION POPUP BUTTON (Styled like Student & Faculty Portal button) */}
          <div ref={navMenuRef} style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setNavMenuOpen(prev => !prev)}
              style={{
                ...minBtnStyle,
                background: accentGrad,
                color: "white",
                boxShadow: `3px 3px 8px ${accentColor}44, -2px -2px 6px rgba(255,255,255,0.7)`,
                padding: "8px 16px",
                fontSize: "0.84rem",
                fontWeight: "700",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer"
              }}
              title="Click to view all navigation links"
              aria-label="Campus Navigation Menu"
              aria-expanded={navMenuOpen}
            >
              <IconMenu />
              <span>Campus Navigation</span>
              <span style={{ transform: navMenuOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s ease", display: "inline-flex", alignItems: "center" }}>
                <IconChevronDown size={13} />
              </span>
            </button>

            {/* Dropdown Menu with all buttons */}
            {navMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "48px",
                  left: 0,
                  width: "290px",
                  background: "var(--neu-surface)",
                  borderRadius: "20px",
                  boxShadow: "var(--neu-shadow-float)",
                  border: "1px solid var(--border-subtle)",
                  padding: "12px",
                  zIndex: 9999,
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "4px 8px 8px",
                  borderBottom: "1px solid var(--border-subtle)",
                  fontSize: "0.74rem",
                  fontWeight: "800",
                  color: "var(--text-muted)",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase"
                }}>
                  <span>Campus Network</span>
                  <span style={{ color: accentColor }}>● Active</span>
                </div>

                {/* Modules */}
                <a
                  href="/#modules"
                  onClick={() => setNavMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "9px 12px",
                    borderRadius: "14px",
                    textDecoration: "none",
                    color: "var(--text-title)",
                    fontWeight: "600",
                    fontSize: "0.86rem",
                    transition: "all 0.2s",
                    background: "var(--neu-surface)",
                    boxShadow: "var(--neu-shadow-small)"
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>📘</span>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: "700" }}>Modules</div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>Classrooms & Syllabus</div>
                  </div>
                </a>

                {/* Campus Safety */}
                <a
                  href="/#safety"
                  onClick={() => setNavMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "9px 12px",
                    borderRadius: "14px",
                    textDecoration: "none",
                    color: "var(--text-title)",
                    fontWeight: "600",
                    fontSize: "0.86rem",
                    transition: "all 0.2s",
                    background: "var(--neu-surface)",
                    boxShadow: "var(--neu-shadow-small)"
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>🛡️</span>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: "700" }}>Campus Safety</div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>Gate alerts & clinic pass</div>
                  </div>
                </a>

                {/* Testimonials */}
                <a
                  href="/#testimonials"
                  onClick={() => setNavMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "9px 12px",
                    borderRadius: "14px",
                    textDecoration: "none",
                    color: "var(--text-title)",
                    fontWeight: "600",
                    fontSize: "0.86rem",
                    transition: "all 0.2s",
                    background: "var(--neu-surface)",
                    boxShadow: "var(--neu-shadow-small)"
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>💬</span>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: "700" }}>Testimonials</div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>Student & Faculty Reviews</div>
                  </div>
                </a>

                {/* Feedback */}
                <a
                  href="/feedback"
                  onClick={() => setNavMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "9px 12px",
                    borderRadius: "14px",
                    textDecoration: "none",
                    color: isStudent ? "#3b82f6" : "var(--text-muted)",
                    fontWeight: "700",
                    fontSize: "0.86rem",
                    transition: "all 0.2s",
                    background: "var(--neu-surface)",
                    boxShadow: "var(--neu-shadow-small)"
                  }}
                  title={isStudent ? "Student Feedback Portal" : "Student authorization required to view feedback"}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "1.1rem" }}>📝</span>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontWeight: "700" }}>Feedback</div>
                      <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>Student Suggestions Console</div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: "0.66rem",
                    padding: "2px 7px",
                    borderRadius: "8px",
                    background: isStudent ? "rgba(59,130,246,0.15)" : "rgba(100,116,139,0.15)",
                    color: isStudent ? "#3b82f6" : "var(--text-muted)",
                    fontWeight: "700"
                  }}>
                    {isStudent ? "Unlocked" : "Students Only"}
                  </span>
                </a>

                {/* Faculty Gradebook Direct Link */}
                <a
                  href="/faculty/grades"
                  onClick={() => setNavMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "9px 12px",
                    borderRadius: "14px",
                    textDecoration: "none",
                    color: "#10b981",
                    fontWeight: "700",
                    fontSize: "0.86rem",
                    transition: "all 0.2s",
                    background: "var(--neu-surface)",
                    boxShadow: "var(--neu-shadow-small)"
                  }}
                  title="Open Faculty Grade & Attendance Manager"
                >
                  <span style={{ fontSize: "1.1rem" }}>📊</span>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: "700", color: "#10b981" }}>Gradebook</div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>Faculty telemetry & records</div>
                  </div>
                </a>

                {/* Anonymous Counselor Button */}
                <button
                  type="button"
                  onClick={() => {
                    setNavMenuOpen(false);
                    setCounselorSubmittedTicket(null);
                    setCounselorOpen(true);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "9px 12px",
                    borderRadius: "14px",
                    border: "none",
                    cursor: "pointer",
                    color: "#ef4444",
                    fontWeight: "700",
                    fontSize: "0.86rem",
                    transition: "all 0.2s",
                    background: "var(--neu-surface)",
                    boxShadow: "var(--neu-shadow-small)",
                    textAlign: "left",
                    width: "100%"
                  }}
                  title="Report an incident confidentially to school counselors"
                >
                  <span style={{ fontSize: "1.1rem" }}>🛡️</span>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: "700", color: "#ef4444" }}>Counselor Box</div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>100% Confidential Reports</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* THE ONE POPUP BUTTON (MINIMAL) - Turns into Sign Out when student or faculty is registered/logged in */}
          {/* Navbar Actions: Theme Toggle + Notification Bell + Portal Selector / Sign Out */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <span className="theme-toggle-thumb">
                {isDark ? "🌙" : "☀️"}
              </span>
            </button>

            {/* Notification Bell with Badge */}
            <div style={{ position: "relative" }}>
              <button
                type="button"
                onClick={() => {
                  setNotifBellOpen(p => !p);
                  if (!notifBellOpen && unreadNotifCount > 0) {
                    try {
                      const updated = notificationsList.map(n => ({ ...n, unread: false }));
                      setNotificationsList(updated);
                      setUnreadNotifCount(0);
                      localStorage.setItem("edusphere_notifications_list", JSON.stringify(updated));
                    } catch (err) { }
                  }
                }}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  background: notifBellOpen ? "var(--neu-track)" : "var(--neu-surface)",
                  boxShadow: notifBellOpen
                    ? "var(--neu-shadow-input)"
                    : "var(--neu-shadow-small)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: unreadNotifCount > 0 ? "#2563eb" : "var(--text-muted)",
                  position: "relative",
                  transition: "all 0.2s"
                }}
                title="Notifications"
                aria-label="Notifications"
              >
                <IconBell size={18} />
                {unreadNotifCount > 0 && (
                  <span style={{
                    position: "absolute",
                    top: "-3px",
                    right: "-3px",
                    background: "#ef4444",
                    color: "white",
                    borderRadius: "10px",
                    fontSize: "0.64rem",
                    fontWeight: "800",
                    padding: "1px 5px",
                    minWidth: "16px",
                    height: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 5px rgba(239,68,68,0.5)"
                  }}>
                    {unreadNotifCount}
                  </span>
                )}
              </button>

              {/* Notification Dropdown Menu */}
              {notifBellOpen && (
                <div style={{
                  position: "absolute",
                  top: "46px",
                  right: 0,
                  width: "320px",
                  background: "var(--neu-surface)",
                  borderRadius: "18px",
                  boxShadow: "var(--neu-shadow-float)",
                  padding: "16px",
                  zIndex: 9999,
                  textAlign: "left"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", borderBottom: "1px solid rgba(163,177,198,0.3)", paddingBottom: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "800", fontSize: "0.85rem", color: "var(--text-title)" }}>
                      <IconBell size={15} /> Academic Alerts
                    </div>
                    {notificationsList.length > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          setNotificationsList([]);
                          setUnreadNotifCount(0);
                          localStorage.setItem("edusphere_notifications_list", "[]");
                        }}
                        style={{ background: "none", border: "none", color: "var(--text-muted)", fontSize: "0.7rem", cursor: "pointer", fontWeight: "600" }}
                      >
                        Clear All
                      </button>
                    )}
                  </div>

                  <div style={{ maxHeight: "250px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {notificationsList.length > 0 ? (
                      notificationsList.map(n => (
                        <div
                          key={n.id}
                          style={{
                            background: "var(--neu-surface)",
                            boxShadow: "var(--neu-shadow-input)",
                            padding: "10px 12px",
                            borderRadius: "12px",
                            textAlign: "left"
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3px" }}>
                            <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "#3b82f6" }}>{n.title}</span>
                            <span style={{ fontSize: "0.65rem", color: "#94a3b8" }}>{n.timestamp || n.date || "Just now"}</span>
                          </div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-body)", lineHeight: "1.4" }}>{n.message}</div>
                          {n.course && (
                            <div style={{ fontSize: "0.68rem", color: "#10b981", fontWeight: "700", marginTop: "3px" }}>
                              Course: {n.course}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div style={{ textAlign: "center", padding: "18px 0", color: "var(--text-muted)", fontSize: "0.78rem" }}>
                        No new notifications yet. You will be alerted when instructors dispatch grades.
                      </div>
                    )}
                  </div>

                  <div style={{ marginTop: "12px", borderTop: "1px solid rgba(163,177,198,0.3)", paddingTop: "8px", textAlign: "center" }}>
                    <a
                      href="/faculty/grades"
                      style={{ fontSize: "0.74rem", color: "#8b5cf6", fontWeight: "700", textDecoration: "none" }}
                    >
                      Faculty Grade Dispatch Manager →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {(isStudent ? sDone : fDone) ? (
              <button
                type="button"
                onClick={isStudent ? handleSignOut : handleFacultySignOut}
                style={{
                  ...minBtnStyle,
                  background: "var(--neu-surface)",
                  color: "#ef4444",
                  boxShadow: "var(--neu-shadow-small)",
                  padding: "8px 18px",
                  fontSize: "0.84rem",
                  fontWeight: "700"
                }}
                title="Click to sign out and return to registration"
              >
                <span>Sign Out</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setRolePopupOpen(true)}
                style={{
                  ...minBtnStyle,
                  background: accentGrad,
                  color: "white",
                  boxShadow: `3px 3px 8px ${accentColor}44, -2px -2px 6px rgba(255,255,255,0.7)`,
                  padding: "8px 16px",
                  fontSize: "0.84rem"
                }}
                title="Click to choose Student or Faculty Portal"
              >
                {isStudent ? <IconGraduationCap size={16} /> : <IconTeacher size={16} />}
                <span>{isStudent ? "Student Portal" : "Faculty Portal"}</span>
                <IconChevronDown size={13} />
              </button>
            )}

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              className="nav-mobile-btn"
              onClick={() => setMobileOpen(o => !o)}
              style={{
                display: "none",
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                background: "var(--neu-surface)",
                boxShadow: "var(--neu-shadow-small)",
                color: "var(--text-muted)",
                alignItems: "center",
                justifyContent: "center"
              }}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <IconClose size={18} /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, top: "60px", zIndex: 99, background: "var(--neu-nav)", backdropFilter: "blur(16px)", display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 20px", gap: "12px" }}>
          {[{ label: "Academic Modules", href: "#modules" }, { label: "Campus Safety", href: "#safety" }, { label: "School Community", href: "#testimonials" }].map(item => (
            <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} style={{ width: "100%", maxWidth: "280px", textAlign: "center", padding: "12px", borderRadius: "14px", textDecoration: "none", color: "var(--text-title)", fontWeight: "700", fontSize: "0.92rem", background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)" }}>
              {item.label}
            </a>
          ))}
          <a href="/feedback" onClick={() => setMobileOpen(false)} style={{ width: "100%", maxWidth: "280px", textAlign: "center", padding: "12px", borderRadius: "14px", textDecoration: "none", color: isStudent ? "#3b82f6" : "var(--text-muted)", fontWeight: "700", fontSize: "0.92rem", background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <span>Feedback</span>
            <span style={{ fontSize: "0.72rem", padding: "2px 8px", borderRadius: "8px", background: isStudent ? "rgba(59,130,246,0.15)" : "rgba(100,116,139,0.15)", color: isStudent ? "#3b82f6" : "var(--text-muted)" }}>
              {isStudent ? "Unlocked" : "Students Only"}
            </span>
          </a>
          <div style={{ marginTop: "12px", width: "100%", maxWidth: "280px" }}>
            {(isStudent ? sDone : fDone) ? (
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  if (isStudent) handleSignOut();
                  else handleFacultySignOut();
                }}
                style={{
                  width: "100%",
                  padding: "13px",
                  borderRadius: "14px",
                  border: "none",
                  cursor: "pointer",
                  background: "var(--neu-surface)",
                  color: "#ef4444",
                  fontWeight: "700",
                  fontSize: "0.92rem",
                  boxShadow: "var(--neu-shadow-small)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px"
                }}
              >
                Sign Out
              </button>
            ) : (
              <button
                type="button"
                onClick={() => { setMobileOpen(false); setRolePopupOpen(true); }}
                style={{
                  width: "100%",
                  padding: "13px",
                  borderRadius: "14px",
                  border: "none",
                  cursor: "pointer",
                  background: accentGrad,
                  color: "white",
                  fontWeight: "700",
                  fontSize: "0.92rem",
                  boxShadow: `4px 4px 10px ${accentColor}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px"
                }}
              >
                <IconSparkles size={16} /> Choose Student / Faculty Role
              </button>
            )}
          </div>
        </div>
      )}

      {/* ===== ROLE SELECTION POPUP MODAL (THE ONE POPUP BUTTON TARGET) ===== */}
      {rolePopupOpen && (
        <div
          onClick={() => setRolePopupOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(15,23,42,0.65)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px"
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "var(--neu-surface)",
              borderRadius: "24px",
              boxShadow: "16px 16px 36px rgba(0,0,0,0.25), -10px -10px 24px rgba(255,255,255,0.8)",
              maxWidth: "460px",
              width: "100%",
              overflow: "hidden",
              padding: "24px"
            }}
          >
            {/* Modal Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                  <IconSparkles size={16} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--text-title)", margin: 0 }}>Select Campus Role</h3>
                  <p style={{ fontSize: "0.74rem", color: "var(--text-muted)", margin: "2px 0 0" }}>Choose your registration and portal access track</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setRolePopupOpen(false)}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  background: "var(--neu-surface)",
                  boxShadow: "var(--neu-shadow-small)",
                  color: "var(--text-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <IconClose size={14} />
              </button>
            </div>

            {/* Two Distinct Role Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>

              {/* Student Option */}
              <button
                type="button"
                onClick={() => selectRole("student")}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "18px",
                  border: activeTab === "student" ? "2px solid #3b82f6" : "2px solid transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  background: "var(--neu-surface)",
                  boxShadow: activeTab === "student"
                    ? "var(--neu-shadow-pressed), 0 0 14px rgba(59,130,246,0.2)"
                    : "var(--neu-shadow-small)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  transition: "all 0.2s"
                }}
              >
                <div style={{ width: "44px", height: "44px", borderRadius: "14px", background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "3px 3px 8px rgba(59,130,246,0.35)" }}>
                  <IconGraduationCap size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontWeight: "800", fontSize: "0.98rem", color: "var(--text-title)" }}>Student Portal</div>
                    {activeTab === "student" && <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#3b82f6", background: "rgba(59,130,246,0.12)", padding: "2px 7px", borderRadius: "10px" }}>Selected</span>}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "3px", lineHeight: "1.4" }}>
                    Enrollment, official digital pass, grade telemetry, clubs & assignments
                  </div>
                </div>
              </button>

              {/* Faculty Option */}
              <button
                type="button"
                onClick={() => selectRole("faculty")}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "18px",
                  border: activeTab === "faculty" ? "2px solid #8b5cf6" : "2px solid transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  background: "var(--neu-surface)",
                  boxShadow: activeTab === "faculty"
                    ? "var(--neu-shadow-pressed), 0 0 14px rgba(139,92,246,0.2)"
                    : "var(--neu-shadow-small)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  transition: "all 0.2s"
                }}
              >
                <div style={{ width: "44px", height: "44px", borderRadius: "14px", background: "linear-gradient(135deg, #8b5cf6, #6d28d9)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "3px 3px 8px rgba(139,92,246,0.35)" }}>
                  <IconTeacher size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontWeight: "800", fontSize: "0.98rem", color: "var(--text-title)" }}>Faculty & Principal</div>
                    {activeTab === "faculty" && <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#8b5cf6", background: "rgba(139,92,246,0.12)", padding: "2px 7px", borderRadius: "10px" }}>Selected</span>}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "3px", lineHeight: "1.4" }}>
                    Educator onboarding, classroom assignment, gradebook & safety audit
                  </div>
                </div>
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid var(--border-subtle)" }}>
              <a
                href="/faculty/grades"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.84rem",
                  fontWeight: "700",
                  color: "#10b981"
                }}
              >
                📊 Open Faculty Gradebook →
              </a>
              <button
                type="button"
                onClick={() => setRolePopupOpen(false)}
                style={{
                  ...minBtnStyle,
                  background: "var(--neu-surface)",
                  boxShadow: "var(--neu-shadow-small)",
                  color: "var(--text-muted)",
                  fontSize: "0.82rem",
                  padding: "7px 18px"
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== HERO SECTION ===== */}
      <ScrollReveal delay={0.05}>
        <section style={{ padding: "40px 1rem 28px", maxWidth: "1200px", margin: "0 auto" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "36px", alignItems: "center" }}>

            {/* Left Content */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "30px", background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", fontSize: "0.7rem", fontWeight: "700", color: "#3b82f6", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                <IconSparkles size={14} /> Official Campus Academic Network
              </div>

              <h1 className="hero-h1" style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--text-title)", lineHeight: "1.16", letterSpacing: "-1px", marginBottom: "14px" }}>
                Unified Academic Access for <span style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Students, Teachers & Principals</span>.
              </h1>

              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "24px", maxWidth: "500px" }}>
                Issue verified digital campus passes, stream grade telemetry, and manage course syllabi with 100% child privacy protection.
              </p>

              {/* Minimal Buttons in Hero */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={() => setRolePopupOpen(true)}
                  style={{
                    ...minBtnStyle,
                    padding: "11px 22px",
                    borderRadius: "30px",
                    background: accentGrad,
                    color: "white",
                    fontSize: "0.92rem",
                    boxShadow: `4px 4px 12px ${accentColor}44, -2px -2px 6px rgba(255,255,255,0.7)`
                  }}
                >
                  <IconSparkles size={16} /> Choose Role / Register <IconChevronDown size={14} />
                </button>

                <a
                  href="#modules"
                  style={{
                    ...minBtnStyle,
                    textDecoration: "none",
                    padding: "11px 18px",
                    borderRadius: "30px",
                    background: "var(--neu-surface)",
                    boxShadow: "var(--neu-shadow-small)",
                    color: "var(--text-muted)",
                    fontSize: "0.9rem"
                  }}
                >
                  Explore Modules ↓
                </a>
              </div>

              {/* Trust Badges */}
              <div style={{ display: "flex", gap: "14px", marginTop: "20px", flexWrap: "wrap" }}>
                {["100% FERPA Protected", "Instant Digital Pass Issuance"].map((b, idx) => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.76rem", fontWeight: "600", color: "var(--text-muted)" }}>
                    <span style={{ color: idx === 0 ? "#10b981" : "#3b82f6" }}><IconCheck size={14} /></span>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="hero-card" style={{ background: "var(--neu-surface)", borderRadius: "22px", boxShadow: "var(--neu-shadow-float)", padding: "22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 6px #10b981" }} />
                  <span style={{ fontSize: "0.74rem", fontWeight: "700", color: "var(--text-title)" }}>CAMPUS STATUS: LIVE</span>
                  <span style={{ fontSize: "0.64rem", color: "#10b981", fontWeight: "700", background: "rgba(16,185,129,0.12)", padding: "2px 6px", borderRadius: "8px" }}>
                    {isFirebaseConfigured() ? "⚡ Firebase Realtime" : "⚡ Realtime Synced"}
                  </span>
                </div>
                <span style={{ fontSize: "0.68rem", fontWeight: "700", color: "#3b82f6", padding: "2px 8px", borderRadius: "12px", ...NEO_PRESSED }}>AY 2026-2027</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px" }}>
                {[
                  { icon: <IconBookOpen size={16} />, label: "Attendance", val: (isStudent && sDone ? studentAttendance : campusAttendance) || "98.4%", color: "#3b82f6" },
                  { icon: <IconBuilding size={16} />, label: "Faculty Grades", val: `${gradesSent}/48`, color: "#8b5cf6" }
                ].map(s => (
                  <div key={s.label} style={{ ...NEO_PRESSED, padding: "12px", borderRadius: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", color: s.color, marginBottom: "2px" }}>
                      {s.icon}
                      <span style={{ fontSize: "0.7rem", fontWeight: "700" }}>{s.label}</span>
                    </div>
                    <div style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--text-title)" }}>{s.val}</div>
                  </div>
                ))}
              </div>

              {/* Goal Conversion Tracker Preview in Card */}
              <div style={{ ...NEO_FLAT, borderRadius: "14px", padding: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.74rem", fontWeight: "700", color: "var(--text-title)" }}>🎯 Active Goal Conversion</span>
                  <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#10b981" }}>99.2% Issued</span>
                </div>
                <div style={{ height: "6px", borderRadius: "4px", background: "var(--neu-track)", overflow: "hidden", marginBottom: "10px" }}>
                  <div style={{ height: "100%", width: "94%", background: "linear-gradient(90deg, #3b82f6, #10b981)", borderRadius: "4px" }} />
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", lineHeight: "1.4" }}>
                  Average pass conversion time: <strong>45 seconds</strong> from role selection to pass download.
                </div>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ===== STATS COUNTER BAR ===== */}
      <ScrollReveal delay={0.1}>
        <section style={{ padding: "10px 1rem 32px", maxWidth: "1200px", margin: "0 auto" }}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px", background: "var(--neu-surface)", borderRadius: "20px", boxShadow: "var(--neu-shadow-flat)", padding: "18px 14px", textAlign: "center" }}>
            {[
              { end: enrolledCount, suffix: "", label: "Enrolled Students", sub: "Registered account", color: "#3b82f6" },
              { end: 640, suffix: "+", label: "Verified Faculty", sub: "Teachers & Principals", color: "#10b981" },
              { end: gradesSent, suffix: "", label: "Faculty Grades", sub: "Synchronized", color: "#8b5cf6" },
              { end: 100, suffix: "%", label: "Goal Conversion", sub: "Instant digital pass", color: "#f59e0b" }
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: "1.75rem", fontWeight: "800", color: s.color, lineHeight: "1.1" }}>
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--text-title)", marginTop: "3px" }}>{s.label}</div>
                <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ===== REGISTRATION SECTION WITH MULTI-PAGE & GOAL CONVERSION ===== */}
      <ScrollReveal delay={0.1}>
        <section id="registration" style={{ padding: "30px 1rem 50px", maxWidth: "800px", margin: "0 auto" }}>

          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 14px", borderRadius: "30px", background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", fontSize: "0.7rem", fontWeight: "700", color: "#3b82f6", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>
              <IconTarget /> Campus Onboarding Hub
            </div>

            <h2 className="reg-h2" style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-title)", letterSpacing: "-0.8px", marginBottom: "8px" }}>
              Multi-Step Pass Registration
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", maxWidth: "480px", margin: "0 auto 18px", lineHeight: "1.6" }}>
              Complete the steps below to convert your profile into an official verified digital credential.
            </p>

            {/* ONE POPUP BUTTON FOR ROLE SELECTION */}
            <div style={{ display: "inline-flex", justifyContent: "center" }}>
              <button
                type="button"
                onClick={() => setRolePopupOpen(true)}
                style={{
                  ...minBtnStyle,
                  padding: "10px 20px",
                  borderRadius: "30px",
                  background: accentGrad,
                  color: "white",
                  fontSize: "0.9rem",
                  boxShadow: `4px 4px 12px ${accentColor}44, -2px -2px 6px rgba(255,255,255,0.7)`
                }}
              >
                {isStudent ? <IconGraduationCap size={17} /> : <IconTeacher size={17} />}
                <span>Active Track: <strong>{isStudent ? "Student Registration" : "Faculty / Principal"}</strong></span>
                <span style={{ opacity: 0.8, fontSize: "0.75rem", marginLeft: "4px" }}>[Change]</span>
                <IconChevronDown size={13} />
              </button>
            </div>
          </div>

          {/* Form Card */}
          <div className="form-container" style={{ background: "var(--neu-surface)", borderRadius: "22px", boxShadow: "var(--neu-shadow-float)", padding: "28px 24px" }}>

            {/* ===== GOAL CONVERSION TRACKER BANNER ===== */}
            <div style={{ ...NEO_PRESSED, borderRadius: "16px", padding: "14px 18px", marginBottom: "22px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px", flexWrap: "wrap", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ color: accentColor }}><IconTarget /></div>
                  <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)" }}>
                    {isStudent && studentAuthMode === "login"
                      ? "Goal: Registered Student Portal Authentication"
                      : !isStudent && adminAuthMode === "login"
                        ? "Goal: Registered Admin / Faculty Authentication"
                        : goalTitle}
                  </span>
                </div>
                <span style={{ fontSize: "0.74rem", fontWeight: "800", color: isSuccess ? "#10b981" : accentColor }}>
                  {isStudent && studentAuthMode === "login"
                    ? "Registered Student Access"
                    : !isStudent && adminAuthMode === "login"
                      ? "Registered Administrator Access"
                      : isSuccess
                        ? "100% GOAL CONVERTED!"
                        : `${goalPercentage}% Converted (Step ${currentStep} of ${totalSteps})`}
                </span>
              </div>

              {/* Progress Bar */}
              <div style={{ height: "7px", borderRadius: "4px", background: "var(--neu-track)", overflow: "hidden" }}>
                <div
                  style={{
                    height: "100%",
                    width: (isStudent && studentAuthMode === "login") || (!isStudent && adminAuthMode === "login") ? "100%" : `${goalPercentage}%`,
                    background: isSuccess || (isStudent && studentAuthMode === "login") || (!isStudent && adminAuthMode === "login") ? "linear-gradient(90deg, #10b981, #059669)" : accentGrad,
                    borderRadius: "4px",
                    transition: "width 0.4s ease"
                  }}
                />
              </div>
            </div>

            {/* Multi-Step Wizard Indicator */}
            {!isSuccess && (!isStudent ? adminAuthMode === "register" : studentAuthMode === "register") && (
              <div style={{ display: "flex", gap: "6px", marginBottom: "26px", alignItems: "center", overflowX: "auto", paddingBottom: "4px" }}>
                {currentSteps.map((s, idx) => {
                  const num = idx + 1;
                  const isDone = currentStep > num;
                  const isActive = currentStep === num;
                  return (
                    <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "6px", flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", flexShrink: 0 }}>
                        <div
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "800",
                            fontSize: "0.72rem",
                            background: isDone
                              ? "linear-gradient(135deg, #10b981, #059669)"
                              : isActive
                                ? accentGrad
                                : "var(--neu-surface)",
                            color: isDone || isActive ? "white" : "#94a3b8",
                            boxShadow: isDone || isActive
                              ? "2px 2px 6px rgba(0,0,0,0.15)"
                              : "var(--neu-shadow-input)",
                            transition: "all 0.3s"
                          }}
                        >
                          {isDone ? <IconCheck size={13} /> : num}
                        </div>
                        <span style={{ fontSize: "0.72rem", fontWeight: "700", color: isActive ? "var(--text-title)" : "#94a3b8", whiteSpace: "nowrap" }}>
                          {s.label}
                        </span>
                      </div>
                      {idx < currentSteps.length - 1 && (
                        <div style={{ flex: 1, height: "2px", borderRadius: "2px", background: isDone ? "#10b981" : "var(--neu-track)", minWidth: "6px" }} />
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* ===== STUDENT WIZARD PAGES OR LOGIN BOX ===== */}
            {isStudent && (
              <>
                {studentAuthMode === "login" ? (
                  /* LOG IN BOX FOR REGISTERED STUDENTS */
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "8px" }}>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-title)", margin: 0 }}>Registered Student Login</h3>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "2px 0 0" }}>Sign in with your Student ID / LRN or Email to retrieve your pass</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setLoginForm({ identifier: "LRN-2026-48910", password: "StudentPass@2026" });
                        }}
                        style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "#3b82f6", fontSize: "0.78rem", padding: "6px 12px" }}
                      >
                        <IconSparkles size={13} /> Demo Fill
                      </button>
                    </div>

                    <form onSubmit={handleStudentLogin} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Student ID / LRN or Email *</label>
                        <input
                          type="text"
                          value={loginForm.identifier}
                          onChange={e => setLoginForm(p => ({ ...p, identifier: e.target.value }))}
                          placeholder="e.g. LRN-2026-48910 or student@edusphere.edu"
                          style={iStyle(!!loginErr)}
                          required
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Password *</label>
                        <div style={{ position: "relative" }}>
                          <input
                            type={showLoginPwd ? "text" : "password"}
                            value={loginForm.password}
                            onChange={e => setLoginForm(p => ({ ...p, password: e.target.value }))}
                            placeholder="Enter your student password"
                            style={{ ...iStyle(!!loginErr), paddingRight: "38px" }}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowLoginPwd(p => !p)}
                            style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
                          >
                            {showLoginPwd ? <IconEyeOff /> : <IconEye />}
                          </button>
                        </div>
                      </div>

                      {loginErr && (
                        <div style={{ padding: "10px 14px", borderRadius: "10px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", color: "#ef4444", fontSize: "0.8rem", fontWeight: "600" }}>
                          {loginErr}
                        </div>
                      )}

                      {/* Action buttons: Register button located at the SAME PLACE (bottom left) as the Log In button! */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "18px" }}>
                        <button
                          type="button"
                          onClick={() => {
                            setStudentAuthMode("register");
                            setLoginErr("");
                          }}
                          style={{
                            ...minBtnStyle,
                            background: "var(--neu-surface)",
                            color: "#3b82f6",
                            boxShadow: "var(--neu-shadow-small)"
                          }}
                        >
                          Register
                        </button>
                        <button
                          type="submit"
                          style={{
                            ...minBtnStyle,
                            background: accentGrad,
                            color: "white",
                            boxShadow: `3px 3px 8px ${accentColor}44`
                          }}
                        >
                          Sign In to Portal <IconArrow size={14} />
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <>
                    {/* Step 1: Identification */}
                    {sStep === 1 && (
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "8px" }}>
                          <div>
                            <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-title)", margin: 0 }}>Student Identification</h3>
                            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "2px 0 0" }}>Milestone 1: Verify your LRN and official grade level</p>
                          </div>
                          <button
                            type="button"
                            onClick={demoS}
                            style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "#3b82f6", fontSize: "0.78rem", padding: "6px 12px" }}
                          >
                            <IconSparkles size={13} /> Auto Demo
                          </button>
                        </div>

                        <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                          <div style={{ gridColumn: "span 2" }}>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Full Official Name *</label>
                            <input type="text" value={sForm.fullName} onChange={e => chS("fullName", e.target.value)} placeholder="e.g. Janelle Marie Gomez" style={iStyle(!!sErr.fullName)} />
                            {sErr.fullName && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.fullName}</span>}
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Student ID / LRN *</label>
                            <input type="text" value={sForm.studentId} onChange={e => chS("studentId", e.target.value)} placeholder="e.g. LRN-2026-48910" style={iStyle(!!sErr.studentId)} />
                            {sErr.studentId && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.studentId}</span>}
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Student Email *</label>
                            <input type="email" value={sForm.email} onChange={e => chS("email", e.target.value)} placeholder="student@edusphere.edu" style={iStyle(!!sErr.email)} />
                            {sErr.email && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.email}</span>}
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Grade Level</label>
                            <select value={sForm.gradeLevel} onChange={e => chS("gradeLevel", e.target.value)} style={iStyle()}>
                              {["Grade 7 - Junior High", "Grade 8 - Junior High", "Grade 9 - Junior High", "Grade 10 - Junior High", "Grade 11 - Senior High", "Grade 12 - Senior High", "Undergraduate - 1st Year", "Undergraduate - 2nd Year", "Undergraduate - 3rd Year", "Undergraduate - 4th Year"].map(g => (
                                <option key={g}>{g}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Academic Strand / Track</label>
                            <select value={sForm.strand} onChange={e => chS("strand", e.target.value)} style={iStyle()}>
                              {["STEM (Science, Tech, Eng & Math)", "ABM (Accountancy & Business)", "HUMSS (Humanities & Social Sci)", "TVL / ICT & Computer Science", "GAS (General Academic Strand)", "Arts & Design Track"].map(s => (
                                <option key={s}>{s}</option>
                              ))}
                            </select>
                          </div>

                          <div style={{ gridColumn: "span 2" }}>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Section / Advisory Room</label>
                            <input type="text" value={sForm.section} onChange={e => chS("section", e.target.value)} placeholder="e.g. Archimedes / St. Jude / Section 1" style={iStyle()} />
                          </div>
                        </div>

                        {/* Minimal Nav Buttons: Log In button on LEFT side below Section; Next on right */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px" }}>
                          <button
                            type="button"
                            onClick={() => {
                              setStudentAuthMode("login");
                              setLoginErr("");
                            }}
                            style={{
                              ...minBtnStyle,
                              background: "var(--neu-surface)",
                              color: "#3b82f6",
                              boxShadow: "var(--neu-shadow-small)"
                            }}
                          >
                            Log In
                          </button>
                          <button
                            type="button"
                            onClick={nextS}
                            style={{
                              ...minBtnStyle,
                              background: accentGrad,
                              color: "white",
                              boxShadow: `3px 3px 8px ${accentColor}44`
                            }}
                          >
                            Next: Guardian Contact <IconArrow size={14} />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Guardian */}
                    {sStep === 2 && (
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-title)", margin: "0 0 4px" }}>Parent & Guardian Contact</h3>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "0 0 16px" }}>Milestone 2: Campus safety & emergency gate notification</p>

                        <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                          <div style={{ gridColumn: "span 2" }}>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Parent / Guardian Full Name *</label>
                            <input type="text" value={sForm.guardianName} onChange={e => chS("guardianName", e.target.value)} placeholder="e.g. Maria Corazon Gomez (Mother)" style={iStyle(!!sErr.guardianName)} />
                            {sErr.guardianName && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.guardianName}</span>}
                          </div>

                          <div style={{ gridColumn: "span 2" }}>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Emergency Mobile Number *</label>
                            <input type="tel" value={sForm.guardianPhone} onChange={e => chS("guardianPhone", e.target.value)} placeholder="e.g. +63 (917) 845-2901" style={iStyle(!!sErr.guardianPhone)} />
                            {sErr.guardianPhone && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.guardianPhone}</span>}
                          </div>
                        </div>

                        <div style={{ marginTop: "14px", padding: "12px", borderRadius: "12px", background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}>
                          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.5" }}>
                            🛡️ <strong>Safety Guarantee:</strong> Emergency contacts are FERPA-encrypted and notified only on campus entrance or medical triage.
                          </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
                          <button type="button" onClick={prevS} style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "var(--text-muted)" }}>
                            ← Back
                          </button>
                          <button type="button" onClick={nextS} style={{ ...minBtnStyle, background: accentGrad, color: "white", boxShadow: `3px 3px 8px ${accentColor}44` }}>
                            Next: Clubs & Interests <IconArrow size={14} />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Clubs */}
                    {sStep === 3 && (
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-title)", margin: "0 0 4px" }}>Co-Curricular Clubs & Guilds</h3>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "0 0 16px" }}>Milestone 3: Select student activities to be printed on your digital pass</p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                          {["Robotics & AI Club", "Debate & Speech Society", "Campus Journalism", "Mathematics Olympiad", "Performing Arts", "Varsity Athletics", "Environmental Club", "Peer Counseling"].map(item => {
                            const sel = sForm.interests.includes(item);
                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() => toggleInterest(item)}
                                style={{
                                  ...minBtnStyle,
                                  padding: "7px 14px",
                                  fontSize: "0.78rem",
                                  background: sel ? accentGrad : "var(--neu-surface)",
                                  color: sel ? "white" : "var(--text-muted)",
                                  boxShadow: sel ? "inset 2px 2px 4px rgba(0,0,0,0.2)" : "var(--neu-shadow-small)"
                                }}
                              >
                                {sel ? "✓ " : "+ "}{item}
                              </button>
                            );
                          })}
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
                          <button type="button" onClick={prevS} style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "var(--text-muted)" }}>
                            ← Back
                          </button>
                          <button type="button" onClick={nextS} style={{ ...minBtnStyle, background: accentGrad, color: "white", boxShadow: `3px 3px 8px ${accentColor}44` }}>
                            Next: Security & Finish <IconArrow size={14} />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Security */}
                    {sStep === 4 && (
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-title)", margin: "0 0 4px" }}>Portal Security & Policy</h3>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "0 0 16px" }}>Final Milestone: Create your access password and confirm safety terms</p>

                        <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Create Password *</label>
                            <div style={{ position: "relative" }}>
                              <input type={showSPwd ? "text" : "password"} value={sForm.password} onChange={e => chS("password", e.target.value)} placeholder="Min. 6 chars" style={{ ...iStyle(!!sErr.password), paddingRight: "38px" }} />
                              <button type="button" onClick={() => setShowSPwd(p => !p)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}>
                                {showSPwd ? <IconEyeOff /> : <IconEye />}
                              </button>
                            </div>
                            {sErr.password && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.password}</span>}
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Confirm Password *</label>
                            <input type={showSPwd ? "text" : "password"} value={sForm.confirmPassword} onChange={e => chS("confirmPassword", e.target.value)} placeholder="Re-enter password" style={iStyle(!!sErr.confirmPassword)} />
                            {sErr.confirmPassword && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.confirmPassword}</span>}
                          </div>
                        </div>

                        <div style={{ ...NEO_PRESSED, borderRadius: "12px", padding: "12px 14px" }}>
                          <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer" }}>
                            <input type="checkbox" checked={sForm.agreeTerms} onChange={e => chS("agreeTerms", e.target.checked)} style={{ marginTop: "3px", width: "16px", height: "16px", accentColor: "#3b82f6", flexShrink: 0 }} />
                            <span style={{ fontSize: "0.8rem", color: "var(--text-body)", lineHeight: "1.5" }}>
                              I accept the <strong>Student Code of Honor</strong> and the{" "}
                              <button type="button" onClick={e => { e.preventDefault(); setLegal({ open: true, tab: "privacy" }); }} style={{ background: "none", border: "none", padding: 0, color: "#3b82f6", fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}>FERPA Data Shield</button> &{" "}
                              <button type="button" onClick={e => { e.preventDefault(); setLegal({ open: true, tab: "safety" }); }} style={{ background: "none", border: "none", padding: 0, color: "#10b981", fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}>Anti-Bullying Charter</button>.
                            </span>
                          </label>
                          {sErr.agreeTerms && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "4px", display: "block" }}>{sErr.agreeTerms}</span>}
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
                          <button type="button" onClick={prevS} style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "var(--text-muted)" }}>
                            ← Back
                          </button>
                          <button
                            type="button"
                            onClick={nextS}
                            disabled={sSubmitting}
                            style={{
                              ...minBtnStyle,
                              background: "linear-gradient(135deg, #10b981, #059669)",
                              color: "white",
                              boxShadow: "3px 3px 10px rgba(16,185,129,0.4)",
                              opacity: sSubmitting ? 0.7 : 1
                            }}
                          >
                            {sSubmitting ? "Generating Pass..." : "Convert Goal & Issue Pass →"}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Goal Conversion Success */}
                    {sStep === 5 && sDone && (
                      <div style={{ textAlign: "center", padding: "10px 0" }}>
                        <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, #10b981, #059669)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", color: "white", boxShadow: "0 6px 16px rgba(16,185,129,0.35)" }}>
                          <IconCheck size={28} />
                        </div>

                        <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: "20px", background: "rgba(16,185,129,0.15)", color: "#059669", fontWeight: "800", fontSize: "0.72rem", marginBottom: "8px" }}>
                          100% GOAL CONVERTED • PASS VERIFIED
                        </div>

                        <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "6px" }}>
                          Welcome, {sDone.fullName}! 🎓
                        </h3>
                        <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", maxWidth: "440px", margin: "0 auto 18px", lineHeight: "1.6" }}>
                          Your digital admission pass is verified. Show this ID to your adviser or gate terminal.
                        </p>

                        {/* Pass Summary Details */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "10px", textAlign: "left", marginBottom: "20px" }}>
                          {[
                            { label: "Pass Number", color: "#3b82f6", val: sDone.passId, sub: `LRN: ${sDone.studentId}` },
                            { label: "Class Placement", color: "#10b981", val: sDone.gradeLevel, sub: sDone.section },
                            { label: "Safety Roster", color: "#8b5cf6", val: sDone.guardianName, sub: sDone.guardianPhone }
                          ].map(card => (
                            <div key={card.label} style={{ ...NEO_PRESSED, borderRadius: "12px", padding: "12px" }}>
                              <div style={{ fontSize: "0.65rem", fontWeight: "700", color: card.color, textTransform: "uppercase", marginBottom: "3px" }}>{card.label}</div>
                              <div style={{ fontSize: "0.86rem", fontWeight: "800", color: "var(--text-title)" }}>{card.val}</div>
                              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "2px" }}>{card.sub}</div>
                            </div>
                          ))}
                        </div>

                        {/* Official Academic Performance & Attendance Section (Accurate to Teacher Records) */}
                        <div style={{
                          background: "var(--neu-surface)",
                          borderRadius: "18px",
                          boxShadow: "var(--neu-shadow-pressed)",
                          padding: "18px",
                          textAlign: "left",
                          marginBottom: "20px"
                        }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "8px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                              <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}>
                                <IconBookOpen size={16} />
                              </div>
                              <div>
                                <div style={{ fontSize: "0.88rem", fontWeight: "800", color: "var(--text-title)" }}>Official Academic & Attendance Telemetry</div>
                                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Live synchronized with Faculty Gradebook</div>
                              </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "5px", background: "rgba(16,185,129,0.12)", color: "#059669", padding: "3px 10px", borderRadius: "12px", fontSize: "0.72rem", fontWeight: "700" }}>
                              <IconCheck size={13} /> Verified by Faculty
                            </div>
                          </div>

                          {/* Attendance Status Bar */}
                          <div style={{ background: "var(--neu-surface)", borderRadius: "12px", boxShadow: "var(--neu-shadow-small)", padding: "12px", marginBottom: "14px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                              <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--text-body)" }}>Verified Student Attendance Rate</span>
                              <span style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0284c7" }}>
                                {studentAttendance || "98.4%"}
                              </span>
                            </div>
                            <div style={{ height: "6px", borderRadius: "4px", background: "var(--neu-track)", overflow: "hidden" }}>
                              <div style={{ height: "100%", width: (studentAttendance || "98.4%").includes("%") ? (studentAttendance || "98.4%") : `${studentAttendance || "98.4"}%`, background: "linear-gradient(90deg, #3b82f6, #10b981)", borderRadius: "4px" }} />
                            </div>
                          </div>

                          {/* Subject Breakdown */}
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            {[
                              { course: "Advanced Mathematics", defaultGrade: "95", defaultAtt: "98.4%", teacher: "Prof. Maria Elena Santos" },
                              { course: "Physics 101", defaultGrade: "92", defaultAtt: "97.5%", teacher: "Dr. Albert Ramos" },
                              { course: "Computer Science II", defaultGrade: "96", defaultAtt: "99.0%", teacher: "Engr. David Tan" }
                            ].map(item => {
                              const r1 = gradesRoster[`${sDone.studentId}_${item.course}`];
                              const r2 = gradesRoster[`LRN-2026-48910_${item.course}`];
                              const r3 = gradesRoster[`LRN-001_${item.course}`];
                              const record = r1 || r2 || r3;

                              const gradeVal = record?.grade || item.defaultGrade;
                              const attVal = record?.attendance || item.defaultAtt;
                              const teacherVal = record?.teacher || item.teacher;

                              return (
                                <div
                                  key={item.course}
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
                                    gap: "8px",
                                    alignItems: "center",
                                    background: "var(--neu-surface)",
                                    padding: "8px 12px",
                                    borderRadius: "10px",
                                    boxShadow: "var(--neu-shadow-small)"
                                  }}
                                >
                                  <div>
                                    <div style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--text-title)" }}>{item.course}</div>
                                    <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>{teacherVal}</div>
                                  </div>
                                  <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: "600" }}>Attendance</div>
                                    <div style={{ fontSize: "0.82rem", fontWeight: "800", color: "#0284c7" }}>{attVal}</div>
                                  </div>
                                  <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: "600" }}>Final Grade</div>
                                    <div style={{ fontSize: "0.88rem", fontWeight: "800", color: "#10b981" }}>{gradeVal}</div>
                                  </div>
                                  <div style={{ textAlign: "right" }}>
                                    <span style={{ fontSize: "0.65rem", padding: "2px 6px", borderRadius: "6px", background: "rgba(16,185,129,0.15)", color: "#059669", fontWeight: "700" }}>
                                      Verified
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Minimal Action Buttons */}
                        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
                          <button
                            type="button"
                            onClick={() => window.print()}
                            style={{ ...minBtnStyle, background: "linear-gradient(135deg, #3b82f6, #2563eb)", color: "white", boxShadow: "3px 3px 8px rgba(37,99,235,0.35)" }}
                          >
                            🖨️ Print / Save ID Badge
                          </button>
                          <button
                            type="button"
                            onClick={downloadS}
                            style={{ ...minBtnStyle, background: "linear-gradient(135deg, #10b981, #059669)", color: "white", boxShadow: "3px 3px 8px rgba(16,185,129,0.35)" }}
                          >
                            <IconFileText /> Download Pass (.txt)
                          </button>
                          <button
                            type="button"
                            onClick={() => copyCredential(sDone.passId)}
                            style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "var(--text-title)" }}
                          >
                            <IconCopy /> {copiedPass ? "Copied!" : "Copy Pass ID"}
                          </button>
                          <button
                            type="button"
                            onClick={handleSignOut}
                            style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "var(--text-muted)" }}
                          >
                            <IconRotate /> Reset
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
            )}

            {/* ===== FACULTY WIZARD PAGES OR LOGIN BOX ===== */}
            {!isStudent && (
              <>
                {adminAuthMode === "login" ? (
                  /* LOG IN BOX FOR REGISTERED FACULTY / ADMIN */
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "8px" }}>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-title)", margin: 0 }}>Registered Admin / Faculty Login</h3>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "2px 0 0" }}>Sign in with your Faculty ID or Email to retrieve your clearance</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setAdminLoginForm({ identifier: "FAC-ADM-2026-004", password: "PrincipalMaster@2026" });
                        }}
                        style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "#8b5cf6", fontSize: "0.78rem", padding: "6px 12px" }}
                      >
                        <IconSparkles size={13} /> Demo Fill
                      </button>
                    </div>

                    <form onSubmit={handleAdminLogin} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Faculty / Employee ID or Email *</label>
                        <input
                          type="text"
                          value={adminLoginForm.identifier}
                          onChange={e => setAdminLoginForm(p => ({ ...p, identifier: e.target.value }))}
                          placeholder="e.g. FAC-ADM-2026-004 or faculty@edusphere.edu"
                          style={iStyle(!!adminLoginErr)}
                          required
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Password *</label>
                        <div style={{ position: "relative" }}>
                          <input
                            type={showAdminLoginPwd ? "text" : "password"}
                            value={adminLoginForm.password}
                            onChange={e => setAdminLoginForm(p => ({ ...p, password: e.target.value }))}
                            placeholder="Enter your administrative password"
                            style={{ ...iStyle(!!adminLoginErr), paddingRight: "38px" }}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowAdminLoginPwd(p => !p)}
                            style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
                          >
                            {showAdminLoginPwd ? <IconEyeOff /> : <IconEye />}
                          </button>
                        </div>
                      </div>

                      {adminLoginErr && (
                        <div style={{ padding: "10px 14px", borderRadius: "10px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", color: "#ef4444", fontSize: "0.8rem", fontWeight: "600" }}>
                          {adminLoginErr}
                        </div>
                      )}

                      {/* Action buttons: Register button located at bottom left; Sign In on right */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "18px" }}>
                        <button
                          type="button"
                          onClick={() => {
                            setAdminAuthMode("register");
                            setAdminLoginErr("");
                          }}
                          style={{
                            ...minBtnStyle,
                            background: "var(--neu-surface)",
                            color: "#8b5cf6",
                            boxShadow: "var(--neu-shadow-small)"
                          }}
                        >
                          Register
                        </button>
                        <button
                          type="submit"
                          style={{
                            ...minBtnStyle,
                            background: accentGrad,
                            color: "white",
                            boxShadow: `3px 3px 8px ${accentColor}44`
                          }}
                        >
                          Sign In to Portal <IconArrow size={14} />
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <>
                    {/* Step 1: Faculty Profile */}
                    {fStep === 1 && (
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "8px" }}>
                          <div>
                            <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-title)", margin: 0 }}>Faculty Profile</h3>
                            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "2px 0 0" }}>Milestone 1: Verify your educator credentials and school post</p>
                          </div>
                          <button
                            type="button"
                            onClick={demoF}
                            style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "#8b5cf6", fontSize: "0.78rem", padding: "6px 12px" }}
                          >
                            <IconSparkles size={13} /> Auto Demo
                          </button>
                        </div>

                        <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                          <div style={{ gridColumn: "span 2" }}>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Official Name & Title *</label>
                            <input type="text" value={fForm.fullName} onChange={e => chF("fullName", e.target.value)} placeholder="e.g. Dr. Roberto M. Reyes, Ph.D." style={iStyle(!!fErr.fullName)} />
                            {fErr.fullName && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.fullName}</span>}
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Institutional Role *</label>
                            <select value={fForm.role} onChange={e => chF("role", e.target.value)} style={iStyle()}>
                              {["Teacher / Faculty Instructor", "Department Head / Subject Chair", "Principal / Head of School", "Vice Principal / Assistant Principal", "Guidance Counselor", "School Registrar / Academic Admin"].map(r => (
                                <option key={r}>{r}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Faculty / Employee ID *</label>
                            <input type="text" value={fForm.facultyId} onChange={e => chF("facultyId", e.target.value)} placeholder="e.g. FAC-2026-0419" style={iStyle(!!fErr.facultyId)} />
                            {fErr.facultyId && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.facultyId}</span>}
                          </div>

                          <div style={{ gridColumn: "span 2" }}>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>School / Campus Name *</label>
                            <input type="text" value={fForm.institution} onChange={e => chF("institution", e.target.value)} placeholder="e.g. Metropolitan Academic Science Institute" style={iStyle(!!fErr.institution)} />
                            {fErr.institution && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.institution}</span>}
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Department</label>
                            <select value={fForm.department} onChange={e => chF("department", e.target.value)} style={iStyle()}>
                              {["Science & Engineering Dept", "Mathematics Department", "English & Language Studies", "Social Studies & Humanities", "Arts & Design", "Physical Education", "Office of the Principal & Academic Affairs", "Guidance & Counseling Office"].map(d => (
                                <option key={d}>{d}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Teaching Experience</label>
                            <select value={fForm.experienceYears} onChange={e => chF("experienceYears", e.target.value)} style={iStyle()}>
                              {["1 - 2 Years", "3 - 5 Years", "5+ Years", "10+ Years", "15+ Years"].map(y => (
                                <option key={y}>{y}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Minimal Nav Buttons: Log In button on LEFT side; Next on right */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px" }}>
                          <button
                            type="button"
                            onClick={() => {
                              setAdminAuthMode("login");
                              setAdminLoginErr("");
                            }}
                            style={{
                              ...minBtnStyle,
                              background: "var(--neu-surface)",
                              color: "#8b5cf6",
                              boxShadow: "var(--neu-shadow-small)"
                            }}
                          >
                            Log In
                          </button>
                          <button
                            type="button"
                            onClick={nextF}
                            style={{ ...minBtnStyle, background: accentGrad, color: "white", boxShadow: `3px 3px 8px ${accentColor}44` }}
                          >
                            Next: Contact & Office <IconArrow size={14} />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Faculty Contact */}
                    {fStep === 2 && (
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-title)", margin: "0 0 4px" }}>Office & Contact Details</h3>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "0 0 16px" }}>Milestone 2: Official faculty directory assignment</p>

                        <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                          <div style={{ gridColumn: "span 2" }}>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Institutional Email *</label>
                            <input type="email" value={fForm.email} onChange={e => chF("email", e.target.value)} placeholder="faculty@edusphere.edu" style={iStyle(!!fErr.email)} />
                            {fErr.email && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.email}</span>}
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Direct Mobile Number *</label>
                            <input type="tel" value={fForm.phone} onChange={e => chF("phone", e.target.value)} placeholder="+63 (918) 552-3140" style={iStyle(!!fErr.phone)} />
                            {fErr.phone && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.phone}</span>}
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Office Room Location</label>
                            <input type="text" value={fForm.roomOffice} onChange={e => chF("roomOffice", e.target.value)} placeholder="e.g. Science Complex, Rm 302" style={iStyle()} />
                          </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
                          <button type="button" onClick={prevF} style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "var(--text-muted)" }}>
                            ← Back
                          </button>
                          <button type="button" onClick={nextF} style={{ ...minBtnStyle, background: accentGrad, color: "white", boxShadow: `3px 3px 8px ${accentColor}44` }}>
                            Next: Security & Ethics <IconArrow size={14} />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Faculty Security */}
                    {fStep === 3 && (
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-title)", margin: "0 0 4px" }}>Tier-1 Clearance & Ethics Pledge</h3>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "0 0 16px" }}>Final Milestone: Gradebook admin password and educator pledge</p>

                        <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Create Password *</label>
                            <div style={{ position: "relative" }}>
                              <input type={showFPwd ? "text" : "password"} value={fForm.password} onChange={e => chF("password", e.target.value)} placeholder="Min. 6 chars" style={{ ...iStyle(!!fErr.password), paddingRight: "38px" }} />
                              <button type="button" onClick={() => setShowFPwd(p => !p)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}>
                                {showFPwd ? <IconEyeOff /> : <IconEye />}
                              </button>
                            </div>
                            {fErr.password && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.password}</span>}
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-title)", marginBottom: "5px" }}>Confirm Password *</label>
                            <input type={showFPwd ? "text" : "password"} value={fForm.confirmPassword} onChange={e => chF("confirmPassword", e.target.value)} placeholder="Re-enter password" style={iStyle(!!fErr.confirmPassword)} />
                            {fErr.confirmPassword && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.confirmPassword}</span>}
                          </div>
                        </div>

                        <div style={{ ...NEO_PRESSED, borderRadius: "12px", padding: "12px 14px" }}>
                          <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer" }}>
                            <input type="checkbox" checked={fForm.agreeTerms} onChange={e => chF("agreeTerms", e.target.checked)} style={{ marginTop: "3px", width: "16px", height: "16px", accentColor: "#8b5cf6", flexShrink: 0 }} />
                            <span style={{ fontSize: "0.8rem", color: "var(--text-body)", lineHeight: "1.5" }}>
                              I uphold the <strong>Professional Code of Ethics for Teachers</strong> and honor the{" "}
                              <button type="button" onClick={e => { e.preventDefault(); setLegal({ open: true, tab: "privacy" }); }} style={{ background: "none", border: "none", padding: 0, color: "#8b5cf6", fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}>FERPA Mandate</button> &{" "}
                              <button type="button" onClick={e => { e.preventDefault(); setLegal({ open: true, tab: "safety" }); }} style={{ background: "none", border: "none", padding: 0, color: "#10b981", fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}>Child Protection Standard</button>.
                            </span>
                          </label>
                          {fErr.agreeTerms && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "4px", display: "block" }}>{fErr.agreeTerms}</span>}
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
                          <button type="button" onClick={prevF} style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "var(--text-muted)" }}>
                            ← Back
                          </button>
                          <button
                            type="button"
                            onClick={nextF}
                            disabled={fSubmitting}
                            style={{
                              ...minBtnStyle,
                              background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                              color: "white",
                              boxShadow: "3px 3px 10px rgba(139,92,246,0.4)",
                              opacity: fSubmitting ? 0.7 : 1
                            }}
                          >
                            {fSubmitting ? "Verifying..." : "Convert Goal & Issue Clearance →"}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Faculty Goal Conversion Success */}
                    {fStep === 4 && fDone && (
                      <div style={{ textAlign: "center", padding: "10px 0" }}>
                        <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, #8b5cf6, #6d28d9)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", color: "white", boxShadow: "0 6px 16px rgba(139,92,246,0.35)" }}>
                          <IconCheck size={28} />
                        </div>

                        <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: "20px", background: "rgba(139,92,246,0.15)", color: "#7c3aed", fontWeight: "800", fontSize: "0.72rem", marginBottom: "8px" }}>
                          100% GOAL CONVERTED • CLEARANCE PASS ISSUED
                        </div>

                        <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "6px" }}>
                          Welcome, {fDone.fullName}! 🧑‍🏫
                        </h3>
                        <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", maxWidth: "440px", margin: "0 auto 18px", lineHeight: "1.6" }}>
                          Your Tier-1 Academic Clearance Pass is ready. You now have full gradebook and administrative privileges.
                        </p>

                        {/* Faculty Summary Details */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "10px", textAlign: "left", marginBottom: "20px" }}>
                          {[
                            { label: "Clearance ID", color: "#8b5cf6", val: fDone.credentialId, sub: fDone.role },
                            { label: "Institution / Dept", color: "#3b82f6", val: fDone.institution, sub: fDone.department },
                            { label: "Clearance Level", color: "#10b981", val: "Tier 1 — Master", sub: fDone.roomOffice }
                          ].map(card => (
                            <div key={card.label} style={{ ...NEO_PRESSED, borderRadius: "12px", padding: "12px" }}>
                              <div style={{ fontSize: "0.65rem", fontWeight: "700", color: card.color, textTransform: "uppercase", marginBottom: "3px" }}>{card.label}</div>
                              <div style={{ fontSize: "0.86rem", fontWeight: "800", color: "var(--text-title)" }}>{card.val}</div>
                              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "2px" }}>{card.sub}</div>
                            </div>
                          ))}
                        </div>

                        {/* Minimal Action Buttons */}
                        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
                          <button
                            type="button"
                            onClick={downloadF}
                            style={{ ...minBtnStyle, background: "linear-gradient(135deg, #8b5cf6, #6d28d9)", color: "white", boxShadow: "3px 3px 8px rgba(139,92,246,0.35)" }}
                          >
                            <IconFileText /> Download Clearance (.txt)
                          </button>
                          <button
                            type="button"
                            onClick={() => copyCredential(fDone.credentialId)}
                            style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "var(--text-title)" }}
                          >
                            <IconCopy /> {copiedPass ? "Copied!" : "Copy Clearance ID"}
                          </button>
                          <a
                            href="/faculty/grades"
                            style={{ ...minBtnStyle, textDecoration: "none", background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "#10b981" }}
                          >
                            <IconSparkles size={16} /> Send Grades
                          </a>
                          <button
                            type="button"
                            onClick={handleFacultySignOut}
                            style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "var(--text-muted)" }}
                          >
                            <IconRotate /> Reset
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
            )}

          </div>
        </section>
      </ScrollReveal>

      {/* ===== ACADEMIC MODULES ===== */}
      <ScrollReveal delay={0.1}>
        <section id="modules" style={{ padding: "30px 1rem 50px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: "30px", background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", fontSize: "0.7rem", fontWeight: "700", color: "#3b82f6", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Core Infrastructure
            </div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-title)", letterSpacing: "-0.5px", marginBottom: "8px" }}>
              Engineered for Modern Classrooms
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", maxWidth: "460px", margin: "0 auto", lineHeight: "1.6" }}>
              Everything a school requires: interactive courses, real-time grades, and student safety telemetry.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "16px" }}>
            {modules.map((m, i) => (
              <div
                key={m.title}
                onClick={() => setActiveModule(i)}
                style={{
                  background: "var(--neu-card)",
                  borderRadius: "20px",
                  padding: "22px 18px",
                  boxShadow: activeModule === i
                    ? `var(--neu-shadow-pressed), 0 0 0 2px ${m.color}`
                    : "var(--neu-shadow-flat)",
                  border: "1px solid var(--border-card)",
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", border: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: m.color, marginBottom: "14px" }}>
                  {m.icon}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "6px" }}>{m.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: "1.55", marginBottom: "14px" }}>{m.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {m.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div style={{ width: "14px", height: "14px", borderRadius: "4px", background: m.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", flexShrink: 0 }}>✓</div>
                      <span style={{ fontSize: "0.76rem", color: "var(--text-body)", fontWeight: "600" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ===== CAMPUS SAFETY & CHILD PROTECTION ===== */}
      <ScrollReveal delay={0.1}>
        <section id="safety" style={{ padding: "30px 1rem 50px", maxWidth: "1200px", margin: "0 auto" }}>
          <div className="safety-padding" style={{ background: "var(--neu-card)", borderRadius: "22px", boxShadow: "var(--neu-shadow-float)", border: "1px solid var(--border-card)", padding: "32px 24px" }}>
            <div className="safety-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "3px 12px", borderRadius: "20px", background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-input)", fontSize: "0.7rem", fontWeight: "700", color: "#8b5cf6", marginBottom: "12px", textTransform: "uppercase" }}>
                  <IconShield size={14} /> Child Protection & Safety
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "10px" }}>Safe, Zero-Harassment Campus</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "16px" }}>
                  EduSphere integrates encrypted attendance check-ins, automated parent alerts, and confidential anti-bullying reporting for school counselors.
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={() => setLegal({ open: true, tab: "safety" })}
                    style={{ ...minBtnStyle, background: "linear-gradient(135deg, #10b981, #059669)", color: "white", boxShadow: "3px 3px 8px rgba(16,185,129,0.3)" }}
                  >
                    Child Protection Charter
                  </button>
                  <button
                    type="button"
                    onClick={() => setLegal({ open: true, tab: "privacy" })}
                    style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "var(--text-muted)" }}
                  >
                    FERPA Privacy
                  </button>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { icon: "🛡️", title: "Anonymous Counselor Channel", desc: "Confidential incident reporting audited under protective protocols within 12 hours." },
                  { icon: "📱", title: "Parent Gate Telemetry", desc: "Instant SMS notifications when a student taps their digital badge at the gate." },
                  { icon: "🏥", title: "School Nurse Health Passport", desc: "Secure allergy, medication, and emergency triage passes on campus." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center", ...NEO_PRESSED, borderRadius: "14px", padding: "12px 14px" }}>
                    <div style={{ fontSize: "1.3rem", flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <h4 style={{ fontSize: "0.86rem", fontWeight: "800", color: "var(--text-title)", margin: "0 0 2px" }}>{item.title}</h4>
                      <p style={{ fontSize: "0.74rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.4" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== TESTIMONIALS ===== */}
      <ScrollReveal delay={0.1}>
        <section id="testimonials" style={{ padding: "30px 1rem 50px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: "30px", background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", fontSize: "0.7rem", fontWeight: "700", color: "#8b5cf6", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Community Feedback
            </div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-title)", letterSpacing: "-0.5px" }}>
              Trusted by School Leaders & Students
            </h2>
          </div>

          <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "var(--neu-card)", borderRadius: "20px", padding: "22px 18px", boxShadow: "var(--neu-shadow-flat)", border: "1px solid var(--border-card)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", gap: "2px", marginBottom: "10px", color: "#f59e0b" }}>
                    {Array.from({ length: t.rating }).map((_, j) => <IconStar key={j} />)}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: "1.65", marginBottom: "16px", fontStyle: "italic" }}>
                    "{t.text}"
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "800", fontSize: "0.78rem", flexShrink: 0 }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: "800", color: "var(--text-title)", fontSize: "0.82rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ===== MINIMAL FOOTER & LEGAL MODAL ===== */}
      <footer style={{ borderTop: "1px solid rgba(163,177,198,0.35)", padding: "22px 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="footer-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
              <IconGraduationCap size={15} />
            </div>
            <span style={{ fontWeight: "800", color: "var(--text-title)", fontSize: "0.92rem" }}>Edu<span style={{ color: "#3b82f6" }}>Sphere</span></span>
            <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>© 2026 Academic Network</span>
          </div>

          <div className="footer-links" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { label: "Privacy Charter", tab: "privacy" as const },
              { label: "Child Protection", tab: "safety" as const },
              { label: "Honor Code", tab: "conduct" as const }
            ].map(l => (
              <button
                key={l.label}
                type="button"
                onClick={() => setLegal({ open: true, tab: l.tab })}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.76rem", color: "var(--text-muted)", fontWeight: "600", fontFamily: "'Outfit',sans-serif", textDecoration: "underline" }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {legal.open && (
        <div
          onClick={() => setLegal(p => ({ ...p, open: false }))}
          style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(15,23,42,0.65)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "14px" }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: "var(--neu-surface)", borderRadius: "20px", boxShadow: "16px 16px 36px rgba(0,0,0,0.25)", maxWidth: "640px", width: "100%", maxHeight: "88vh", display: "flex", flexDirection: "column", overflow: "hidden" }}
          >
            <div style={{ padding: "16px 20px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(163,177,198,0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                  <IconShield size={16} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: "800", color: "var(--text-title)", margin: 0 }}>Campus Compliance</h3>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", margin: 0 }}>Privacy, safety, and conduct regulations</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLegal(p => ({ ...p, open: false }))}
                style={{ width: "28px", height: "28px", borderRadius: "50%", border: "none", cursor: "pointer", background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}
              >
                <IconClose size={14} />
              </button>
            </div>

            <div style={{ display: "flex", gap: "4px", padding: "8px 20px 0", borderBottom: "1px solid rgba(163,177,198,0.2)" }}>
              {[
                { id: "privacy", label: "🔒 Privacy (FERPA)" },
                { id: "safety", label: "🛡️ Child Protection" },
                { id: "conduct", label: "📜 Honor Code" }
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setLegal(p => ({ ...p, tab: tab.id as any }))}
                  style={{
                    padding: "7px 12px",
                    borderRadius: "8px 8px 0 0",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Outfit',sans-serif",
                    fontWeight: "700",
                    fontSize: "0.78rem",
                    color: legal.tab === tab.id ? "#3b82f6" : "var(--text-muted)",
                    background: legal.tab === tab.id ? "var(--neu-surface)" : "transparent",
                    boxShadow: legal.tab === tab.id ? "var(--neu-shadow-input)" : "none"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ padding: "16px 20px", overflowY: "auto", fontSize: "0.86rem", color: "var(--text-body)", lineHeight: "1.7" }}>
              {legal.tab === "privacy" && (
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "6px" }}>1. FERPA Student Record Protection</h4>
                  <p style={{ marginBottom: "10px" }}>EduSphere conforms strictly with FERPA, COPPA, and national student data regulations. All student grades, medical records, and parent contacts are protected under administrative confidentiality.</p>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "6px" }}>2. Zero Commercial Monetization</h4>
                  <p>EduSphere guarantees zero commercialization: records are never monetized, traded, or shared with third-party advertisers.</p>
                </div>
              )}
              {legal.tab === "safety" && (
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "6px" }}>1. Zero-Tolerance Harassment Policy</h4>
                  <p style={{ marginBottom: "10px" }}>Partner campuses enforce strict zero-tolerance policies against bullying, cyber-bullying, and discrimination. All incident reports are reviewed within 12 hours.</p>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "6px" }}>2. Gate Telemetry & Alerts</h4>
                  <p>Parent contact numbers are used exclusively for campus entry time notifications and emergency weather dispatch.</p>
                </div>
              )}
              {legal.tab === "conduct" && (
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "6px" }}>1. Academic Integrity & Honor Pledge</h4>
                  <p style={{ marginBottom: "10px" }}>Students certify that assignments represent authentic coursework. Plagiarism and unauthorized academic dishonesty are subject to administrative review.</p>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "6px" }}>2. Educator Ethics Standard</h4>
                  <p>Faculty members maintain impartial grade evaluations and confidential gradebook integrity.</p>
                </div>
              )}
            </div>

            <div style={{ padding: "12px 20px", borderTop: "1px solid rgba(163,177,198,0.3)", display: "flex", justifyContent: "flex-end", gap: "8px", background: "var(--neu-surface)" }}>
              <button
                type="button"
                onClick={() => setLegal(p => ({ ...p, open: false }))}
                style={{ ...minBtnStyle, background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", color: "var(--text-muted)" }}
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  if (isStudent) {
                    setSForm(p => ({ ...p, agreeTerms: true }));
                    setSErr(p => { const copy = { ...p }; delete copy.agreeTerms; return copy; });
                  } else {
                    setFForm(p => ({ ...p, agreeTerms: true }));
                    setFErr(p => { const copy = { ...p }; delete copy.agreeTerms; return copy; });
                  }
                  setLegal(p => ({ ...p, open: false }));
                }}
                style={{ ...minBtnStyle, background: accentGrad, color: "white", boxShadow: `3px 3px 8px ${accentColor}44` }}
              >
                ✓ Accept School Policy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grade & Attendance Sent Popup Notification */}
      {(gradeNotifToast.show || gradeSentPopup) && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          background: "linear-gradient(135deg, var(--text-title), #0f172a)",
          border: "1px solid rgba(59,130,246,0.3)",
          color: "white",
          padding: "18px 22px",
          borderRadius: "18px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.35), 0 0 15px rgba(59,130,246,0.3)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 9999,
          maxWidth: "380px",
          animation: "slideIn 0.3s ease-out"
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <div style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", borderRadius: "12px", padding: "8px", display: "flex", flexShrink: 0 }}>
              <IconGraduationCap size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "800", fontSize: "0.95rem", color: "#60a5fa", display: "flex", alignItems: "center", gap: "6px" }}>
                <span>🎓 Official Grade Alert</span>
                <span style={{ fontSize: "0.68rem", background: "rgba(16,185,129,0.2)", color: "#34d399", padding: "2px 6px", borderRadius: "6px", fontWeight: "700" }}>Live Sync</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "#e2e8f0", marginTop: "4px", lineHeight: "1.4" }}>
                {gradeNotifToast.message || "Your instructor has dispatched official grades & verified attendance to your portal!"}
              </div>
              {gradeNotifToast.avgAttendance && (
                <div style={{ fontSize: "0.74rem", color: "#93c5fd", marginTop: "3px" }}>
                  Verified Attendance Rate: <strong>{gradeNotifToast.avgAttendance}</strong>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                setGradeNotifToast(p => ({ ...p, show: false }));
                setGradeSentPopup(false);
              }}
              style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", padding: "2px" }}
              aria-label="Dismiss alert"
            >
              <IconClose size={16} />
            </button>
          </div>

          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", marginTop: "4px" }}>
            <button
              type="button"
              onClick={() => {
                setGradeNotifToast(p => ({ ...p, show: false }));
                setGradeSentPopup(false);
                const el = document.getElementById("registration");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                border: "none",
                borderRadius: "20px",
                padding: "6px 14px",
                color: "white",
                fontWeight: "700",
                fontSize: "0.78rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <IconBookOpen size={14} /> View Grades & Attendance
            </button>
            <button
              type="button"
              onClick={() => {
                setGradeNotifToast(p => ({ ...p, show: false }));
                setGradeSentPopup(false);
              }}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "20px",
                padding: "6px 12px",
                color: "#cbd5e1",
                fontWeight: "600",
                fontSize: "0.78rem",
                cursor: "pointer"
              }}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Feature 3: Anonymous Counselor Incident Report Modal */}
      {counselorOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(15,23,42,0.7)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 99999,
          padding: "20px"
        }}>
          <div style={{
            background: "var(--neu-card)",
            borderRadius: "24px",
            boxShadow: "var(--neu-shadow-float)",
            border: "1px solid var(--border-card)",
            padding: "32px",
            maxWidth: "520px",
            width: "100%",
            position: "relative"
          }}>
            <button
              type="button"
              onClick={() => setCounselorOpen(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "var(--neu-surface)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-muted)",
                boxShadow: "var(--neu-shadow-small)"
              }}
              aria-label="Close Counselor Modal"
            >
              <IconClose size={16} />
            </button>

            {counselorSubmittedTicket ? (
              <div style={{ textAlign: "center", padding: "10px 0" }}>
                <div style={{ width: "54px", height: "54px", borderRadius: "50%", background: "linear-gradient(135deg, #10b981, #059669)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "white" }}>
                  <IconCheck size={28} />
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "6px" }}>
                  Incident Report Dispatched
                </h3>
                <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", marginBottom: "16px", lineHeight: "1.5" }}>
                  Your report has been encrypted and assigned directly to the school guidance counselor under protective protocols.
                </p>
                <div style={{ background: "var(--neu-surface-pressed)", borderRadius: "14px", padding: "12px", marginBottom: "20px", border: "1px solid var(--border-subtle)" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: "600" }}>CONFIDENTIAL TICKET NUMBER</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: "800", color: "#3b82f6", marginTop: "2px" }}>
                    {counselorSubmittedTicket}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCounselorOpen(false)}
                  style={{
                    ...minBtnStyle,
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    color: "white",
                    padding: "10px 24px"
                  }}
                >
                  Close & Protect Identity
                </button>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #ef4444, #dc2626)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                    <IconShield size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--text-title)", margin: 0 }}>
                      Confidential Counselor Box
                    </h3>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0 }}>
                      100% Anonymous & Encrypted School Guidance Channel
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "14px" }}>
                  <div>
                    <label style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--text-title)", display: "block", marginBottom: "4px" }}>
                      Category of Concern
                    </label>
                    <select
                      value={counselorForm.category}
                      onChange={e => setCounselorForm(p => ({ ...p, category: e.target.value }))}
                      style={iStyle()}
                    >
                      <option value="Bullying / Peer Harassment">Bullying / Peer Harassment</option>
                      <option value="Academic Distress / Burnout">Academic Distress / Burnout</option>
                      <option value="Campus Safety Hazard">Campus Safety Hazard</option>
                      <option value="Personal Well-being / Mental Health">Personal Well-being / Mental Health</option>
                      <option value="Other Confidential Matter">Other Confidential Matter</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--text-title)", display: "block", marginBottom: "4px" }}>
                      Urgency Level
                    </label>
                    <select
                      value={counselorForm.urgency}
                      onChange={e => setCounselorForm(p => ({ ...p, urgency: e.target.value }))}
                      style={iStyle()}
                    >
                      <option value="Low (Routine follow-up)">Low (Routine follow-up)</option>
                      <option value="Medium (Review within 24h)">Medium (Review within 24h)</option>
                      <option value="High (Immediate counselor triage)">High (Immediate counselor triage)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--text-title)", display: "block", marginBottom: "4px" }}>
                      Incident Description
                    </label>
                    <textarea
                      placeholder="Describe what happened or how our school counselor can assist you..."
                      rows={4}
                      value={counselorForm.description}
                      onChange={e => setCounselorForm(p => ({ ...p, description: e.target.value }))}
                      style={{ ...iStyle(), resize: "vertical" }}
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "6px" }}>
                    <button
                      type="button"
                      onClick={() => setCounselorOpen(false)}
                      style={{
                        ...minBtnStyle,
                        background: "var(--neu-surface)",
                        color: "var(--text-muted)",
                        boxShadow: "var(--neu-shadow-small)"
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      disabled={counselorSubmitting}
                      onClick={async () => {
                        if (!counselorForm.description.trim()) {
                          alert("Please write a brief description of the incident.");
                          return;
                        }
                        setCounselorSubmitting(true);
                        const ticket = `TICKET-${Math.floor(100000 + Math.random() * 900000)}`;
                        await saveCounselorReportToFirebase({
                          ticketId: ticket,
                          ...counselorForm,
                          timestamp: new Date().toISOString()
                        });
                        setCounselorSubmitting(false);
                        setCounselorSubmittedTicket(ticket);
                      }}
                      style={{
                        ...minBtnStyle,
                        background: "linear-gradient(135deg, #ef4444, #dc2626)",
                        color: "white",
                        boxShadow: "3px 3px 10px rgba(239,68,68,0.35)",
                        padding: "10px 22px"
                      }}
                    >
                      {counselorSubmitting ? "Encrypting..." : "Submit Confidential Report"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

