"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";

/* ========== SCHOOL THEMED ICON COMPONENTS ========== */
function IconGraduationCap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}

function IconTeacher() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M2 3h20v14H2z"/>
      <path d="M8 21h8"/>
      <path d="M12 17v4"/>
      <circle cx="9" cy="8" r="2"/>
      <path d="M5 14a4 4 0 0 1 8 0"/>
      <line x1="15" y1="7" x2="19" y2="7"/>
      <line x1="15" y1="10" x2="19" y2="10"/>
    </svg>
  );
}

function IconBookOpen() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
      <line x1="9" y1="22" x2="9" y2="22.01"/>
      <line x1="15" y1="22" x2="15" y2="22.01"/>
      <line x1="8" y1="6" x2="8" y2="6.01"/>
      <line x1="16" y1="6" x2="16" y2="6.01"/>
      <line x1="8" y1="10" x2="8" y2="10.01"/>
      <line x1="16" y1="10" x2="16" y2="10.01"/>
      <line x1="8" y1="14" x2="8" y2="14.01"/>
      <line x1="16" y1="14" x2="16" y2="14.01"/>
    </svg>
  );
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
      <line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function IconLock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

function IconEye() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function IconEyeOff() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  );
}

function IconFileText() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function IconRotate() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <polyline points="23 4 23 10 17 10"/>
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
    </svg>
  );
}

function IconSparkles() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M12 3l1.912 5.885L20 10.8l-4.945 4.085L16.968 21 12 17.27 7.032 21l1.913-6.115L4 10.8l6.088-1.915L12 3z"/>
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

