"use client";

import { motion } from "framer-motion";
import { Search, PencilRuler, Code2, Rocket } from "lucide-react";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <div className="mt-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-10 backdrop-blur">
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            How we work
          </p>

          <h2 className="mt-5 text-3xl lg:text-4xl font-semibold tracking-tight text-white">
            A clear process. Zero confusion.
          </h2>

          <p className="mt-3 text-white/70 max-w-2xl mx-auto leading-7">
            You’ll always know what we’re doing, what’s next, and what you’ll
            get at the end—no surprises.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-[46px] h-px bg-white/10" />

          <div className="grid lg:grid-cols-4 gap-5">
            {/* Step 01 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
            >
              <div className="hidden lg:flex absolute -top-[10px] left-1/2 -translate-x-1/2 h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/10">
                <div className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Search className="h-5 w-5 text-white/80" />
                </div>
                <span className="text-sm font-semibold text-white/80">01</span>
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                Discovery
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Goals, users, scope—then we align on timeline and success
                metrics.
              </p>
            </motion.div>

            {/* Step 02 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
            >
              <div className="hidden lg:flex absolute -top-[10px] left-1/2 -translate-x-1/2 h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/10">
                <div className="h-2.5 w-2.5 rounded-full bg-fuchsia-400" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <PencilRuler className="h-5 w-5 text-white/80" />
                </div>
                <span className="text-sm font-semibold text-white/80">02</span>
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                Strategy & UX
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Wireframe + UI direction so the product stays clean and
                conversion-friendly.
              </p>
            </motion.div>

            {/* Step 03 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
            >
              <div className="hidden lg:flex absolute -top-[10px] left-1/2 -translate-x-1/2 h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/10">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Code2 className="h-5 w-5 text-white/80" />
                </div>
                <span className="text-sm font-semibold text-white/80">03</span>
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                Build
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Clean code, performance focus, scalable structure—regular
                updates included.
              </p>
            </motion.div>

            {/* Step 04 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
            >
              <div className="hidden lg:flex absolute -top-[10px] left-1/2 -translate-x-1/2 h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/10">
                <div className="h-2.5 w-2.5 rounded-full bg-sky-400" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Rocket className="h-5 w-5 text-white/80" />
                </div>
                <span className="text-sm font-semibold text-white/80">04</span>
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                Launch & Support
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                QA, deploy, monitor—then continuous improvements if needed.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div>
            <h4 className="text-lg font-semibold text-white">
              Want a project plan in 24 hours?
            </h4>
            <p className="mt-1 text-sm text-white/70">
              Share your idea—we’ll reply with scope, timeline, and budget
              estimate.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
