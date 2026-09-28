"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";

/* ========== ICON COMPONENTS ========== */
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.01-8.63a8.27 8.27 0 0 0 4.84 1.55V4.78a4.85 4.85 0 0 1-1.06-.09z"/>
    </svg>
  );
}
function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
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
function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
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

function IconBuilding() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
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

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
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
          const step = end / 60;
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
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

/* ========== SCROLL REVEAL ========== */
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
      case "up": return "translateY(60px)";
      case "down": return "translateY(-60px)";
      case "left": return "translateX(60px)";
      case "right": return "translateX(-60px)";
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
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
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
        filter: blur ? (isVisible ? "blur(0px)" : "blur(8px)") : undefined,
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, filter 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}

/* ========== MAIN PAGE ========== */
export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [activePlan, setActivePlan] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    selectedPlan: "Growth ($400)",
    password: "",
    confirmPassword: "",
    platforms: ["Instagram", "TikTok"] as string[],
    notes: "",
    agreeTerms: false,
    subscribeNewsletter: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    id: string;
    fullName: string;
    email: string;
    phone: string;
    company: string;
    selectedPlan: string;
    platforms: string[];
    timestamp: string;
  } | null>(null);

  // Legal Modal State
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    tab: "privacy" | "safety" | "terms";
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

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData((prev) => {
      const exists = prev.platforms.includes(platform);
      return {
        ...prev,
        platforms: exists
          ? prev.platforms.filter((p) => p !== platform)
          : [...prev.platforms, platform],
      };
    });
  };

  const handleSelectPlan = (index: number) => {
    setActivePlan(index);
    const plan = plans[index];
    if (plan) {
      setFormData((prev) => ({ ...prev, selectedPlan: `${plan.name} ($${plan.price})` }));
    }
    const el = document.getElementById("signup");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleDemoFill = () => {
    setFormData({
      fullName: "Alex Morgan",
      email: "alex.morgan@nexussmm.io",
      phone: "+1 (555) 749-2810",
      company: "Nexus SMM Agency",
      selectedPlan: plans[activePlan] ? `${plans[activePlan].name} ($${plans[activePlan].price})` : "Growth ($400)",
      password: "StrongPassword@2026",
      confirmPassword: "StrongPassword@2026",
      platforms: ["Instagram", "TikTok", "Facebook"],
      notes: "Need rapid landing page launch with TikTok pixel integration & custom neomorphic lead dashboard.",
      agreeTerms: true,
      subscribeNewsletter: true,
    });
    setErrors({});
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      selectedPlan: "Growth ($400)",
      password: "",
      confirmPassword: "",
      platforms: ["Instagram", "TikTok"],
      notes: "",
      agreeTerms: false,
      subscribeNewsletter: false,
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name (minimum 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address.";
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim() || cleanPhone.length < 7) {
      errs.phone = "Please enter a valid phone number (at least 7 digits).";
    }
    if (!formData.password || formData.password.length < 6) {
      errs.password = "Password must be at least 6 characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = "Passwords do not match.";
    }
    if (!formData.agreeTerms) {
      errs.agreeTerms = "You must review and accept the Privacy Policy, Safety Guarantee, and Terms.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const el = document.getElementById("signup");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({
        id: `WSMM-${Math.floor(100000 + Math.random() * 900000)}`,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || "Independent SMM Creator",
        selectedPlan: formData.selectedPlan,
        platforms: formData.platforms,
        timestamp: new Date().toLocaleString(),
      });
      const el = document.getElementById("signup");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 1200);
  };

  const handleDownloadReceipt = () => {
    if (!submittedData) return;
    const content = `==========================================================
WEBSMM STUDIO - CLIENT ONBOARDING & REGISTRATION RECEIPT
==========================================================
Reference ID: ${submittedData.id}
Date & Time: ${submittedData.timestamp}

1. PERSONAL DETAILS:
- Full Name: ${submittedData.fullName}
- Contact Email: ${submittedData.email}
- Phone Number: ${submittedData.phone}
- Agency / Brand: ${submittedData.company}

2. PROJECT SCOPE & SELECTION:
- Selected Package: ${submittedData.selectedPlan}
- Target Social Networks: ${submittedData.platforms.join(", ")}

3. PRIVACY & SAFETY PROTOCOL:
- Status: Encrypted & Verified (AES-256)
- Compliance: GDPR & CCPA Standard
- Third-Party Data Selling: Strict Zero Policy
- OAuth Security: Hardware Sandboxed

Next Step: Your personal WebSMM project manager will contact you
via ${submittedData.email} within 2 business hours.
==========================================================`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `WebSMM-Registration-${submittedData.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const openLegalModal = (tab: "privacy" | "safety" | "terms") => {
    setLegalModal({ isOpen: true, tab });
  };

  const services = [
    {
      icon: "🎯",
      title: "SMM Landing Pages",
      desc: "High-converting landing pages engineered specifically to capture leads from your social media campaigns across all platforms.",
      features: ["A/B Testing Ready", "Mobile-First Design", "UTM Tracking Integration", "CTA Optimization"],
      color: "#7c5cbf",
    },
    {
      icon: "🛒",
      title: "Social Commerce Sites",
      desc: "Turn followers into buyers with seamlessly integrated e-commerce websites that sync with Instagram Shop and Facebook Marketplace.",
      features: ["Social Login", "Product Catalog Sync", "Checkout Optimization", "Review Integration"],
      color: "#4a90d9",
    },
    {
      icon: "📊",
      title: "Analytics Dashboards",
      desc: "Real-time data dashboards that pull insights from all your social channels into one beautiful, actionable interface.",
      features: ["Multi-Platform Data", "Custom KPI Widgets", "Automated Reports", "ROI Tracking"],
      color: "#d95ba3",
    },
    {
      icon: "🤖",
      title: "Automation Portals",
      desc: "Smart portals with AI-powered content scheduling, audience segmentation, and campaign management tools built right in.",
      features: ["AI Content Suggestions", "Auto-Scheduling", "Audience Insights", "Campaign Manager"],
      color: "#4ab9bf",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "200",
      period: "one-time",
      desc: "Perfect for freelancers and solo SMM consultants.",
      features: [
        "5-Page Landing Site",
        "Mobile Responsive",
        "Social Links Integration",
        "Basic Analytics",
        "1 Month Support",
        "2 Revisions",
      ],
      color: "#7c5cbf",
    },
    {
      name: "Growth",
      price: "400",
      period: "one-time",
      desc: "Ideal for SMM agencies scaling their client base.",
      badge: "Most Popular",
      features: [
        "15-Page Full Website",
        "CRM Integration",
        "Social Commerce Ready",
        "Advanced Analytics",
        "6 Months Support",
        "Unlimited Revisions",
        "Ad Pixel Setup",
        "SEO Optimization",
      ],
      color: "#4a90d9",
    },
    {
      name: "Agency",
      price: "600",
      period: "one-time",
      desc: "Enterprise-grade solution for full-service SMM agencies.",
      features: [
        "Unlimited Pages",
        "Multi-Brand Management",
        "Custom Automation Portal",
        "White-Label Option",
        "12 Months Support",
        "Priority Development",
        "API Integrations",
        "Dedicated Account Manager",
        "Training & Onboarding",
      ],
      color: "#d95ba3",
    },
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      role: "SMM Director, BrandBoost Agency",
      text: "Our client acquisition doubled after launching the new site. The integration with our Instagram campaigns was flawless.",
      rating: 5,
      avatar: "SK",
    },
    {
      name: "Marcus T.",
      role: "Founder, ViralMedia Co.",
      text: "The analytics dashboard alone is worth every penny. We can finally see our social ROI in real time.",
      rating: 5,
      avatar: "MT",
    },
    {
      name: "Lena R.",
      role: "Head of Digital, NovaSocial",
      text: "The neomorphic design aesthetic perfectly matched our brand. Our bounce rate dropped by 40% on day one.",
      rating: 5,
      avatar: "LR",
    },
  ];

  return (
    <div style={{ background: "#e0e5ec", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* ========== NAVBAR ========== */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(224, 229, 236, 0.85)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 4px 20px rgba(163, 177, 198, 0.4), 0 -1px 0 rgba(255,255,255,0.8)",
        padding: "0 2rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "42px", height: "42px", borderRadius: "12px",
              background: "linear-gradient(135deg, #7c5cbf, #4a90d9)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
              color: "white", fontSize: "18px", fontWeight: "700",
            }}>W</div>
            <span style={{ fontWeight: "700", fontSize: "1.2rem", color: "#2d3561", letterSpacing: "-0.5px" }}>
              Web<span style={{ color: "#7c5cbf" }}>SMM</span>
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            {[
              { label: "Services", href: "#services" },
              { label: "About", href: "#about" },
              { label: "Pricing", href: "#pricing" },
              { label: "Sign Up", href: "#signup" },
              { label: "Testimonials", href: "#testimonials" },
            ].map((item) => (
              <a key={item.label} href={item.href} style={{
                padding: "8px 18px",
                borderRadius: "30px",
                textDecoration: "none",
                color: "#6b7a99",
                fontWeight: "500",
                fontSize: "0.9rem",
                transition: "all 0.2s ease",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.background = "#e0e5ec";
                (e.target as HTMLAnchorElement).style.boxShadow = "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff";
                (e.target as HTMLAnchorElement).style.color = "#2d3561";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.background = "transparent";
                (e.target as HTMLAnchorElement).style.boxShadow = "none";
                (e.target as HTMLAnchorElement).style.color = "#6b7a99";
              }}>
                {item.label}
              </a>
            ))}
          </div>

          <a href="#signup" style={{
            padding: "10px 24px",
            borderRadius: "30px",
            textDecoration: "none",
            color: "white",
            fontWeight: "600",
            fontSize: "0.9rem",
            background: "linear-gradient(135deg, #7c5cbf, #4a90d9)",
            boxShadow: "4px 4px 10px rgba(124, 92, 191, 0.4), -2px -2px 6px rgba(255,255,255,0.7)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLAnchorElement).style.transform = "translateY(-2px)";
            (e.target as HTMLAnchorElement).style.boxShadow = "6px 8px 16px rgba(124, 92, 191, 0.5), -2px -2px 8px rgba(255,255,255,0.8)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.target as HTMLAnchorElement).style.boxShadow = "4px 4px 10px rgba(124, 92, 191, 0.4), -2px -2px 6px rgba(255,255,255,0.7)";
          }}>
            Get Started
          </a>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <ScrollReveal delay={0.1}>
      <section style={{ padding: "80px 2rem 60px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div style={{ animation: "fadeInUp 0.8s ease forwards" }}>
            {/* Pill badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "8px 18px", borderRadius: "50px",
              background: "#e0e5ec",
              boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
              marginBottom: "28px",
            }}>
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "linear-gradient(135deg, #7c5cbf, #4ab9bf)",
                display: "inline-block",
                animation: "pulse-glow 2s ease infinite",
              }}/>
              <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "#7c5cbf" }}>
                #1 SMM Web Development Studio
              </span>
            </div>

            <h1 style={{
              fontSize: "3.5rem", fontWeight: "800", lineHeight: "1.15",
              color: "#2d3561", marginBottom: "24px", letterSpacing: "-1.5px",
            }}>
              Websites That{" "}
              <span style={{
                background: "linear-gradient(135deg, #7c5cbf, #4a90d9, #d95ba3)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradient-shift 3s ease infinite",
              }}>
                Amplify
              </span>{" "}
              Your Social Media Growth
            </h1>

            <p style={{
              fontSize: "1.15rem", color: "#6b7a99", lineHeight: "1.8",
              marginBottom: "40px", fontWeight: "400",
            }}>
              We craft high-converting websites specifically engineered for SMM success — 
              seamlessly integrated with every platform, perfectly optimized for ad traffic.
            </p>

            {/* Social icons row */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "40px" }}>
              {[
                { icon: <IconInstagram/>, color: "#d95ba3" },
                { icon: <IconFacebook/>, color: "#4a90d9" },
                { icon: <IconTikTok/>, color: "#2d3561" },
                { icon: <IconLinkedin/>, color: "#0077b5" },
              ].map((social, i) => (
                <div key={i} style={{
                  width: "48px", height: "48px", borderRadius: "14px",
                  background: "#e0e5ec",
                  boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: social.color,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}>
                  {social.icon}
                </div>
              ))}
              <span style={{ color: "#6b7a99", fontSize: "0.85rem", alignSelf: "center", marginLeft: "4px" }}>
                Integrated with all platforms
              </span>
            </div>

            <div style={{ display: "flex", gap: "16px" }}>
              <a href="#signup" style={{
                padding: "16px 32px", borderRadius: "16px",
                textDecoration: "none", color: "white",
                fontWeight: "700", fontSize: "1rem",
                background: "linear-gradient(135deg, #7c5cbf, #4a90d9)",
                boxShadow: "6px 6px 12px rgba(124, 92, 191, 0.4), -2px -2px 8px rgba(255,255,255,0.7)",
                display: "flex", alignItems: "center", gap: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
                Start Your Project <IconArrow/>
              </a>
              <a href="#services" style={{
                padding: "16px 32px", borderRadius: "16px",
                textDecoration: "none", color: "#2d3561",
                fontWeight: "600", fontSize: "1rem",
                background: "#e0e5ec",
                boxShadow: "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff";
              }}>
                View Services
              </a>
            </div>
          </div>

          {/* Hero image card */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "28px",
              background: "#e0e5ec",
              boxShadow: "20px 20px 40px #a3b1c6, -20px -20px 40px #ffffff",
              padding: "8px",
              animation: "float 5s ease-in-out infinite",
            }}>
              <Image
                src="/smm-hero.jpg"
                alt="SMM Website Development Illustration"
                width={600}
                height={380}
                style={{ borderRadius: "22px", width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
            {/* Floating stat cards */}
            <div style={{
              position: "absolute", bottom: "-20px", left: "-30px",
              background: "#e0e5ec",
              boxShadow: "10px 10px 20px #a3b1c6, -10px -10px 20px #ffffff",
              borderRadius: "18px",
              padding: "16px 22px",
              animation: "float 4s ease-in-out infinite 1s",
            }}>
              <div style={{ fontSize: "1.6rem", fontWeight: "800", color: "#7c5cbf" }}>
                <Counter end={98} suffix="%" />
              </div>
              <div style={{ fontSize: "0.8rem", color: "#6b7a99", fontWeight: "500" }}>Client Satisfaction</div>
            </div>
            <div style={{
              position: "absolute", top: "-20px", right: "-20px",
              background: "#e0e5ec",
              boxShadow: "10px 10px 20px #a3b1c6, -10px -10px 20px #ffffff",
              borderRadius: "18px",
              padding: "16px 22px",
              animation: "float 4.5s ease-in-out infinite 0.5s",
            }}>
              <div style={{ fontSize: "1.6rem", fontWeight: "800", color: "#4a90d9" }}>
                <Counter end={250} suffix="+" />
              </div>
              <div style={{ fontSize: "0.8rem", color: "#6b7a99", fontWeight: "500" }}>Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ========== STATS BAR ========== */}
      <ScrollReveal delay={0.15} blur={true}>
      <section style={{ padding: "40px 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          background: "#e0e5ec",
          borderRadius: "24px",
          boxShadow: "inset 6px 6px 14px #a3b1c6, inset -6px -6px 14px #ffffff",
          padding: "32px 40px",
        }}>
          {[
            { label: "SMM Campaigns Supported", value: 500, suffix: "+" },
            { label: "Avg. Conversion Boost", value: 3, suffix: "x" },
            { label: "Platform Integrations", value: 12, suffix: "+" },
            { label: "ROI Increase Avg.", value: 180, suffix: "%" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "#2d3561", lineHeight: "1" }}>
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: "0.85rem", color: "#6b7a99", marginTop: "6px", fontWeight: "500" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* ========== SERVICES ========== */}
      <ScrollReveal delay={0.1}>
      <section id="services" style={{ padding: "80px 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{
            display: "inline-block",
            padding: "6px 20px", borderRadius: "50px",
            background: "#e0e5ec",
            boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
            fontSize: "0.8rem", fontWeight: "600", color: "#7c5cbf",
            marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1.5px",
          }}>Our Services</div>
          <h2 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#2d3561", marginBottom: "16px", letterSpacing: "-1px" }}>
            Built For Social Success
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#6b7a99", maxWidth: "560px", margin: "0 auto", lineHeight: "1.7" }}>
            Every service is meticulously crafted to bridge the gap between your social media presence and your web experience.
          </p>
        </div>

        {/* Service Tabs */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "32px", justifyContent: "center", flexWrap: "wrap" }}>
          {services.map((s, i) => (
            <button key={i} onClick={() => setActiveService(i)} style={{
              padding: "12px 24px", borderRadius: "50px",
              border: "none", cursor: "pointer",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: "600", fontSize: "0.9rem",
              color: activeService === i ? "white" : "#6b7a99",
              background: activeService === i ? `linear-gradient(135deg, ${s.color}, ${s.color}aa)` : "#e0e5ec",
              boxShadow: activeService === i
                ? `4px 4px 12px ${s.color}66, -2px -2px 8px rgba(255,255,255,0.8)`
                : "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
              transition: "all 0.3s ease",
            }}>
              {s.icon} {s.title}
            </button>
          ))}
        </div>

        {/* Service Detail Card */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px",
          background: "#e0e5ec",
          borderRadius: "28px",
          boxShadow: "16px 16px 32px #a3b1c6, -16px -16px 32px #ffffff",
          padding: "48px",
        }}>
          <div>
            <div style={{
              width: "72px", height: "72px", borderRadius: "20px",
              background: "#e0e5ec",
              boxShadow: `6px 6px 14px #a3b1c6, -6px -6px 14px #ffffff, inset 0 0 0 2px ${services[activeService].color}22`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "2rem", marginBottom: "24px",
            }}>
              {services[activeService].icon}
            </div>
            <h3 style={{ fontSize: "2rem", fontWeight: "800", color: "#2d3561", marginBottom: "16px", letterSpacing: "-0.5px" }}>
              {services[activeService].title}
            </h3>
            <p style={{ fontSize: "1.05rem", color: "#6b7a99", lineHeight: "1.8", marginBottom: "32px" }}>
              {services[activeService].desc}
            </p>
            <a href="#signup" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "14px 28px", borderRadius: "14px",
              textDecoration: "none", color: "white",
              fontWeight: "700", fontSize: "0.95rem",
              background: `linear-gradient(135deg, ${services[activeService].color}, ${services[activeService].color}bb)`,
              boxShadow: `6px 6px 14px ${services[activeService].color}44, -2px -2px 8px rgba(255,255,255,0.7)`,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
              Get This Service <IconArrow/>
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", justifyContent: "center" }}>
            {services[activeService].features.map((feat, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "16px 20px", borderRadius: "16px",
                background: "#e0e5ec",
                boxShadow: "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff";
                (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff";
                (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
              }}>
                <div style={{
                  width: "34px", height: "34px", borderRadius: "10px",
                  background: `linear-gradient(135deg, ${services[activeService].color}, ${services[activeService].color}88)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", flexShrink: 0,
                }}>
                  <IconCheck/>
                </div>
                <span style={{ fontWeight: "600", color: "#2d3561", fontSize: "0.95rem" }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ========== ABOUT / PROCESS ========== */}
      <ScrollReveal delay={0.1}>
      <section id="about" style={{ padding: "80px 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{
            display: "inline-block",
            padding: "6px 20px", borderRadius: "50px",
            background: "#e0e5ec",
            boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
            fontSize: "0.8rem", fontWeight: "600", color: "#4a90d9",
            marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1.5px",
          }}>Our Process</div>
          <h2 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#2d3561", letterSpacing: "-1px" }}>
            From Concept to Conversion
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {[
            { step: "01", title: "Discovery", icon: "🔍", desc: "We deep-dive into your brand, target audience, and campaign goals." },
            { step: "02", title: "Strategy", icon: "📋", desc: "Crafting a bespoke web strategy tailored to your SMM funnel." },
            { step: "03", title: "Design & Build", icon: "🎨", desc: "Pixel-perfect neomorphic UI built for peak social ad traffic." },
            { step: "04", title: "Launch & Grow", icon: "🚀", desc: "Deploy, integrate with all your platforms, and optimize for ROI." },
          ].map((step, i) => (
            <div key={i} style={{
              background: "#e0e5ec",
              boxShadow: "12px 12px 24px #a3b1c6, -12px -12px 24px #ffffff",
              borderRadius: "24px",
              padding: "32px 24px",
              textAlign: "center",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = "16px 16px 32px #a3b1c6, -16px -16px 32px #ffffff, 0 0 0 2px #7c5cbf44";
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = "12px 12px 24px #a3b1c6, -12px -12px 24px #ffffff";
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
            }}>
              <div style={{
                display: "inline-block",
                fontSize: "0.75rem", fontWeight: "800", color: "#7c5cbf",
                background: "#e0e5ec",
                boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                borderRadius: "10px", padding: "4px 12px",
                marginBottom: "16px", letterSpacing: "1px",
              }}>
                {step.step}
              </div>
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{step.icon}</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#2d3561", marginBottom: "10px" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#6b7a99", lineHeight: "1.7" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* ========== PRICING ========== */}
      <ScrollReveal delay={0.1}>
      <section id="pricing" style={{ padding: "80px 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{
            display: "inline-block",
            padding: "6px 20px", borderRadius: "50px",
            background: "#e0e5ec",
            boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
            fontSize: "0.8rem", fontWeight: "600", color: "#d95ba3",
            marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1.5px",
          }}>Transparent Pricing</div>
          <h2 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#2d3561", marginBottom: "16px", letterSpacing: "-1px" }}>
            Choose Your Growth Plan
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#6b7a99", maxWidth: "500px", margin: "0 auto" }}>
            Flat-rate pricing. No hidden fees. Pure value for your SMM business.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
          {plans.map((plan, i) => (
            <div key={i} onClick={() => setActivePlan(i)} style={{
              background: "#e0e5ec",
              boxShadow: activePlan === i
                ? `inset 6px 6px 14px #a3b1c6, inset -6px -6px 14px #ffffff, 0 0 0 3px ${plan.color}66`
                : "12px 12px 24px #a3b1c6, -12px -12px 24px #ffffff",
              borderRadius: "28px",
              padding: "40px 32px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: activePlan === i ? "scale(1.02)" : "scale(1)",
              position: "relative",
              overflow: "visible",
            }}>
              {plan.badge && (
                <div style={{
                  position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                  background: `linear-gradient(135deg, ${plan.color}, #4a90d9)`,
                  color: "white", fontWeight: "700", fontSize: "0.78rem",
                  padding: "6px 20px", borderRadius: "50px",
                  boxShadow: `0 4px 12px ${plan.color}55`,
                  whiteSpace: "nowrap",
                }}>
                  ⭐ {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: "24px" }}>
                <div style={{ fontSize: "0.95rem", fontWeight: "700", color: plan.color, marginBottom: "4px" }}>
                  {plan.name}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span style={{ fontSize: "1rem", color: "#6b7a99", fontWeight: "500" }}>$</span>
                  <span style={{ fontSize: "3rem", fontWeight: "800", color: "#2d3561", lineHeight: "1" }}>{plan.price}</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "#6b7a99", marginTop: "4px" }}>{plan.period}</div>
              </div>

              <p style={{ fontSize: "0.9rem", color: "#6b7a99", lineHeight: "1.6", marginBottom: "24px" }}>
                {plan.desc}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "22px", height: "22px", borderRadius: "8px",
                      background: `linear-gradient(135deg, ${plan.color}, ${plan.color}88)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "white", flexShrink: 0,
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: "0.88rem", color: "#2d3561", fontWeight: "500" }}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectPlan(i);
                }}
                style={{
                  width: "100%", padding: "16px", borderRadius: "16px",
                  border: "none", cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: "700", fontSize: "0.95rem",
                  color: activePlan === i ? "white" : "#2d3561",
                  background: activePlan === i
                    ? `linear-gradient(135deg, ${plan.color}, ${plan.color}bb)`
                    : "#e0e5ec",
                  boxShadow: activePlan === i
                    ? `4px 4px 12px ${plan.color}55, -2px -2px 8px rgba(255,255,255,0.8)`
                    : "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
                  transition: "all 0.3s ease",
                }}
              >
                {activePlan === i ? "Selected — Continue to Sign Up ↓" : "Select Plan & Sign Up"}
              </button>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* ========== CLIENT SIGN UP & REGISTRATION ========== */}
      <ScrollReveal delay={0.1}>
      <section id="signup" style={{ padding: "80px 2rem 60px", maxWidth: "1150px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 20px", borderRadius: "50px",
            background: "#e0e5ec",
            boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
            fontSize: "0.8rem", fontWeight: "600", color: "#7c5cbf",
            marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1.5px",
          }}>
            <IconSparkles /> Client Onboarding & Registration
          </div>
          <h2 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#2d3561", marginBottom: "16px", letterSpacing: "-1px" }}>
            Start Your SMM Project
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#6b7a99", maxWidth: "600px", margin: "0 auto", lineHeight: "1.7" }}>
            Lock in your flat pricing and submit your details to initialize your bespoke web development portal with 24/7 dedicated engineering support.
          </p>
        </div>

        {/* Main Form Container Card */}
        <div style={{
          background: "#e0e5ec",
          borderRadius: "32px",
          boxShadow: "16px 16px 36px #a3b1c6, -16px -16px 36px #ffffff",
          padding: "48px 44px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Subtle Ambient Decorative Glow */}
          <div style={{
            position: "absolute", top: "-100px", right: "-100px",
            width: "300px", height: "300px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124, 92, 191, 0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {isSubmitted && submittedData ? (
            /* ========== SUCCESS VIEW / SUBMITTED RECEIPT ========== */
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{
                width: "80px", height: "80px", borderRadius: "50%",
                background: "linear-gradient(135deg, #10b981, #059669)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px",
                color: "white",
                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4), 6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <div style={{
                display: "inline-block",
                padding: "6px 16px", borderRadius: "50px",
                background: "#e0e5ec",
                boxShadow: "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
                fontSize: "0.85rem", fontWeight: "700", color: "#10b981",
                marginBottom: "16px", letterSpacing: "1px",
              }}>
                REGISTRATION CONFIRMED • {submittedData.id}
              </div>

              <h3 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#2d3561", marginBottom: "12px", letterSpacing: "-0.5px" }}>
                Welcome Aboard, {submittedData.fullName}! 🎉
              </h3>
              <p style={{ fontSize: "1.05rem", color: "#6b7a99", maxWidth: "600px", margin: "0 auto 36px", lineHeight: "1.7" }}>
                Your project data has been submitted and securely logged in our client queue. Your dedicated SMM technical architect will review your project requirements and connect via email.
              </p>

              {/* Data Summary Grid */}
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px", textAlign: "left", marginBottom: "36px",
              }}>
                <div style={{
                  background: "#e0e5ec",
                  borderRadius: "20px",
                  boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                  padding: "20px",
                }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: "700", color: "#7c5cbf", textTransform: "uppercase", marginBottom: "6px" }}>
                    Personal Details
                  </div>
                  <div style={{ fontWeight: "700", color: "#2d3561", fontSize: "1.05rem" }}>{submittedData.fullName}</div>
                  <div style={{ fontSize: "0.9rem", color: "#6b7a99", marginTop: "4px" }}>{submittedData.email}</div>
                  <div style={{ fontSize: "0.85rem", color: "#6b7a99", marginTop: "2px" }}>{submittedData.phone}</div>
                </div>

                <div style={{
                  background: "#e0e5ec",
                  borderRadius: "20px",
                  boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                  padding: "20px",
                }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: "700", color: "#4a90d9", textTransform: "uppercase", marginBottom: "6px" }}>
                    Agency & Platforms
                  </div>
                  <div style={{ fontWeight: "700", color: "#2d3561", fontSize: "1.05rem" }}>{submittedData.company}</div>
                  <div style={{ fontSize: "0.9rem", color: "#6b7a99", marginTop: "4px" }}>
                    {submittedData.platforms.length > 0 ? submittedData.platforms.join(" • ") : "All Social Platforms"}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#10b981", marginTop: "2px", fontWeight: "600" }}>✓ Priority Sync Enabled</div>
                </div>

                <div style={{
                  background: "#e0e5ec",
                  borderRadius: "20px",
                  boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                  padding: "20px",
                }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: "700", color: "#d95ba3", textTransform: "uppercase", marginBottom: "6px" }}>
                    Package & Security
                  </div>
                  <div style={{ fontWeight: "700", color: "#2d3561", fontSize: "1.05rem" }}>{submittedData.selectedPlan}</div>
                  <div style={{ fontSize: "0.9rem", color: "#6b7a99", marginTop: "4px" }}>AES-256 Encrypted Vault</div>
                  <div style={{ fontSize: "0.85rem", color: "#10b981", marginTop: "2px", fontWeight: "600" }}>✓ Zero Resale Guaranteed</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={handleDownloadReceipt}
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
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
                >
                  <IconFileText /> Download Receipt (.txt)
                </button>

                <button
                  type="button"
                  onClick={handleResetForm}
                  style={{
                    padding: "16px 32px", borderRadius: "16px",
                    border: "none", cursor: "pointer",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: "600", fontSize: "0.95rem",
                    color: "#2d3561",
                    background: "#e0e5ec",
                    boxShadow: "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff";
                  }}
                >
                  <IconRotate /> Submit Another Project / Edit
                </button>
              </div>
            </div>
          ) : (
            /* ========== ACTIVE SIGN UP FORM ========== */
            <form onSubmit={handleSubmit}>
              {/* Form Top Utility Bar */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                marginBottom: "32px", paddingBottom: "20px",
                borderBottom: "1px solid rgba(163, 177, 198, 0.35)",
                flexWrap: "wrap", gap: "12px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{
                    width: "10px", height: "10px", borderRadius: "50%",
                    background: "#10b981", display: "inline-block",
                    boxShadow: "0 0 8px #10b981",
                  }} />
                  <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "#2d3561" }}>
                    Secure 256-bit SSL Onboarding Pipeline
                  </span>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={handleDemoFill}
                    style={{
                      padding: "8px 16px", borderRadius: "10px",
                      border: "none", cursor: "pointer",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem", fontWeight: "600",
                      color: "#7c5cbf", background: "#e0e5ec",
                      boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
                      display: "flex", alignItems: "center", gap: "6px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff";
                    }}
                  >
                    <IconSparkles /> Auto-Fill Demo Info
                  </button>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    style={{
                      padding: "8px 16px", borderRadius: "10px",
                      border: "none", cursor: "pointer",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem", fontWeight: "600",
                      color: "#6b7a99", background: "#e0e5ec",
                      boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
                      display: "flex", alignItems: "center", gap: "6px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff";
                    }}
                  >
                    <IconRotate /> Clear
                  </button>
                </div>
              </div>

              {/* SECTION 1: Personal Details */}
              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "8px",
                    background: "linear-gradient(135deg, #7c5cbf, #4a90d9)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontSize: "0.8rem", fontWeight: "700",
                  }}>1</div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#2d3561" }}>
                    Personal & Contact Information
                  </h4>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  {/* Full Name */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#2d3561", marginBottom: "8px" }}>
                      Full Name <span style={{ color: "#e53935" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#7c5cbf", display: "flex" }}>
                        <IconUser />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Daniella Vance"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        style={{
                          width: "100%", height: "50px",
                          padding: "0 18px 0 46px",
                          borderRadius: "14px", border: "none",
                          background: "#e0e5ec",
                          boxShadow: errors.fullName
                            ? "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff, 0 0 0 2px #e53935"
                            : "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                          fontSize: "0.95rem", color: "#2d3561",
                          fontFamily: "'Outfit', sans-serif",
                          outline: "none",
                        }}
                      />
                    </div>
                    {errors.fullName && (
                      <span style={{ fontSize: "0.8rem", color: "#e53935", marginTop: "6px", display: "block", fontWeight: "500" }}>
                        ⚠️ {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#2d3561", marginBottom: "8px" }}>
                      Work / Personal Email <span style={{ color: "#e53935" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#7c5cbf", display: "flex" }}>
                        <IconMail />
                      </div>
                      <input
                        type="email"
                        placeholder="e.g. daniella@brandgrowth.io"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        style={{
                          width: "100%", height: "50px",
                          padding: "0 18px 0 46px",
                          borderRadius: "14px", border: "none",
                          background: "#e0e5ec",
                          boxShadow: errors.email
                            ? "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff, 0 0 0 2px #e53935"
                            : "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                          fontSize: "0.95rem", color: "#2d3561",
                          fontFamily: "'Outfit', sans-serif",
                          outline: "none",
                        }}
                      />
                    </div>
                    {errors.email && (
                      <span style={{ fontSize: "0.8rem", color: "#e53935", marginTop: "6px", display: "block", fontWeight: "500" }}>
                        ⚠️ {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#2d3561", marginBottom: "8px" }}>
                      Phone / WhatsApp Number <span style={{ color: "#e53935" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#7c5cbf", display: "flex" }}>
                        <IconPhone />
                      </div>
                      <input
                        type="tel"
                        placeholder="e.g. +1 (555) 234-5678"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        style={{
                          width: "100%", height: "50px",
                          padding: "0 18px 0 46px",
                          borderRadius: "14px", border: "none",
                          background: "#e0e5ec",
                          boxShadow: errors.phone
                            ? "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff, 0 0 0 2px #e53935"
                            : "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                          fontSize: "0.95rem", color: "#2d3561",
                          fontFamily: "'Outfit', sans-serif",
                          outline: "none",
                        }}
                      />
                    </div>
                    {errors.phone && (
                      <span style={{ fontSize: "0.8rem", color: "#e53935", marginTop: "6px", display: "block", fontWeight: "500" }}>
                        ⚠️ {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Agency / Brand Name */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#2d3561", marginBottom: "8px" }}>
                      Agency or Brand Name
                    </label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#7c5cbf", display: "flex" }}>
                        <IconBuilding />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Vance SMM Media"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        style={{
                          width: "100%", height: "50px",
                          padding: "0 18px 0 46px",
                          borderRadius: "14px", border: "none",
                          background: "#e0e5ec",
                          boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                          fontSize: "0.95rem", color: "#2d3561",
                          fontFamily: "'Outfit', sans-serif",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2: Plan & Target Platforms */}
              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "8px",
                    background: "linear-gradient(135deg, #4a90d9, #d95ba3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontSize: "0.8rem", fontWeight: "700",
                  }}>2</div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#2d3561" }}>
                    Package Tier & Social Ecosystem
                  </h4>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  {/* Selected Package Selector */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#2d3561", marginBottom: "8px" }}>
                      Selected Web Development Plan
                    </label>
                    <select
                      value={formData.selectedPlan}
                      onChange={(e) => handleInputChange("selectedPlan", e.target.value)}
                      style={{
                        width: "100%", height: "50px",
                        padding: "0 18px",
                        borderRadius: "14px", border: "none",
                        background: "#e0e5ec",
                        boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                        fontSize: "0.95rem", color: "#2d3561",
                        fontFamily: "'Outfit', sans-serif",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="Starter ($200)">Starter Plan ($200 one-time)</option>
                      <option value="Growth ($400)">Growth Plan ($400 one-time - Most Popular)</option>
                      <option value="Agency ($600)">Agency Enterprise ($600 one-time)</option>
                      <option value="Custom Enterprise">Custom Enterprise Portal (Custom Quote)</option>
                    </select>
                  </div>

                  {/* Target Social Platforms */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#2d3561", marginBottom: "8px" }}>
                      Target Social Media Platforms (Select All That Apply)
                    </label>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", minHeight: "50px", alignItems: "center" }}>
                      {["Instagram", "TikTok", "Facebook", "LinkedIn", "YouTube"].map((platform) => {
                        const isChecked = formData.platforms.includes(platform);
                        return (
                          <button
                            key={platform}
                            type="button"
                            onClick={() => handlePlatformToggle(platform)}
                            style={{
                              padding: "8px 14px", borderRadius: "10px",
                              border: "none", cursor: "pointer",
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.85rem", fontWeight: "600",
                              color: isChecked ? "white" : "#6b7a99",
                              background: isChecked ? "linear-gradient(135deg, #7c5cbf, #4a90d9)" : "#e0e5ec",
                              boxShadow: isChecked
                                ? "inset 2px 2px 4px rgba(0,0,0,0.2), 0 2px 6px rgba(124,92,191,0.4)"
                                : "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
                              transition: "all 0.2s ease",
                            }}
                          >
                            {isChecked ? "✓ " : "+ "}{platform}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Password & Security */}
              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "8px",
                    background: "linear-gradient(135deg, #d95ba3, #4ab9bf)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontSize: "0.8rem", fontWeight: "700",
                  }}>3</div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#2d3561" }}>
                    Account Security & Portal Access
                  </h4>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  {/* Password */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#2d3561", marginBottom: "8px" }}>
                      Create Portal Password <span style={{ color: "#e53935" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#7c5cbf", display: "flex" }}>
                        <IconLock />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Min. 6 characters"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        style={{
                          width: "100%", height: "50px",
                          padding: "0 46px 0 46px",
                          borderRadius: "14px", border: "none",
                          background: "#e0e5ec",
                          boxShadow: errors.password
                            ? "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff, 0 0 0 2px #e53935"
                            : "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                          fontSize: "0.95rem", color: "#2d3561",
                          fontFamily: "'Outfit', sans-serif",
                          outline: "none",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)",
                          background: "none", border: "none", cursor: "pointer",
                          color: "#6b7a99", display: "flex", padding: "4px",
                        }}
                        title={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <IconEyeOff /> : <IconEye />}
                      </button>
                    </div>
                    {errors.password && (
                      <span style={{ fontSize: "0.8rem", color: "#e53935", marginTop: "6px", display: "block", fontWeight: "500" }}>
                        ⚠️ {errors.password}
                      </span>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#2d3561", marginBottom: "8px" }}>
                      Confirm Password <span style={{ color: "#e53935" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#7c5cbf", display: "flex" }}>
                        <IconLock />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Re-type your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        style={{
                          width: "100%", height: "50px",
                          padding: "0 46px 0 46px",
                          borderRadius: "14px", border: "none",
                          background: "#e0e5ec",
                          boxShadow: errors.confirmPassword
                            ? "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff, 0 0 0 2px #e53935"
                            : "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                          fontSize: "0.95rem", color: "#2d3561",
                          fontFamily: "'Outfit', sans-serif",
                          outline: "none",
                        }}
                      />
                    </div>
                    {formData.confirmPassword && !errors.confirmPassword && formData.password === formData.confirmPassword && (
                      <span style={{ fontSize: "0.8rem", color: "#10b981", marginTop: "6px", display: "block", fontWeight: "600" }}>
                        ✓ Passwords match perfectly
                      </span>
                    )}
                    {errors.confirmPassword && (
                      <span style={{ fontSize: "0.8rem", color: "#e53935", marginTop: "6px", display: "block", fontWeight: "500" }}>
                        ⚠️ {errors.confirmPassword}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* SECTION 4: Optional Project Notes */}
              <div style={{ marginBottom: "32px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#2d3561", marginBottom: "8px" }}>
                  Project Objectives & Special Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your desired domain, campaign goals, CRM links, or social integration needs..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: "16px", border: "none",
                    background: "#e0e5ec",
                    boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
                    fontSize: "0.95rem", color: "#2d3561",
                    fontFamily: "'Outfit', sans-serif",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* SECTION 5: Privacy & Safety Trust Banner */}
              <div style={{
                background: "#e0e5ec",
                borderRadius: "20px",
                boxShadow: "inset 4px 4px 10px #a3b1c6, inset -4px -4px 10px #ffffff",
                padding: "20px 24px",
                marginBottom: "28px",
              }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "12px",
                    background: "linear-gradient(135deg, #7c5cbf, #4ab9bf)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", flexShrink: 0,
                    boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
                  }}>
                    <IconShield />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "#2d3561", marginBottom: "4px" }}>
                      Data Protection & Safety Guarantee
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "#6b7a99", lineHeight: "1.6", margin: "0 0 10px" }}>
                      Your personal and business details are protected by end-to-end 256-bit encryption. We never sell audience data and never ask for social media passwords.
                    </p>
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                      <button
                        type="button"
                        onClick={() => openLegalModal("privacy")}
                        style={{
                          background: "none", border: "none", cursor: "pointer",
                          color: "#7c5cbf", fontWeight: "600", fontSize: "0.85rem",
                          padding: 0, textDecoration: "underline", textUnderlineOffset: "3px",
                        }}
                      >
                        🔒 Read Privacy Policy
                      </button>
                      <button
                        type="button"
                        onClick={() => openLegalModal("safety")}
                        style={{
                          background: "none", border: "none", cursor: "pointer",
                          color: "#4a90d9", fontWeight: "600", fontSize: "0.85rem",
                          padding: 0, textDecoration: "underline", textUnderlineOffset: "3px",
                        }}
                      >
                        🛡️ Safety & API Protocol
                      </button>
                      <button
                        type="button"
                        onClick={() => openLegalModal("terms")}
                        style={{
                          background: "none", border: "none", cursor: "pointer",
                          color: "#d95ba3", fontWeight: "600", fontSize: "0.85rem",
                          padding: 0, textDecoration: "underline", textUnderlineOffset: "3px",
                        }}
                      >
                        ⚖️ Terms of Service & SLA
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Checkboxes */}
              <div style={{ marginBottom: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange("agreeTerms", e.target.checked)}
                    style={{
                      width: "20px", height: "20px", marginTop: "2px",
                      accentColor: "#7c5cbf", cursor: "pointer",
                    }}
                  />
                  <span style={{ fontSize: "0.9rem", color: "#2d3561", lineHeight: "1.5" }}>
                    I have read and agree to the{" "}
                    <button
                      type="button"
                      onClick={() => openLegalModal("terms")}
                      style={{
                        background: "none", border: "none", cursor: "pointer",
                        color: "#7c5cbf", fontWeight: "600", fontSize: "0.9rem",
                        padding: 0, textDecoration: "underline", textUnderlineOffset: "3px",
                      }}
                    >
                      Terms of Service
                    </button>
                    ,{" "}
                    <button
                      type="button"
                      onClick={() => openLegalModal("privacy")}
                      style={{
                        background: "none", border: "none", cursor: "pointer",
                        color: "#7c5cbf", fontWeight: "600", fontSize: "0.9rem",
                        padding: 0, textDecoration: "underline", textUnderlineOffset: "3px",
                      }}
                    >
                      Privacy Policy
                    </button>
                    , and{" "}
                    <button
                      type="button"
                      onClick={() => openLegalModal("safety")}
                      style={{
                        background: "none", border: "none", cursor: "pointer",
                        color: "#7c5cbf", fontWeight: "600", fontSize: "0.9rem",
                        padding: 0, textDecoration: "underline", textUnderlineOffset: "3px",
                      }}
                    >
                      Safety & Data Protection Protocol
                    </button>
                    . <span style={{ color: "#e53935" }}>*</span>
                  </span>
                </label>
                {errors.agreeTerms && (
                  <span style={{ fontSize: "0.8rem", color: "#e53935", marginLeft: "32px", display: "block", fontWeight: "500" }}>
                    ⚠️ {errors.agreeTerms}
                  </span>
                )}

                <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={formData.subscribeNewsletter}
                    onChange={(e) => handleInputChange("subscribeNewsletter", e.target.checked)}
                    style={{
                      width: "18px", height: "18px", marginTop: "2px",
                      accentColor: "#4a90d9", cursor: "pointer",
                    }}
                  />
                  <span style={{ fontSize: "0.85rem", color: "#6b7a99", lineHeight: "1.5" }}>
                    Keep me updated on social media conversion algorithms and product releases (zero spam, 1-click opt-out).
                  </span>
                </label>
              </div>

              {/* ACTION BUTTONS TO SUBMIT YOUR DATA */}
              <div style={{
                display: "flex", alignItems: "center", gap: "16px",
                flexWrap: "wrap",
              }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: "18px 42px", borderRadius: "18px",
                    border: "none", cursor: isSubmitting ? "not-allowed" : "pointer",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: "700", fontSize: "1.05rem",
                    color: "white",
                    background: isSubmitting
                      ? "#a3b1c6"
                      : "linear-gradient(135deg, #7c5cbf, #4a90d9)",
                    boxShadow: isSubmitting
                      ? "none"
                      : "8px 8px 18px rgba(124, 92, 191, 0.45), -4px -4px 12px rgba(255,255,255,0.8)",
                    display: "inline-flex", alignItems: "center", gap: "12px",
                    transition: "all 0.3s ease",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: "18px", height: "18px",
                        border: "3px solid rgba(255,255,255,0.3)",
                        borderTop: "3px solid white",
                        borderRadius: "50%",
                        animation: "spin-slow 0.8s linear infinite",
                      }} />
                      Encrypting & Submitting Data...
                    </>
                  ) : (
                    <>
                      Submit Project Registration <IconArrow />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleResetForm}
                  disabled={isSubmitting}
                  style={{
                    padding: "18px 28px", borderRadius: "18px",
                    border: "none", cursor: "pointer",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: "600", fontSize: "0.95rem",
                    color: "#6b7a99",
                    background: "#e0e5ec",
                    boxShadow: "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff";
                  }}
                >
                  <IconRotate /> Reset Form
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
      </ScrollReveal>

      {/* ========== TESTIMONIALS ========== */}
      <ScrollReveal delay={0.1}>
      <section id="testimonials" style={{ padding: "80px 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{
            display: "inline-block",
            padding: "6px 20px", borderRadius: "50px",
            background: "#e0e5ec",
            boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
            fontSize: "0.8rem", fontWeight: "600", color: "#4ab9bf",
            marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1.5px",
          }}>Client Stories</div>
          <h2 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#2d3561", letterSpacing: "-1px" }}>
            Loved By SMM Pros
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "#e0e5ec",
              boxShadow: "12px 12px 24px #a3b1c6, -12px -12px 24px #ffffff",
              borderRadius: "24px", padding: "32px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "18px 18px 36px #a3b1c6, -18px -18px 36px #ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "12px 12px 24px #a3b1c6, -12px -12px 24px #ffffff";
            }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "20px", color: "#f5a623" }}>
                {Array.from({ length: t.rating }).map((_, j) => <IconStar key={j}/>)}
              </div>
              <p style={{ fontSize: "0.95rem", color: "#6b7a99", lineHeight: "1.8", marginBottom: "24px", fontStyle: "italic" }}>
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "14px",
                  background: "linear-gradient(135deg, #7c5cbf, #4a90d9)",
                  boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontWeight: "700", fontSize: "0.85rem",
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: "700", color: "#2d3561", fontSize: "0.95rem" }}>{t.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "#6b7a99" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* ========== CTA ========== */}
      <ScrollReveal delay={0.15} direction="up">
      <section style={{ padding: "60px 2rem 100px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          background: "#e0e5ec",
          boxShadow: "20px 20px 40px #a3b1c6, -20px -20px 40px #ffffff",
          borderRadius: "32px",
          padding: "60px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative glow */}
          <div style={{
            position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
            width: "400px", height: "400px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,92,191,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}/>

          <h2 style={{ fontSize: "3rem", fontWeight: "800", color: "#2d3561", marginBottom: "16px", letterSpacing: "-1px", position: "relative" }}>
            Ready to Elevate{" "}
            <span style={{
              background: "linear-gradient(135deg, #7c5cbf, #4a90d9, #d95ba3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Your SMM Game?
            </span>
          </h2>
          <p style={{ fontSize: "1.15rem", color: "#6b7a99", maxWidth: "520px", margin: "0 auto 40px", lineHeight: "1.8", position: "relative" }}>
            Join 250+ social media marketing professionals who've transformed their client results with our web solutions.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", position: "relative" }}>
            <a href="#signup" style={{
              padding: "18px 40px", borderRadius: "16px",
              textDecoration: "none", color: "white",
              fontWeight: "700", fontSize: "1.05rem",
              background: "linear-gradient(135deg, #7c5cbf, #4a90d9)",
              boxShadow: "8px 8px 16px rgba(124, 92, 191, 0.4), -2px -2px 10px rgba(255,255,255,0.8)",
              display: "flex", alignItems: "center", gap: "10px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
              Start Your Project <IconArrow/>
            </a>
            <a href="mailto:hello@websmm.io" style={{
              padding: "18px 40px", borderRadius: "16px",
              textDecoration: "none", color: "#2d3561",
              fontWeight: "600", fontSize: "1.05rem",
              background: "#e0e5ec",
              boxShadow: "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff";
            }}>
              📬 Talk to Us
            </a>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ========== FOOTER ========== */}
      <ScrollReveal delay={0.2} blur={false}>
      <footer style={{
        borderTop: "1px solid rgba(163, 177, 198, 0.4)",
        padding: "32px 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "16px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "34px", height: "34px", borderRadius: "10px",
            background: "linear-gradient(135deg, #7c5cbf, #4a90d9)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontSize: "14px", fontWeight: "700",
            boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
          }}>W</div>
          <span style={{ fontWeight: "700", color: "#2d3561", fontSize: "1rem" }}>
            Web<span style={{ color: "#7c5cbf" }}>SMM</span>
          </span>
        </div>
        <span style={{ fontSize: "0.85rem", color: "#6b7a99" }}>
          © 2026 WebSMM Studio. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: "18px", alignItems: "center", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => openLegalModal("privacy")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "0.85rem", color: "#6b7a99", fontWeight: "500",
              fontFamily: "'Outfit', sans-serif",
              textDecoration: "underline", textUnderlineOffset: "3px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#7c5cbf"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#6b7a99"; }}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => openLegalModal("safety")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "0.85rem", color: "#6b7a99", fontWeight: "500",
              fontFamily: "'Outfit', sans-serif",
              textDecoration: "underline", textUnderlineOffset: "3px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#4a90d9"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#6b7a99"; }}
          >
            Safety Guarantee
          </button>
          <button
            type="button"
            onClick={() => openLegalModal("terms")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "0.85rem", color: "#6b7a99", fontWeight: "500",
              fontFamily: "'Outfit', sans-serif",
              textDecoration: "underline", textUnderlineOffset: "3px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#d95ba3"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#6b7a99"; }}
          >
            Terms of Service
          </button>
          <a
            href="mailto:hello@websmm.io"
            style={{
              fontSize: "0.85rem", color: "#6b7a99", textDecoration: "none", fontWeight: "500",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#2d3561"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6b7a99"; }}
          >
            Contact
          </a>
        </div>
      </footer>
      </ScrollReveal>

      {/* ========== LEGAL MODAL (PRIVACY, SAFETY & TERMS) ========== */}
      {legalModal.isOpen && (
        <div
          onClick={() => setLegalModal({ ...legalModal, isOpen: false })}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(30, 36, 60, 0.6)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeInUp 0.3s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#e0e5ec",
              borderRadius: "28px",
              boxShadow: "24px 24px 48px rgba(0,0,0,0.25), -12px -12px 36px rgba(255,255,255,0.8)",
              maxWidth: "760px",
              width: "100%",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: "28px 32px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(163, 177, 198, 0.4)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "12px",
                  background: "linear-gradient(135deg, #7c5cbf, #4a90d9)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white",
                  boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
                }}>
                  <IconShield />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "#2d3561" }}>
                    WebSMM Legal, Privacy & Safety Center
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#6b7a99" }}>
                    Verified standards for client data confidentiality & social integration
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setLegalModal({ ...legalModal, isOpen: false })}
                style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  border: "none", cursor: "pointer",
                  background: "#e0e5ec",
                  boxShadow: "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#6b7a99",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff";
                  (e.currentTarget as HTMLButtonElement).style.color = "#2d3561";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff";
                  (e.currentTarget as HTMLButtonElement).style.color = "#6b7a99";
                }}
              >
                <IconClose />
              </button>
            </div>

            {/* Modal Tabs */}
            <div style={{
              display: "flex", gap: "10px", padding: "16px 32px 0",
              borderBottom: "1px solid rgba(163, 177, 198, 0.25)",
            }}>
              {[
                { id: "privacy", label: "🔒 Privacy Policy" },
                { id: "safety", label: "🛡️ Safety & Security" },
                { id: "terms", label: "⚖️ Terms & SLA" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setLegalModal({ ...legalModal, tab: tab.id as any })}
                  style={{
                    padding: "10px 20px", borderRadius: "14px 14px 0 0",
                    border: "none", cursor: "pointer",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: "700", fontSize: "0.9rem",
                    color: legalModal.tab === tab.id ? "#7c5cbf" : "#6b7a99",
                    background: legalModal.tab === tab.id ? "#e0e5ec" : "transparent",
                    boxShadow: legalModal.tab === tab.id
                      ? "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff"
                      : "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Body Content */}
            <div style={{
              padding: "24px 32px",
              overflowY: "auto",
              fontSize: "0.95rem",
              color: "#475569",
              lineHeight: "1.75",
            }}>
              {legalModal.tab === "privacy" && (
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#2d3561", marginBottom: "12px" }}>
                    1. Zero-Resale Privacy Policy
                  </h4>
                  <p style={{ marginBottom: "16px" }}>
                    At WebSMM Studio, we treat your agency and personal client data with absolute confidentiality. We <strong>never sell, lease, monetize, or exchange</strong> any personal information, customer contacts, or social campaign metrics with any advertising brokers or data brokers.
                  </p>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#2d3561", marginBottom: "8px" }}>
                    2. Information We Collect
                  </h4>
                  <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                    <li><strong>Contact Credentials:</strong> Full name, verified email address, and direct phone/WhatsApp number for project communication.</li>
                    <li><strong>Project Scope:</strong> Target social media accounts (e.g., Instagram handles, TikTok shop links), brand assets, and web layout preferences.</li>
                    <li><strong>Technical Telemetry:</strong> Anonymized performance logs strictly to optimize page render speeds and ad UTM conversion attribution.</li>
                  </ul>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#2d3561", marginBottom: "8px" }}>
                    3. GDPR & CCPA Compliance
                  </h4>
                  <p style={{ marginBottom: "8px" }}>
                    Clients retain 100% ownership of their data. You may request full data export or irrevocable deletion of your profile and project records at any time by contacting <code>privacy@websmm.io</code>.
                  </p>
                </div>
              )}

              {legalModal.tab === "safety" && (
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#2d3561", marginBottom: "12px" }}>
                    1. Social Platform API Safety & Isolation
                  </h4>
                  <p style={{ marginBottom: "16px" }}>
                    We build sites that interact with official developer APIs (Meta Graph API, TikTok for Developers, LinkedIn Marketing Developer Platform). All integrations adhere to strict sandboxing protocols.
                  </p>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#2d3561", marginBottom: "8px" }}>
                    2. No Password Storage Guarantee
                  </h4>
                  <p style={{ marginBottom: "16px" }}>
                    <strong>We never request, store, or log your social media account passwords.</strong> All platform authorizations take place via official OAuth 2.0 PKCE tokens directly with Instagram, Facebook, and TikTok. Your personal login credentials never touch our servers.
                  </p>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#2d3561", marginBottom: "8px" }}>
                    3. Infrastructure Security Standards
                  </h4>
                  <ul style={{ paddingLeft: "20px", marginBottom: "8px" }}>
                    <li><strong>256-bit AES Encryption:</strong> All data stored in transit and at rest is secured via TLS 1.3 cryptographic protocols.</li>
                    <li><strong>DDoS & Bot Mitigation:</strong> Automated edge-network rate limiting protects your landing pages against automated ad-click fraud.</li>
                    <li><strong>Strict Access Controls:</strong> Only your assigned senior full-stack engineer has temporary provisioning access to your staging portal.</li>
                  </ul>
                </div>
              )}

              {legalModal.tab === "terms" && (
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#2d3561", marginBottom: "12px" }}>
                    1. Transparent Flat-Rate Pricing
                  </h4>
                  <p style={{ marginBottom: "16px" }}>
                    All plans (Starter $200, Growth $400, Agency $600) are 100% one-time fees with zero hidden recurring retainers. Any optional domain hosting or custom server infrastructure will be explicitly itemized with no surprise charges.
                  </p>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#2d3561", marginBottom: "8px" }}>
                    2. Milestone Delivery & Revisions
                  </h4>
                  <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                    <li><strong>Delivery Timelines:</strong> Initial staging previews delivered within 3 to 7 business days depending on selected package tier.</li>
                    <li><strong>Revisions:</strong> Growth and Agency packages include unlimited design iterations until 100% client sign-off.</li>
                    <li><strong>Full Source Ownership:</strong> Upon final milestone clearance, complete repository code and graphics rights transfer to you.</li>
                  </ul>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#2d3561", marginBottom: "8px" }}>
                    3. 100% Satisfaction Guarantee
                  </h4>
                  <p style={{ marginBottom: "8px" }}>
                    If you are not satisfied with the initial design concept, you may request a complete refund prior to staging deployment, guaranteed.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: "18px 32px",
              borderTop: "1px solid rgba(163, 177, 198, 0.35)",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "12px",
              background: "#e0e5ec",
            }}>
              <button
                type="button"
                onClick={() => setLegalModal({ ...legalModal, isOpen: false })}
                style={{
                  padding: "10px 22px", borderRadius: "12px",
                  border: "none", cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: "600", fontSize: "0.9rem",
                  color: "#6b7a99", background: "#e0e5ec",
                  boxShadow: "3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff",
                }}
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({ ...prev, agreeTerms: true }));
                  setErrors((prev) => {
                    const copy = { ...prev };
                    delete copy.agreeTerms;
                    return copy;
                  });
                  setLegalModal({ ...legalModal, isOpen: false });
                }}
                style={{
                  padding: "10px 24px", borderRadius: "12px",
                  border: "none", cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: "700", fontSize: "0.9rem",
                  color: "white",
                  background: "linear-gradient(135deg, #7c5cbf, #4a90d9)",
                  boxShadow: "4px 4px 10px rgba(124, 92, 191, 0.4)",
                }}
              >
                ✓ I Accept & Agree to Policy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyframe styles injected inline for Next.js compatibility */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 8px rgba(124, 92, 191, 0.5); }
          50% { box-shadow: 0 0 16px rgba(74, 144, 217, 0.8); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
