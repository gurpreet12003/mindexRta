import { Icon } from "@iconify/react";
import Reveal from "./components/scrollEffect";
import {
  ShieldCheck,
  FileSpreadsheet,
  Users,
  Briefcase,
  Landmark,
  ArrowRightLeft,
  RefreshCcw,
  FileSearch,
  TrendingUp,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Award,
  Clock,
  Lock,
} from "lucide-react";
import { useState } from "react";
import React from "react";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function Col({ title, items }) {
    return (
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-red-600">
          {title}
        </h4>

        <ul className="mt-4 space-y-3">
          {items.map((i) => (
            <li key={i}>
              <a
                href="#"
                className="text-sm text-white transition hover:text-red-600"
              >
                {i}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      companyName: e.target.companyName.value,
      contactPerson: e.target.contactPerson.value,
      mobile: e.target.mobile.value,
      service: e.target.service.value,
    };

    await fetch("https://script.google.com/macros/s/AKfycbwwWn4TSkeMt-xmxEe6kbgpkzLuZie35VR9EjYge9nQAefGlGx3DVeW6pb9eCZnn1I7Vw/exec", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    alert("Form submitted!");
  };
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased">
      {/* ============= NAV ============= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        {/* Top Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 w-full">

            {/* Logo */}
            <div className="h-14 w-36 flex items-center">
              <img
                src="/mindex2.png"
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {["Services", "About", "Industries", "Compliance", "Resources"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-neutral-700 hover:text-red-600 transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center gap-6">

              {/* Email */}
              <span className="flex items-center gap-2 text-sm text-neutral-700">
                <Icon icon="mdi:email-outline" width="20" />

                <a
                  href="mailto:joinus@mindex.co.in"
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  joinus@mindex.co.in
                </a>
              </span>

              {/* Phone */}
              <span className="flex items-center gap-2 text-sm text-neutral-700">
                <Icon icon="mdi:phone-outline" width="20" />

                <a
                  href="tel:+919876543210"
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  +91 98765 43210
                </a>
              </span>

            </div>


          </div>
        </div>
      </header>
      {/* ============= HERO ============= */}
      <Reveal>


        <section className="relative overflow-hidden bg-white border-b border-neutral-200">

          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-3 py-1.5 rounded-full mb-6">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-red-700 uppercase tracking-wider">
                    SEBI Registered • Category I RTA
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6">
                  India's Trusted{" "}
                  <span className="relative inline-block">
                    <span className="relative  text-red-600">Registrar & Transfer</span>

                  </span>{" "}
                  Agent Services
                </h1>

                <p className="text-lg text-neutral-600 mb-8 max-w-2xl leading-relaxed">
                  End-to-end share registry, IPO, dematerialization, and corporate action services
                  for listed companies, mutual funds, and unlisted entities. Powered by secure
                  technology and 25+ years of compliance expertise.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3.5 rounded transition-colors"
                  >
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-900 font-semibold px-6 py-3.5 rounded border-2 border-neutral-900 transition-colors"
                  >
                    Explore Services
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600" />
                    SEBI Reg. No. INR000000XXX
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600" />
                    ISO 27001 Certified
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600" />
                    NSDL & CDSL Connected
                  </div>
                </div>
              </div>

              {/* Hero side card */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-600 rounded-lg translate-x-3 translate-y-3" />
                  <div className="relative bg-white border-2 border-red-600 rounded-lg p-7 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                          Quick Quote
                        </div>
                        <div className="font-bold text-red-600 text-lg">Talk to an RTA expert</div>
                      </div>
                      <div className="w-10 h-10 bg-black flex items-center justify-center rounded">
                        <FileSpreadsheet className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* Hidden Fields */}
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_subject" value="New BharatRTA Lead" />
                      <input type="hidden" name="_template" value="table" />

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          placeholder="Acme Industries Ltd."
                          className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                            Contact Person
                          </label>
                          <input
                            type="text"
                            name="contactPerson"
                            placeholder="Full name"
                            className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                            Mobile
                          </label>
                          <input
                            type="tel"
                            name="mobile"
                            placeholder="+91"
                            className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                          Service Required
                        </label>

                        <select
                          name="service"
                          className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 bg-white"
                        >
                          <option>IPO / FPO Services</option>
                          <option>Share Transfer & Transmission</option>
                          <option>Dematerialization</option>
                          <option>IEPF Recovery</option>
                          <option>Corporate Actions</option>
                          <option>Mutual Fund RTA</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-neutral-800 text-white font-semibold py-3 rounded transition-colors flex items-center justify-center gap-2"
                      >
                        Request Callback
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <p className="text-[11px] text-neutral-500 text-center">
                        We respond within 4 business hours.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>


        {/* ============= STATS ============= */}
        <section className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {[
                { value: "850+", label: "Corporate Clients" },
                { value: "₹2.4L Cr", label: "Assets Serviced" },
                { value: "25+", label: "Years of Expertise" },
                { value: "4.2 Cr", label: "Investor Folios" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:border-l md:border-neutral-800 md:first:border-l-0 md:px-4">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1">
                    <span className="">{stat.value}</span>
                  </div>
                  <div className="text-xs md:text-sm uppercase tracking-wider text-neutral-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>


        {/* ============= SERVICES ============= */}
        <section id="services" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="text-xs uppercase tracking-widest text-red-600 font-bold mb-3">
                — Our Services
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-5">
                Complete <span className="text-red-600">RTA solutions </span>  for every stage of your equity lifecycle
              </h2>
              <p className="text-neutral-600 text-lg">
                From IPO management to ongoing investor servicing, we handle every regulatory and
                operational aspect so you can focus on growing your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
              {[
                {
                  icon: TrendingUp,
                  title: "IPO & FPO Services",
                  desc: "End-to-end IPO registry — application processing, allotment, refunds, and listing assistance with SEBI/Stock Exchange coordination.",
                },
                {
                  icon: ArrowRightLeft,
                  title: "Share Transfer & Transmission",
                  desc: "Seamless processing of share transfers, transmissions, transpositions, and duplicate certificates with full Companies Act compliance.",
                },
                {
                  icon: RefreshCcw,
                  title: "Dematerialization",
                  desc: "Connectivity with NSDL & CDSL for demat, remat, and corporate benefits credit. Process physical-to-electronic conversions efficiently.",
                },
                {
                  icon: FileSearch,
                  title: "IEPF Recovery",
                  desc: "Assistance to investors and companies for unclaimed dividends and shares recovery from the Investor Education & Protection Fund.",
                },
                {
                  icon: Briefcase,
                  title: "Corporate Actions",
                  desc: "Dividend distribution, bonus issues, rights issues, buybacks, splits, and amalgamations — executed with precision and timeliness.",
                },
                {
                  icon: Landmark,
                  title: "Mutual Fund RTA",
                  desc: "Full-service registry for AMCs including NAV processing, transaction management, KYC, and statutory reporting to SEBI/AMFI.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group bg-white p-8 hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 bg-red-50 group-hover:bg-red-600 flex items-center justify-center rounded mb-5 transition-colors">
                    <service.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-neutral-900">{service.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-5">{service.desc}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 group-hover:gap-2 transition-all"
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>


        {/* ============= ABOUT / WHY US ============= */}
        <section id="about" className="py-20 md:py-28 bg-neutral-50 border-y border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-xs uppercase tracking-widest text-red-600 font-bold mb-3">
                  — Why Choose BharatRTA
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6">
                  Built on trust. Powered by technology.{" "}
                  <span className="text-red-600">Compliant by design.</span>
                </h2>
                <p className="text-neutral-600 text-lg mb-8">
                  As a SEBI-registered Category I Registrar and Share Transfer Agent, we serve some of
                  India's most respected listed companies, asset management firms, and growing SMEs
                  with uncompromising service standards.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Bank-grade Security & Compliance",
                      desc: "ISO 27001 certified infrastructure, encrypted data exchange with depositories, and full audit trails for every transaction.",
                    },
                    {
                      icon: Clock,
                      title: "Industry-Leading Turnaround",
                      desc: "95%+ of share transfers, dematerialization, and corporate actions completed well ahead of regulatory timelines.",
                    },
                    {
                      icon: Award,
                      title: "Dedicated Relationship Manager",
                      desc: "Every corporate client is assigned a senior RM and a backup team for 24x7 access and zero-downtime operations.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-11 h-11 bg-white border-2 border-neutral-900 flex items-center justify-center rounded">
                        <item.icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base mb-1">{item.title}</h4>
                        <p className="text-sm text-neutral-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-8">
                    <div className="bg-white border border-neutral-200 p-6 rounded">
                      <Lock className="w-6 h-6 text-red-600 mb-3" />
                      <div className="font-bold text-3xl mb-1">99.98%</div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider">
                        System Uptime
                      </div>
                    </div>
                    <div className="bg-black text-white p-6 rounded">
                      <Users className="w-6 h-6 text-red-500 mb-3" />
                      <div className="font-bold text-3xl mb-1">120+</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wider">
                        Expert Professionals
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-red-600 text-white p-6 rounded">
                      <Award className="w-6 h-6 text-white mb-3" />
                      <div className="font-bold text-3xl mb-1">Cat I</div>
                      <div className="text-xs text-red-100 uppercase tracking-wider">
                        SEBI Registration
                      </div>
                    </div>
                    <div className="bg-white border border-neutral-200 p-6 rounded">
                      <ShieldCheck className="w-6 h-6 text-red-600 mb-3" />
                      <div className="font-bold text-3xl mb-1">ISO</div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider">
                        27001 Certified
                      </div>
                    </div>
                    <div className="bg-white border border-neutral-200 p-6 rounded">
                      <MapPin className="w-6 h-6 text-red-600 mb-3" />
                      <div className="font-bold text-3xl mb-1">14</div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider">
                        Regional Offices
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
      <Reveal>


        {/* ============= INDUSTRIES ============= */}
        <section id="industries" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
              <div className="max-w-4xl">
                <div className="text-xs uppercase tracking-widest text-red-600 font-bold mb-3">
                  — Industries We Serve
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
                  Trusted across <span className="text-red-600">India's </span>  leading sectors
                </h2>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:gap-3 transition-all"
              >
                View all client sectors <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Listed Public Companies",
                "Mutual Funds & AMCs",
                "Banks & NBFCs",
                "Insurance Companies",
                "Public Sector Undertakings",
                "SME / IPO Aspirants",
                "Real Estate Investment Trusts",
                "Infrastructure InvITs",
              ].map((industry) => (
                <div
                  key={industry}
                  className="group border border-neutral-200 hover:border-red-600 hover:bg-red-600 p-5 rounded transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-neutral-900 group-hover:text-white">
                      {industry}
                    </span>
                    <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>


        {/* ============= COMPLIANCE / PROCESS ============= */}
        <section id="compliance" className="py-20 md:py-28 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mb-14">
              <div className="text-xs uppercase tracking-widest text-red-500 font-bold mb-3">
                — Our Process
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-5">
                A simple, transparent onboarding journey
              </h2>
              <p className="text-neutral-200 text-lg">
                From initial consultation to going live, our structured process ensures full
                regulatory compliance and zero operational disruption.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  desc: "We understand your shareholder base, current setup, and specific compliance requirements.",
                },
                {
                  step: "02",
                  title: "Proposal & Agreement",
                  desc: "Customized service proposal with transparent pricing. Tripartite agreement with NSDL/CDSL.",
                },
                {
                  step: "03",
                  title: "Data Migration",
                  desc: "Secure migration of folio data from your existing RTA with reconciliation and validation.",
                },
                {
                  step: "04",
                  title: "Go Live & Support",
                  desc: "Seamless transition with dedicated RM, investor portal access, and ongoing compliance reporting.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-black p-8 hover:bg-neutral-900 transition-colors">
                  <div className="text-5xl font-black text-red-500 mb-4">{item.step}</div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-200 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============= TESTIMONIAL ============= */}
        <section id="resources" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "BharatRTA migrated our entire investor base of 1.4 lakh folios within 21 days, with zero discrepancies. Their compliance team is exceptional.",
                  name: "Rajesh Menon",
                  title: "Company Secretary, Listed Manufacturer",
                },
                {
                  quote:
                    "Our IPO of ₹780 crore was managed seamlessly — from application processing to listing. The technology platform gives real-time visibility.",
                  name: "Priya Sharma",
                  title: "CFO, Tech Unicorn",
                  featured: true,
                },
                {
                  quote:
                    "Investor grievance resolution timelines have dropped from 14 days to under 48 hours since we moved to BharatRTA. Highly recommended.",
                  name: "Anil Krishnan",
                  title: "Director, Public Sector Bank",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className={`p-8 rounded ${t.featured
                    ? "bg-red-600 text-white border-2 border-red-600"
                    : "bg-white text-neutral-900 border-2 border-neutral-200"
                    }`}
                >
                  <div className={`text-5xl font-black leading-none mb-4 ${t.featured ? "text-white" : "text-red-600"}`}>
                    "
                  </div>
                  <p className={`text-base leading-relaxed mb-6 ${t.featured ? "text-white" : "text-neutral-700"}`}>
                    {t.quote}
                  </p>
                  <div className={`pt-5 border-t ${t.featured ? "border-red-500" : "border-neutral-200"}`}>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className={`text-xs ${t.featured ? "text-red-100" : "text-neutral-500"}`}>
                      {t.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>


      <Reveal>



        {/* ============= CTA / CONTACT ============= */}
        <section id="contact" className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <div className="text-xs uppercase tracking-widest text-red-600 font-bold mb-3">
                  — Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6">
                  Ready to <span className="text-red-600">upgrade</span> your registry experience?
                </h2>
                <p className="text-neutral-600 text-lg mb-10">
                  Speak with our RTA specialists for a no-obligation consultation. We'll review your
                  current setup and recommend the most efficient transition path.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-red-600 flex items-center justify-center rounded flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-0.5">
                        Call Us
                      </div>
                      <div className="font-bold text-lg">+91 98765 43210</div>
                      <div className="text-sm text-neutral-600">Mon–Sat, 9:30 AM – 6:30 PM IST</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-red-600 flex items-center justify-center rounded flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-0.5">
                        Email
                      </div>
                      <div className="font-bold text-lg"> joinus@mindex.co.in</div>
                      <div className="text-sm text-neutral-600">For new client enquiries</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-red-600 flex items-center justify-center rounded flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-0.5">
                        Head Office
                      </div>
                      <div className="font-bold text-lg">1306, Padma Tower-1, Rajendra Place,
                        New Delhi-110008</div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-red-600 rounded-lg p-8 shadow-xl">
                <h3 className="text-red-600 text-2xl mb-1">Request a Proposal</h3>
                <p className="text-sm text-neutral-600 mb-6">
                  Fill in your details — we'll send a tailored proposal within 24 hours.
                </p>

                <form
                  action="https://formsubmit.co/gurpreetsingh.b1203@gmail.com"
                  method="POST"
                  className="space-y-4"
                >
                  {/* Hidden Fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New BharatRTA Lead" />
                  <input type="hidden" name="_template" value="table" />

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Acme Industries Ltd."
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        placeholder="Full name"
                        className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Mobile
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="+91"
                        className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Service Required
                    </label>

                    <select
                      name="service"
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 bg-white"
                    >
                      <option>IPO / FPO Services</option>
                      <option>Share Transfer & Transmission</option>
                      <option>Dematerialization</option>
                      <option>IEPF Recovery</option>
                      <option>Corporate Actions</option>
                      <option>Mutual Fund RTA</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-neutral-800 text-white font-semibold py-3 rounded transition-colors flex items-center justify-center gap-2"
                  >
                    Request Callback
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center">
                    We respond within 4 business hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
      {/* ============= FOOTER ============= */}
      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">

          {/* TOP GRID */}
          <div className="grid gap-10 md:grid-cols-4">

            {/* LOGO + ABOUT */}
            <div className="md:col-span-1">

              <div className="h-14 w-36 bg-white rounded-md p-2 flex items-center justify-center">
                <img
                  src="/mindex2.png"
                  alt="Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-white font-medium">
                Corporate NPS solutions designed to help organizations improve employee financial wellness with tax-efficient retirement benefits.
              </p>

              <div className="mt-5 text-xs text-white font-medium">
                Trusted retirement solutions for modern organizations.
              </div>
            </div>

            {/* COLUMN 1 */}
            <Col
              title="Solutions"
              items={[
                "Corporate NPS",
                "Employee Onboarding",
                "Payroll Integration",
                "Retirement Planning",
              ]}
            />

            {/* COLUMN 2 */}
            <Col
              title="Resources"
              items={[
                "How It Works",
                "Tax Benefits",
                "FAQs",
                "PFRDA Guidelines",
              ]}
            />

            {/* COLUMN 3 */}
            <Col
              title="Support"
              items={[
                "Contact Us",
                "Help Centre",
                "Consultation",
                "Downloads",
              ]}
            />
          </div>

          {/* DIVIDER */}
          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

            <p className="text-xs text-white">
              © {new Date().getFullYear()} Mindex Corporate NPS. All rights reserved.
            </p>

            <div className="flex gap-6 text-xs">

              <a href="#" className="text-white hover:text-[#FF2E2E] transition">
                Privacy Policy
              </a>

              <a href="#" className="text-white hover:text-[#FF2E2E] transition">
                Terms & Conditions
              </a>

              <a href="#" className="text-white hover:text-[#FF2E2E] transition">
                Disclosures
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
