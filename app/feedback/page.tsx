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

export default function FeedbackPage() {
  const [form, setForm] = useState({ subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.subject || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ subject: "", message: "" });
    }, 3000);
  };

  const iStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "12px",
    border: "1px solid rgba(163,177,198,0.2)",
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
    fontSize: "0.9rem",
    transition: "all 0.2s ease"
  };

  return (
    <div style={{ background: "#e0e5ec", minHeight: "100vh", padding: "40px 20px", fontFamily: "'Outfit',sans-serif", color: "#2d3561" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#475569", fontWeight: "700", fontSize: "0.9rem", marginBottom: "30px", padding: "8px 16px", borderRadius: "20px", background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff" }}>
          <IconArrowLeft /> Back to Dashboard
        </Link>

        <div style={{ background: "#e0e5ec", borderRadius: "24px", boxShadow: "10px 10px 22px #a3b1c6, -10px -10px 22px #ffffff", padding: "32px" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#1e293b", margin: "0 0 8px" }}>Student Feedback</h1>
          <p style={{ fontSize: "0.9rem", color: "#64748b", margin: "0 0 24px", lineHeight: "1.6" }}>
            We value your experience! Share your thoughts on the modules, campus safety, or anything else you'd like us to improve.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "6px" }}>Subject</label>
              <input 
                type="text" 
                placeholder="e.g. Missing Grades in Portal" 
                value={form.subject}
                onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                style={iStyle} 
                required 
              />
            </div>
            
            <div>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "6px" }}>Your Feedback</label>
              <textarea 
                placeholder="Describe your feedback here..." 
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                style={{ ...iStyle, minHeight: "140px", resize: "vertical" }} 
                required 
              />
            </div>

            <div style={{ marginTop: "10px" }}>
              <button
                type="submit"
                style={{
                  ...minBtnStyle,
                  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                  color: "white",
                  boxShadow: "4px 4px 12px rgba(59,130,246,0.3)"
                }}
              >
                Submit Feedback
              </button>
            </div>
          </form>
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
            Feedback sent successfully!
          </div>
        </div>
      )}
    </div>
  );
}
