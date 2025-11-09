"use client";
import { motion } from "framer-motion";
import { useScrollPulse } from "@/hooks/useScrollPulse"; // 🔹 new scroll-reactive hook

export default function About() {
  useScrollPulse(); // activates scroll-reactive pulse timing

  return (
    <section className="relative bg-[#0A2351] text-[#F2CB70] py-28 px-6 overflow-hidden">
      {/* 🔹 Moving mesh overlay (scroll-reactive pulse in CSS) */}
      <div className="about-mesh absolute inset-0 z-0" />

      {/* 🔹 Top gradient fade from hero */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 via-[#0A2351]/40 to-transparent pointer-events-none z-0" />

      {/* 🔹 Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-[#f2cb70]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          The Maysey Philosophy
        </motion.h2>

        {/* Main Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-[#f2cb70]/90 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        >
          At Matt Maysey Baseball, every rep has intent. Our training builds
          more than mechanics — it builds awareness, discipline, and confidence
          that translates when the lights come on. We train players to own
          the moment, not chase it.
        </motion.p>

        {/* Signature Quote */}
        <motion.p
          className="mt-10 italic text-[#f2cb70]/75 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          “It’s not about more swings — it’s about better ones.”
        </motion.p>

        {/* Gold Divider */}
        <motion.div
          className="brand-divider w-24 mx-auto mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.div>

      {/* 🔹 Bottom fade for smooth section transition */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A2351] via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
