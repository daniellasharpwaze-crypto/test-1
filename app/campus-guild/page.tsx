"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CAMPUS_CLUBS, CampusClub } from "@/lib/clubs-data";
import { saveClubApplicationToFirebase } from "@/lib/firebase";

function IconArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function IconSparkles({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12 2L14.4 7.2L20 8.4L16 12.8L17.2 18.4L12 15.6L6.8 18.4L8 12.8L4 8.4L9.6 7.2L12 2Z" />
    </svg>
  );
}

function IconCheck({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconClose({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function CampusAndGuildPage() {
  const [isDark, setIsDark] = useState(false);
  const [clubCategoryFilter, setClubCategoryFilter] = useState("All");
  const [clubSearchTerm, setClubSearchTerm] = useState("");
  const [joinedClubIds, setJoinedClubIds] = useState<string[]>([]);
  const [selectedClubForJoin, setSelectedClubForJoin] = useState<CampusClub | null>(null);
  const [clubJoinSuccess, setClubJoinSuccess] = useState<string | null>(null);
  const [clubJoinSubmitting, setClubJoinSubmitting] = useState(false);
  const [sDone, setSDone] = useState<any | null>(null);

  const [clubJoinForm, setClubJoinForm] = useState({
    studentName: "",
    studentEmail: "",
    gradeSection: "",
    experience: "",
    statement: ""
  });

  /* Theme Sync */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("edusphere_theme");
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const activeDark = saved === "dark" || (!saved && prefersDark);
      setIsDark(activeDark);
      if (activeDark) {
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        document.documentElement.classList.remove("dark");
      }
    } catch {}
  }, []);

  /* Hydrate student profile & joined clubs */
  useEffect(() => {
    try {
      const storedClubs = JSON.parse(localStorage.getItem("edusphere_joined_club_ids") || "[]");
      setJoinedClubIds(storedClubs);
      const student = JSON.parse(localStorage.getItem("current_student") || "null");
      if (student) {
        setSDone(student);
      }
    } catch {}
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("edusphere_theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("edusphere_theme", "light");
    }
  };

  const accentColor = "#3b82f6";
  const accentGrad = "linear-gradient(135deg, #3b82f6, #1d4ed8)";

  const minBtnStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
    transition: "all 0.2s ease",
    textDecoration: "none"
  };

  const iStyle = (): React.CSSProperties => ({
    width: "100%",
    padding: "10px 14px",
    borderRadius: "12px",
    border: "1px solid var(--border-subtle)",
    background: "var(--neu-input)",
    color: "var(--text-title)",
    fontSize: "0.85rem",
    boxShadow: "var(--neu-shadow-input)",
    outline: "none"
  });

  const filtered = CAMPUS_CLUBS.filter(club => {
    const matchesCat = clubCategoryFilter === "All" || club.category === clubCategoryFilter;
    const matchesSearch = !clubSearchTerm.trim() ||
      club.name.toLowerCase().includes(clubSearchTerm.toLowerCase()) ||
      club.desc.toLowerCase().includes(clubSearchTerm.toLowerCase()) ||
      club.president.name.toLowerCase().includes(clubSearchTerm.toLowerCase()) ||
      club.upcomingEvent.title.toLowerCase().includes(clubSearchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div data-theme={isDark ? "dark" : "light"} style={{ background: "var(--neu-bg)", minHeight: "100vh", fontFamily: "'Outfit',sans-serif", color: "var(--text-body)", overflowX: "hidden" }}>
      {/* Top Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "var(--neu-nav)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border-subtle)", padding: "0 1rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link
              href="/"
              style={{
                ...minBtnStyle,
                background: "var(--neu-surface)",
                boxShadow: "var(--neu-shadow-small)",
                padding: "8px 14px",
                color: "var(--text-title)",
                fontSize: "0.84rem"
              }}
            >
              <IconArrowLeft /> <span>Back to Campus Hub</span>
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
            <Link
              href="/feedback"
              style={{
                ...minBtnStyle,
                background: "var(--neu-surface)",
                boxShadow: "var(--neu-shadow-small)",
                color: "#3b82f6",
                padding: "8px 14px",
                fontSize: "0.82rem"
              }}
            >
              Feedback
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "36px 1rem 60px" }}>
        {/* Page Banner / Hero */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 14px", borderRadius: "30px", background: "var(--neu-surface)", boxShadow: "var(--neu-shadow-small)", fontSize: "0.72rem", fontWeight: "700", color: "#3b82f6", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
            <IconSparkles size={14} /> Official Co-Curricular & Guild Network
          </div>
          <h1 style={{ fontSize: "2.3rem", fontWeight: "800", color: "var(--text-title)", letterSpacing: "-0.8px", marginBottom: "10px", lineHeight: "1.2" }}>
            Student Organizations & Guilds Directory
          </h1>
          <p style={{ fontSize: "0.94rem", color: "var(--text-muted)", maxWidth: "660px", margin: "0 auto", lineHeight: "1.6" }}>
            Find your passion, join championship-caliber teams, connect with club presidents, and register with one click directly into your student pass.
          </p>
        </div>

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "30px" }}>
          {[
            { label: "Active Campus Guilds", val: CAMPUS_CLUBS.length.toString(), color: "#3b82f6", icon: "🏛️" },
            { label: "Your Enrolled Clubs", val: `${joinedClubIds.length} Joined`, color: "#10b981", icon: "🎖️" },
            { label: "Total Active Members", val: `${CAMPUS_CLUBS.reduce((acc, c) => acc + c.membersCount, 0)}+`, color: "#8b5cf6", icon: "👥" },
            { label: "Official Governance", val: "Verified", color: "#f59e0b", icon: "🛡️" }
          ].map(stat => (
            <div key={stat.label} style={{ background: "var(--neu-surface)", borderRadius: "18px", padding: "16px 18px", boxShadow: "var(--neu-shadow-small)", display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ fontSize: "1.8rem" }}>{stat.icon}</div>
              <div>
                <div style={{ fontSize: "1.25rem", fontWeight: "800", color: stat.color }}>{stat.val}</div>
                <div style={{ fontSize: "0.74rem", fontWeight: "700", color: "var(--text-muted)" }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Search & Category Filter Pills */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            {/* Category Pills */}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {["All", "STEM & Tech", "Leadership", "Academic & Speech", "Arts & Culture", "Community & Health", "Sports & Fitness"].map(cat => {
                const active = clubCategoryFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setClubCategoryFilter(cat)}
                    style={{
                      ...minBtnStyle,
                      padding: "7px 15px",
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      background: active ? accentGrad : "var(--neu-surface)",
                      color: active ? "white" : "var(--text-muted)",
                      boxShadow: active ? `3px 3px 8px ${accentColor}44` : "var(--neu-shadow-small)",
                      transition: "all 0.2s ease"
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div style={{ position: "relative", minWidth: "260px", flex: "1 1 auto", maxWidth: "340px" }}>
              <input
                type="text"
                placeholder="Search clubs, adviser, or events..."
                value={clubSearchTerm}
                onChange={e => setClubSearchTerm(e.target.value)}
                style={{
                  ...iStyle(),
                  padding: "9px 14px 9px 36px",
                  fontSize: "0.84rem",
                  borderRadius: "14px",
                  width: "100%"
                }}
              />
              <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                🔍
              </span>
              {clubSearchTerm && (
                <button
                  type="button"
                  onClick={() => setClubSearchTerm("")}
                  style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: "0.8rem" }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Clubs Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "50px 20px", background: "var(--neu-surface)", borderRadius: "20px", boxShadow: "var(--neu-shadow-small)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🔍</div>
            <h3 style={{ fontSize: "1.15rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "4px" }}>No organizations found</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Try searching for another keyword or selecting "All" categories.</p>
            <button
              type="button"
              onClick={() => { setClubCategoryFilter("All"); setClubSearchTerm(""); }}
              style={{ ...minBtnStyle, background: accentGrad, color: "white", marginTop: "14px", padding: "8px 18px", fontSize: "0.82rem" }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "22px" }}>
            {filtered.map(club => {
              const isJoined = joinedClubIds.includes(club.id);
              return (
                <div
                  key={club.id}
                  style={{
                    background: "var(--neu-card)",
                    borderRadius: "22px",
                    padding: "24px 22px",
                    boxShadow: "var(--neu-shadow-flat)",
                    border: "1px solid var(--border-card)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Top Bar with Icon & Category */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "14px",
                          background: "var(--neu-surface)",
                          boxShadow: "var(--neu-shadow-small)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.6rem",
                          flexShrink: 0
                        }}>
                          {club.icon}
                        </div>
                        <div>
                          <span style={{
                            fontSize: "0.68rem",
                            fontWeight: "800",
                            color: club.color,
                            textTransform: "uppercase",
                            letterSpacing: "0.6px",
                            display: "block"
                          }}>
                            {club.category}
                          </span>
                          <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--text-title)", margin: "2px 0 0", lineHeight: "1.25" }}>
                            {club.name}
                          </h3>
                        </div>
                      </div>

                      <span style={{
                        fontSize: "0.64rem",
                        fontWeight: "800",
                        padding: "3px 8px",
                        borderRadius: "10px",
                        background: "rgba(59,130,246,0.12)",
                        color: club.color,
                        border: `1px solid ${club.color}33`,
                        whiteSpace: "nowrap"
                      }}>
                        {club.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: "1.55", marginBottom: "16px" }}>
                      {club.desc}
                    </p>

                    {/* Schedule & Location Chips */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px", background: "var(--neu-surface-pressed)", padding: "10px 12px", borderRadius: "14px", border: "1px solid var(--border-subtle)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.74rem", color: "var(--text-body)" }}>
                        <span style={{ fontSize: "0.85rem" }}>🕒</span>
                        <strong>Schedule:</strong> <span>{club.meetingSchedule}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.74rem", color: "var(--text-body)" }}>
                        <span style={{ fontSize: "0.85rem" }}>📍</span>
                        <strong>Room:</strong> <span>{club.room}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.74rem", color: "var(--text-body)" }}>
                        <span style={{ fontSize: "0.85rem" }}>👥</span>
                        <strong>Active Roster:</strong> <span>{club.membersCount + (isJoined ? 1 : 0)} Enrolled Students</span>
                      </div>
                    </div>

                    {/* Upcoming Event / Activity Callout */}
                    <div style={{
                      background: "linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.06))",
                      border: "1px dashed rgba(59,130,246,0.3)",
                      borderRadius: "12px",
                      padding: "9px 12px",
                      marginBottom: "16px"
                    }}>
                      <div style={{ fontSize: "0.68rem", fontWeight: "800", color: "#3b82f6", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "2px", display: "flex", alignItems: "center", gap: "4px" }}>
                        <span>📅 Upcoming Activity</span>
                        <span style={{ color: "var(--text-muted)", fontWeight: "500" }}>• {club.upcomingEvent.date}</span>
                      </div>
                      <div style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--text-title)" }}>
                        {club.upcomingEvent.title}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "2px" }}>
                        Venue: {club.upcomingEvent.venue}
                      </div>
                    </div>

                    {/* President Contact Details */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "10px", borderTop: "1px solid var(--border-subtle)", marginBottom: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "10px",
                          background: club.color,
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "800",
                          fontSize: "0.74rem"
                        }}>
                          {club.president.avatar}
                        </div>
                        <div>
                          <div style={{ fontSize: "0.78rem", fontWeight: "800", color: "var(--text-title)" }}>
                            {club.president.name}
                          </div>
                          <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>
                            President • {club.president.grade}
                          </div>
                        </div>
                      </div>

                      <a
                        href={`mailto:${club.president.email}?subject=Inquiry regarding ${encodeURIComponent(club.name)}`}
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: "700",
                          color: club.color,
                          textDecoration: "none",
                          padding: "4px 8px",
                          borderRadius: "8px",
                          background: "var(--neu-surface)",
                          boxShadow: "var(--neu-shadow-small)"
                        }}
                        title={`Email President ${club.president.name}`}
                      >
                        ✉️ Contact
                      </a>
                    </div>
                  </div>

                  {/* Join Action Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedClubForJoin(club);
                      setClubJoinSuccess(null);
                      setClubJoinForm({
                        studentName: sDone?.fullName || "",
                        studentEmail: sDone?.email || "",
                        gradeSection: sDone?.gradeLevel ? `${sDone.gradeLevel} - ${sDone.section || ""}` : "",
                        experience: "",
                        statement: ""
                      });
                    }}
                    style={{
                      ...minBtnStyle,
                      width: "100%",
                      padding: "10px 16px",
                      fontSize: "0.84rem",
                      fontWeight: "800",
                      background: isJoined
                        ? "linear-gradient(135deg, #10b981, #059669)"
                        : accentGrad,
                      color: "white",
                      boxShadow: isJoined
                        ? "0 4px 12px rgba(16,185,129,0.3)"
                        : `3px 3px 8px ${accentColor}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      cursor: "pointer"
                    }}
                  >
                    {isJoined ? (
                      <>
                        <IconCheck size={16} /> Member Enrolled
                      </>
                    ) : (
                      <>
                        <IconSparkles size={15} /> One-Click Join Club
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Join Club Modal */}
      {selectedClubForJoin && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(15,23,42,0.72)",
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
            padding: "30px",
            maxWidth: "540px",
            width: "100%",
            position: "relative",
            maxHeight: "90vh",
            overflowY: "auto"
          }}>
            {/* Close Button */}
            <button
              type="button"
              onClick={() => { setSelectedClubForJoin(null); setClubJoinSuccess(null); }}
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
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
              aria-label="Close Join Club Modal"
            >
              <IconClose size={16} />
            </button>

            {clubJoinSuccess ? (
              <div style={{ textAlign: "center", padding: "16px 8px" }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #10b981, #059669)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  color: "white",
                  fontSize: "1.8rem"
                }}>
                  ✓
                </div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--text-title)", marginBottom: "6px" }}>
                  Membership Application Dispatched!
                </h3>
                <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", marginBottom: "16px", lineHeight: "1.5" }}>
                  Your one-click registration for <strong>{selectedClubForJoin.name}</strong> was submitted to President <strong>{selectedClubForJoin.president.name}</strong> and logged into the campus system.
                </p>
                <div style={{
                  background: "var(--neu-surface-pressed)",
                  borderRadius: "14px",
                  padding: "14px",
                  marginBottom: "20px",
                  border: "1px solid var(--border-subtle)",
                  textAlign: "left"
                }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: "600" }}>REGISTRATION CONFIRMATION CODE</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: "800", color: "#3b82f6", marginTop: "2px" }}>
                    {clubJoinSuccess}
                  </div>
                  <div style={{ fontSize: "0.74rem", color: "var(--text-body)", marginTop: "6px" }}>
                    🕒 Meeting times: <strong>{selectedClubForJoin.meetingSchedule}</strong> ({selectedClubForJoin.room})
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => { setSelectedClubForJoin(null); setClubJoinSuccess(null); }}
                  style={{
                    ...minBtnStyle,
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    color: "white",
                    padding: "10px 26px",
                    fontWeight: "800"
                  }}
                >
                  Return to Guilds
                </button>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: selectedClubForJoin.color,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    flexShrink: 0
                  }}>
                    {selectedClubForJoin.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-title)", margin: 0 }}>
                      Join {selectedClubForJoin.name}
                    </h3>
                    <p style={{ fontSize: "0.76rem", color: "var(--text-muted)", margin: "2px 0 0" }}>
                      Led by {selectedClubForJoin.president.name} • Adviser: {selectedClubForJoin.adviser}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div>
                    <label style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--text-title)", display: "block", marginBottom: "4px" }}>
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Christian Paul D. Reyes"
                      value={clubJoinForm.studentName}
                      onChange={e => setClubJoinForm(p => ({ ...p, studentName: e.target.value }))}
                      style={iStyle()}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "10px" }}>
                    <div>
                      <label style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--text-title)", display: "block", marginBottom: "4px" }}>
                        Student School Email *
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@students.edusphere.edu"
                        value={clubJoinForm.studentEmail}
                        onChange={e => setClubJoinForm(p => ({ ...p, studentEmail: e.target.value }))}
                        style={iStyle()}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--text-title)", display: "block", marginBottom: "4px" }}>
                        Grade & Section *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Grade 11 - Einstein"
                        value={clubJoinForm.gradeSection}
                        onChange={e => setClubJoinForm(p => ({ ...p, gradeSection: e.target.value }))}
                        style={iStyle()}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--text-title)", display: "block", marginBottom: "4px" }}>
                      Prior Experience / Relevant Skills (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Arduino basics, junior debate speaker, public school choir"
                      value={clubJoinForm.experience}
                      onChange={e => setClubJoinForm(p => ({ ...p, experience: e.target.value }))}
                      style={iStyle()}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--text-title)", display: "block", marginBottom: "4px" }}>
                      Why do you want to join this club? *
                    </label>
                    <textarea
                      placeholder="Tell the officers what you hope to learn and contribute to the guild..."
                      rows={3}
                      value={clubJoinForm.statement}
                      onChange={e => setClubJoinForm(p => ({ ...p, statement: e.target.value }))}
                      style={{ ...iStyle(), resize: "vertical" }}
                    />
                  </div>

                  <div style={{
                    background: "rgba(59,130,246,0.06)",
                    border: "1px solid rgba(59,130,246,0.15)",
                    borderRadius: "12px",
                    padding: "10px 12px",
                    fontSize: "0.74rem",
                    color: "var(--text-muted)",
                    lineHeight: "1.5"
                  }}>
                    ✨ <strong>Pass Integration:</strong> Upon submission, this club badge will be appended to your active student registration and digital clearance pass.
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "6px" }}>
                    <button
                      type="button"
                      onClick={() => setSelectedClubForJoin(null)}
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
                      disabled={clubJoinSubmitting}
                      onClick={async () => {
                        if (!clubJoinForm.studentName.trim() || !clubJoinForm.studentEmail.trim()) {
                          alert("Please provide your name and student email.");
                          return;
                        }
                        setClubJoinSubmitting(true);
                        const regId = `REG-${(selectedClubForJoin?.id || "CLUB").toUpperCase().substring(0, 4)}-${Math.floor(1000 + Math.random() * 9000)}`;

                        try {
                          await saveClubApplicationToFirebase({
                            regId,
                            clubId: selectedClubForJoin?.id || "general",
                            clubName: selectedClubForJoin?.name || "Campus Club",
                            ...clubJoinForm,
                            timestamp: new Date().toISOString()
                          });
                        } catch (err) {
                          console.warn("[Club Join] Application save warning:", err);
                        }

                        try {
                          const currentJoined = Array.isArray(joinedClubIds) ? joinedClubIds : [];
                          const updated = Array.from(new Set([...currentJoined, selectedClubForJoin?.id]));
                          setJoinedClubIds(updated);
                          localStorage.setItem("edusphere_joined_club_ids", JSON.stringify(updated));

                          if (sDone) {
                            const updatedInterests = Array.from(new Set([...(sDone.interests || []), selectedClubForJoin?.name]));
                            const updatedStudent = { ...sDone, interests: updatedInterests };
                            setSDone(updatedStudent);
                            localStorage.setItem("current_student", JSON.stringify(updatedStudent));
                          }
                        } catch (e) {
                          console.warn("[Club Join] Local storage update warning:", e);
                        } finally {
                          setClubJoinSubmitting(false);
                          setClubJoinSuccess(regId);
                        }
                      }}
                      style={{
                        ...minBtnStyle,
                        background: selectedClubForJoin.color ? `linear-gradient(135deg, ${selectedClubForJoin.color}, #1d4ed8)` : accentGrad,
                        color: "white",
                        boxShadow: "3px 3px 10px rgba(59,130,246,0.35)",
                        padding: "10px 22px",
                        fontWeight: "800"
                      }}
                    >
                      {clubJoinSubmitting ? "Submitting..." : "Submit One-Click Application"}
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
