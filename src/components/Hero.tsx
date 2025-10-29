"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // ✅ added import
import "./hero.css";

export default function Hero() {
  const taglineWords = ["Hitting", "Player Development", "Pitching"];

  // ✅ unchanged except real routes
  const buttons = [
    { label: "Book a Lesson", href: "/book-a-lesson" },
    { label: "View Programs", href: "/programs" },
  ];

  return (
    <motion.section
      className="hero-wrapper min-h-[90vh] flex flex-col justify-center items-center text-center bg-[#42B3E0] px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <img
        src="/images/mm-hero.png"
        alt="MM Baseball Logo"
        className="hero-logo w-56 md:w-64 mb-8 rounded-md transition-transform duration-500 hover:scale-105"
      />

      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-[#0A2351] drop-shadow-[0_3px_4px_rgba(10,35,81,0.25)] tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Private Baseball Training
      </motion.h1>

      <motion.div
        className="text-xl md:text-2xl mt-4 font-medium text-[#0A2351] opacity-90 drop-shadow-[0_2px_3px_rgba(10,35,81,0.2)] tracking-wide flex flex-wrap justify-center gap-2"
      >
        {taglineWords.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6 + i * 0.3,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {word}
            {i !== taglineWords.length - 1 && <span> • </span>}
          </motion.span>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {buttons.map((button, i) => (
          <motion.div // ✅ wrap the button in a div for motion variant
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* ✅ Link wrapper so clicking navigates */}
            <Link href={button.href}>
              <button
                className="group bg-[#0A2351] text-[#FDB827] font-semibold px-8 py-3 rounded-md shadow-md relative overflow-hidden transition-all duration-300 hover:bg-[#FDB827] hover:text-[#0A2351] hover:shadow-[0_0_15px_#FDB82790] hover:translate-y-[-2px]"
              >
                <span className="relative z-10">{button.label}</span>
                <span className="absolute inset-0 bg-[#FDB827] opacity-0 group-hover:opacity-40 blur-lg transition duration-300"></span>
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
