import Button from "@/components/Button";
import Image from "next/image";
import images from "../../public/images/images";
import GetInTouch from "@/components/GetInTouch";
import ServiceLinkCard from "@/components/ServiceLinkCard";
import Link from "next/link";
import HowWeWork from "./Home/HowWeWork";
import Testomonial from "./Home/Testomonial";

export const metadata = {
  title: "Makeup Coders — Home",
  description:
    "Makeup Coders builds beautiful, high-performing websites, apps, and designs tailored to your brand.",
};

export default function Home() {
  const serviceLink = [
    {
      title: "Web Development",
      name: "web-development",
      id: 1,
      className:
        "lg:row-span-2 h-full rounded-2xl bg-[url('../../public/images/services/grapic-design.jpg')] bg-no-repeat bg-cover",
    },
    {
      title: "App Development",
      name: "app-development",
      id: 2,
      className:
        "h-full rounded-2xl bg-[url('../../public/images/services/app-development.jpg')] bg-no-repeat bg-cover",
    },
    {
      title: "UI/UX Design",
      name: "ui-ux-design",
      id: 3,
      className:
        "h-full rounded-2xl bg-[url('../../public/images/services/web-development.jpg')] bg-no-repeat bg-cover",
    },
  ];

  return (
    <section className="global-container">
      {/* hero section */}

      <div className="hero-section lg:h-[600px] rounded-2xl lg:px-20 px-3 py-10">
        <div className="flex lg:flex-row flex-col items-center h-full relative lg:text-left text-center gap-4">
          <div className="lg:w-1/2 z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Premium web, app & UI/UX studio
            </div>

            <h1 className="mt-6 lg:text-6xl text-4xl font-semibold leading-[1.05] tracking-tight">
              Bringing Your{" "}
              <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-fuchsia-700 bg-clip-text text-transparent">
                Digital Dreams
              </span>{" "}
              to Life
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-600 max-w-xl lg:mx-0 mx-auto">
              We design and build fast, modern websites and apps that feel
              premium, convert better, and scale with your business—without the
              usual headache.
            </p>

            <div className="mt-8 flex lg:justify-start justify-center gap-3">
              <Link href="/about">
                <Button title="Learn More" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
              >
                Get a Quote
              </Link>
            </div>

            <div className="mt-8 flex lg:justify-start justify-center gap-6 text-xs text-slate-500">
              <span>Fast delivery</span>
              <span>Clean UI</span>
              <span>Scalable code</span>
            </div>
          </div>

          <div className="lg:w-1/2 z-10">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/10 via-transparent to-fuchsia-500/10 blur-2xl" />
              <Image
                className="relative w-full rounded-3xl border border-slate-200/60 shadow-lg"
                src={images.heroImg}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* service section */}
      <div className="h-[600px] my-16">
        <div className="grid lg:grid-rows-2 lg:grid-cols-2 h-full gap-5">
          {serviceLink.map((item, i) => (
            <ServiceLinkCard
              key={i}
              title={item.title}
              className={item.className}
              href={`/services/${item.name}`}
            />
          ))}
        </div>
      </div>

      {/* How we provide section */}
      <div className="mt-20">
        {/* Section wrapper (dark glass) */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-10 backdrop-blur">
          {/* Section header */}
          <div className="text-center mb-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              How we deliver value
            </p>

            <h2 className="mt-5 text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              Premium work. Clear process. Real outcomes.
            </h2>

            <p className="mt-3 text-white/70 max-w-2xl mx-auto leading-7">
              We combine strategy, design, and engineering to build products
              that feel premium and perform even better.
            </p>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl">
              <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-indigo-500/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src={images.friendly}
                  className="h-8 w-8"
                  alt="Driven by Innovation"
                />
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-white text-center">
                Driven by Innovation
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/70 text-center">
                We start with brand research and product clarity—then craft web,
                app, and UI/UX solutions that stand out and scale smoothly.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  Research-first
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  Modern UI
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  Performance
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl">
              <div className="pointer-events-none absolute -top-20 -left-20 h-48 w-48 rounded-full bg-fuchsia-500/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src={images.passionate}
                  className="h-8 w-8"
                  alt="Crafting Digital Masterpieces"
                />
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-white text-center">
                Crafting Digital Masterpieces
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/70 text-center">
                We blend design craft with strong engineering—so your product
                feels premium, loads fast, and converts better.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  Clean design
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  Scalable code
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  Fast delivery
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl">
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src={images.resourceful}
                  className="h-8 w-8"
                  alt="Innovating with Purpose"
                />
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-white text-center">
                Innovating with Purpose
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/70 text-center">
                We build with intention—strong UX, reliable architecture, and a
                clear roadmap so your product grows without redesigning
                everything later.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  UX clarity
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  Reliability
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  Growth-ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work / Process Section (Premium Timeline + Icons + Motion) */}
      <HowWeWork />

      {/* Tech Stack Section */}
      <div className="mt-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-10 backdrop-blur">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Tech stack
            </p>

            <h2 className="mt-5 text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              The tools we build with.
            </h2>

            <p className="mt-3 text-white/70 max-w-2xl mx-auto leading-7">
              From high-converting funnels to scalable web apps—we use proven
              technologies that deliver results.
            </p>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Backend & CMS */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold text-white">
                Backend & CMS
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-6">
                Secure, scalable backend systems and content-driven platforms.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Laravel",
                  "PHP",
                  "WordPress",
                  "Custom Admin Panel",
                  "REST API",
                  "Role-based Auth",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* E-commerce & Funnels */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold text-white">
                E-commerce & Funnels
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-6">
                High-converting sales funnels and online store systems.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Shopify",
                  "Funnelish",
                  "WooCommerce",
                  "Payment Gateway Integration",
                  "Conversion Optimization",
                  "Landing Pages",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend & Mobile */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold text-white">
                Frontend & Mobile
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-6">
                Modern UI, smooth animations, and mobile-ready applications.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "React Native",
                  "Tailwind CSS",
                  "TypeScript",
                  "Responsive Design",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Database & Deployment */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold text-white">
                Database & Deployment
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-6">
                Reliable infrastructure and optimized performance.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "MySQL",
                  "PostgreSQL",
                  "MongoDB",
                  "Server Deployment",
                  "Cloud Hosting",
                  "Domain & SSL Setup",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <h4 className="text-lg font-semibold text-white">
              Not sure which stack fits your project?
            </h4>
            <p className="mt-2 text-sm text-white/70">
              Tell us your idea—we’ll recommend the best solution for
              performance, scalability, and budget.
            </p>
          </div>
        </div>
      </div>
      <Testomonial />
      {/* get in touch section */}
      <GetInTouch />
    </section>
  );
}
