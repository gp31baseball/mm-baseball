"use client";
import { motion } from "framer-motion";

export default function PitchingPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#42B3E0] to-[#2095C6] py-20 px-6 flex flex-col items-center text-center">
      {/* === HEADER === */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-[#0A2351] mb-4 drop-shadow-[0_3px_4px_rgba(10,35,81,0.25)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Pitching Development
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-[#0A2351]/90 text-lg max-w-xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Building efficient, durable pitchers through mechanical consistency,
        proper workload management, and individualized velocity and command training.
      </motion.p>

      {/* === VIDEO SHOWCASE === */}
      <motion.div
        className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#FDB827] transition-all hover:shadow-[0_0_25px_rgba(253,184,39,0.5)] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          controls
          poster="/videos/pitching_thumbnail.jpg"
          className="w-full h-auto rounded-t-xl"
          src="/videos/pitching_demo.mov" // add your pitching video clip here
        />
        <div className="p-6 text-left">
          <h2 className="text-2xl font-bold text-[#0A2351] mb-3">
            Program Overview
          </h2>
          <p className="text-[#0A2351] opacity-90 leading-relaxed">
            Our pitching program emphasizes repeatable mechanics, tempo control,
            and efficient sequencing to develop both command and durability.
            Each athlete learns to generate power through proper kinetic-chain
            movement — transferring energy seamlessly from the ground up.
          </p>

          <p className="text-[#0A2351] opacity-90 leading-relaxed mt-4">
            Arm-care protocols and recovery systems are integrated into every
            session to promote long-term health and sustainability. Athletes
            receive video feedback, detailed movement assessments, and measurable
            progress tracking on velocity, spin, and strike consistency.
          </p>

          {/* Stat Bar */}
          <div className="mt-6 flex justify-between text-sm text-[#0A2351]/80 font-semibold">
            <span>Velo Gain: +3–6 mph avg</span>
            <span>Command: 70–80% zone rate</span>
            <span>Delivery Efficiency: 90%+</span>
            <span>Arm Health: monitored each session</span>
          </div>
        </div>
      </motion.div>

      {/* === CTA === */}
      <motion.div
        className="mt-16 max-w-xl bg-white rounded-xl p-6 shadow-md border-2 border-[#FDB827]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-[#0A2351] mb-2">
          Schedule a Pitching Session
        </h3>
        <p className="text-[#0A2351] opacity-90 mb-4">
          Comprehensive pitching programs are available for all ages and levels,
          focusing on mechanics, consistency, and arm care. Individual and group
          sessions include full-motion analysis, recovery education, and velocity
          development tailored to each athlete’s goals.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#0A2351] text-[#FDB827] font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#FDB827] hover:text-[#0A2351] hover:shadow-[0_0_15px_#FDB82790] transition-all"
        >
          Book Now
        </a>
      </motion.div>
    </section>
  );
}
