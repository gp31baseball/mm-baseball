"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      {/* === HERO SECTION === */}
      <Hero />

      {/* === PROGRAMS SECTION (Updated with Video Breakdown) === */}
      <section
        id="programs"
        className="py-20 bg-[#42B3E0] text-center overflow-hidden"
      >
        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2351] mb-12 drop-shadow-[0_3px_4px_rgba(10,35,81,0.15)]">
            Training Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* --- Pitching --- */}
            <motion.div
              className="group bg-white rounded-xl border-2 border-[#FDB827] shadow-lg p-8 flex flex-col items-center transition-all hover:translate-y-[-6px] hover:shadow-[0_0_25px_#FDB82755]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="/icons/pitching.jpg"
                alt="Pitching Icon"
                className="w-20 h-20 object-cover mb-4 rounded-md shadow-md"
              />
              <h3 className="text-2xl font-bold text-[#0A2351] mb-3 group-hover:text-[#FDB827] transition-colors">
                Pitching Development
              </h3>
              <p className="text-[#0A2351] opacity-90 mb-6 leading-relaxed">
                Focused on command, velocity development, and arm health. We
                build efficient, repeatable movements using video breakdown and
                modern training concepts.
              </p>
              <Link
                href="/programs#pitching"
                className="bg-[#0A2351] text-[#FDB827] font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#FDB827] hover:text-[#0A2351] hover:shadow-[0_0_15px_#FDB82790] transition-all"
              >
                Learn More
              </Link>
            </motion.div>

            {/* --- Hitting --- */}
            <motion.div
              className="group bg-white rounded-xl border-2 border-[#FDB827] shadow-lg p-8 flex flex-col items-center transition-all hover:translate-y-[-6px] hover:shadow-[0_0_25px_#FDB82755]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="/icons/hitting.jpg"
                alt="Hitting Icon"
                className="w-20 h-20 object-cover mb-4 rounded-md shadow-md"
              />
              <h3 className="text-2xl font-bold text-[#0A2351] mb-3 group-hover:text-[#FDB827] transition-colors">
                Hitting Training
              </h3>
              <p className="text-[#0A2351] opacity-90 mb-6 leading-relaxed">
                Develop consistent contact, barrel control, and power. Our
                approach builds confidence and repeatable swing mechanics through
                live reps and situational drills.
              </p>
              <Link
                href="/hitting"
                className="bg-[#0A2351] text-[#FDB827] font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#FDB827] hover:text-[#0A2351] hover:shadow-[0_0_15px_#FDB82790] transition-all"
              >
                Learn More
              </Link>
            </motion.div>

            {/* --- Video Breakdown --- */}
            <motion.div
              className="group bg-white rounded-xl border-2 border-[#FDB827] shadow-lg p-8 flex flex-col items-center transition-all hover:translate-y-[-6px] hover:shadow-[0_0_25px_#FDB82755]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="/icons/video.jpg"
                alt="Video Breakdown Icon"
                className="w-20 h-20 object-cover mb-4 rounded-md shadow-md"
              />
              <h3 className="text-2xl font-bold text-[#0A2351] mb-3 group-hover:text-[#FDB827] transition-colors">
                Video Breakdown
              </h3>
              <p className="text-[#0A2351] opacity-90 mb-6 leading-relaxed">
                Personalized video analysis for mechanics, timing, and efficiency.
                Each breakdown includes slow-motion review, annotations, and
                feedback focused on measurable improvement and progress tracking.
              </p>
              <Link
                href="/video-breakdown"
                className="bg-[#0A2351] text-[#FDB827] font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#FDB827] hover:text-[#0A2351] hover:shadow-[0_0_15px_#FDB82790] transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
