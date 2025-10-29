"use client";
import { motion } from "framer-motion";

export default function ProgramsPage() {
  return (
    <section className="bg-gradient-to-b from-[#42B3E0] to-[#2095C6] text-center text-[#0A2351] py-20 px-6">
      {/* === HEADER === */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-10 drop-shadow-[0_3px_4px_rgba(10,35,81,0.25)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Training Programs
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-3xl mx-auto mb-16 opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Every MM Baseball program is designed to develop complete athletes —
        built around discipline, measurable progress, and on-field confidence.
      </motion.p>

      {/* === HITTING PROGRAM === */}
      <motion.div
        className="max-w-5xl mx-auto mb-24 bg-white rounded-xl shadow-lg border-2 border-[#FDB827] p-10 text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2351] mb-4">
          Hitting Development
        </h2>
        <p className="text-[#0A2351]/90 mb-6 leading-relaxed">
          The Hitting Program builds repeatable efficiency through mechanical
          precision and game-speed reps. Each session focuses on movement
          quality, timing, and situational awareness — creating confident hitters
          who can adjust and produce under pressure.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#0A2351]/90">
          <li>Video analysis and swing tracking</li>
          <li>Barrel control and bat-speed development</li>
          <li>Pitch recognition and reaction training</li>
          <li>Approach building for in-game performance</li>
        </ul>
      </motion.div>

      {/* === PITCHING PROGRAM === */}
      <motion.div
        className="max-w-5xl mx-auto mb-24 bg-white rounded-xl shadow-lg border-2 border-[#FDB827] p-10 text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2351] mb-4">
          Pitching Development
        </h2>
        <p className="text-[#0A2351]/90 mb-6 leading-relaxed">
          Our Pitching Program combines biomechanical efficiency with a
          pitcher’s mentality — helping arms stay healthy, repeat their delivery,
          and attack the zone with intent. Each athlete learns how to train like
          a pro while understanding how to compete like one.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#0A2351]/90">
          <li>Velocity and command training</li>
          <li>Delivery analysis and mechanical corrections</li>
          <li>Arm care and recovery protocols</li>
          <li>Pitch sequencing and mental approach</li>
        </ul>
      </motion.div>

      {/* === VIDEO BREAKDOWN === */}
      <motion.div
        className="max-w-5xl mx-auto mb-24 bg-white rounded-xl shadow-lg border-2 border-[#FDB827] p-10 text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2351] mb-4">
          Video Breakdown
        </h2>
        <p className="text-[#0A2351]/90 mb-6 leading-relaxed">
          The Video Breakdown Program delivers detailed swing and mechanics
          analysis using slow-motion review, side-by-side comparisons, and
          performance metrics. Each athlete receives actionable feedback to
          refine movements and track improvement over time.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#0A2351]/90">
          <li>High-speed video capture and analysis</li>
          <li>Side-by-side comparison with pro models</li>
          <li>Customized improvement plans</li>
          <li>Follow-up review to measure progress</li>
        </ul>
      </motion.div>

      {/* === CTA === */}
      <motion.div
        className="max-w-2xl mx-auto bg-[#0A2351] text-white rounded-xl p-8 shadow-lg border-2 border-[#FDB827]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-[#FDB827] mb-4">
          Train With Purpose
        </h3>
        <p className="text-gray-200 leading-relaxed">
          Every MM Baseball program is built for accountability, growth, and
          measurable results. Whether you’re chasing your next level or refining
          your craft, our staff is committed to helping you get there.
        </p>
      </motion.div>
    </section>
  );
}
