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
            {["Services", "About", "Pricing", "Testimonials"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
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
                {item}
              </a>
            ))}
          </div>

          <a href="#pricing" style={{
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
              <a href="#pricing" style={{
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
            <a href="#pricing" style={{
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

              <button style={{
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
              }}>
                {activePlan === i ? "Selected — Get Started" : "Select Plan"}
              </button>
            </div>
          ))}
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
            <a href="#pricing" style={{
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
        <div style={{ display: "flex", gap: "16px" }}>
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href="#" style={{ fontSize: "0.85rem", color: "#6b7a99", textDecoration: "none", fontWeight: "500" }}>
              {link}
            </a>
          ))}
        </div>
      </footer>
      </ScrollReveal>

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
