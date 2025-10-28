"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // ✅ added this line
import Hero from "../../components/Hero";


export default function Home() {
  const programData = [
    {
      title: "Hitting",
      description:
        "Develop consistent contact, barrel control, and power. Our approach builds confidence and repeatable swing mechanics through live reps and situational drills.",
    },
    {
      title: "Player Development",
      description:
        "Designed for all-around growth — from athletic movement to mental game prep. Learn how to compete, adjust, and perform at every level of competition.",
    },
    {
      title: "Pitching",
      description:
        "Focused on command, velocity development, and arm health. We build efficient, repeatable movements using video breakdown and modern training concepts.",
    },
  ];

  return (
    <>
      {/* === HERO SECTION === */}
      <Hero />

      {/* === PROGRAMS SECTION === */}
      <section
        id="programs"
        className="py-20 bg-white text-center overflow-hidden"
      >
        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2351] mb-10 drop-shadow-[0_3px_4px_rgba(10,35,81,0.15)]">
            Training Programs
          </h2>

          <motion.div
            className="grid md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {/* === Hitting card with link === */}
            <Link href="/hitting">
              <motion.div
                className="group border-2 border-[#FDB827] rounded-xl p-8 bg-[#fefefe] shadow-md hover:shadow-[0_0_20px_#FDB82755] transition-all duration-300 hover:translate-y-[-6px] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-2xl font-bold text-[#0A2351] mb-3 group-hover:text-[#FDB827] transition-colors">
                  Hitting
                </h3>
                <p className="text-[#0A2351] opacity-90 leading-relaxed">
                  Develop consistent contact, barrel control, and power. Our
                  approach builds confidence and repeatable swing mechanics
                  through live reps and situational drills.
                </p>
              </motion.div>
            </Link>

            {/* === Player Development card === */}
            <motion.div
              className="group border-2 border-[#FDB827] rounded-xl p-8 bg-[#fefefe] shadow-md hover:shadow-[0_0_20px_#FDB82755] transition-all duration-300 hover:translate-y-[-6px]"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-[#0A2351] mb-3 group-hover:text-[#FDB827] transition-colors">
                Player Development
              </h3>
              <p className="text-[#0A2351] opacity-90 leading-relaxed">
                Designed for all-around growth — from athletic movement to
                mental game prep. Learn how to compete, adjust, and perform at
                every level of competition.
              </p>
            </motion.div>

            {/* === Pitching card === */}
            <motion.div
              className="group border-2 border-[#FDB827] rounded-xl p-8 bg-[#fefefe] shadow-md hover:shadow-[0_0_20px_#FDB82755] transition-all duration-300 hover:translate-y-[-6px]"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-[#0A2351] mb-3 group-hover:text-[#FDB827] transition-colors">
                Pitching
              </h3>
              <p className="text-[#0A2351] opacity-90 leading-relaxed">
                Focused on command, velocity development, and arm health. We
                build efficient, repeatable movements using video breakdown and
                modern training concepts.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
