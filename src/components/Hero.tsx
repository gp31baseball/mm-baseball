"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import "./hero.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  const taglineWords = ["Hitting", "Player Development", "Pitching"];
  const buttons = [
    { label: "Book a Lesson", href: "/book-a-lesson" },
    { label: "View Programs", href: "/programs" },
  ];

  return (
    <motion.section
      className="relative flex flex-col justify-center items-center text-center min-h-[90vh] overflow-hidden bg-[#0A2351]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* 🔹 Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, y: 0 }}
        animate={{ scale: 1, y: -10 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/batter2.png"
          alt="Baseball silhouette background"
          fill
          priority
          className="object-cover opacity-35"
        />
      </motion.div>

      {/* 🔹 Cinematic light drift overlay */}
      <div className="hero-light" />

      {/* 🔹 Lighting & gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2351]/40 via-transparent to-white/60 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,transparent_70%)] z-0" />

      {/* 🔹 Foreground Content */}
      <div className="relative z-10 px-6">
        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-[#f2cb70] drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Champions Are Built Here
        </motion.h1>

        <p className="mt-3 text-lg md:text-xl text-[#f2cb70]/80 font-medium tracking-wide">
          Train with precision. Play with purpose.
        </p>

        {/* Tagline */}
        <motion.div
          className="text-xl md:text-2xl mt-4 font-medium text-[#f2cb70] opacity-90 tracking-wide flex flex-wrap justify-center gap-2"
        >
          {taglineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9 + i * 0.3,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              {word}
              {i !== taglineWords.length - 1 && <span> • </span>}
            </motion.span>
          ))}
        </motion.div>

        {/* 🔹 Buttons (with frosted & wet-glass look) */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((button, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.2 + i * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <Link href={button.href}>
                <button
                  className="group relative overflow-hidden px-8 py-3 rounded-md font-semibold 
                  text-[#FDB827] bg-[#0A2351]/70 backdrop-blur-md border border-[#FDB827]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] 
                  transition-all duration-300 ease-out
                  hover:text-[#0A2351] hover:bg-[#FDB827]/90 hover:shadow-[0_0_25px_rgba(253,184,39,0.5)]
                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-white/5 before:opacity-40
                  after:absolute after:top-0 after:left-0 after:w-1/2 after:h-full after:bg-white/40 after:translate-x-[-120%] after:skew-x-[25deg]
                  hover:after:translate-x-[200%] after:transition-transform after:duration-[1.2s]"
                >
                  <span className="relative z-10 drop-shadow-[0_0_3px_rgba(0,0,0,0.3)]">
                    {button.label}
                  </span>
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Divider + Brand Lockup */}
        <motion.div
          className="mt-14 flex flex-col items-center justify-center select-none pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          {/* gold divider line w/ idle shimmer */}
          <div className="brand-divider h-[2px] w-32 md:w-48 rounded-full mb-4" />

          {/* Collegiate "Matt Maysey Baseball" */}
          <div
            className={`${bebas.className} text-transparent text-[7vw] md:text-[4.5vw] font-extrabold uppercase tracking-[0.08em] animate-shimmer`}
          >
            Matt Maysey Baseball
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
