"use client";
import { motion } from "framer-motion";

export default function HittingPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#42B3E0] to-[#2095C6] py-20 px-6 flex flex-col items-center text-center">
      {/* === HEADER === */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-[#0A2351] mb-4 drop-shadow-[0_3px_4px_rgba(10,35,81,0.25)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hitting Training
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-[#0A2351]/90 text-lg max-w-xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Building consistent, confident hitters through game-speed reps, mechanical
        efficiency, and a data-driven approach to contact quality and power.
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
          poster="/videos/hitting_thumbnail.jpg"
          className="w-full h-auto rounded-t-xl"
          src="/videos/hitting_demo.mov" // your Corey Julks BP clip
        />
        <div className="p-6 text-left">
          <h2 className="text-2xl font-bold text-[#0A2351] mb-3">
            Program Overview
          </h2>
          <p className="text-[#0A2351] opacity-90 leading-relaxed">
            Our hitting program is built around repeatable efficiency — teaching
            athletes to move with intent, stay balanced through launch, and
            deliver the barrel on time with adjustability. Training blends
            mechanical precision with live-situation awareness, developing hitters
            who can compete confidently at any level.
          </p>

          <p className="text-[#0A2351] opacity-90 leading-relaxed mt-4">
            Sessions emphasize lower-half sequencing, posture control, and
            efficient energy transfer. Using high-speed video and measurable
            feedback, each athlete builds a personal understanding of what
            creates their best contact quality and power output.
          </p>

          <div className="mt-6 flex justify-between text-sm text-[#0A2351]/80 font-semibold">
            <span>Bat Speed: +5–8 mph avg gain</span>
            <span>Contact Quality: 90–95 %</span>
            <span>Launch: 10–18 ° range</span>
            <span>Carry: +25 ft avg gain</span>
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
          Schedule a Hitting Session
        </h3>
        <p className="text-[#0A2351] opacity-90 mb-4">
          Private and small-group training available. Sessions are tailored to
          each athlete’s age, level, and mechanical profile — blending modern
          movement work with in-game approach and situational awareness.
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