/* ========== ANIMATED COUNTER ========== */
function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          let start = 0;
          const step = Math.max(1, Math.floor(end / 60));
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ========== SCROLL REVEAL COMPONENT ========== */
function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  blur = true,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  blur?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const getTranslate = useCallback(() => {
    switch (direction) {
      case "up": return "translateY(50px)";
      case "down": return "translateY(-50px)";
      case "left": return "translateX(50px)";
      case "right": return "translateX(-50px)";
    }
  }, [direction]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getTranslate(),
        filter: isVisible ? "blur(0px)" : (blur ? "blur(8px)" : "none"),
        transition: `opacity 0.75s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s,
                     transform 0.75s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s,
                     filter 0.75s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}

/* ========== MAIN SCHOOL PORTAL COMPONENT ========== */
export default function Home() {
  const [activeTab, setActiveTab] = useState<"student" | "faculty">("student");
  const [activeModule, setActiveModule] = useState(0);

  // Student Form State
  const [studentForm, setStudentForm] = useState({
    fullName: "",
    studentId: "",
    gradeLevel: "Grade 11 - Senior High",
    strand: "STEM (Science, Tech, Eng & Math)",
    section: "St. Thomas Aquinas",
    email: "",
    guardianName: "",
    guardianPhone: "",
    password: "",
    confirmPassword: "",
    interests: ["Robotics & AI Club", "Debate & Speech Society"] as string[],
    agreeTerms: false,
  });

  const [studentErrors, setStudentErrors] = useState<Record<string, string>>({});
  const [isStudentSubmitting, setIsStudentSubmitting] = useState(false);
  const [studentSubmitted, setStudentSubmitted] = useState<any | null>(null);
  const [showStudentPassword, setShowStudentPassword] = useState(false);

  // Faculty / Principal Form State
  const [facultyForm, setFacultyForm] = useState({
    fullName: "",
    role: "Teacher / Faculty Instructor",
    facultyId: "",
    institution: "St. Jude Catholic & Science Academy",
    department: "Science & Engineering Dept",
    email: "",
    phone: "",
    roomOffice: "Science Complex, Rm 302",
    experienceYears: "5+ Years",
    password: "",
    confirmPassword: "",
    adminClearance: true,
    agreeTerms: false,
  });

  const [facultyErrors, setFacultyErrors] = useState<Record<string, string>>({});
  const [isFacultySubmitting, setIsFacultySubmitting] = useState(false);
  const [facultySubmitted, setFacultySubmitted] = useState<any | null>(null);
  const [showFacultyPassword, setShowFacultyPassword] = useState(false);

  // Legal Modal State (FERPA, Child Safety, Code of Conduct)
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    tab: "privacy" | "safety" | "conduct";
  }>({
    isOpen: false,
    tab: "privacy",
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && legalModal.isOpen) {
        setLegalModal((prev) => ({ ...prev, isOpen: false }));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [legalModal.isOpen]);

  /* Student Form Handlers */
  const handleStudentChange = (field: string, value: any) => {
    setStudentForm((prev) => ({ ...prev, [field]: value }));
    if (studentErrors[field]) {
      setStudentErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleInterestToggle = (interest: string) => {
    setStudentForm((prev) => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const handleFillStudentDemo = () => {
    setStudentForm({
      fullName: "Janelle Marie Gomez",
      studentId: "LRN-2026-48910",
      gradeLevel: "Grade 11 - Senior High",
      strand: "STEM (Science, Tech, Eng & Math)",
      section: "St. Thomas Aquinas",
      email: "janelle.gomez@students.edusphere.edu",
      guardianName: "Corazon Gomez (Mother)",
      guardianPhone: "+63 (917) 845-2901",
      password: "StudentSecure@2026",
      confirmPassword: "StudentSecure@2026",
      interests: ["Robotics & AI Club", "Debate & Speech Society", "Campus Journalism"],
      agreeTerms: true,
    });
    setStudentErrors({});
  };

  const handleResetStudent = () => {
    setStudentForm({
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
      interests: ["Robotics & AI Club"],
      agreeTerms: false,
    });
    setStudentErrors({});
    setStudentSubmitted(null);
  };

  const validateStudentForm = () => {
    const errs: Record<string, string> = {};
    if (!studentForm.fullName.trim() || studentForm.fullName.trim().length < 2) {
      errs.fullName = "Please enter student's complete official name.";
    }
    if (!studentForm.studentId.trim()) {
      errs.studentId = "Student ID or LRN number is required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!studentForm.email.trim() || !emailRegex.test(studentForm.email.trim())) {
      errs.email = "Please provide a valid institutional or personal email.";
    }
    if (!studentForm.guardianName.trim()) {
      errs.guardianName = "Parent or guardian contact name is required for school safety records.";
    }
    const cleanPhone = studentForm.guardianPhone.replace(/[^0-9]/g, "");
    if (!studentForm.guardianPhone.trim() || cleanPhone.length < 7) {
      errs.guardianPhone = "Enter a valid emergency contact number (at least 7 digits).";
    }
    if (!studentForm.password || studentForm.password.length < 6) {
      errs.password = "Student portal password must be at least 6 characters.";
    }
    if (studentForm.password !== studentForm.confirmPassword) {
      errs.confirmPassword = "Passwords do not match.";
    }
    if (!studentForm.agreeTerms) {
      errs.agreeTerms = "You must review and agree to the Student Data Privacy & Campus Honor Code.";
    }
    setStudentErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStudentForm()) {
      const el = document.getElementById("registration");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setIsStudentSubmitting(true);
    setTimeout(() => {
      setIsStudentSubmitting(false);
      setStudentSubmitted({
        passId: `STU-PASS-${Math.floor(100000 + Math.random() * 900000)}`,
        fullName: studentForm.fullName,
        studentId: studentForm.studentId,
        gradeLevel: studentForm.gradeLevel,
        strand: studentForm.strand,
        section: studentForm.section || "Section A - Alpha",
        email: studentForm.email,
        guardianName: studentForm.guardianName,
        guardianPhone: studentForm.guardianPhone,
        interests: studentForm.interests,
        issuedAt: new Date().toLocaleString(),
      });
      const el = document.getElementById("registration");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  const handleDownloadStudentPass = () => {
    if (!studentSubmitted) return;
    const content = `==========================================================
EDUSPHERE SMART CAMPUS - OFFICIAL STUDENT ADMISSION PASS
==========================================================
Pass Verification Code: ${studentSubmitted.passId}
Date of Registration: ${studentSubmitted.issuedAt}
Campus Status: Active & Enrolled

1. STUDENT CREDENTIALS:
- Official Name: ${studentSubmitted.fullName}
- Student ID / LRN: ${studentSubmitted.studentId}
- Grade & Year Level: ${studentSubmitted.gradeLevel}
- Academic Track / Strand: ${studentSubmitted.strand}
- Assigned Class / Section: ${studentSubmitted.section}
- Institutional Student Email: ${studentSubmitted.email}

2. EMERGENCY & GUARDIAN DISPATCH:
- Registered Guardian: ${studentSubmitted.guardianName}
- Emergency Contact Hotline: ${studentSubmitted.guardianPhone}

3. CO-CURRICULAR & CLUBS:
- Student Organizations: ${studentSubmitted.interests.join(", ")}

4. COMPLIANCE & SAFETY CLEARANCE:
- Data Protection: FERPA & Student Privacy Standard
- Campus RFID Clearance: Granted (Gate & Digital Library Access)
- Health & Anti-Bullying Charter: Signed & Verified

Please present this digital pass or student barcode ID at the
Registrar / Admissions Office for physical ID card printing.
==========================================================`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Student-Pass-${studentSubmitted.studentId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  /* Faculty Form Handlers */
  const handleFacultyChange = (field: string, value: any) => {
    setFacultyForm((prev) => ({ ...prev, [field]: value }));
    if (facultyErrors[field]) {
      setFacultyErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleFillFacultyDemo = () => {
    setFacultyForm({
      fullName: "Dr. Roberto M. Reyes, Ph.D.",
      role: "Principal / Head of School",
      facultyId: "FAC-ADM-2026-004",
      institution: "Metropolitan Academic Science Institute",
      department: "Office of the Principal & Academic Affairs",
      email: "roberto.reyes@principals.edusphere.edu",
      phone: "+63 (918) 552-3140",
      roomOffice: "Executive Administration Wing, Room 101",
      experienceYears: "15+ Years",
      password: "PrincipalMaster@2026",
      confirmPassword: "PrincipalMaster@2026",
      adminClearance: true,
      agreeTerms: true,
    });
    setFacultyErrors({});
  };

  const handleResetFaculty = () => {
    setFacultyForm({
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
      adminClearance: true,
      agreeTerms: false,
    });
    setFacultyErrors({});
    setFacultySubmitted(null);
  };

  const validateFacultyForm = () => {
    const errs: Record<string, string> = {};
    if (!facultyForm.fullName.trim() || facultyForm.fullName.trim().length < 2) {
      errs.fullName = "Please enter faculty member's official title and full name.";
    }
    if (!facultyForm.facultyId.trim()) {
      errs.facultyId = "Employee or Faculty ID Number is required for verification.";
    }
    if (!facultyForm.institution.trim()) {
      errs.institution = "School or Institution Name is required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!facultyForm.email.trim() || !emailRegex.test(facultyForm.email.trim())) {
      errs.email = "Please enter a valid institutional faculty email.";
    }
    const cleanPhone = facultyForm.phone.replace(/[^0-9]/g, "");
    if (!facultyForm.phone.trim() || cleanPhone.length < 7) {
      errs.phone = "Enter a direct phone / mobile number (at least 7 digits).";
    }
    if (!facultyForm.password || facultyForm.password.length < 6) {
      errs.password = "Faculty management portal password must be at least 6 characters.";
    }
    if (facultyForm.password !== facultyForm.confirmPassword) {
      errs.confirmPassword = "Passwords do not match.";
    }
    if (!facultyForm.agreeTerms) {
      errs.agreeTerms = "You must review and accept the Educator Code of Ethics & Child Protection Charter.";
    }
    setFacultyErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFacultySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFacultyForm()) {
      const el = document.getElementById("registration");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setIsFacultySubmitting(true);
    setTimeout(() => {
      setIsFacultySubmitting(false);
      setFacultySubmitted({
        credentialId: `FAC-AUTH-${Math.floor(100000 + Math.random() * 900000)}`,
        fullName: facultyForm.fullName,
        role: facultyForm.role,
        facultyId: facultyForm.facultyId,
        institution: facultyForm.institution,
        department: facultyForm.department,
        email: facultyForm.email,
        phone: facultyForm.phone,
        roomOffice: facultyForm.roomOffice || "Faculty Hall, Rm 204",
        experienceYears: facultyForm.experienceYears,
        issuedAt: new Date().toLocaleString(),
      });
      const el = document.getElementById("registration");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  const handleDownloadFacultyPass = () => {
    if (!facultySubmitted) return;
    const content = `==========================================================
EDUSPHERE SMART CAMPUS - FACULTY & PRINCIPAL CREDENTIAL PASS
==========================================================
Credential Token: ${facultySubmitted.credentialId}
Issuance Date: ${facultySubmitted.issuedAt}
Administrative Clearance Level: Tier 1 (Authorized Academic Staff)

1. EDUCATOR CREDENTIALS:
- Official Name & Title: ${facultySubmitted.fullName}
- Designated Role: ${facultySubmitted.role}
- Faculty / Employee ID: ${facultySubmitted.facultyId}
- Institution / Campus: ${facultySubmitted.institution}
- Academic Department: ${facultySubmitted.department}
- Campus Room / Office: ${facultySubmitted.roomOffice}
- Experience: ${facultySubmitted.experienceYears}

2. CONTACT & VERIFICATION:
- Institutional Email: ${facultySubmitted.email}
- Direct Office / Mobile: ${facultySubmitted.phone}

3. ADMINISTRATIVE CLEARANCES:
- Gradebook Submissions: Authorized
- Student Roster & Attendance Access: Enabled
- FERPA / DepEd Child Safety Compliance: Signed & Verified
- Emergency Campus Dispatch Access: Level A Active

Credentials verified by EduSphere Institutional Security Gateway.
==========================================================`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Faculty-Credential-${facultySubmitted.facultyId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const openLegalModal = (tab: "privacy" | "safety" | "conduct") => {
    setLegalModal({ isOpen: true, tab });
  };

  /* School Features / Academic Modules */
  const modules = [
    {
      icon: "📚",
      title: "Curriculum & Digital Classrooms",
      desc: "Comprehensive lesson repository, digital homework dropboxes, and interactive lecture materials accessible for students and teachers 24/7.",
      features: ["Syllabus & Lecture Downloads", "Automated Homework Submission", "Interactive Quiz Portals", "Class Discussion Boards"],
      color: "#3b82f6",
    },
    {
      icon: "📊",
      title: "Gradebook & Student Analytics",
      desc: "Real-time grading rubrics, automated GPA computation, transparent report cards, and early warning analytics for students needing academic support.",
      features: ["Quarterly Grade Reports", "Class Rank & Honors Telemetry", "Parent Portal Grade Sync", "Attendance & Absence Logs"],
      color: "#10b981",
    },
    {
      icon: "🛡️",
      title: "Campus Safety & Emergency Alerts",
      desc: "RFID gate entry tracking, nurse clinic electronic passes, anti-bullying reporting, and rapid emergency dispatch alerts for parents and staff.",
      features: ["Instant Parent Gate SMS/Email", "Anti-Bullying Incident Reports", "Campus Clinic Health Pass", "100% FERPA Data Shield"],
      color: "#8b5cf6",
    },
    {
      icon: "🧑‍💼",
      title: "Principal & Admin Governance",
      desc: "Unified administrative dashboards for department heads and school principals to audit syllabi, assign faculty schedules, and manage accreditations.",
      features: ["Faculty Schedule Master Matrix", "DepEd & Accreditation Audits", "Classroom Allocation Matrix", "Official DepEd E-Forms"],
      color: "#f59e0b",
    },
  ];

  /* School Community Testimonials */
  const testimonials = [
    {
      name: "Dr. Roberto M. Reyes, Ph.D.",
      role: "High School Principal, Metropolitan Science Academy",
      text: "EduSphere eliminated paper grade sheets and streamlined our attendance across 48 classrooms. The faculty and principal portal makes curriculum oversight immediate and effortless.",
      rating: 5,
      avatar: "RR",
    },
    {
      name: "Prof. Maria Elena Santos",
      role: "Department Chair, STEM & Natural Sciences",
      text: "Assigning lab schedules, tracking laboratory attendance, and uploading homework materials has never been smoother. My students love downloading their badges and checking their grades.",
      rating: 5,
      avatar: "MS",
    },
    {
      name: "Kirsten Andrea C.",
      role: "Grade 11 Student & Supreme Student Council President",
      text: "The student registration portal is so easy to use! Having our digital pass, club listings, and homework schedule in one place makes daily school life so much less stressful.",
      rating: 5,
      avatar: "KC",
    },
  ];

  return (
    <div style={{ background: "#e0e5ec", minHeight: "100vh", fontFamily: "'Outfit', sans-serif", color: "#2d3561" }}>

      {/* ========== NAVBAR ========== */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(224, 229, 236, 0.88)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 4px 20px rgba(163, 177, 198, 0.45), 0 -1px 0 rgba(255,255,255,0.85)",
        padding: "0 2rem",
      }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "74px" }}>
          
          {/* School Brand Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "14px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "4px 4px 10px #a3b1c6, -4px -4px 10px #ffffff",
              color: "white",
            }}>
              <IconGraduationCap />
            </div>
            <div>
              <span style={{ fontWeight: "800", fontSize: "1.25rem", color: "#1e293b", letterSpacing: "-0.5px" }}>
                Edu<span style={{ color: "#3b82f6" }}>Sphere</span>
              </span>
              <span style={{
                display: "block", fontSize: "0.68rem", fontWeight: "700",
                color: "#64748b", letterSpacing: "1px", textTransform: "uppercase"
              }}>
                Smart School Campus Portal
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {[
              { label: "Academic Modules", href: "#modules" },
              { label: "Campus Safety", href: "#safety-overview" },
              { label: "About", href: "#about" },
              { label: "Student Portal", href: "#registration", onClick: () => setActiveTab("student") },
              { label: "Faculty & Principal", href: "#registration", onClick: () => setActiveTab("faculty") },
              { label: "Community", href: "#testimonials" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={item.onClick}
                style={{
                  padding: "8px 16px",
                  borderRadius: "24px",
                  textDecoration: "none",
                  color: "#475569",
                  fontWeight: "600",
                  fontSize: "0.88rem",
                  transition: "all 0.2s ease",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.background = "#e0e5ec";
                  (e.target as HTMLAnchorElement).style.boxShadow = "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff";
                  (e.target as HTMLAnchorElement).style.color = "#1e293b";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.background = "transparent";
                  (e.target as HTMLAnchorElement).style.boxShadow = "none";
                  (e.target as HTMLAnchorElement).style.color = "#475569";
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Direct CTA */}
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="#registration"
              onClick={() => setActiveTab("student")}
              style={{
                padding: "10px 20px",
                borderRadius: "24px",
                textDecoration: "none",
                color: "white",
                fontWeight: "700",
                fontSize: "0.85rem",
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                boxShadow: "4px 4px 10px rgba(59, 130, 246, 0.4), -2px -2px 6px rgba(255,255,255,0.7)",
                transition: "all 0.25s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "6px 8px 16px rgba(59, 130, 246, 0.5), -2px -2px 8px rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "4px 4px 10px rgba(59, 130, 246, 0.4), -2px -2px 6px rgba(255,255,255,0.7)";
              }}
            >
              🎓 Student Sign Up
            </a>

            <a
              href="#registration"
              onClick={() => setActiveTab("faculty")}
              style={{
                padding: "10px 20px",
                borderRadius: "24px",
                textDecoration: "none",
                color: "#1e293b",
                fontWeight: "700",
                fontSize: "0.85rem",
                background: "#e0e5ec",
                boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                transition: "all 0.25s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "inset 2px 2px 5px #a3b1c6, inset -2px -2px 5px #ffffff";
                (e.currentTarget as HTMLAnchorElement).style.color = "#3b82f6";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff";
                (e.currentTarget as HTMLAnchorElement).style.color = "#1e293b";
              }}
            >
              🧑‍🏫 Faculty Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <ScrollReveal delay={0.05}>
        <section style={{ padding: "75px 2rem 50px", maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "50px", alignItems: "center" }}>
            
            {/* Left Hero Text */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "6px 18px", borderRadius: "50px",
                background: "#e0e5ec",
                boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                fontSize: "0.8rem", fontWeight: "700", color: "#3b82f6",
                marginBottom: "24px", textTransform: "uppercase", letterSpacing: "1.2px",
              }}>
                <IconSparkles /> Official School & Academic Campus Portal
              </div>

              <h1 style={{
                fontSize: "3.2rem", fontWeight: "800", color: "#1e293b",
                lineHeight: "1.15", letterSpacing: "-1.5px", marginBottom: "20px",
              }}>
                Empowering <span style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Students, Teachers & Principals</span> in One Unified Campus.
              </h1>

              <p style={{
                fontSize: "1.12rem", color: "#475569", lineHeight: "1.8",
                marginBottom: "36px", maxWidth: "560px",
              }}>
                A centralized, modern academic hub designed for modern schools. Seamlessly manage student enrollments, digital gradebooks, verified faculty rosters, lesson syllabi, and 100% FERPA/DepEd-compliant child safety protocols.
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                <a
                  href="#registration"
                  onClick={() => setActiveTab("student")}
                  style={{
                    padding: "16px 32px", borderRadius: "18px",
                    textDecoration: "none", color: "white",
                    fontWeight: "700", fontSize: "1rem",
                    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    boxShadow: "6px 6px 14px rgba(59, 130, 246, 0.4), -2px -2px 8px rgba(255,255,255,0.8)",
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
                >
                  <IconGraduationCap /> Student Portal Registration <IconArrow />
                </a>

                <a
                  href="#registration"
                  onClick={() => setActiveTab("faculty")}
                  style={{
                    padding: "16px 32px", borderRadius: "18px",
                    textDecoration: "none", color: "#1e293b",
                    fontWeight: "700", fontSize: "1rem",
                    background: "#e0e5ec",
                    boxShadow: "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff";
                  }}
                >
                  <IconTeacher /> Teachers & Principal Sign Up
                </a>
              </div>

              {/* Trust badges */}
              <div style={{ display: "flex", gap: "24px", marginTop: "36px", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", fontWeight: "600", color: "#475569" }}>
                  <div style={{ color: "#10b981" }}><IconCheck /></div> FERPA & Child Safety Compliant
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", fontWeight: "600", color: "#475569" }}>
                  <div style={{ color: "#3b82f6" }}><IconCheck /></div> Zero Commercial Data Sharing
                </div>
              </div>
            </div>

            {/* Right Hero Card: School Live Hub Preview */}
            <div style={{
              background: "#e0e5ec",
              borderRadius: "32px",
              boxShadow: "16px 16px 32px #a3b1c6, -16px -16px 32px #ffffff",
              padding: "36px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Header inside card */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "12px", height: "12px", borderRadius: "50%",
                    background: "#10b981", boxShadow: "0 0 10px #10b981",
                  }} />
                  <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#1e293b" }}>
                    CAMPUS STATUS: ACTIVE & SECURED
                  </span>
                </div>
                <span style={{
                  fontSize: "0.75rem", fontWeight: "700", color: "#3b82f6",
                  padding: "4px 12px", borderRadius: "20px",
                  background: "#e0e5ec",
                  boxShadow: "inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff",
                }}>
                  Academic Year 2026-2027
                </span>
              </div>

              {/* Mini Quick-Stats inside preview */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
                <div style={{
                  background: "#e0e5ec", borderRadius: "20px", padding: "18px",
                  boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#3b82f6", marginBottom: "6px" }}>
                    <IconBookOpen />
                    <span style={{ fontSize: "0.8rem", fontWeight: "700" }}>Class Attendance</span>
                  </div>
                  <div style={{ fontSize: "1.6rem", fontWeight: "800", color: "#1e293b" }}>98.4%</div>
                  <div style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: "600" }}>+2.1% this semester</div>
                </div>

                <div style={{
                  background: "#e0e5ec", borderRadius: "20px", padding: "18px",
                  boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#8b5cf6", marginBottom: "6px" }}>
                    <IconBuilding />
                    <span style={{ fontSize: "0.8rem", fontWeight: "700" }}>Active Classrooms</span>
                  </div>
                  <div style={{ fontSize: "1.6rem", fontWeight: "800", color: "#1e293b" }}>48 / 48</div>
                  <div style={{ fontSize: "0.75rem", color: "#475569", fontWeight: "600" }}>100% In-Session</div>
                </div>
              </div>

              {/* Today's Schedule & Announcements Widget */}
              <div style={{
                background: "#e0e5ec", borderRadius: "20px", padding: "20px",
                boxShadow: "6px 6px 14px #a3b1c6, -6px -6px 14px #ffffff",
                marginBottom: "20px",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#1e293b" }}>
                    🔔 Campus Bulletin & Upcoming Events
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#3b82f6", fontWeight: "600" }}>Today</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.82rem", color: "#475569" }}>
                    <span style={{
                      padding: "3px 8px", borderRadius: "6px", background: "rgba(59, 130, 246, 0.15)",
                      color: "#2563eb", fontWeight: "700", fontSize: "0.72rem"
                    }}>09:00 AM</span>
                    <span>General Faculty & Department Heads Academic Assembly</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.82rem", color: "#475569" }}>
                    <span style={{
                      padding: "3px 8px", borderRadius: "6px", background: "rgba(16, 185, 129, 0.15)",
                      color: "#059669", fontWeight: "700", fontSize: "0.72rem"
                    }}>01:30 PM</span>
                    <span>Senior High Science Fair & Robotics Club Project Demos</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.82rem", color: "#475569" }}>
                    <span style={{
                      padding: "3px 8px", borderRadius: "6px", background: "rgba(139, 92, 246, 0.15)",
                      color: "#7c3aed", fontWeight: "700", fontSize: "0.72rem"
                    }}>04:00 PM</span>
                    <span>Quarterly Honors Student Pass Verification & Re-issue</span>
                  </div>
                </div>
              </div>

              {/* Fast Switch Bar inside Hero Card */}
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("student");
                    const el = document.getElementById("registration");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    flex: 1, padding: "12px", borderRadius: "14px", border: "none", cursor: "pointer",
                    background: "#e0e5ec", boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                    fontFamily: "'Outfit', sans-serif", fontWeight: "700", fontSize: "0.82rem",
                    color: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px"
                  }}
                >
                  <IconGraduationCap /> Fill Student Form
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("faculty");
                    const el = document.getElementById("registration");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    flex: 1, padding: "12px", borderRadius: "14px", border: "none", cursor: "pointer",
                    background: "#e0e5ec", boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                    fontFamily: "'Outfit', sans-serif", fontWeight: "700", fontSize: "0.82rem",
                    color: "#8b5cf6", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px"
                  }}
                >
                  <IconTeacher /> Fill Faculty Form
                </button>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ========== COUNTERS / METRICS BAR ========== */}
      <ScrollReveal delay={0.1}>
        <section style={{ padding: "30px 2rem 60px", maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px",
            background: "#e0e5ec", borderRadius: "28px",
            boxShadow: "10px 10px 20px #a3b1c6, -10px -10px 20px #ffffff",
            padding: "36px 32px", textAlign: "center",
          }}>
            <div>
              <div style={{ fontSize: "2.6rem", fontWeight: "800", color: "#3b82f6", lineHeight: "1" }}>
                <Counter end={15400} suffix="+" />
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#1e293b", marginTop: "8px" }}>Enrolled Students</div>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>Active learner accounts</div>
            </div>

            <div>
              <div style={{ fontSize: "2.6rem", fontWeight: "800", color: "#10b981", lineHeight: "1" }}>
                <Counter end={640} suffix="+" />
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#1e293b", marginTop: "8px" }}>Teachers & Principals</div>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>Verified academic leaders</div>
            </div>

            <div>
              <div style={{ fontSize: "2.6rem", fontWeight: "800", color: "#8b5cf6", lineHeight: "1" }}>
                <Counter end={420} suffix="+" />
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#1e293b", marginTop: "8px" }}>Digital Classrooms</div>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>Interactive learning rooms</div>
            </div>

            <div>
              <div style={{ fontSize: "2.6rem", fontWeight: "800", color: "#f59e0b", lineHeight: "1" }}>
                <Counter end={100} suffix="%" />
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#1e293b", marginTop: "8px" }}>FERPA & Child Safety</div>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>Audited data protection</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========== ACADEMIC MODULES SECTION (NO PRICING) ========== */}
      <ScrollReveal delay={0.1}>
        <section id="modules" style={{ padding: "60px 2rem 80px", maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={{
              display: "inline-block", padding: "6px 20px", borderRadius: "50px",
              background: "#e0e5ec", boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
              fontSize: "0.8rem", fontWeight: "700", color: "#3b82f6",
              marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1.5px",
            }}>
              Core Academic Infrastructure
            </div>
            <h2 style={{ fontSize: "2.6rem", fontWeight: "800", color: "#1e293b", letterSpacing: "-1px", marginBottom: "12px" }}>
              Engineered Specially for Modern Schools
            </h2>
            <p style={{ fontSize: "1.08rem", color: "#64748b", maxWidth: "620px", margin: "0 auto", lineHeight: "1.7" }}>
              Replace chaotic group chats and paperwork with purpose-built school modules for curriculum, grades, student safety, and administrative supervision.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "28px" }}>
            {modules.map((mod, i) => (
              <div
                key={i}
                onClick={() => setActiveModule(i)}
                style={{
                  background: "#e0e5ec",
                  borderRadius: "28px",
                  padding: "36px 28px",
                  boxShadow: activeModule === i
                    ? `inset 6px 6px 14px #a3b1c6, inset -6px -6px 14px #ffffff, 0 0 0 3px ${mod.color}55`
                    : "10px 10px 22px #a3b1c6, -10px -10px 22px #ffffff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: activeModule === i ? "scale(1.02)" : "scale(1)",
                }}
              >
                <div style={{
                  width: "56px", height: "56px", borderRadius: "18px",
                  background: "#e0e5ec",
                  boxShadow: activeModule === i
                    ? `inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff`
                    : "5px 5px 10px #a3b1c6, -5px -5px 10px #ffffff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.8rem", marginBottom: "22px",
                }}>
                  {mod.icon}
                </div>

                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#1e293b", marginBottom: "12px" }}>
                  {mod.title}
                </h3>

                <p style={{ fontSize: "0.92rem", color: "#64748b", lineHeight: "1.7", marginBottom: "24px" }}>
                  {mod.desc}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {mod.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "20px", height: "20px", borderRadius: "6px",
                        background: mod.color, color: "white",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.75rem", flexShrink: 0,
                      }}>
                        ✓
                      </div>
                      <span style={{ fontSize: "0.85rem", color: "#334155", fontWeight: "600" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ========== ABOUT & SCHOOL GOVERNANCE ========== */}
      <ScrollReveal delay={0.1}>
        <section id="about" style={{ padding: "60px 2rem 80px", maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{
            background: "#e0e5ec",
            borderRadius: "32px",
            boxShadow: "14px 14px 28px #a3b1c6, -14px -14px 28px #ffffff",
            padding: "50px 44px",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
              <div>
                <div style={{
                  display: "inline-block", padding: "6px 18px", borderRadius: "50px",
                  background: "#e0e5ec", boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                  fontSize: "0.8rem", fontWeight: "700", color: "#10b981",
                  marginBottom: "18px", textTransform: "uppercase", letterSpacing: "1px",
                }}>
                  Academic Trust & Accountability
                </div>

                <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1e293b", lineHeight: "1.2", marginBottom: "18px" }}>
                  Built in Partnership with Educators & School Administrators
                </h2>

                <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: "1.8", marginBottom: "24px" }}>
                  EduSphere was constructed to fulfill the daily operational needs of primary schools, junior/senior high schools, and collegiate faculties. With role-based authorization, students access lessons safely while principals maintain executive oversight.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div style={{
                    background: "#e0e5ec", padding: "18px", borderRadius: "18px",
                    boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                  }}>
                    <div style={{ fontWeight: "800", fontSize: "1.2rem", color: "#3b82f6", marginBottom: "4px" }}>Role Partition</div>
                    <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
                      Isolated permissions prevent unauthorized grade modifications or student record tampering.
                    </p>
                  </div>

                  <div style={{
                    background: "#e0e5ec", padding: "18px", borderRadius: "18px",
                    boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                  }}>
                    <div style={{ fontWeight: "800", fontSize: "1.2rem", color: "#10b981", marginBottom: "4px" }}>Zero Paywalls</div>
                    <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
                      No per-feature paywalls. 100% accessible educational portals for registered students and faculty.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Step Workflow */}
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {[
                  {
                    step: "01",
                    title: "Registration & Verified Credentials",
                    desc: "Students sign up using their Learner Reference Number (LRN). Teachers & Principals provide their official faculty institutional ID.",
                  },
                  {
                    step: "02",
                    title: "Classroom & Department Sync",
                    desc: "Our automated academic matrix maps students into correct sections and assigns faculty to their corresponding grade levels & subject tracks.",
                  },
                  {
                    step: "03",
                    title: "Instant Digital ID Pass & Grade Access",
                    desc: "Generate your downloadable verification badge, access real-time homework drops, and monitor campus notifications instantaneously.",
                  },
                ].map((item, index) => (
                  <div key={index} style={{
                    display: "flex", gap: "20px", alignItems: "flex-start",
                    background: "#e0e5ec", borderRadius: "20px", padding: "22px",
                    boxShadow: "6px 6px 14px #a3b1c6, -6px -6px 14px #ffffff",
                  }}>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "14px",
                      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                      color: "white", fontWeight: "800", fontSize: "1.1rem",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      boxShadow: "3px 3px 8px rgba(59, 130, 246, 0.4)",
                    }}>
                      {item.step}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#1e293b", marginBottom: "6px" }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========== UNIFIED SCHOOL REGISTRATION HUB ========== */}
      <ScrollReveal delay={0.1}>
        <section id="registration" style={{ padding: "60px 2rem 80px", maxWidth: "1240px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 20px", borderRadius: "50px",
              background: "#e0e5ec",
              boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
              fontSize: "0.8rem", fontWeight: "700", color: "#3b82f6",
              marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1.5px",
            }}>
              <IconSparkles /> Institutional Registration Portals
            </div>

            <h2 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#1e293b", letterSpacing: "-1px", marginBottom: "14px" }}>
              Join the Official Campus Network
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#64748b", maxWidth: "640px", margin: "0 auto", lineHeight: "1.7" }}>
              Select your academic role below to access your tailored enrollment registration and generate your digital school identification pass.
            </p>

            {/* Role Switcher Tabs */}
            <div style={{
              display: "inline-flex",
              background: "#e0e5ec",
              borderRadius: "50px",
              boxShadow: "inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff",
              padding: "6px",
              marginTop: "30px",
              gap: "8px",
            }}>
              <button
                type="button"
                onClick={() => setActiveTab("student")}
                style={{
                  padding: "14px 34px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: "700",
                  fontSize: "1rem",
                  color: activeTab === "student" ? "white" : "#475569",
                  background: activeTab === "student"
                    ? "linear-gradient(135deg, #3b82f6, #1d4ed8)"
                    : "transparent",
                  boxShadow: activeTab === "student"
                    ? "4px 4px 10px rgba(59, 130, 246, 0.45), -2px -2px 6px rgba(255,255,255,0.8)"
                    : "none",
                  transition: "all 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <IconGraduationCap /> 🎓 Student Registration
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("faculty")}
                style={{
                  padding: "14px 34px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: "700",
                  fontSize: "1rem",
                  color: activeTab === "faculty" ? "white" : "#475569",
                  background: activeTab === "faculty"
                    ? "linear-gradient(135deg, #8b5cf6, #6d28d9)"
                    : "transparent",
                  boxShadow: activeTab === "faculty"
                    ? "4px 4px 10px rgba(139, 92, 246, 0.45), -2px -2px 6px rgba(255,255,255,0.8)"
                    : "none",
                  transition: "all 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <IconTeacher /> 🧑‍🏫 Teachers / Principal Registration
              </button>
            </div>
          </div>

          {/* Form Container Card */}
          <div style={{
            background: "#e0e5ec",
            borderRadius: "32px",
            boxShadow: "16px 16px 36px #a3b1c6, -16px -16px 36px #ffffff",
            padding: "48px 44px",
            position: "relative",
            overflow: "hidden",
          }}>

            {/* TAB 1: STUDENT REGISTRATION */}
            {activeTab === "student" && (
              <div>
                {studentSubmitted ? (
                  /* Student Success View & Pass */
                  <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <div style={{
                      width: "80px", height: "80px", borderRadius: "50%",
                      background: "linear-gradient(135deg, #10b981, #059669)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 24px", color: "white",
                      boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4), 6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
                    }}>
                      <IconCheck />
                    </div>

                    <div style={{
                      display: "inline-block", padding: "6px 18px", borderRadius: "50px",
                      background: "#e0e5ec", boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                      fontSize: "0.85rem", fontWeight: "700", color: "#10b981",
                      marginBottom: "16px", letterSpacing: "1px",
                    }}>
                      ENROLLMENT RECORD VERIFIED • {studentSubmitted.passId}
                    </div>

                    <h3 style={{ fontSize: "2.3rem", fontWeight: "800", color: "#1e293b", marginBottom: "12px", letterSpacing: "-0.5px" }}>
                      Welcome to Campus, {studentSubmitted.fullName}! 🎓
                    </h3>
                    <p style={{ fontSize: "1.05rem", color: "#64748b", maxWidth: "600px", margin: "0 auto 36px", lineHeight: "1.7" }}>
                      Your student admission pass has been registered on the EduSphere Academic Network. You can now download your digital verification pass and present it to your advisory teacher.
                    </p>

                    {/* Student Pass Badge Preview */}
                    <div style={{
                      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                      gap: "20px", textAlign: "left", marginBottom: "36px",
                    }}>
                      <div style={{
                        background: "#e0e5ec", borderRadius: "20px",
                        boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                        padding: "22px",
                      }}>
                        <div style={{ fontSize: "0.78rem", fontWeight: "700", color: "#3b82f6", textTransform: "uppercase", marginBottom: "6px" }}>
                          Student Identification
                        </div>
                        <div style={{ fontWeight: "800", color: "#1e293b", fontSize: "1.15rem" }}>{studentSubmitted.fullName}</div>
                        <div style={{ fontSize: "0.88rem", color: "#475569", marginTop: "4px" }}>LRN: <strong>{studentSubmitted.studentId}</strong></div>
                        <div style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "2px" }}>{studentSubmitted.email}</div>
                      </div>

                      <div style={{
                        background: "#e0e5ec", borderRadius: "20px",
                        boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                        padding: "22px",
                      }}>
                        <div style={{ fontSize: "0.78rem", fontWeight: "700", color: "#10b981", textTransform: "uppercase", marginBottom: "6px" }}>
                          Class & Academic Strand
                        </div>
                        <div style={{ fontWeight: "800", color: "#1e293b", fontSize: "1.1rem" }}>{studentSubmitted.gradeLevel}</div>
                        <div style={{ fontSize: "0.88rem", color: "#475569", marginTop: "4px" }}>{studentSubmitted.strand}</div>
                        <div style={{ fontSize: "0.85rem", color: "#059669", fontWeight: "600", marginTop: "2px" }}>
                          Section: {studentSubmitted.section}
                        </div>
                      </div>

                      <div style={{
                        background: "#e0e5ec", borderRadius: "20px",
                        boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                        padding: "22px",
                      }}>
                        <div style={{ fontSize: "0.78rem", fontWeight: "700", color: "#8b5cf6", textTransform: "uppercase", marginBottom: "6px" }}>
                          Safety & Emergency Contact
                        </div>
                        <div style={{ fontWeight: "800", color: "#1e293b", fontSize: "1.05rem" }}>{studentSubmitted.guardianName}</div>
                        <div style={{ fontSize: "0.88rem", color: "#475569", marginTop: "4px" }}>Hotline: {studentSubmitted.guardianPhone}</div>
                        <div style={{ fontSize: "0.85rem", color: "#10b981", marginTop: "2px", fontWeight: "600" }}>✓ FERPA Parent Link Active</div>
                      </div>
                    </div>

                    {/* Student Success Actions */}
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                      <button
                        type="button"
                        onClick={handleDownloadStudentPass}
                        style={{
                          padding: "16px 32px", borderRadius: "16px",
                          border: "none", cursor: "pointer",
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: "700", fontSize: "0.95rem",
                          color: "white",
                          background: "linear-gradient(135deg, #10b981, #059669)",
                          boxShadow: "6px 6px 14px rgba(16, 185, 129, 0.4), -2px -2px 8px rgba(255,255,255,0.8)",
                          display: "inline-flex", alignItems: "center", gap: "8px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <IconFileText /> Download Student Admission Pass (.txt)
                      </button>

                      <button
                        type="button"
                        onClick={handleResetStudent}
                        style={{
                          padding: "16px 28px", borderRadius: "16px",
                          border: "none", cursor: "pointer",
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: "600", fontSize: "0.95rem",
                          color: "#475569", background: "#e0e5ec",
                          boxShadow: "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
                          display: "inline-flex", alignItems: "center", gap: "8px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <IconRotate /> Register Another Student
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Student Registration Form */
                  <form onSubmit={handleStudentSubmit}>
                    
                    {/* Form Subheader & Demo Fill Button */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
                      <div>
                        <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#1e293b", margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ color: "#3b82f6" }}>🎓</span> Student Enrollment & Portal Form
                        </h3>
                        <p style={{ fontSize: "0.92rem", color: "#64748b", margin: "6px 0 0" }}>
                          Enter student credentials, grade level, and emergency guardian dispatch details.
                        </p>
                      </div>

                      <div style={{ display: "flex", gap: "12px" }}>
                        <button
                          type="button"
                          onClick={handleFillStudentDemo}
                          style={{
                            padding: "10px 20px", borderRadius: "14px",
                            border: "none", cursor: "pointer",
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: "700", fontSize: "0.85rem",
                            color: "#3b82f6", background: "#e0e5ec",
                            boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            transition: "all 0.2s ease",
                          }}
                        >
                          <IconSparkles /> Auto-Fill Student Demo
                        </button>

                        <button
                          type="button"
                          onClick={handleResetStudent}
                          style={{
                            padding: "10px 18px", borderRadius: "14px",
                            border: "none", cursor: "pointer",
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: "600", fontSize: "0.85rem",
                            color: "#64748b", background: "#e0e5ec",
                            boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                          }}
                        >
                          Clear
                        </button>
                      </div>
                    </div>

                    {/* Step 1: Personal Details */}
                    <div style={{ marginBottom: "32px" }}>
                      <div style={{
                        fontSize: "0.85rem", fontWeight: "700", color: "#3b82f6",
                        textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px",
                        display: "flex", alignItems: "center", gap: "8px",
                      }}>
                        <IconUser /> 1. Student Identification & Academic Details
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                        
                        {/* Student Name */}
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Student Complete Official Name *
                          </label>
                          <div style={{ position: "relative" }}>
                            <input
                              type="text"
                              value={studentForm.fullName}
                              onChange={(e) => handleStudentChange("fullName", e.target.value)}
                              placeholder="e.g. Janelle Marie Gomez"
                              style={{
                                width: "100%", padding: "14px 16px", borderRadius: "14px",
                                border: studentErrors.fullName ? "2px solid #ef4444" : "none",
                                background: "#e0e5ec",
                                boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                                fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                                outline: "none", boxSizing: "border-box",
                              }}
                            />
                          </div>
                          {studentErrors.fullName && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {studentErrors.fullName}
                            </span>
                          )}
                        </div>

                        {/* Student ID / LRN */}
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Student ID / Learner Reference Number (LRN) *
                          </label>
                          <input
                            type="text"
                            value={studentForm.studentId}
                            onChange={(e) => handleStudentChange("studentId", e.target.value)}
                            placeholder="e.g. LRN-2026-48910"
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: studentErrors.studentId ? "2px solid #ef4444" : "none",
                              background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                          {studentErrors.studentId && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {studentErrors.studentId}
                            </span>
                          )}
                        </div>

                        {/* Grade Level */}
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Grade / Year Level *
                          </label>
                          <select
                            value={studentForm.gradeLevel}
                            onChange={(e) => handleStudentChange("gradeLevel", e.target.value)}
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: "none", background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box", cursor: "pointer",
                            }}
                          >
                            <option value="Grade 7 - Junior High">Grade 7 - Junior High</option>
                            <option value="Grade 8 - Junior High">Grade 8 - Junior High</option>
                            <option value="Grade 9 - Junior High">Grade 9 - Junior High</option>
                            <option value="Grade 10 - Junior High">Grade 10 - Junior High</option>
                            <option value="Grade 11 - Senior High">Grade 11 - Senior High</option>
                            <option value="Grade 12 - Senior High">Grade 12 - Senior High</option>
                            <option value="Undergraduate - 1st Year">Undergraduate - 1st Year</option>
                            <option value="Undergraduate - 2nd Year">Undergraduate - 2nd Year</option>
                            <option value="Undergraduate - 3rd Year">Undergraduate - 3rd Year</option>
                            <option value="Undergraduate - 4th Year">Undergraduate - 4th Year</option>
                          </select>
                        </div>

                        {/* Strand / Major */}
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Academic Track / Strand / Program *
                          </label>
                          <select
                            value={studentForm.strand}
                            onChange={(e) => handleStudentChange("strand", e.target.value)}
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: "none", background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box", cursor: "pointer",
                            }}
                          >
                            <option value="STEM (Science, Tech, Eng & Math)">STEM (Science, Tech, Eng & Math)</option>
                            <option value="ABM (Accountancy & Business)">ABM (Accountancy & Business)</option>
                            <option value="HUMSS (Humanities & Social Sci)">HUMSS (Humanities & Social Sci)</option>
                            <option value="TVL / ICT & Computer Science">TVL / ICT & Computer Science</option>
                            <option value="GAS (General Academic Strand)">GAS (General Academic Strand)</option>
                            <option value="Arts & Design Track">Arts & Design Track</option>
                          </select>
                        </div>

                        {/* Section / Homeroom */}
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Section / Advisory Class
                          </label>
                          <input
                            type="text"
                            value={studentForm.section}
                            onChange={(e) => handleStudentChange("section", e.target.value)}
                            placeholder="e.g. Archimedes / Diamond / Section 1"
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: "none", background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                        </div>

                        {/* Student Email */}
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Student Email Address *
                          </label>
                          <input
                            type="email"
                            value={studentForm.email}
                            onChange={(e) => handleStudentChange("email", e.target.value)}
                            placeholder="student@students.edusphere.edu"
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: studentErrors.email ? "2px solid #ef4444" : "none",
                              background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                          {studentErrors.email && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {studentErrors.email}
                            </span>
                          )}
                        </div>

                      </div>
                    </div>

                    {/* Step 2: Emergency Contact & Guardian */}
                    <div style={{ marginBottom: "32px" }}>
                      <div style={{
                        fontSize: "0.85rem", fontWeight: "700", color: "#10b981",
                        textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px",
                        display: "flex", alignItems: "center", gap: "8px",
                      }}>
                        <IconPhone /> 2. Parent / Guardian Emergency Contact Records
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Parent / Guardian Full Name *
                          </label>
                          <input
                            type="text"
                            value={studentForm.guardianName}
                            onChange={(e) => handleStudentChange("guardianName", e.target.value)}
                            placeholder="e.g. Maria Corazon Gomez (Mother)"
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: studentErrors.guardianName ? "2px solid #ef4444" : "none",
                              background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                          {studentErrors.guardianName && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {studentErrors.guardianName}
                            </span>
                          )}
                        </div>

                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Emergency Contact Mobile / Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={studentForm.guardianPhone}
                            onChange={(e) => handleStudentChange("guardianPhone", e.target.value)}
                            placeholder="e.g. +63 (917) 845-2901"
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: studentErrors.guardianPhone ? "2px solid #ef4444" : "none",
                              background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                          {studentErrors.guardianPhone && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {studentErrors.guardianPhone}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Clubs & Extracurriculars */}
                    <div style={{ marginBottom: "32px" }}>
                      <div style={{
                        fontSize: "0.85rem", fontWeight: "700", color: "#8b5cf6",
                        textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px",
                        display: "flex", alignItems: "center", gap: "8px",
                      }}>
                        <IconBookOpen /> 3. Select Co-Curricular Clubs & Interests
                      </div>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        {[
                          "Robotics & AI Club",
                          "Debate & Speech Society",
                          "Campus Journalism & News",
                          "Mathematics Olympiad Guild",
                          "Performing Arts & Theater",
                          "Varsity Athletics & Badminton",
                          "Environmental & Green Club",
                          "Peer Counseling Guild",
                        ].map((interest) => {
                          const isSelected = studentForm.interests.includes(interest);
                          return (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => handleInterestToggle(interest)}
                              style={{
                                padding: "10px 18px", borderRadius: "30px",
                                border: "none", cursor: "pointer",
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: "600", fontSize: "0.85rem",
                                color: isSelected ? "white" : "#475569",
                                background: isSelected
                                  ? "linear-gradient(135deg, #8b5cf6, #3b82f6)"
                                  : "#e0e5ec",
                                boxShadow: isSelected
                                  ? "inset 2px 2px 4px rgba(0,0,0,0.2), 3px 3px 8px rgba(139, 92, 246, 0.35)"
                                  : "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                                transition: "all 0.2s ease",
                              }}
                            >
                              {isSelected ? "✓ " : "+ "} {interest}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 4: Password & Security */}
                    <div style={{ marginBottom: "32px" }}>
                      <div style={{
                        fontSize: "0.85rem", fontWeight: "700", color: "#f59e0b",
                        textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px",
                        display: "flex", alignItems: "center", gap: "8px",
                      }}>
                        <IconLock /> 4. Student Portal Login Credentials
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Create Portal Password *
                          </label>
                          <div style={{ position: "relative" }}>
                            <input
                              type={showStudentPassword ? "text" : "password"}
                              value={studentForm.password}
                              onChange={(e) => handleStudentChange("password", e.target.value)}
                              placeholder="Minimum 6 characters"
                              style={{
                                width: "100%", padding: "14px 44px 14px 16px", borderRadius: "14px",
                                border: studentErrors.password ? "2px solid #ef4444" : "none",
                                background: "#e0e5ec",
                                boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                                fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                                outline: "none", boxSizing: "border-box",
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => setShowStudentPassword(!showStudentPassword)}
                              style={{
                                position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
                                background: "none", border: "none", cursor: "pointer", color: "#64748b",
                                display: "flex", alignItems: "center",
                              }}
                            >
                              {showStudentPassword ? <IconEyeOff /> : <IconEye />}
                            </button>
                          </div>
                          {studentErrors.password && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {studentErrors.password}
                            </span>
                          )}
                        </div>

                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Confirm Portal Password *
                          </label>
                          <input
                            type={showStudentPassword ? "text" : "password"}
                            value={studentForm.confirmPassword}
                            onChange={(e) => handleStudentChange("confirmPassword", e.target.value)}
                            placeholder="Re-type password"
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: studentErrors.confirmPassword ? "2px solid #ef4444" : "none",
                              background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                          {studentErrors.confirmPassword && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {studentErrors.confirmPassword}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Step 5: Legal & Code of Conduct Acceptance */}
                    <div style={{
                      background: "#e0e5ec", borderRadius: "20px",
                      boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                      padding: "20px 24px", marginBottom: "32px",
                    }}>
                      <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={studentForm.agreeTerms}
                          onChange={(e) => handleStudentChange("agreeTerms", e.target.checked)}
                          style={{ marginTop: "4px", width: "18px", height: "18px", cursor: "pointer", accentColor: "#3b82f6" }}
                        />
                        <span style={{ fontSize: "0.9rem", color: "#334155", lineHeight: "1.6" }}>
                          I agree to uphold the <strong>School Honor Code</strong> and accept the{" "}
                          <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); openLegalModal("privacy"); }}
                            style={{
                              background: "none", border: "none", padding: 0,
                              color: "#3b82f6", fontWeight: "700", textDecoration: "underline",
                              cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                            }}
                          >
                            Student Data Privacy Charter (FERPA)
                          </button>
                          ,{" "}
                          <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); openLegalModal("safety"); }}
                            style={{
                              background: "none", border: "none", padding: 0,
                              color: "#10b981", fontWeight: "700", textDecoration: "underline",
                              cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                            }}
                          >
                            Campus Anti-Bullying Safety Policy
                          </button>
                          , and{" "}
                          <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); openLegalModal("conduct"); }}
                            style={{
                              background: "none", border: "none", padding: 0,
                              color: "#8b5cf6", fontWeight: "700", textDecoration: "underline",
                              cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                            }}
                          >
                            Digital Classroom Conduct Terms
                          </button>.
                        </span>
                      </label>
                      {studentErrors.agreeTerms && (
                        <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "8px", display: "block", fontWeight: "600" }}>
                          {studentErrors.agreeTerms}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <button
                        type="submit"
                        disabled={isStudentSubmitting}
                        style={{
                          padding: "18px 44px", borderRadius: "18px",
                          border: "none", cursor: isStudentSubmitting ? "not-allowed" : "pointer",
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: "800", fontSize: "1.05rem",
                          color: "white",
                          background: isStudentSubmitting
                            ? "#94a3b8"
                            : "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                          boxShadow: "6px 6px 16px rgba(59, 130, 246, 0.45), -3px -3px 8px rgba(255,255,255,0.8)",
                          display: "inline-flex", alignItems: "center", gap: "10px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {isStudentSubmitting ? (
                          <>
                            <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>⏳</span>
                            Generating Admission Pass...
                          </>
                        ) : (
                          <>
                            <IconGraduationCap /> Submit Student Registration & Generate Pass →
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}
              </div>
            )}

            {/* TAB 2: TEACHERS / PRINCIPAL REGISTRATION */}
            {activeTab === "faculty" && (
              <div>
                {facultySubmitted ? (
                  /* Faculty Success View & Pass */
                  <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <div style={{
                      width: "80px", height: "80px", borderRadius: "50%",
                      background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 24px", color: "white",
                      boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4), 6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
                    }}>
                      <IconCheck />
                    </div>

                    <div style={{
                      display: "inline-block", padding: "6px 18px", borderRadius: "50px",
                      background: "#e0e5ec", boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                      fontSize: "0.85rem", fontWeight: "700", color: "#8b5cf6",
                      marginBottom: "16px", letterSpacing: "1px",
                    }}>
                      FACULTY CREDENTIAL VERIFIED • {facultySubmitted.credentialId}
                    </div>

                    <h3 style={{ fontSize: "2.3rem", fontWeight: "800", color: "#1e293b", marginBottom: "12px", letterSpacing: "-0.5px" }}>
                      Welcome, {facultySubmitted.fullName}! 🧑‍🏫
                    </h3>
                    <p style={{ fontSize: "1.05rem", color: "#64748b", maxWidth: "620px", margin: "0 auto 36px", lineHeight: "1.7" }}>
                      Your academic leadership credentials have been validated. You now possess Level-1 Administrative Clearance for gradebook management, student attendance verification, and syllabus uploads.
                    </p>

                    {/* Faculty Credential Badge Preview */}
                    <div style={{
                      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                      gap: "20px", textAlign: "left", marginBottom: "36px",
                    }}>
                      <div style={{
                        background: "#e0e5ec", borderRadius: "20px",
                        boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                        padding: "22px",
                      }}>
                        <div style={{ fontSize: "0.78rem", fontWeight: "700", color: "#8b5cf6", textTransform: "uppercase", marginBottom: "6px" }}>
                          Faculty Designation
                        </div>
                        <div style={{ fontWeight: "800", color: "#1e293b", fontSize: "1.15rem" }}>{facultySubmitted.fullName}</div>
                        <div style={{ fontSize: "0.9rem", color: "#6d28d9", fontWeight: "700", marginTop: "4px" }}>
                          {facultySubmitted.role}
                        </div>
                        <div style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "2px" }}>
                          ID: <strong>{facultySubmitted.facultyId}</strong>
                        </div>
                      </div>

                      <div style={{
                        background: "#e0e5ec", borderRadius: "20px",
                        boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                        padding: "22px",
                      }}>
                        <div style={{ fontSize: "0.78rem", fontWeight: "700", color: "#3b82f6", textTransform: "uppercase", marginBottom: "6px" }}>
                          Institution & Department
                        </div>
                        <div style={{ fontWeight: "800", color: "#1e293b", fontSize: "1.05rem" }}>{facultySubmitted.institution}</div>
                        <div style={{ fontSize: "0.88rem", color: "#475569", marginTop: "4px" }}>{facultySubmitted.department}</div>
                        <div style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: "600", marginTop: "2px" }}>
                          {facultySubmitted.roomOffice}
                        </div>
                      </div>

                      <div style={{
                        background: "#e0e5ec", borderRadius: "20px",
                        boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                        padding: "22px",
                      }}>
                        <div style={{ fontSize: "0.78rem", fontWeight: "700", color: "#10b981", textTransform: "uppercase", marginBottom: "6px" }}>
                          Administrative Clearance
                        </div>
                        <div style={{ fontWeight: "800", color: "#1e293b", fontSize: "1.05rem" }}>Tier 1 - Academic Master</div>
                        <div style={{ fontSize: "0.88rem", color: "#475569", marginTop: "4px" }}>Exp: {facultySubmitted.experienceYears}</div>
                        <div style={{ fontSize: "0.85rem", color: "#10b981", marginTop: "2px", fontWeight: "600" }}>✓ Gradebook & Roster Authorized</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                      <button
                        type="button"
                        onClick={handleDownloadFacultyPass}
                        style={{
                          padding: "16px 32px", borderRadius: "16px",
                          border: "none", cursor: "pointer",
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: "700", fontSize: "0.95rem",
                          color: "white",
                          background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                          boxShadow: "6px 6px 14px rgba(139, 92, 246, 0.4), -2px -2px 8px rgba(255,255,255,0.8)",
                          display: "inline-flex", alignItems: "center", gap: "8px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <IconFileText /> Download Faculty Verification Pass (.txt)
                      </button>

                      <button
                        type="button"
                        onClick={handleResetFaculty}
                        style={{
                          padding: "16px 28px", borderRadius: "16px",
                          border: "none", cursor: "pointer",
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: "600", fontSize: "0.95rem",
                          color: "#475569", background: "#e0e5ec",
                          boxShadow: "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
                          display: "inline-flex", alignItems: "center", gap: "8px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <IconRotate /> Register Another Faculty
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Faculty Registration Form */
                  <form onSubmit={handleFacultySubmit}>
                    
                    {/* Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
                      <div>
                        <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#1e293b", margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ color: "#8b5cf6" }}>🧑‍🏫</span> Teachers & Principal Administrative Sign Up
                        </h3>
                        <p style={{ fontSize: "0.92rem", color: "#64748b", margin: "6px 0 0" }}>
                          Official verification for classroom educators, department heads, and school principals.
                        </p>
                      </div>

                      <div style={{ display: "flex", gap: "12px" }}>
                        <button
                          type="button"
                          onClick={handleFillFacultyDemo}
                          style={{
                            padding: "10px 20px", borderRadius: "14px",
                            border: "none", cursor: "pointer",
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: "700", fontSize: "0.85rem",
                            color: "#8b5cf6", background: "#e0e5ec",
                            boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            transition: "all 0.2s ease",
                          }}
                        >
                          <IconSparkles /> Auto-Fill Principal Demo
                        </button>

                        <button
                          type="button"
                          onClick={handleResetFaculty}
                          style={{
                            padding: "10px 18px", borderRadius: "14px",
                            border: "none", cursor: "pointer",
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: "600", fontSize: "0.85rem",
                            color: "#64748b", background: "#e0e5ec",
                            boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                          }}
                        >
                          Clear
                        </button>
                      </div>
                    </div>

                    {/* Step 1: Faculty Identification */}
                    <div style={{ marginBottom: "32px" }}>
                      <div style={{
                        fontSize: "0.85rem", fontWeight: "700", color: "#8b5cf6",
                        textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px",
                        display: "flex", alignItems: "center", gap: "8px",
                      }}>
                        <IconTeacher /> 1. Academic Role & Institutional Assignment
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                        
                        {/* Faculty Full Name */}
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Official Name & Academic Title *
                          </label>
                          <input
                            type="text"
                            value={facultyForm.fullName}
                            onChange={(e) => handleFacultyChange("fullName", e.target.value)}
                            placeholder="e.g. Dr. Roberto M. Reyes, Ph.D."
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: facultyErrors.fullName ? "2px solid #ef4444" : "none",
                              background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                          {facultyErrors.fullName && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {facultyErrors.fullName}
                            </span>
                          )}
                        </div>

                        {/* Role Selection */}
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Institutional Role / Position *
                          </label>
                          <select
                            value={facultyForm.role}
                            onChange={(e) => handleFacultyChange("role", e.target.value)}
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: "none", background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box", cursor: "pointer",
                            }}
                          >
                            <option value="Teacher / Faculty Instructor">Teacher / Faculty Instructor</option>
                            <option value="Department Head / Subject Chair">Department Head / Subject Chair</option>
                            <option value="Principal / Head of School">Principal / Head of School</option>
                            <option value="Vice Principal / Assistant Principal">Vice Principal / Assistant Principal</option>
                            <option value="Guidance Counselor">Guidance Counselor</option>
                            <option value="School Registrar / Academic Admin">School Registrar / Academic Admin</option>
                          </select>
                        </div>

                        {/* Employee / Faculty ID */}
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Employee / Faculty ID Number *
                          </label>
                          <input
                            type="text"
                            value={facultyForm.facultyId}
                            onChange={(e) => handleFacultyChange("facultyId", e.target.value)}
                            placeholder="e.g. FAC-2026-0419"
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: facultyErrors.facultyId ? "2px solid #ef4444" : "none",
                              background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                          {facultyErrors.facultyId && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {facultyErrors.facultyId}
                            </span>
                          )}
                        </div>

                        {/* School / Institution Name */}
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            School / Institution Name *
                          </label>
                          <input
                            type="text"
                            value={facultyForm.institution}
                            onChange={(e) => handleFacultyChange("institution", e.target.value)}
                            placeholder="e.g. St. Jude Science Academy"
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: facultyErrors.institution ? "2px solid #ef4444" : "none",
                              background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                          {facultyErrors.institution && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {facultyErrors.institution}
                            </span>
                          )}
                        </div>

                        {/* Department Area */}
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Department / Academic Discipline
                          </label>
                          <select
                            value={facultyForm.department}
                            onChange={(e) => handleFacultyChange("department", e.target.value)}
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: "none", background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box", cursor: "pointer",
                            }}
                          >
                            <option value="Science & Engineering Dept">Science & Engineering Dept</option>
                            <option value="Mathematics Department">Mathematics Department</option>
                            <option value="English & Language Studies">English & Language Studies</option>
                            <option value="Social Studies & Humanities">Social Studies & Humanities</option>
                            <option value="Computer Science & ICT">Computer Science & ICT</option>
                            <option value="Office of the Principal & Administration">Office of the Principal & Administration</option>
                            <option value="Physical Education & Health">Physical Education & Health</option>
                          </select>
                        </div>

                        {/* Campus Room / Office */}
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Campus Room / Office Location
                          </label>
                          <input
                            type="text"
                            value={facultyForm.roomOffice}
                            onChange={(e) => handleFacultyChange("roomOffice", e.target.value)}
                            placeholder="e.g. Science Complex, Rm 302"
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: "none", background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                        </div>

                      </div>
                    </div>

                    {/* Step 2: Contact & Official Verification */}
                    <div style={{ marginBottom: "32px" }}>
                      <div style={{
                        fontSize: "0.85rem", fontWeight: "700", color: "#3b82f6",
                        textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px",
                        display: "flex", alignItems: "center", gap: "8px",
                      }}>
                        <IconMail /> 2. Official Communication & Experience
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Institutional Email Address (.edu / school domain) *
                          </label>
                          <input
                            type="email"
                            value={facultyForm.email}
                            onChange={(e) => handleFacultyChange("email", e.target.value)}
                            placeholder="faculty.name@school.edu"
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: facultyErrors.email ? "2px solid #ef4444" : "none",
                              background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                          {facultyErrors.email && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {facultyErrors.email}
                            </span>
                          )}
                        </div>

                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Direct Contact / Mobile Number *
                          </label>
                          <input
                            type="tel"
                            value={facultyForm.phone}
                            onChange={(e) => handleFacultyChange("phone", e.target.value)}
                            placeholder="e.g. +63 (918) 552-3140"
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: facultyErrors.phone ? "2px solid #ef4444" : "none",
                              background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                          {facultyErrors.phone && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {facultyErrors.phone}
                            </span>
                          )}
                        </div>

                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Teaching / Leadership Experience
                          </label>
                          <select
                            value={facultyForm.experienceYears}
                            onChange={(e) => handleFacultyChange("experienceYears", e.target.value)}
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: "none", background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box", cursor: "pointer",
                            }}
                          >
                            <option value="1 - 2 Years">1 - 2 Years (Probationary / Junior)</option>
                            <option value="3 - 5 Years">3 - 5 Years (Tenured Faculty)</option>
                            <option value="5+ Years">5+ Years (Senior Educator)</option>
                            <option value="10+ Years">10+ Years (Master Teacher / Dept Chair)</option>
                            <option value="15+ Years">15+ Years (Executive Administration)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Password */}
                    <div style={{ marginBottom: "32px" }}>
                      <div style={{
                        fontSize: "0.85rem", fontWeight: "700", color: "#10b981",
                        textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px",
                        display: "flex", alignItems: "center", gap: "8px",
                      }}>
                        <IconLock /> 3. Faculty Portal Security
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Set Management Password *
                          </label>
                          <div style={{ position: "relative" }}>
                            <input
                              type={showFacultyPassword ? "text" : "password"}
                              value={facultyForm.password}
                              onChange={(e) => handleFacultyChange("password", e.target.value)}
                              placeholder="Minimum 6 characters"
                              style={{
                                width: "100%", padding: "14px 44px 14px 16px", borderRadius: "14px",
                                border: facultyErrors.password ? "2px solid #ef4444" : "none",
                                background: "#e0e5ec",
                                boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                                fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                                outline: "none", boxSizing: "border-box",
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => setShowFacultyPassword(!showFacultyPassword)}
                              style={{
                                position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
                                background: "none", border: "none", cursor: "pointer", color: "#64748b",
                                display: "flex", alignItems: "center",
                              }}
                            >
                              {showFacultyPassword ? <IconEyeOff /> : <IconEye />}
                            </button>
                          </div>
                          {facultyErrors.password && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {facultyErrors.password}
                            </span>
                          )}
                        </div>

                        <div>
                          <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                            Confirm Management Password *
                          </label>
                          <input
                            type={showFacultyPassword ? "text" : "password"}
                            value={facultyForm.confirmPassword}
                            onChange={(e) => handleFacultyChange("confirmPassword", e.target.value)}
                            placeholder="Re-type password"
                            style={{
                              width: "100%", padding: "14px 16px", borderRadius: "14px",
                              border: facultyErrors.confirmPassword ? "2px solid #ef4444" : "none",
                              background: "#e0e5ec",
                              boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                              fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#1e293b",
                              outline: "none", boxSizing: "border-box",
                            }}
                          />
                          {facultyErrors.confirmPassword && (
                            <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "4px", display: "block", fontWeight: "600" }}>
                              {facultyErrors.confirmPassword}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Step 4: Faculty Ethics & FERPA Compliance */}
                    <div style={{
                      background: "#e0e5ec", borderRadius: "20px",
                      boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                      padding: "20px 24px", marginBottom: "32px",
                    }}>
                      <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={facultyForm.agreeTerms}
                          onChange={(e) => handleFacultyChange("agreeTerms", e.target.checked)}
                          style={{ marginTop: "4px", width: "18px", height: "18px", cursor: "pointer", accentColor: "#8b5cf6" }}
                        />
                        <span style={{ fontSize: "0.9rem", color: "#334155", lineHeight: "1.6" }}>
                          As an educator/principal, I solemnly pledge to adhere to the <strong>Professional Code of Ethics for Teachers</strong> and honor the{" "}
                          <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); openLegalModal("privacy"); }}
                            style={{
                              background: "none", border: "none", padding: 0,
                              color: "#8b5cf6", fontWeight: "700", textDecoration: "underline",
                              cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                            }}
                          >
                            Student Record Data Protection Mandate (FERPA)
                          </button>
                          {" "}and the{" "}
                          <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); openLegalModal("safety"); }}
                            style={{
                              background: "none", border: "none", padding: 0,
                              color: "#10b981", fontWeight: "700", textDecoration: "underline",
                              cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                            }}
                          >
                            Child Protection & Campus Anti-Bullying Protocol
                          </button>.
                        </span>
                      </label>
                      {facultyErrors.agreeTerms && (
                        <span style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "8px", display: "block", fontWeight: "600" }}>
                          {facultyErrors.agreeTerms}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <button
                        type="submit"
                        disabled={isFacultySubmitting}
                        style={{
                          padding: "18px 44px", borderRadius: "18px",
                          border: "none", cursor: isFacultySubmitting ? "not-allowed" : "pointer",
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: "800", fontSize: "1.05rem",
                          color: "white",
                          background: isFacultySubmitting
                            ? "#94a3b8"
                            : "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                          boxShadow: "6px 6px 16px rgba(139, 92, 246, 0.45), -3px -3px 8px rgba(255,255,255,0.8)",
                          display: "inline-flex", alignItems: "center", gap: "10px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {isFacultySubmitting ? (
                          <>
                            <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>⏳</span>
                            Verifying Faculty Credentials...
                          </>
                        ) : (
                          <>
                            <IconTeacher /> Register Faculty Account & Generate Verification Pass →
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}
              </div>
            )}

          </div>
        </section>
      </ScrollReveal>

      {/* ========== CAMPUS SAFETY OVERVIEW SECTION ========== */}
      <ScrollReveal delay={0.1}>
        <section id="safety-overview" style={{ padding: "40px 2rem 80px", maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{
            background: "#e0e5ec", borderRadius: "32px",
            boxShadow: "14px 14px 28px #a3b1c6, -14px -14px 28px #ffffff",
            padding: "48px",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
              <div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "6px 18px", borderRadius: "50px",
                  background: "#e0e5ec", boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                  fontSize: "0.8rem", fontWeight: "700", color: "#8b5cf6",
                  marginBottom: "18px", textTransform: "uppercase", letterSpacing: "1px",
                }}>
                  <IconShield /> Student Welfare & Campus Safety
                </div>
                <h3 style={{ fontSize: "2.3rem", fontWeight: "800", color: "#1e293b", marginBottom: "16px" }}>
                  A Safe, Monitored & Zero-Harassment Environment
                </h3>
                <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: "1.8", marginBottom: "20px" }}>
                  Student safety goes far beyond physical gates. EduSphere integrates encrypted digital attendance check-ins, automated parent alerts when a student enters or leaves the campus, and confidential anti-bullying reporting for guidance counselors.
                </p>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={() => openLegalModal("safety")}
                    style={{
                      padding: "12px 24px", borderRadius: "14px", border: "none", cursor: "pointer",
                      background: "linear-gradient(135deg, #10b981, #059669)", color: "white",
                      fontFamily: "'Outfit', sans-serif", fontWeight: "700", fontSize: "0.9rem",
                      boxShadow: "4px 4px 10px rgba(16, 185, 129, 0.4)",
                    }}
                  >
                    Read Child Protection Charter
                  </button>
                  <button
                    type="button"
                    onClick={() => openLegalModal("privacy")}
                    style={{
                      padding: "12px 24px", borderRadius: "14px", border: "none", cursor: "pointer",
                      background: "#e0e5ec", color: "#475569",
                      fontFamily: "'Outfit', sans-serif", fontWeight: "700", fontSize: "0.9rem",
                      boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                    }}
                  >
                    FERPA Student Privacy Rules
                  </button>
                </div>
              </div>

              {/* Safety feature cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  {
                    icon: "🛡️",
                    title: "Confidential Anti-Bullying Hotwire",
                    desc: "Students can submit secure, anonymous incident logs directly to certified guidance counselors without fear of peer retaliation.",
                  },
                  {
                    icon: "📱",
                    title: "Automated Parent Gate Telemetry",
                    desc: "Instant SMS & App notification the exact second a student taps their RFID ID badge upon campus entry or dismissal.",
                  },
                  {
                    icon: "🏥",
                    title: "School Clinic & Health Passport",
                    desc: "Electronic nurse passes document student allergies, medications, and visits with instant emergency parent dispatch.",
                  },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: "flex", gap: "16px", alignItems: "center",
                    background: "#e0e5ec", borderRadius: "18px", padding: "18px 20px",
                    boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                  }}>
                    <div style={{ fontSize: "1.8rem" }}>{item.icon}</div>
                    <div>
                      <h4 style={{ fontSize: "1rem", fontWeight: "800", color: "#1e293b", margin: "0 0 4px" }}>{item.title}</h4>
                      <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0, lineHeight: "1.5" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========== TESTIMONIALS / COMMUNITY VOICES ========== */}
      <ScrollReveal delay={0.1}>
        <section id="testimonials" style={{ padding: "60px 2rem 80px", maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={{
              display: "inline-block", padding: "6px 20px", borderRadius: "50px",
              background: "#e0e5ec", boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
              fontSize: "0.8rem", fontWeight: "700", color: "#8b5cf6",
              marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1.5px",
            }}>
              School Community Feedback
            </div>
            <h2 style={{ fontSize: "2.6rem", fontWeight: "800", color: "#1e293b", letterSpacing: "-1px", marginBottom: "12px" }}>
              Trusted by School Leaders & Students
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#64748b", maxWidth: "580px", margin: "0 auto", lineHeight: "1.7" }}>
              Hear how EduSphere has transformed daily academic communication and student engagement across partner institutions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "#e0e5ec", borderRadius: "28px", padding: "36px 30px",
                  boxShadow: "10px 10px 22px #a3b1c6, -10px -10px 22px #ffffff",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", gap: "4px", marginBottom: "18px", color: "#f59e0b" }}>
                    {Array.from({ length: t.rating }).map((_, j) => <IconStar key={j} />)}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.8", marginBottom: "24px", fontStyle: "italic" }}>
                    "{t.text}"
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "14px",
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontWeight: "800", fontSize: "0.95rem",
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: "800", color: "#1e293b", fontSize: "0.98rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "2px" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ========== CALL TO ACTION (CTA) ========== */}
      <ScrollReveal delay={0.15}>
        <section style={{ padding: "40px 2rem 90px", maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{
            background: "#e0e5ec",
            boxShadow: "18px 18px 36px #a3b1c6, -18px -18px 36px #ffffff",
            borderRadius: "32px",
            padding: "60px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <h2 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#1e293b", marginBottom: "16px", letterSpacing: "-1px" }}>
              Ready to Connect Your School?
            </h2>
            <p style={{ fontSize: "1.12rem", color: "#64748b", maxWidth: "600px", margin: "0 auto 36px", lineHeight: "1.8" }}>
              Join thousands of enrolled students and verified faculty members. Register today to instantly access your digital school ID pass and grade portal.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="#registration"
                onClick={() => setActiveTab("student")}
                style={{
                  padding: "16px 36px", borderRadius: "18px",
                  textDecoration: "none", color: "white",
                  fontWeight: "700", fontSize: "1rem",
                  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                  boxShadow: "6px 6px 14px rgba(59, 130, 246, 0.45), -2px -2px 8px rgba(255,255,255,0.8)",
                  display: "inline-flex", alignItems: "center", gap: "10px",
                }}
              >
                <IconGraduationCap /> Student Sign Up
              </a>

              <a
                href="#registration"
                onClick={() => setActiveTab("faculty")}
                style={{
                  padding: "16px 36px", borderRadius: "18px",
                  textDecoration: "none", color: "#1e293b",
                  fontWeight: "700", fontSize: "1rem",
                  background: "#e0e5ec",
                  boxShadow: "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
                  display: "inline-flex", alignItems: "center", gap: "10px",
                }}
              >
                <IconTeacher /> Teachers & Principal Sign Up
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========== FOOTER ========== */}
      <footer style={{
        borderTop: "1px solid rgba(163, 177, 198, 0.45)",
        padding: "36px 2rem",
        maxWidth: "1240px",
        margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "20px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "12px",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white",
            boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
          }}>
            <IconGraduationCap />
          </div>
          <div>
            <span style={{ fontWeight: "800", color: "#1e293b", fontSize: "1.05rem" }}>
              Edu<span style={{ color: "#3b82f6" }}>Sphere</span>
            </span>
            <span style={{ fontSize: "0.8rem", color: "#64748b", marginLeft: "8px" }}>
              © 2026 EduSphere School Campus Network. All rights reserved.
            </span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "18px", alignItems: "center", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => openLegalModal("privacy")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "0.85rem", color: "#475569", fontWeight: "600",
              fontFamily: "'Outfit', sans-serif", textDecoration: "underline",
            }}
          >
            Student Data Privacy (FERPA)
          </button>

          <button
            type="button"
            onClick={() => openLegalModal("safety")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "0.85rem", color: "#475569", fontWeight: "600",
              fontFamily: "'Outfit', sans-serif", textDecoration: "underline",
            }}
          >
            Campus Child Protection Policy
          </button>

          <button
            type="button"
            onClick={() => openLegalModal("conduct")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "0.85rem", color: "#475569", fontWeight: "600",
              fontFamily: "'Outfit', sans-serif", textDecoration: "underline",
            }}
          >
            Academic Honor Code
          </button>
        </div>
      </footer>

      {/* ========== LEGAL MODAL (FERPA, SAFETY & CODE OF CONDUCT) ========== */}
      {legalModal.isOpen && (
        <div
          onClick={() => setLegalModal({ ...legalModal, isOpen: false })}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(30, 41, 59, 0.65)",
            backdropFilter: "blur(10px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#e0e5ec", borderRadius: "28px",
              boxShadow: "24px 24px 48px rgba(0,0,0,0.25), -12px -12px 36px rgba(255,255,255,0.8)",
              maxWidth: "780px", width: "100%", maxHeight: "88vh",
              display: "flex", flexDirection: "column", overflow: "hidden",
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: "26px 32px 18px", display: "flex", alignItems: "center",
              justifyContent: "space-between", borderBottom: "1px solid rgba(163, 177, 198, 0.4)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "12px",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "white",
                  boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
                }}>
                  <IconShield />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "#1e293b", margin: 0 }}>
                    EduSphere Campus Safety & Compliance Center
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", margin: "4px 0 0" }}>
                    Official educational privacy standards, anti-bullying protocols & campus regulations
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setLegalModal({ ...legalModal, isOpen: false })}
                style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  border: "none", cursor: "pointer", background: "#e0e5ec",
                  boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b",
                }}
              >
                <IconClose />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div style={{
              display: "flex", gap: "8px", padding: "14px 32px 0",
              borderBottom: "1px solid rgba(163, 177, 198, 0.25)",
            }}>
              {[
                { id: "privacy", label: "🔒 Student Data Privacy (FERPA)" },
                { id: "safety", label: "🛡️ Child Protection & Anti-Bullying" },
                { id: "conduct", label: "📜 Academic Honor Code" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setLegalModal({ ...legalModal, tab: tab.id as any })}
                  style={{
                    padding: "10px 18px", borderRadius: "12px 12px 0 0",
                    border: "none", cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                    fontWeight: "700", fontSize: "0.88rem",
                    color: legalModal.tab === tab.id ? "#3b82f6" : "#64748b",
                    background: legalModal.tab === tab.id ? "#e0e5ec" : "transparent",
                    boxShadow: legalModal.tab === tab.id
                      ? "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff"
                      : "none",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Body */}
            <div style={{ padding: "26px 32px", overflowY: "auto", fontSize: "0.95rem", color: "#334155", lineHeight: "1.75" }}>
              {legalModal.tab === "privacy" && (
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e293b", marginBottom: "10px" }}>
                    1. Student Record Protection & FERPA Compliance
                  </h4>
                  <p style={{ marginBottom: "16px" }}>
                    EduSphere strictly conforms with the <strong>Family Educational Rights and Privacy Act (FERPA)</strong>, the Children's Online Privacy Protection Act (COPPA), and National Data Privacy Acts. All student grades, medical records, emergency contacts, and behavioral reports are protected under strict administrative confidentiality.
                  </p>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                    2. Absolute Non-Commercialization Guarantee
                  </h4>
                  <p style={{ marginBottom: "16px" }}>
                    We maintain an irrevocable policy: <strong>EduSphere will NEVER monetize, lease, harvest, or sell student, guardian, or faculty records</strong> to advertising agencies, data aggregators, or third-party marketing brokers.
                  </p>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                    3. Parent / Guardian Access Rights
                  </h4>
                  <p>
                    Parents and legal guardians maintain full rights to review educational records, inspect electronic logs, and update emergency phone numbers at any time through the authorized school registrar.
                  </p>
                </div>
              )}

              {legalModal.tab === "safety" && (
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e293b", marginBottom: "10px" }}>
                    1. Child Protection & Zero-Tolerance Harassment
                  </h4>
                  <p style={{ marginBottom: "16px" }}>
                    All partner academic institutions strictly enforce a <strong>Zero-Tolerance Policy</strong> against bullying, cyber-bullying, discrimination, and physical or emotional intimidation within campus premises and on official school platforms.
                  </p>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                    2. Confidential Incident Dispatch
                  </h4>
                  <p style={{ marginBottom: "16px" }}>
                    Students or parents can trigger confidential safety notifications to certified guidance counselors and the Office of the Principal. Every report is audited within 12 hours under mandatory school protective protocols.
                  </p>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                    3. Emergency Notification Protocols
                  </h4>
                  <p>
                    In the event of severe inclement weather, health alerts, or unexpected dismissals, verified emergency SMS and email blasts are dispatched instantaneously to registered parents and faculty personnel.
                  </p>
                </div>
              )}

              {legalModal.tab === "conduct" && (
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#1e293b", marginBottom: "10px" }}>
                    1. Academic Integrity & Honor Pledge
                  </h4>
                  <p style={{ marginBottom: "16px" }}>
                    Students enrolled on EduSphere pledge that all submitted assignments, lab reports, homework papers, and examinations represent their own original academic work. Plagiarism and unauthorized generative AI cheating are subject to disciplinary review.
                  </p>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                    2. Educator Professional Ethics
                  </h4>
                  <p style={{ marginBottom: "16px" }}>
                    Teachers, Department Chairs, and Principals pledge to maintain impartial grading standards, professional decorum during student consultations, and strict preservation of sensitive gradebook data.
                  </p>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1e293b", marginBottom: "8px" }}>
                    3. Responsible Device & Network Usage
                  </h4>
                  <p>
                    Campus internet and digital portal tools must be utilized strictly for educational enrichment and curricular research. Unauthorized portal tampering or credential sharing will result in credential suspension.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: "18px 32px", borderTop: "1px solid rgba(163, 177, 198, 0.35)",
              display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px",
              background: "#e0e5ec",
            }}>
              <button
                type="button"
                onClick={() => setLegalModal({ ...legalModal, isOpen: false })}
                style={{
                  padding: "10px 22px", borderRadius: "12px", border: "none", cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif", fontWeight: "600", fontSize: "0.9rem",
                  color: "#64748b", background: "#e0e5ec",
                  boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
                }}
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  if (activeTab === "student") {
                    setStudentForm((prev) => ({ ...prev, agreeTerms: true }));
                    setStudentErrors((prev) => {
                      const copy = { ...prev };
                      delete copy.agreeTerms;
                      return copy;
                    });
                  } else {
                    setFacultyForm((prev) => ({ ...prev, agreeTerms: true }));
                    setFacultyErrors((prev) => {
                      const copy = { ...prev };
                      delete copy.agreeTerms;
                      return copy;
                    });
                  }
                  setLegalModal({ ...legalModal, isOpen: false });
                }}
                style={{
                  padding: "10px 24px", borderRadius: "12px", border: "none", cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif", fontWeight: "700", fontSize: "0.9rem",
                  color: "white",
                  background: activeTab === "student"
                    ? "linear-gradient(135deg, #3b82f6, #1d4ed8)"
                    : "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                  boxShadow: "4px 4px 10px rgba(59, 130, 246, 0.4)",
                }}
              >
                ✓ I Accept & Agree to School Policy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Inline Animation Keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
