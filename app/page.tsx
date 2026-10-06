"use client";

import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";

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

/* ===== ANIMATED COUNTER ===== */
function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let n = 0;
        const step = Math.max(1, Math.floor(end / 60));
        const t = setInterval(() => {
          n += step;
          if (n >= end) {
            setCount(end);
            clearInterval(t);
          } else {
            setCount(n);
          }
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
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
const NEO_FLAT = { background: "#e0e5ec", boxShadow: "6px 6px 14px #a3b1c6, -6px -6px 14px #ffffff" };
const NEO_PRESSED = { background: "#e0e5ec", boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff" };

const iStyle = (err = false): React.CSSProperties => ({
  width: "100%",
  padding: "12px 14px",
  borderRadius: "12px",
  border: err ? "2px solid #ef4444" : "1px solid rgba(163,177,198,0.2)",
  background: "#e0e5ec",
  boxShadow: "inset 2px 2px 5px #a3b1c6, inset -2px -2px 5px #ffffff",
  fontFamily: "'Outfit',sans-serif",
  fontSize: "0.92rem",
  color: "#1e293b",
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
  const [activeTab, setActiveTab] = useState<"student" | "faculty">("student");
  const [rolePopupOpen, setRolePopupOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [gradeSentPopup, setGradeSentPopup] = useState(false);

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

  const [legal, setLegal] = useState<{ open: boolean; tab: "privacy" | "safety" | "conduct" }>({
    open: false,
    tab: "privacy"
  });

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
      setSDone({
        passId: `STU-PASS-${Math.floor(100000 + Math.random() * 900000)}`,
        ...sForm,
        section: sForm.section || "Archimedes - Room 204",
        issuedAt: new Date().toLocaleString()
      });
      setSStep(5);
    }, 1000);
  };

  const resetS = () => {
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
      setFDone({
        credentialId: `FAC-AUTH-${Math.floor(100000 + Math.random() * 900000)}`,
        ...fForm,
        roomOffice: fForm.roomOffice || "Executive Admin Wing, Rm 101",
        issuedAt: new Date().toLocaleString()
      });
      setFStep(4);
    }, 1000);
  };

  const resetF = () => {
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
    <div style={{ background: "#e0e5ec", minHeight: "100vh", fontFamily: "'Outfit',sans-serif", color: "#2d3561", overflowX: "hidden" }}>

      {/* ===== STICKY MINIMAL NAVBAR ===== */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(224,229,236,0.92)", backdropFilter: "blur(16px)", boxShadow: "0 2px 14px rgba(163,177,198,0.35)", padding: "0 1rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px" }}>
          
          {/* Brand */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", flexShrink: 0 }}>
              <IconGraduationCap size={18} />
            </div>
            <div>
              <span style={{ fontWeight: "800", fontSize: "1.1rem", color: "#1e293b", letterSpacing: "-0.4px" }}>Edu<span style={{ color: "#3b82f6" }}>Sphere</span></span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="nav-links-desktop" style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {[{ label: "Modules", href: "/#modules" }, { label: "Campus Safety", href: "/#safety" }, { label: "Testimonials", href: "/#testimonials" }, { label: "Feedback", href: "/feedback" }].map(n => (
              <a key={n.label} href={n.href} style={{ padding: "6px 12px", borderRadius: "16px", textDecoration: "none", color: "#475569", fontWeight: "600", fontSize: "0.82rem", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#e0e5ec"; (e.currentTarget as HTMLElement).style.boxShadow = "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                {n.label}
              </a>
            ))}
          </div>

          {/* THE ONE POPUP BUTTON (MINIMAL) */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                background: "#e0e5ec",
                boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
                color: "#475569",
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
        <div style={{ position: "fixed", inset: 0, top: "60px", zIndex: 99, background: "rgba(224,229,236,0.97)", backdropFilter: "blur(16px)", display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 20px", gap: "12px" }}>
          {[{ label: "Academic Modules", href: "#modules" }, { label: "Campus Safety", href: "#safety" }, { label: "School Community", href: "#testimonials" }].map(item => (
            <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} style={{ width: "100%", maxWidth: "280px", textAlign: "center", padding: "12px", borderRadius: "14px", textDecoration: "none", color: "#1e293b", fontWeight: "700", fontSize: "0.92rem", background: "#e0e5ec", boxShadow: "3px 3px 7px #a3b1c6, -3px -3px 7px #ffffff" }}>
              {item.label}
            </a>
          ))}
          <div style={{ marginTop: "12px", width: "100%", maxWidth: "280px" }}>
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
              background: "#e0e5ec",
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
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#1e293b", margin: 0 }}>Select Campus Role</h3>
                  <p style={{ fontSize: "0.74rem", color: "#64748b", margin: "2px 0 0" }}>Choose your registration and portal access track</p>
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
                  background: "#e0e5ec",
                  boxShadow: "2px 2px 5px #a3b1c6, -2px -2px 5px #ffffff",
                  color: "#64748b",
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
                  background: "#e0e5ec",
                  boxShadow: activeTab === "student"
                    ? "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff, 0 0 14px rgba(59,130,246,0.2)"
                    : "4px 4px 10px #a3b1c6, -4px -4px 10px #ffffff",
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
                    <div style={{ fontWeight: "800", fontSize: "0.98rem", color: "#1e293b" }}>Student Portal</div>
                    {activeTab === "student" && <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#3b82f6", background: "rgba(59,130,246,0.12)", padding: "2px 7px", borderRadius: "10px" }}>Selected</span>}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#64748b", marginTop: "3px", lineHeight: "1.4" }}>
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
                  background: "#e0e5ec",
                  boxShadow: activeTab === "faculty"
                    ? "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff, 0 0 14px rgba(139,92,246,0.2)"
                    : "4px 4px 10px #a3b1c6, -4px -4px 10px #ffffff",
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
                    <div style={{ fontWeight: "800", fontSize: "0.98rem", color: "#1e293b" }}>Faculty & Principal</div>
                    {activeTab === "faculty" && <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#8b5cf6", background: "rgba(139,92,246,0.12)", padding: "2px 7px", borderRadius: "10px" }}>Selected</span>}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#64748b", marginTop: "3px", lineHeight: "1.4" }}>
                    Educator onboarding, classroom assignment, gradebook & safety audit
                  </div>
                </div>
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="button"
                onClick={() => setRolePopupOpen(false)}
                style={{
                  ...minBtnStyle,
                  background: "#e0e5ec",
                  boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
                  color: "#64748b",
                  fontSize: "0.82rem",
                  padding: "7px 20px"
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
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "30px", background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", fontSize: "0.7rem", fontWeight: "700", color: "#3b82f6", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                <IconSparkles size={14} /> Official Campus Academic Network
              </div>

              <h1 className="hero-h1" style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1e293b", lineHeight: "1.16", letterSpacing: "-1px", marginBottom: "14px" }}>
                Unified Academic Access for <span style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Students, Teachers & Principals</span>.
              </h1>

              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.7", marginBottom: "24px", maxWidth: "500px" }}>
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
                    background: "#e0e5ec",
                    boxShadow: "3px 3px 8px #a3b1c6, -3px -3px 8px #ffffff",
                    color: "#475569",
                    fontSize: "0.9rem"
                  }}
                >
                  Explore Modules ↓
                </a>
              </div>

              {/* Trust Badges */}
              <div style={{ display: "flex", gap: "14px", marginTop: "20px", flexWrap: "wrap" }}>
                {["100% FERPA Protected", "Instant Digital Pass Issuance"].map((b, idx) => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.76rem", fontWeight: "600", color: "#475569" }}>
                    <span style={{ color: idx === 0 ? "#10b981" : "#3b82f6" }}><IconCheck size={14} /></span>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="hero-card" style={{ background: "#e0e5ec", borderRadius: "22px", boxShadow: "10px 10px 22px #a3b1c6, -10px -10px 22px #ffffff", padding: "22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 6px #10b981" }} />
                  <span style={{ fontSize: "0.74rem", fontWeight: "700", color: "#1e293b" }}>CAMPUS STATUS: LIVE</span>
                </div>
                <span style={{ fontSize: "0.68rem", fontWeight: "700", color: "#3b82f6", padding: "2px 8px", borderRadius: "12px", ...NEO_PRESSED }}>AY 2026-2027</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px" }}>
                {[{ icon: <IconBookOpen size={16} />, label: "Attendance", val: "98.4%", color: "#3b82f6" }, { icon: <IconBuilding size={16} />, label: "Classrooms", val: "48/48", color: "#8b5cf6" }].map(s => (
                  <div key={s.label} style={{ ...NEO_PRESSED, padding: "12px", borderRadius: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", color: s.color, marginBottom: "2px" }}>
                      {s.icon}
                      <span style={{ fontSize: "0.7rem", fontWeight: "700" }}>{s.label}</span>
                    </div>
                    <div style={{ fontSize: "1.25rem", fontWeight: "800", color: "#1e293b" }}>{s.val}</div>
                  </div>
                ))}
              </div>

              {/* Goal Conversion Tracker Preview in Card */}
              <div style={{ ...NEO_FLAT, borderRadius: "14px", padding: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.74rem", fontWeight: "700", color: "#1e293b" }}>🎯 Active Goal Conversion</span>
                  <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#10b981" }}>99.2% Issued</span>
                </div>
                <div style={{ height: "6px", borderRadius: "4px", background: "#d1d9e6", overflow: "hidden", marginBottom: "10px" }}>
                  <div style={{ height: "100%", width: "94%", background: "linear-gradient(90deg, #3b82f6, #10b981)", borderRadius: "4px" }} />
                </div>
                <div style={{ fontSize: "0.72rem", color: "#64748b", lineHeight: "1.4" }}>
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
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px", background: "#e0e5ec", borderRadius: "20px", boxShadow: "8px 8px 18px #a3b1c6, -8px -8px 18px #ffffff", padding: "18px 14px", textAlign: "center" }}>
            {[{ end: 15400, suffix: "+", label: "Enrolled Students", sub: "Active accounts", color: "#3b82f6" }, { end: 640, suffix: "+", label: "Verified Faculty", sub: "Teachers & Principals", color: "#10b981" }, { end: 48, suffix: "", label: "Active Classrooms", sub: "Synchronized", color: "#8b5cf6" }, { end: 100, suffix: "%", label: "Goal Conversion", sub: "Instant digital pass", color: "#f59e0b" }].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: "1.75rem", fontWeight: "800", color: s.color, lineHeight: "1.1" }}>
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: "0.78rem", fontWeight: "700", color: "#1e293b", marginTop: "3px" }}>{s.label}</div>
                <div style={{ fontSize: "0.68rem", color: "#64748b" }}>{s.sub}</div>
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
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 14px", borderRadius: "30px", background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", fontSize: "0.7rem", fontWeight: "700", color: "#3b82f6", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>
              <IconTarget /> Campus Onboarding Hub
            </div>
            
            <h2 className="reg-h2" style={{ fontSize: "2rem", fontWeight: "800", color: "#1e293b", letterSpacing: "-0.8px", marginBottom: "8px" }}>
              Multi-Step Pass Registration
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#64748b", maxWidth: "480px", margin: "0 auto 18px", lineHeight: "1.6" }}>
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
          <div className="form-container" style={{ background: "#e0e5ec", borderRadius: "22px", boxShadow: "10px 10px 24px #a3b1c6, -10px -10px 24px #ffffff", padding: "28px 24px" }}>

            {/* ===== GOAL CONVERSION TRACKER BANNER ===== */}
            <div style={{ ...NEO_PRESSED, borderRadius: "16px", padding: "14px 18px", marginBottom: "22px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px", flexWrap: "wrap", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ color: accentColor }}><IconTarget /></div>
                  <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "#1e293b" }}>{goalTitle}</span>
                </div>
                <span style={{ fontSize: "0.74rem", fontWeight: "800", color: isSuccess ? "#10b981" : accentColor }}>
                  {isSuccess ? "100% GOAL CONVERTED!" : `${goalPercentage}% Converted (Step ${currentStep} of ${totalSteps})`}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div style={{ height: "7px", borderRadius: "4px", background: "#d1d9e6", overflow: "hidden" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${goalPercentage}%`,
                    background: isSuccess ? "linear-gradient(90deg, #10b981, #059669)" : accentGrad,
                    borderRadius: "4px",
                    transition: "width 0.4s ease"
                  }}
                />
              </div>
            </div>

            {/* Multi-Step Wizard Indicator */}
            {!isSuccess && (
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
                              : "#e0e5ec",
                            color: isDone || isActive ? "white" : "#94a3b8",
                            boxShadow: isDone || isActive
                              ? "2px 2px 6px rgba(0,0,0,0.15)"
                              : "inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff",
                            transition: "all 0.3s"
                          }}
                        >
                          {isDone ? <IconCheck size={13} /> : num}
                        </div>
                        <span style={{ fontSize: "0.72rem", fontWeight: "700", color: isActive ? "#1e293b" : "#94a3b8", whiteSpace: "nowrap" }}>
                          {s.label}
                        </span>
                      </div>
                      {idx < currentSteps.length - 1 && (
                        <div style={{ flex: 1, height: "2px", borderRadius: "2px", background: isDone ? "#10b981" : "#d1d9e6", minWidth: "6px" }} />
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* ===== STUDENT WIZARD PAGES ===== */}
            {isStudent && (
              <>
                {/* Step 1: Identification */}
                {sStep === 1 && (
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "8px" }}>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e293b", margin: 0 }}>Student Identification</h3>
                        <p style={{ fontSize: "0.78rem", color: "#64748b", margin: "2px 0 0" }}>Milestone 1: Verify your LRN and official grade level</p>
                      </div>
                      <button
                        type="button"
                        onClick={demoS}
                        style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#3b82f6", fontSize: "0.78rem", padding: "6px 12px" }}
                      >
                        <IconSparkles size={13} /> Auto Demo
                      </button>
                    </div>

                    <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                      <div style={{ gridColumn: "span 2" }}>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Full Official Name *</label>
                        <input type="text" value={sForm.fullName} onChange={e => chS("fullName", e.target.value)} placeholder="e.g. Janelle Marie Gomez" style={iStyle(!!sErr.fullName)} />
                        {sErr.fullName && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.fullName}</span>}
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Student ID / LRN *</label>
                        <input type="text" value={sForm.studentId} onChange={e => chS("studentId", e.target.value)} placeholder="e.g. LRN-2026-48910" style={iStyle(!!sErr.studentId)} />
                        {sErr.studentId && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.studentId}</span>}
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Student Email *</label>
                        <input type="email" value={sForm.email} onChange={e => chS("email", e.target.value)} placeholder="student@edusphere.edu" style={iStyle(!!sErr.email)} />
                        {sErr.email && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.email}</span>}
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Grade Level</label>
                        <select value={sForm.gradeLevel} onChange={e => chS("gradeLevel", e.target.value)} style={iStyle()}>
                          {["Grade 7 - Junior High", "Grade 8 - Junior High", "Grade 9 - Junior High", "Grade 10 - Junior High", "Grade 11 - Senior High", "Grade 12 - Senior High", "Undergraduate - 1st Year", "Undergraduate - 2nd Year", "Undergraduate - 3rd Year", "Undergraduate - 4th Year"].map(g => (
                            <option key={g}>{g}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Academic Strand / Track</label>
                        <select value={sForm.strand} onChange={e => chS("strand", e.target.value)} style={iStyle()}>
                          {["STEM (Science, Tech, Eng & Math)", "ABM (Accountancy & Business)", "HUMSS (Humanities & Social Sci)", "TVL / ICT & Computer Science", "GAS (General Academic Strand)", "Arts & Design Track"].map(s => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div style={{ gridColumn: "span 2" }}>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Section / Advisory Room</label>
                        <input type="text" value={sForm.section} onChange={e => chS("section", e.target.value)} placeholder="e.g. Archimedes / St. Jude / Section 1" style={iStyle()} />
                      </div>
                    </div>

                    {/* Minimal Nav Buttons */}
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px" }}>
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
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e293b", margin: "0 0 4px" }}>Parent & Guardian Contact</h3>
                    <p style={{ fontSize: "0.78rem", color: "#64748b", margin: "0 0 16px" }}>Milestone 2: Campus safety & emergency gate notification</p>

                    <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                      <div style={{ gridColumn: "span 2" }}>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Parent / Guardian Full Name *</label>
                        <input type="text" value={sForm.guardianName} onChange={e => chS("guardianName", e.target.value)} placeholder="e.g. Maria Corazon Gomez (Mother)" style={iStyle(!!sErr.guardianName)} />
                        {sErr.guardianName && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.guardianName}</span>}
                      </div>

                      <div style={{ gridColumn: "span 2" }}>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Emergency Mobile Number *</label>
                        <input type="tel" value={sForm.guardianPhone} onChange={e => chS("guardianPhone", e.target.value)} placeholder="e.g. +63 (917) 845-2901" style={iStyle(!!sErr.guardianPhone)} />
                        {sErr.guardianPhone && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.guardianPhone}</span>}
                      </div>
                    </div>

                    <div style={{ marginTop: "14px", padding: "12px", borderRadius: "12px", background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}>
                      <p style={{ fontSize: "0.78rem", color: "#475569", margin: 0, lineHeight: "1.5" }}>
                        🛡️ <strong>Safety Guarantee:</strong> Emergency contacts are FERPA-encrypted and notified only on campus entrance or medical triage.
                      </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
                      <button type="button" onClick={prevS} style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#64748b" }}>
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
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e293b", margin: "0 0 4px" }}>Co-Curricular Clubs & Guilds</h3>
                    <p style={{ fontSize: "0.78rem", color: "#64748b", margin: "0 0 16px" }}>Milestone 3: Select student activities to be printed on your digital pass</p>

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
                              background: sel ? accentGrad : "#e0e5ec",
                              color: sel ? "white" : "#475569",
                              boxShadow: sel ? "inset 2px 2px 4px rgba(0,0,0,0.2)" : "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff"
                            }}
                          >
                            {sel ? "✓ " : "+ "}{item}
                          </button>
                        );
                      })}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
                      <button type="button" onClick={prevS} style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#64748b" }}>
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
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e293b", margin: "0 0 4px" }}>Portal Security & Policy</h3>
                    <p style={{ fontSize: "0.78rem", color: "#64748b", margin: "0 0 16px" }}>Final Milestone: Create your access password and confirm safety terms</p>

                    <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Create Password *</label>
                        <div style={{ position: "relative" }}>
                          <input type={showSPwd ? "text" : "password"} value={sForm.password} onChange={e => chS("password", e.target.value)} placeholder="Min. 6 chars" style={{ ...iStyle(!!sErr.password), paddingRight: "38px" }} />
                          <button type="button" onClick={() => setShowSPwd(p => !p)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#64748b" }}>
                            {showSPwd ? <IconEyeOff /> : <IconEye />}
                          </button>
                        </div>
                        {sErr.password && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.password}</span>}
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Confirm Password *</label>
                        <input type={showSPwd ? "text" : "password"} value={sForm.confirmPassword} onChange={e => chS("confirmPassword", e.target.value)} placeholder="Re-enter password" style={iStyle(!!sErr.confirmPassword)} />
                        {sErr.confirmPassword && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{sErr.confirmPassword}</span>}
                      </div>
                    </div>

                    <div style={{ ...NEO_PRESSED, borderRadius: "12px", padding: "12px 14px" }}>
                      <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer" }}>
                        <input type="checkbox" checked={sForm.agreeTerms} onChange={e => chS("agreeTerms", e.target.checked)} style={{ marginTop: "3px", width: "16px", height: "16px", accentColor: "#3b82f6", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.8rem", color: "#334155", lineHeight: "1.5" }}>
                          I accept the <strong>Student Code of Honor</strong> and the{" "}
                          <button type="button" onClick={e => { e.preventDefault(); setLegal({ open: true, tab: "privacy" }); }} style={{ background: "none", border: "none", padding: 0, color: "#3b82f6", fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}>FERPA Data Shield</button> &{" "}
                          <button type="button" onClick={e => { e.preventDefault(); setLegal({ open: true, tab: "safety" }); }} style={{ background: "none", border: "none", padding: 0, color: "#10b981", fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}>Anti-Bullying Charter</button>.
                        </span>
                      </label>
                      {sErr.agreeTerms && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "4px", display: "block" }}>{sErr.agreeTerms}</span>}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
                      <button type="button" onClick={prevS} style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#64748b" }}>
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

                    <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#1e293b", marginBottom: "6px" }}>
                      Welcome, {sDone.fullName}! 🎓
                    </h3>
                    <p style={{ fontSize: "0.86rem", color: "#64748b", maxWidth: "440px", margin: "0 auto 18px", lineHeight: "1.6" }}>
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
                          <div style={{ fontSize: "0.86rem", fontWeight: "800", color: "#1e293b" }}>{card.val}</div>
                          <div style={{ fontSize: "0.72rem", color: "#64748b", marginTop: "2px" }}>{card.sub}</div>
                        </div>
                      ))}
                    </div>

                    {/* Minimal Action Buttons */}
                    <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
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
                        style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#1e293b" }}
                      >
                        <IconCopy /> {copiedPass ? "Copied!" : "Copy Pass ID"}
                      </button>
                      <button
                        type="button"
                        onClick={resetS}
                        style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#64748b" }}
                      >
                        <IconRotate /> Reset
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ===== FACULTY WIZARD PAGES ===== */}
            {!isStudent && (
              <>
                {/* Step 1: Faculty Profile */}
                {fStep === 1 && (
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "8px" }}>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e293b", margin: 0 }}>Faculty Profile</h3>
                        <p style={{ fontSize: "0.78rem", color: "#64748b", margin: "2px 0 0" }}>Milestone 1: Verify your educator credentials and school post</p>
                      </div>
                      <button
                        type="button"
                        onClick={demoF}
                        style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#8b5cf6", fontSize: "0.78rem", padding: "6px 12px" }}
                      >
                        <IconSparkles size={13} /> Auto Demo
                      </button>
                    </div>

                    <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                      <div style={{ gridColumn: "span 2" }}>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Official Name & Title *</label>
                        <input type="text" value={fForm.fullName} onChange={e => chF("fullName", e.target.value)} placeholder="e.g. Dr. Roberto M. Reyes, Ph.D." style={iStyle(!!fErr.fullName)} />
                        {fErr.fullName && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.fullName}</span>}
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Institutional Role *</label>
                        <select value={fForm.role} onChange={e => chF("role", e.target.value)} style={iStyle()}>
                          {["Teacher / Faculty Instructor", "Department Head / Subject Chair", "Principal / Head of School", "Vice Principal / Assistant Principal", "Guidance Counselor", "School Registrar / Academic Admin"].map(r => (
                            <option key={r}>{r}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Faculty / Employee ID *</label>
                        <input type="text" value={fForm.facultyId} onChange={e => chF("facultyId", e.target.value)} placeholder="e.g. FAC-2026-0419" style={iStyle(!!fErr.facultyId)} />
                        {fErr.facultyId && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.facultyId}</span>}
                      </div>

                      <div style={{ gridColumn: "span 2" }}>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>School / Campus Name *</label>
                        <input type="text" value={fForm.institution} onChange={e => chF("institution", e.target.value)} placeholder="e.g. Metropolitan Academic Science Institute" style={iStyle(!!fErr.institution)} />
                        {fErr.institution && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.institution}</span>}
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Department</label>
                        <select value={fForm.department} onChange={e => chF("department", e.target.value)} style={iStyle()}>
                          {["Science & Engineering Dept", "Mathematics Department", "English & Language Studies", "Social Studies & Humanities", "Arts & Design", "Physical Education", "Office of the Principal & Academic Affairs", "Guidance & Counseling Office"].map(d => (
                            <option key={d}>{d}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Teaching Experience</label>
                        <select value={fForm.experienceYears} onChange={e => chF("experienceYears", e.target.value)} style={iStyle()}>
                          {["1 - 2 Years", "3 - 5 Years", "5+ Years", "10+ Years", "15+ Years"].map(y => (
                            <option key={y}>{y}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px" }}>
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
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e293b", margin: "0 0 4px" }}>Office & Contact Details</h3>
                    <p style={{ fontSize: "0.78rem", color: "#64748b", margin: "0 0 16px" }}>Milestone 2: Official faculty directory assignment</p>

                    <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                      <div style={{ gridColumn: "span 2" }}>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Institutional Email *</label>
                        <input type="email" value={fForm.email} onChange={e => chF("email", e.target.value)} placeholder="faculty@edusphere.edu" style={iStyle(!!fErr.email)} />
                        {fErr.email && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.email}</span>}
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Direct Mobile Number *</label>
                        <input type="tel" value={fForm.phone} onChange={e => chF("phone", e.target.value)} placeholder="+63 (918) 552-3140" style={iStyle(!!fErr.phone)} />
                        {fErr.phone && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.phone}</span>}
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Office Room Location</label>
                        <input type="text" value={fForm.roomOffice} onChange={e => chF("roomOffice", e.target.value)} placeholder="e.g. Science Complex, Rm 302" style={iStyle()} />
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
                      <button type="button" onClick={prevF} style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#64748b" }}>
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
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e293b", margin: "0 0 4px" }}>Tier-1 Clearance & Ethics Pledge</h3>
                    <p style={{ fontSize: "0.78rem", color: "#64748b", margin: "0 0 16px" }}>Final Milestone: Gradebook admin password and educator pledge</p>

                    <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Create Password *</label>
                        <div style={{ position: "relative" }}>
                          <input type={showFPwd ? "text" : "password"} value={fForm.password} onChange={e => chF("password", e.target.value)} placeholder="Min. 6 chars" style={{ ...iStyle(!!fErr.password), paddingRight: "38px" }} />
                          <button type="button" onClick={() => setShowFPwd(p => !p)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#64748b" }}>
                            {showFPwd ? <IconEyeOff /> : <IconEye />}
                          </button>
                        </div>
                        {fErr.password && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.password}</span>}
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "5px" }}>Confirm Password *</label>
                        <input type={showFPwd ? "text" : "password"} value={fForm.confirmPassword} onChange={e => chF("confirmPassword", e.target.value)} placeholder="Re-enter password" style={iStyle(!!fErr.confirmPassword)} />
                        {fErr.confirmPassword && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "3px", display: "block" }}>{fErr.confirmPassword}</span>}
                      </div>
                    </div>

                    <div style={{ ...NEO_PRESSED, borderRadius: "12px", padding: "12px 14px" }}>
                      <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer" }}>
                        <input type="checkbox" checked={fForm.agreeTerms} onChange={e => chF("agreeTerms", e.target.checked)} style={{ marginTop: "3px", width: "16px", height: "16px", accentColor: "#8b5cf6", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.8rem", color: "#334155", lineHeight: "1.5" }}>
                          I uphold the <strong>Professional Code of Ethics for Teachers</strong> and honor the{" "}
                          <button type="button" onClick={e => { e.preventDefault(); setLegal({ open: true, tab: "privacy" }); }} style={{ background: "none", border: "none", padding: 0, color: "#8b5cf6", fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}>FERPA Mandate</button> &{" "}
                          <button type="button" onClick={e => { e.preventDefault(); setLegal({ open: true, tab: "safety" }); }} style={{ background: "none", border: "none", padding: 0, color: "#10b981", fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}>Child Protection Standard</button>.
                        </span>
                      </label>
                      {fErr.agreeTerms && <span style={{ fontSize: "0.74rem", color: "#ef4444", marginTop: "4px", display: "block" }}>{fErr.agreeTerms}</span>}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
                      <button type="button" onClick={prevF} style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#64748b" }}>
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

                    <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#1e293b", marginBottom: "6px" }}>
                      Welcome, {fDone.fullName}! 🧑‍🏫
                    </h3>
                    <p style={{ fontSize: "0.86rem", color: "#64748b", maxWidth: "440px", margin: "0 auto 18px", lineHeight: "1.6" }}>
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
                          <div style={{ fontSize: "0.86rem", fontWeight: "800", color: "#1e293b" }}>{card.val}</div>
                          <div style={{ fontSize: "0.72rem", color: "#64748b", marginTop: "2px" }}>{card.sub}</div>
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
                        style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#1e293b" }}
                      >
                        <IconCopy /> {copiedPass ? "Copied!" : "Copy Clearance ID"}
                      </button>
                      <button
                        type="button"
                        onClick={handleSendGrades}
                        style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#10b981" }}
                      >
                        <IconSparkles size={16} /> Send Grades
                      </button>
                      <button
                        type="button"
                        onClick={resetF}
                        style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#64748b" }}
                      >
                        <IconRotate /> Reset
                      </button>
                    </div>
                  </div>
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
            <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: "30px", background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", fontSize: "0.7rem", fontWeight: "700", color: "#3b82f6", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Core Infrastructure
            </div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#1e293b", letterSpacing: "-0.5px", marginBottom: "8px" }}>
              Engineered for Modern Classrooms
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#64748b", maxWidth: "460px", margin: "0 auto", lineHeight: "1.6" }}>
              Everything a school requires: interactive courses, real-time grades, and student safety telemetry.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "16px" }}>
            {modules.map((m, i) => (
              <div
                key={m.title}
                onClick={() => setActiveModule(i)}
                style={{
                  background: "#e0e5ec",
                  borderRadius: "20px",
                  padding: "22px 18px",
                  boxShadow: activeModule === i
                    ? `inset 4px 4px 10px #a3b1c6, inset -4px -4px 10px #ffffff, 0 0 0 2px ${m.color}66`
                    : "6px 6px 16px #a3b1c6, -6px -6px 16px #ffffff",
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "#e0e5ec", boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: m.color, marginBottom: "14px" }}>
                  {m.icon}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "#1e293b", marginBottom: "6px" }}>{m.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: "1.55", marginBottom: "14px" }}>{m.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {m.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div style={{ width: "14px", height: "14px", borderRadius: "4px", background: m.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", flexShrink: 0 }}>✓</div>
                      <span style={{ fontSize: "0.76rem", color: "#334155", fontWeight: "600" }}>{f}</span>
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
          <div className="safety-padding" style={{ background: "#e0e5ec", borderRadius: "22px", boxShadow: "10px 10px 22px #a3b1c6, -10px -10px 22px #ffffff", padding: "32px 24px" }}>
            <div className="safety-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "3px 12px", borderRadius: "20px", background: "#e0e5ec", boxShadow: "inset 2px 2px 5px #a3b1c6, inset -2px -2px 5px #ffffff", fontSize: "0.7rem", fontWeight: "700", color: "#8b5cf6", marginBottom: "12px", textTransform: "uppercase" }}>
                  <IconShield size={14} /> Child Protection & Safety
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#1e293b", marginBottom: "10px" }}>Safe, Zero-Harassment Campus</h3>
                <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: "1.7", marginBottom: "16px" }}>
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
                    style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#475569" }}
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
                      <h4 style={{ fontSize: "0.86rem", fontWeight: "800", color: "#1e293b", margin: "0 0 2px" }}>{item.title}</h4>
                      <p style={{ fontSize: "0.74rem", color: "#64748b", margin: 0, lineHeight: "1.4" }}>{item.desc}</p>
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
            <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: "30px", background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", fontSize: "0.7rem", fontWeight: "700", color: "#8b5cf6", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Community Feedback
            </div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#1e293b", letterSpacing: "-0.5px" }}>
              Trusted by School Leaders & Students
            </h2>
          </div>

          <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#e0e5ec", borderRadius: "20px", padding: "22px 18px", boxShadow: "6px 6px 16px #a3b1c6, -6px -6px 16px #ffffff", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", gap: "2px", marginBottom: "10px", color: "#f59e0b" }}>
                    {Array.from({ length: t.rating }).map((_, j) => <IconStar key={j} />)}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#475569", lineHeight: "1.65", marginBottom: "16px", fontStyle: "italic" }}>
                    "{t.text}"
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "800", fontSize: "0.78rem", flexShrink: 0 }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: "800", color: "#1e293b", fontSize: "0.82rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.68rem", color: "#64748b" }}>{t.role}</div>
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
            <span style={{ fontWeight: "800", color: "#1e293b", fontSize: "0.92rem" }}>Edu<span style={{ color: "#3b82f6" }}>Sphere</span></span>
            <span style={{ fontSize: "0.7rem", color: "#64748b" }}>© 2026 Academic Network</span>
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
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.76rem", color: "#475569", fontWeight: "600", fontFamily: "'Outfit',sans-serif", textDecoration: "underline" }}
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
            style={{ background: "#e0e5ec", borderRadius: "20px", boxShadow: "16px 16px 36px rgba(0,0,0,0.25)", maxWidth: "640px", width: "100%", maxHeight: "88vh", display: "flex", flexDirection: "column", overflow: "hidden" }}
          >
            <div style={{ padding: "16px 20px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(163,177,198,0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                  <IconShield size={16} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: "800", color: "#1e293b", margin: 0 }}>Campus Compliance</h3>
                  <p style={{ fontSize: "0.72rem", color: "#64748b", margin: 0 }}>Privacy, safety, and conduct regulations</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLegal(p => ({ ...p, open: false }))}
                style={{ width: "28px", height: "28px", borderRadius: "50%", border: "none", cursor: "pointer", background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" }}
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
                    color: legal.tab === tab.id ? "#3b82f6" : "#64748b",
                    background: legal.tab === tab.id ? "#e0e5ec" : "transparent",
                    boxShadow: legal.tab === tab.id ? "inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff" : "none"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ padding: "16px 20px", overflowY: "auto", fontSize: "0.86rem", color: "#334155", lineHeight: "1.7" }}>
              {legal.tab === "privacy" && (
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#1e293b", marginBottom: "6px" }}>1. FERPA Student Record Protection</h4>
                  <p style={{ marginBottom: "10px" }}>EduSphere conforms strictly with FERPA, COPPA, and national student data regulations. All student grades, medical records, and parent contacts are protected under administrative confidentiality.</p>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#1e293b", marginBottom: "6px" }}>2. Zero Commercial Monetization</h4>
                  <p>EduSphere guarantees zero commercialization: records are never monetized, traded, or shared with third-party advertisers.</p>
                </div>
              )}
              {legal.tab === "safety" && (
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#1e293b", marginBottom: "6px" }}>1. Zero-Tolerance Harassment Policy</h4>
                  <p style={{ marginBottom: "10px" }}>Partner campuses enforce strict zero-tolerance policies against bullying, cyber-bullying, and discrimination. All incident reports are reviewed within 12 hours.</p>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#1e293b", marginBottom: "6px" }}>2. Gate Telemetry & Alerts</h4>
                  <p>Parent contact numbers are used exclusively for campus entry time notifications and emergency weather dispatch.</p>
                </div>
              )}
              {legal.tab === "conduct" && (
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#1e293b", marginBottom: "6px" }}>1. Academic Integrity & Honor Pledge</h4>
                  <p style={{ marginBottom: "10px" }}>Students certify that assignments represent authentic coursework. Plagiarism and unauthorized academic dishonesty are subject to administrative review.</p>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#1e293b", marginBottom: "6px" }}>2. Educator Ethics Standard</h4>
                  <p>Faculty members maintain impartial grade evaluations and confidential gradebook integrity.</p>
                </div>
              )}
            </div>

            <div style={{ padding: "12px 20px", borderTop: "1px solid rgba(163,177,198,0.3)", display: "flex", justifyContent: "flex-end", gap: "8px", background: "#e0e5ec" }}>
              <button
                type="button"
                onClick={() => setLegal(p => ({ ...p, open: false }))}
                style={{ ...minBtnStyle, background: "#e0e5ec", boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff", color: "#64748b" }}
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

      {/* Grade Sent Popup Notification */}
      {gradeSentPopup && (
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
            <IconCheck size={20} />
          </div>
          <div style={{ fontWeight: "700", fontSize: "0.95rem", fontFamily: "'Outfit',sans-serif" }}>
            Grades have been sent successfully!
          </div>
        </div>
      )}
    </div>
  );
}
