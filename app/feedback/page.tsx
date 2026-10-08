"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export default function FeedbackPage() {
  const [role, setRole] = useState<"student" | "faculty">("student");
  const [form, setForm] = useState({ subject: "", message: "", category: "Academic Modules" });
  const [submitted, setSubmitted] = useState(false);
  const [feedbackList, setFeedbackList] = useState([
    {
      id: "FB-001",
      author: "LRN-2026-48910 (Grade 11 STEM)",
      category: "Academic Modules",
      subject: "Missing Advanced Physics Module 4 lecture notes",
      message: "The PDF slide download link for Chapter 4 Thermodynamics gives a 404 error when clicking from mobile phones.",
      time: "Oct 6, 2026 • 09:30 AM",
      status: "Resolved"
    },
    {
      id: "FB-002",
      author: "LRN-2026-50211 (Grade 12 ABM)",
      category: "Campus Safety",
      subject: "South Turnstile RFID Scanner latency during morning rush",
      message: "The scanner takes about 4 seconds to register each pass, creating small queues before assembly.",
      time: "Oct 7, 2026 • 07:45 AM",
      status: "In Review"
    },
    {
      id: "FB-003",
      author: "LRN-2026-44872 (Grade 10 HUMSS)",
      category: "Facilities",
      subject: "Library AC not working on 2nd floor",
      message: "The air conditioning on the second floor of the library has been down for a week. It gets really warm during afternoon study hours.",
      time: "Oct 7, 2026 • 11:15 AM",
      status: "In Review"
    }
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("edusphere_role");
    if (saved === "faculty" || saved === "admin") {
      setRole("faculty");
    } else {
      setRole("student");
    }
  }, []);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.subject || !form.message) return;
    const newEntry = {
      id: `FB-${String(feedbackList.length + 1).padStart(3, "0")}`,
      author: "You (Student)",
      category: form.category,
      subject: form.subject,
      message: form.message,
      time: "Just now",
      status: "Submitted"
    };
    setFeedbackList(prev => [newEntry, ...prev]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ subject: "", message: "", category: "Academic Modules" });
    }, 2500);
  };

  const iStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "12px",
    border: "1px solid rgba(163,177,198,0.25)",
    background: "#e0e5ec",
    boxShadow: "inset 2px 2px 5px #a3b1c6, inset -2px -2px 5px #ffffff",
    fontFamily: "'Outfit',sans-serif",
    fontSize: "0.92rem",
    color: "#1e293b",
    outline: "none",
    boxSizing: "border-box" as const,
    minHeight: "44px"
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
    fontSize: "0.88rem",
    transition: "all 0.2s ease",
    textDecoration: "none"
  };

  const isStudentRole = (role === "student");

  const statusColor = (status: string) => {
    switch (status) {
      case "Resolved": return { bg: "rgba(16,185,129,0.12)", text: "#10b981" };
      case "In Review": return { bg: "rgba(245,158,11,0.12)", text: "#f59e0b" };
      case "Submitted": return { bg: "rgba(59,130,246,0.12)", text: "#3b82f6" };
      default: return { bg: "rgba(100,116,139,0.12)", text: "#64748b" };
    }
  };

  return (
    <div style={{ background: "#e0e5ec", minHeight: "100vh", padding: "40px 20px", fontFamily: "'Outfit',sans-serif", color: "#2d3561" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        
        {/* Top Header Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "26px", flexWrap: "wrap", gap: "10px" }}>
          <Link href="/" style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#475569" }}>
            <IconArrowLeft /> Back to Portal
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: "700", color: isStudentRole ? "#3b82f6" : "#8b5cf6" }}>
              Active Mode: {isStudentRole ? "Student (Authorized)" : "Admin / Faculty (Restricted)"}
            </span>
          </div>
        </div>

        {/* RESTRICTED ACCESS SCREEN FOR ADMIN/FACULTY */}
        {!isStudentRole ? (
          <div style={{ background: "#e0e5ec", borderRadius: "24px", boxShadow: "10px 10px 22px #a3b1c6, -10px -10px 22px #ffffff", padding: "48px 32px", textAlign: "center" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(139,92,246,0.15)", color: "#8b5cf6", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <IconShield />
            </div>
            <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: "12px", background: "#e0e5ec", boxShadow: "inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff", fontSize: "0.72rem", fontWeight: "800", color: "#8b5cf6", textTransform: "uppercase", marginBottom: "12px" }}>
              Student Authorization Required
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#1e293b", margin: "0 0 10px" }}>
              Feedback Portal is for Students Only
            </h1>
            <p style={{ fontSize: "0.92rem", color: "#64748b", margin: "0 auto 26px", maxWidth: "480px", lineHeight: "1.7" }}>
              The feedback portal allows students to share their thoughts, report issues, and suggest improvements. Faculty and admins can view aggregated reports through the admin dashboard instead.
            </p>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/"
                style={{
                  ...minBtnStyle,
                  background: "#e0e5ec",
                  boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
                  color: "#475569"
                }}
              >
                Return to Dashboard
              </Link>
            </div>
          </div>
        ) : (
          /* STUDENT FEEDBACK PORTAL */
          <div>
            {/* Header Card */}
            <div style={{ background: "#e0e5ec", borderRadius: "24px", boxShadow: "10px 10px 22px #a3b1c6, -10px -10px 22px #ffffff", padding: "28px 32px", marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 14px", borderRadius: "12px", background: "#e0e5ec", boxShadow: "inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff", fontSize: "0.72rem", fontWeight: "800", color: "#3b82f6", textTransform: "uppercase", marginBottom: "8px" }}>
                    🎓 Student Feedback Portal
                  </div>
                  <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#1e293b", margin: "0 0 4px" }}>
                    Share Your Feedback
                  </h1>
                  <p style={{ fontSize: "0.86rem", color: "#64748b", margin: 0 }}>
                    Help us improve your learning experience. Your voice matters!
                  </p>
                </div>

                {/* Quick Stats */}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <div style={{ background: "#e0e5ec", borderRadius: "14px", padding: "10px 18px", boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff", textAlign: "center", minWidth: "80px" }}>
                    <div style={{ fontSize: "0.65rem", fontWeight: "700", color: "#64748b", textTransform: "uppercase" }}>Total</div>
                    <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "#3b82f6" }}>{feedbackList.length}</div>
                  </div>
                  <div style={{ background: "#e0e5ec", borderRadius: "14px", padding: "10px 18px", boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff", textAlign: "center", minWidth: "80px" }}>
                    <div style={{ fontSize: "0.65rem", fontWeight: "700", color: "#64748b", textTransform: "uppercase" }}>Pending</div>
                    <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "#f59e0b" }}>
                      {feedbackList.filter(f => f.status === "In Review" || f.status === "Submitted").length}
                    </div>
                  </div>
                  <div style={{ background: "#e0e5ec", borderRadius: "14px", padding: "10px 18px", boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff", textAlign: "center", minWidth: "80px" }}>
                    <div style={{ fontSize: "0.65rem", fontWeight: "700", color: "#64748b", textTransform: "uppercase" }}>Resolved</div>
                    <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "#10b981" }}>
                      {feedbackList.filter(f => f.status === "Resolved").length}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Two-column layout: Form + Submissions */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "start" }}>

              {/* Left Column: Submit Feedback Form */}
              <div style={{ background: "#e0e5ec", borderRadius: "20px", padding: "24px", boxShadow: "8px 8px 18px #a3b1c6, -8px -8px 18px #ffffff" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: "800", color: "#1e293b", margin: "0 0 4px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "1.1rem" }}>📝</span> Submit Feedback
                </h3>
                <p style={{ fontSize: "0.78rem", color: "#94a3b8", margin: "0 0 16px" }}>
                  All submissions are anonymous and reviewed by the school admin team.
                </p>
                <form onSubmit={handleSubmitFeedback} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div>
                    <label style={{ fontSize: "0.75rem", fontWeight: "700", color: "#64748b", display: "block", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Category</label>
                    <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} style={iStyle}>
                      <option>Academic Modules</option>
                      <option>Campus Safety</option>
                      <option>Facilities</option>
                      <option>School Events</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", fontWeight: "700", color: "#64748b", display: "block", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Subject</label>
                    <input
                      type="text"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      style={iStyle}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", fontWeight: "700", color: "#64748b", display: "block", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Message</label>
                    <textarea
                      placeholder="Tell us more details..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{ ...iStyle, minHeight: "100px", resize: "vertical" }}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      ...minBtnStyle,
                      width: "100%",
                      background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                      color: "white",
                      boxShadow: "3px 3px 10px rgba(59,130,246,0.3)",
                      padding: "12px 22px"
                    }}
                  >
                    <IconSend /> Submit Feedback
                  </button>
                </form>
              </div>

              {/* Right Column: Feedback Submissions List */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: "800", color: "#1e293b", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "1.1rem" }}>📋</span> Recent Submissions
                  </h3>
                  <span style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: "600" }}>
                    {feedbackList.length} total
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {feedbackList.map(item => {
                    const sc = statusColor(item.status);
                    return (
                      <div
                        key={item.id}
                        style={{
                          background: "#e0e5ec",
                          borderRadius: "16px",
                          padding: "16px 16px 16px 20px",
                          boxShadow: "4px 4px 10px #a3b1c6, -4px -4px 10px #ffffff",
                          borderLeft: `3px solid ${sc.text}`,
                          transition: "transform 0.15s ease",
                        }}
                      >
                        {/* Top row: category + status */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                          <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#3b82f6", background: "rgba(59,130,246,0.1)", padding: "2px 10px", borderRadius: "8px" }}>
                            {item.category}
                          </span>
                          <span style={{ fontSize: "0.7rem", fontWeight: "700", color: sc.text, background: sc.bg, padding: "2px 10px", borderRadius: "8px" }}>
                            {item.status}
                          </span>
                        </div>

                        {/* Subject */}
                        <div style={{ fontWeight: "800", fontSize: "0.9rem", color: "#1e293b", marginBottom: "4px", lineHeight: "1.3" }}>
                          {item.subject}
                        </div>

                        {/* Message */}
                        <p style={{ fontSize: "0.78rem", color: "#475569", margin: "0 0 10px", lineHeight: "1.55" }}>
                          {item.message}
                        </p>

                        {/* Footer: author + time */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(163,177,198,0.2)", paddingTop: "8px" }}>
                          <span style={{ fontSize: "0.68rem", color: "#94a3b8", fontWeight: "600" }}>
                            {item.author}
                          </span>
                          <span style={{ fontSize: "0.68rem", color: "#94a3b8" }}>
                            {item.time}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {submitted && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          background: "linear-gradient(135deg, #10b981, #059669)",
          color: "white",
          padding: "14px 22px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(16,185,129,0.4)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          zIndex: 9999,
          animation: "slideUp 0.3s ease"
        }}>
          <IconCheck />
          <div style={{ fontWeight: "700", fontSize: "0.9rem" }}>
            Feedback submitted successfully!
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
