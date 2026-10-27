"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { dispatchGradeToFirebase, sendNotificationToFirebase, isFirebaseConfigured } from "@/lib/firebase";

/* Minimal Icons */
function IconArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconFilter() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function IconSparkles() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  );
}

interface StudentItem {
  id: string;
  name: string;
  course: string;
}

const baseStudentsData: StudentItem[] = [
  { id: "LRN-001", name: "Janelle Marie Gomez", course: "Advanced Mathematics" },
  { id: "LRN-002", name: "Mark Reyes", course: "Advanced Mathematics" },
  { id: "LRN-003", name: "Sophia Torres", course: "Advanced Mathematics" },
  { id: "LRN-001", name: "Janelle Marie Gomez", course: "Physics 101" },
  { id: "LRN-004", name: "Liam Santos", course: "Physics 101" },
  { id: "LRN-005", name: "Emma Cruz", course: "Physics 101" },
  { id: "LRN-001", name: "Janelle Marie Gomez", course: "Computer Science II" },
  { id: "LRN-006", name: "Noah Bautista", course: "Computer Science II" },
  { id: "LRN-007", name: "Olivia Villanueva", course: "Computer Science II" },
];

export default function FacultyGradesPage() {
  const [courseFilter, setCourseFilter] = useState("Advanced Mathematics");
  const [students, setStudents] = useState<StudentItem[]>(baseStudentsData);
  const [grades, setGrades] = useState<Record<string, string>>({});
  const [attendance, setAttendance] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [dispatchSummary, setDispatchSummary] = useState<{ count: number; avgAttendance: string; course: string } | null>(null);

  /* Faculty Campus Announcement Broadcast */
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementMsg, setAnnouncementMsg] = useState("");
  const [announcementSent, setAnnouncementSent] = useState(false);

  // Load registered students and previously saved grades/attendance on mount
  useEffect(() => {
    try {
      // 1. Merge with any dynamically registered students
      const registered = JSON.parse(localStorage.getItem("registered_students") || "[]");
      const mergedList = [...baseStudentsData];

      if (Array.isArray(registered)) {
        registered.forEach((st: any) => {
          const lrn = st.studentId || st.id || "";
          const name = st.fullName || "";
          if (lrn && name) {
            // Assign courses based on strand or default
            const assignedCourse = (st.strand && st.strand.includes("STEM"))
              ? "Advanced Mathematics"
              : "Computer Science II";

            const alreadyExists = mergedList.some(
              item => item.id.toLowerCase() === lrn.toLowerCase() ||
                      (item.name.toLowerCase() === name.toLowerCase() && item.course === assignedCourse)
            );

            if (!alreadyExists) {
              mergedList.push({ id: lrn, name, course: assignedCourse });
            }
          }
        });
      }
      setStudents(mergedList);

      // 2. Load previously saved roster grades & attendance
      const savedRoster = JSON.parse(localStorage.getItem("edusphere_grades_roster") || "{}");
      const initialGrades: Record<string, string> = {};
      const initialAtt: Record<string, string> = {};

      mergedList.forEach(s => {
        // Use compound key (id + course) so each student-course combo is independent
        const compoundKey = `${s.id}_${s.course}`;
        const record = savedRoster[compoundKey];
        if (record) {
          if (record.grade) initialGrades[compoundKey] = record.grade;
          if (record.attendance) initialAtt[compoundKey] = record.attendance;
        } else {
          // Default baseline grades per student name
          if (s.name.includes("Janelle")) {
            initialAtt[compoundKey] = "98.4%";
            initialGrades[compoundKey] = "95";
          } else if (s.name.includes("Mark")) {
            initialAtt[compoundKey] = "96.5%";
            initialGrades[compoundKey] = "91";
          } else if (s.name.includes("Sophia")) {
            initialAtt[compoundKey] = "99.0%";
            initialGrades[compoundKey] = "97";
          } else {
            initialAtt[compoundKey] = "98.0%";
            initialGrades[compoundKey] = "92";
          }
        }
      });

      setGrades(initialGrades);
      setAttendance(initialAtt);
    } catch (err) {
      console.error("Error loading saved grades:", err);
    }
  }, []);

  const filteredStudents = students.filter(s => s.course === courseFilter);

  const handleGradeChange = (id: string, course: string, val: string) => {
    const key = `${id}_${course}`;
    setGrades(prev => ({ ...prev, [key]: val }));
  };

  const handleAttendanceChange = (id: string, course: string, val: string) => {
    const key = `${id}_${course}`;
    setAttendance(prev => ({ ...prev, [key]: val }));
  };

  const handleQuickFill = () => {
    const updatedG = { ...grades };
    const updatedA = { ...attendance };

    filteredStudents.forEach((s, idx) => {
      const key = `${s.id}_${s.course}`;
      if (!updatedG[key] || updatedG[key].trim() === "") {
        updatedG[key] = idx === 0 ? "96" : idx === 1 ? "92" : "94";
      }
      if (!updatedA[key] || updatedA[key].trim() === "") {
        updatedA[key] = idx === 0 ? "98.4%" : idx === 1 ? "97.2%" : "99.1%";
      }
    });

    setGrades(updatedG);
    setAttendance(updatedA);
  };

  const handleSendGrades = () => {
    // 1. Calculate submitted count and average attendance
    let totalAttSum = 0;
    let attCount = 0;
    let validGradesCount = 0;
    const submittedRecords: any[] = [];

    const existingRoster = JSON.parse(localStorage.getItem("edusphere_grades_roster") || "{}");
    const currentFaculty = JSON.parse(localStorage.getItem("current_faculty") || "{}");
    const teacherName = currentFaculty.fullName || "Prof. Maria Elena Santos";

    filteredStudents.forEach(s => {
      const compoundKey = `${s.id}_${s.course}`;
      const g = grades[compoundKey] ? grades[compoundKey].trim() : "";
      const a = attendance[compoundKey] ? attendance[compoundKey].trim() : "98.4%";

      if (g) validGradesCount++;

      // Parse numerical percentage for attendance
      const numMatch = a.match(/([\d.]+)/);
      if (numMatch) {
        totalAttSum += parseFloat(numMatch[1]);
        attCount++;
      }

      const record = {
        id: s.id,
        name: s.name,
        course: s.course,
        grade: g || "95",
        attendance: a.includes("%") ? a : `${a}%`,
        teacher: teacherName,
        dispatchedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " • " + new Date().toLocaleDateString(),
        status: "Verified • Dispatched"
      };

      // Store only by compound key (studentId_course) to prevent cross-course grade bleed
      existingRoster[compoundKey] = record;

      // Course-specific aliases for Janelle (registered as LRN-2026-48910 on student portal)
      if (s.name.toLowerCase().includes("janelle")) {
        existingRoster[`LRN-2026-48910_${s.course}`] = record;
        existingRoster[`LRN-001_${s.course}`] = record;
      }

      submittedRecords.push(record);
    });

    const avgAttendanceNum = attCount > 0 ? (totalAttSum / attCount).toFixed(1) : "98.4";
    const avgAttendanceStr = `${avgAttendanceNum}%`;

    // 2. Persist updated roster and accurate attendance
    localStorage.setItem("edusphere_grades_roster", JSON.stringify(existingRoster));
    localStorage.setItem("edusphere_campus_attendance", avgAttendanceStr);

    // Save accurate Janelle / logged in student attendance
    const janelleRecord = submittedRecords.find(r => r.name.toLowerCase().includes("janelle"));
    if (janelleRecord) {
      localStorage.setItem("edusphere_student_attendance", janelleRecord.attendance);
    } else {
      localStorage.setItem("edusphere_student_attendance", avgAttendanceStr);
    }

    // 3. Update total grades count
    const totalGrades = Object.values(existingRoster).filter((r: any) => r.grade && r.course).length;
    localStorage.setItem("total_grades_sent", totalGrades.toString());

    // 4. Create and dispatch structured notification
    const newNotification = {
      id: `notif-${Date.now()}`,
      type: "grades_sent",
      title: "Official Grades & Attendance Released",
      message: `${teacherName} has sent official grades and attendance for ${courseFilter}.`,
      course: courseFilter,
      teacher: teacherName,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString(),
      unread: true,
      avgAttendance: avgAttendanceStr,
      count: validGradesCount || filteredStudents.length
    };

    // Save latest notification
    localStorage.setItem("edusphere_latest_notification", JSON.stringify(newNotification));

    // Save into notifications history list
    const existingNotifs = JSON.parse(localStorage.getItem("edusphere_notifications_list") || "[]");
    const updatedNotifs = [newNotification, ...existingNotifs.filter((n: any) => n.id !== newNotification.id)].slice(0, 15);
    localStorage.setItem("edusphere_notifications_list", JSON.stringify(updatedNotifs));

    // Trigger cross-page storage flag
    localStorage.setItem("grades_sent", Date.now().toString());

    // 5. Broadcast to any open windows / tabs using BroadcastChannel and custom DOM event
    try {
      if (typeof window !== "undefined" && "BroadcastChannel" in window) {
        const bc = new BroadcastChannel("edusphere_portal");
        bc.postMessage({ type: "GRADES_SENT", notification: newNotification });
        bc.close();
      }
    } catch (e) {
      console.warn("BroadcastChannel not supported", e);
    }

    window.dispatchEvent(new Event("storage"));
    window.dispatchEvent(new CustomEvent("edusphere_grade_dispatched", { detail: newNotification }));

    // 6. Realtime Firebase Firestore Telemetry Dispatch
    try {
      filteredStudents.forEach(s => {
        const compoundKey = `${s.id}_${s.course}`;
        const g = grades[compoundKey];
        const a = attendance[compoundKey] ?? "98.4%";
        dispatchGradeToFirebase({
          studentId: s.id,
          course: s.course,
          grade: g || "95",
          attendance: a,
          teacher: s.course === "Advanced Mathematics" ? "Prof. Maria Elena Santos" : s.course === "Physics 101" ? "Dr. Albert Ramos" : "Engr. David Tan"
        });
      });

      sendNotificationToFirebase(newNotification);
    } catch (err) {
      console.warn("Could not dispatch to Firebase:", err);
    }

    setDispatchSummary({
      count: validGradesCount || filteredStudents.length,
      avgAttendance: avgAttendanceStr,
      course: courseFilter
    });
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  /* Theme Initialization */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("edusphere_theme");
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (saved === "dark" || (!saved && prefersDark)) {
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {}
  }, []);

  const iStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "12px",
    border: "1px solid var(--border-subtle)",
    background: "var(--neu-input)",
    boxShadow: "var(--neu-shadow-input)",
    fontFamily: "'Outfit',sans-serif",
    fontSize: "0.92rem",
    color: "var(--text-title)",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  const minBtnStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    padding: "10px 22px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Outfit',sans-serif",
    fontWeight: "700",
    fontSize: "0.9rem",
    transition: "all 0.2s ease"
  };

  return (
    <div className="faculty-grades-container" style={{ background: "var(--neu-bg)", minHeight: "100vh", padding: "40px 20px", fontFamily: "'Outfit',sans-serif", color: "var(--text-body)", transition: "background 0.3s ease, color 0.3s ease" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "var(--text-muted)", fontWeight: "700", fontSize: "0.9rem", marginBottom: "30px", padding: "8px 16px", borderRadius: "20px", background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", border: "1px solid var(--border-subtle)" }}>
          <IconArrowLeft /> Back to Dashboard
        </Link>

        <div className="faculty-grades-card" style={{ background: "var(--neu-card)", borderRadius: "24px", boxShadow: "var(--neu-shadow-float)", border: "1px solid var(--border-card)", padding: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "8px" }}>
            <div>
              <h1 className="faculty-grades-title" style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-title)", margin: "0 0 6px" }}>Faculty Grade & Attendance Manager</h1>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.6" }}>
                Enter accurate final grades and verified attendance rates. Dispatching immediately notifies enrolled students and updates campus analytics.
              </p>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "14px", background: "rgba(16,185,129,0.12)", color: "#10b981", fontSize: "0.75rem", fontWeight: "700" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 6px #10b981" }} />
                {isFirebaseConfigured() ? "Firebase Realtime: Active" : "Telemetry: Ready (Synced)"}
              </div>

              <button
                type="button"
                onClick={handleQuickFill}
                style={{
                  ...minBtnStyle,
                  background: "var(--neu-surface)",
                  color: "#8b5cf6",
                  boxShadow: "var(--neu-shadow-small)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.82rem",
                  padding: "8px 16px"
                }}
              >
                <IconSparkles /> Auto-fill Defaults
              </button>
            </div>
          </div>

          {/* Course Filter Bar */}
          <div className="faculty-filter-bar" style={{ display: "flex", alignItems: "center", gap: "12px", margin: "24px 0 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#8b5cf6", fontWeight: "700" }}>
              <IconFilter /> Filter by Course:
            </div>
            <select 
              value={courseFilter} 
              onChange={e => setCourseFilter(e.target.value)}
              className="faculty-filter-select"
              style={{ ...iStyle, width: "auto", minWidth: "240px", cursor: "pointer", fontWeight: "600" }}
            >
              <option value="Advanced Mathematics">Advanced Mathematics</option>
              <option value="Physics 101">Physics 101</option>
              <option value="Computer Science II">Computer Science II</option>
            </select>
          </div>

          {/* Roster Table */}
          <div style={{ background: "var(--neu-surface-pressed)", borderRadius: "16px", boxShadow: "var(--neu-shadow-pressed)", border: "1px solid var(--border-subtle)", padding: "16px" }}>
            <div className="faculty-roster-header" style={{ display: "grid", gridTemplateColumns: "1.1fr 1.8fr 1.2fr 1.1fr 0.9fr", gap: "10px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "12px", marginBottom: "12px", fontWeight: "800", color: "var(--text-title)", fontSize: "0.82rem" }}>
              <div>Student ID</div>
              <div>Student Name</div>
              <div style={{ textAlign: "center" }}>Attendance Rate</div>
              <div style={{ textAlign: "center" }}>Final Grade</div>
              <div style={{ textAlign: "center" }}>Status</div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {filteredStudents.length > 0 ? filteredStudents.map(s => {
                const compoundKey = `${s.id}_${s.course}`;
                const hasGrade = !!(grades[compoundKey] && grades[compoundKey].trim());

                return (
                  <div key={compoundKey} className="faculty-roster-row" style={{ display: "grid", gridTemplateColumns: "1.1fr 1.8fr 1.2fr 1.1fr 0.9fr", gap: "10px", alignItems: "center" }}>
                    <div className="faculty-roster-row-header">
                      <div>
                        <div style={{ fontSize: "0.88rem", fontWeight: "700", color: "var(--text-body)" }}>
                          {s.name}
                          {s.name.includes("Janelle") && (
                            <span style={{ marginLeft: "6px", fontSize: "0.68rem", background: "rgba(59,130,246,0.12)", color: "#2563eb", padding: "2px 6px", borderRadius: "8px", fontWeight: "700" }}>Demo</span>
                          )}
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: "700", marginTop: "2px" }}>{s.id}</div>
                      </div>
                      <span className="faculty-input-label-mobile" style={{
                        fontSize: "0.72rem",
                        fontWeight: "700",
                        padding: "3px 8px",
                        borderRadius: "12px",
                        background: hasGrade ? "rgba(16,185,129,0.15)" : "rgba(148,163,184,0.15)",
                        color: hasGrade ? "#059669" : "#64748b"
                      }}>
                        {hasGrade ? "Ready" : "Pending"}
                      </span>
                    </div>

                    <div className="faculty-inputs-grid">
                      <div className="faculty-input-group">
                        <label className="faculty-input-label-mobile">Attendance</label>
                        <input 
                          type="text" 
                          placeholder="e.g. 98.4%" 
                          value={attendance[compoundKey] ?? "98.4%"}
                          onChange={e => handleAttendanceChange(s.id, s.course, e.target.value)}
                          style={{ ...iStyle, padding: "8px 12px", textAlign: "center", fontWeight: "700", color: "#0284c7" }}
                        />
                      </div>
                      <div className="faculty-input-group">
                        <label className="faculty-input-label-mobile">Final Grade</label>
                        <input 
                          type="text" 
                          placeholder="e.g. 95 or A" 
                          value={grades[compoundKey] || ""}
                          onChange={e => handleGradeChange(s.id, s.course, e.target.value)}
                          style={{ ...iStyle, padding: "8px 12px", textAlign: "center", fontWeight: "700", color: "#10b981" }}
                        />
                      </div>
                    </div>

                    <div className="nav-links-desktop" style={{ textAlign: "center" }}>
                      <span style={{
                        fontSize: "0.72rem",
                        fontWeight: "700",
                        padding: "4px 8px",
                        borderRadius: "12px",
                        background: hasGrade ? "rgba(16,185,129,0.15)" : "rgba(148,163,184,0.15)",
                        color: hasGrade ? "#059669" : "#64748b"
                      }}>
                        {hasGrade ? "Ready" : "Pending"}
                      </span>
                    </div>
                  </div>
                );
              }) : (
                <div style={{ textAlign: "center", padding: "20px", color: "#64748b", fontSize: "0.9rem" }}>
                  No students found for this course.
                </div>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div style={{ marginTop: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: "600" }}>
              💡 Dispatching syncs live attendance & grades to students and broadcasts an immediate alert.
            </div>

            <button
              type="button"
              onClick={handleSendGrades}
              style={{
                ...minBtnStyle,
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "white",
                boxShadow: "4px 4px 12px rgba(16,185,129,0.35)",
                padding: "12px 26px",
                fontSize: "0.94rem"
              }}
            >
              <IconCheck /> Dispatch Grades & Attendance
            </button>
          </div>
        </div>

        {/* Feature 4: Faculty Announcement Broadcast Tool */}
        <div style={{ marginTop: "28px", background: "var(--neu-card)", borderRadius: "24px", boxShadow: "var(--neu-shadow-float)", border: "1px solid var(--border-card)", padding: "30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
              📢
            </div>
            <div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--text-title)", margin: 0 }}>
                Broadcast Campus Announcement
              </h2>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>
                Send real-time alerts directly to all students' notifications bell & popups via Firebase Firestore.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "18px" }}>
            <input
              type="text"
              placeholder="Announcement Subject (e.g. Science Fair Submission Deadline Extended)"
              value={announcementTitle}
              onChange={e => setAnnouncementTitle(e.target.value)}
              style={iStyle}
            />
            <textarea
              placeholder="Write the full message or classroom advisory for students..."
              value={announcementMsg}
              onChange={e => setAnnouncementMsg(e.target.value)}
              rows={3}
              style={{ ...iStyle, resize: "vertical" }}
            />
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px" }}>
              {announcementSent && (
                <span style={{ color: "#10b981", fontWeight: "700", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <IconCheck /> Announcement broadcasted to campus!
                </span>
              )}
              <button
                type="button"
                onClick={async () => {
                  if (!announcementTitle.trim() || !announcementMsg.trim()) {
                    alert("Please enter both a title and message.");
                    return;
                  }
                  const currentFaculty = JSON.parse(localStorage.getItem("current_faculty") || "{}");
                  const teacherName = currentFaculty.fullName || "Verified Faculty";
                  const notifPayload = {
                    title: `📢 ${announcementTitle.trim()}`,
                    message: announcementMsg.trim(),
                    course: courseFilter,
                    teacher: teacherName,
                    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                    unread: true
                  };
                  await sendNotificationToFirebase(notifPayload);
                  setAnnouncementSent(true);
                  setAnnouncementTitle("");
                  setAnnouncementMsg("");
                  setTimeout(() => setAnnouncementSent(false), 5000);
                }}
                style={{
                  ...minBtnStyle,
                  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                  color: "white",
                  boxShadow: "3px 3px 10px rgba(37,99,235,0.35)",
                  padding: "10px 24px"
                }}
              >
                📢 Broadcast to Students
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Toast */}
      {submitted && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          background: "linear-gradient(135deg, #10b981, #059669)",
          color: "white",
          padding: "16px 24px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(16,185,129,0.4)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          zIndex: 9999,
          animation: "slideIn 0.3s ease-out"
        }}>
          <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: "50%", padding: "6px", display: "flex" }}>
            <IconCheck />
          </div>
          <div>
            <div style={{ fontWeight: "800", fontSize: "0.95rem", fontFamily: "'Outfit',sans-serif" }}>
              Grades & Attendance Dispatched!
            </div>
            {dispatchSummary && (
              <div style={{ fontSize: "0.78rem", opacity: 0.9, marginTop: "2px" }}>
                Sent for {dispatchSummary.course} (Avg. Attendance: {dispatchSummary.avgAttendance})
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
