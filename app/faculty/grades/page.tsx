"use client";

import { useState } from "react";
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

function IconFilter() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

const studentsData = [
  { id: "LRN-001", name: "Janelle Marie Gomez", course: "Advanced Mathematics" },
  { id: "LRN-002", name: "Mark Reyes", course: "Advanced Mathematics" },
  { id: "LRN-003", name: "Sophia Torres", course: "Advanced Mathematics" },
  { id: "LRN-004", name: "Liam Santos", course: "Physics 101" },
  { id: "LRN-005", name: "Emma Cruz", course: "Physics 101" },
  { id: "LRN-006", name: "Noah Bautista", course: "Computer Science II" },
  { id: "LRN-007", name: "Olivia Villanueva", course: "Computer Science II" },
];

export default function FacultyGradesPage() {
  const [courseFilter, setCourseFilter] = useState("Advanced Mathematics");
  const [grades, setGrades] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const filteredStudents = studentsData.filter(s => s.course === courseFilter);

  const handleGradeChange = (id: string, val: string) => {
    setGrades(prev => ({ ...prev, [id]: val }));
  };

  const handleSendGrades = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setGrades({});
    }, 3000);
  };

  const iStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "12px",
    border: "1px solid rgba(163,177,198,0.2)",
    background: "#e0e5ec",
    boxShadow: "inset 2px 2px 5px #a3b1c6, inset -2px -2px 5px #ffffff",
    fontFamily: "'Outfit',sans-serif",
    fontSize: "0.92rem",
    color: "#1e293b",
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
    <div style={{ background: "#e0e5ec", minHeight: "100vh", padding: "40px 20px", fontFamily: "'Outfit',sans-serif", color: "#2d3561" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#475569", fontWeight: "700", fontSize: "0.9rem", marginBottom: "30px", padding: "8px 16px", borderRadius: "20px", background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff" }}>
          <IconArrowLeft /> Back to Dashboard
        </Link>

        <div style={{ background: "#e0e5ec", borderRadius: "24px", boxShadow: "10px 10px 22px #a3b1c6, -10px -10px 22px #ffffff", padding: "32px" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#1e293b", margin: "0 0 8px" }}>Grade Management</h1>
          <p style={{ fontSize: "0.9rem", color: "#64748b", margin: "0 0 24px", lineHeight: "1.6" }}>
            Select a course to view enrolled students and securely issue their grades.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#8b5cf6", fontWeight: "700" }}>
              <IconFilter /> Filter by Course:
            </div>
            <select 
              value={courseFilter} 
              onChange={e => setCourseFilter(e.target.value)}
              style={{ ...iStyle, width: "auto", minWidth: "220px", cursor: "pointer" }}
            >
              <option value="Advanced Mathematics">Advanced Mathematics</option>
              <option value="Physics 101">Physics 101</option>
              <option value="Computer Science II">Computer Science II</option>
            </select>
          </div>

          <div style={{ background: "#e0e5ec", borderRadius: "16px", boxShadow: "inset 4px 4px 10px #a3b1c6, inset -4px -4px 10px #ffffff", padding: "20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "10px", borderBottom: "1px solid rgba(163,177,198,0.3)", paddingBottom: "10px", marginBottom: "10px", fontWeight: "800", color: "#1e293b", fontSize: "0.85rem" }}>
              <div>Student ID</div>
              <div>Name</div>
              <div>Final Grade</div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {filteredStudents.length > 0 ? filteredStudents.map(s => (
                <div key={s.id} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "10px", alignItems: "center" }}>
                  <div style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: "600" }}>{s.id}</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#334155" }}>{s.name}</div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="e.g. 95 or A" 
                      value={grades[s.id] || ""}
                      onChange={e => handleGradeChange(s.id, e.target.value)}
                      style={{ ...iStyle, padding: "8px 12px", textAlign: "center" }}
                    />
                  </div>
                </div>
              )) : (
                <div style={{ textAlign: "center", padding: "20px", color: "#64748b", fontSize: "0.9rem" }}>
                  No students found for this course.
                </div>
              )}
            </div>
          </div>

          <div style={{ marginTop: "30px", display: "flex", justifyContent: "flex-end" }}>
            <button
              type="button"
              onClick={handleSendGrades}
              style={{
                ...minBtnStyle,
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "white",
                boxShadow: "4px 4px 12px rgba(16,185,129,0.3)"
              }}
            >
              <IconCheck /> Dispatch Grades to Portal
            </button>
          </div>
        </div>
      </div>

      {submitted && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          background: "#10b981",
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
          <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: "50%", padding: "4px" }}>
            <IconCheck />
          </div>
          <div style={{ fontWeight: "700", fontSize: "0.95rem", fontFamily: "'Outfit',sans-serif" }}>
            Grades have been sent successfully!
          </div>
        </div>
      )}
    </div>
  );
}
