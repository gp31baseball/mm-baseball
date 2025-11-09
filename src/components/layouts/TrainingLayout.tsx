"use client";
import { motion } from "framer-motion";
import React from "react";

interface TrainingLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function TrainingLayout({
  title,
  subtitle,
  children,
}: TrainingLayoutProps) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#42B3E0] to-[#2095C6] py-20 px-6 flex flex-col items-center text-center">
      {/* === HERO HEADER === */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-[#0A2351] mb-4 drop-shadow-[0_3px_4px_rgba(10,35,81,0.25)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-[#0A2351]/90 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {subtitle}
      </motion.p>

      {/* === CONTENT (passed from each training page) === */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
