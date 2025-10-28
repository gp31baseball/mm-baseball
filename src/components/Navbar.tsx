"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0A2351] to-[#123c7c] backdrop-blur text-[#FDB827] z-50 px-6 py-4 flex justify-between items-center shadow-lg transition-all duration-500">
      {/* Left: Animated Logo + Title */}
      <motion.div
        className="flex items-center gap-2 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src="/images/mm-logo.png"
          alt="MM Logo"
          className="h-9 w-auto object-contain drop-shadow-[0_0_6px_#FDB82790] rounded"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            filter: "drop-shadow(0 0 12px #FDB827)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />
        <motion.span
          className="text-xl font-bold tracking-wide"
          whileHover={{ textShadow: "0px 0px 8px #FDB827" }}
        >
          MM Baseball
        </motion.span>
      </motion.div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 font-semibold">
        {["Home", "Programs", "Contact"].map((link) => (
          <a
            key={link}
            href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
            className="relative group transition"
          >
            <span className="transition-colors duration-300 group-hover:text-white">
              {link}
            </span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FDB827] rounded-full 
              group-hover:w-full transition-all duration-300 group-hover:shadow-[0_0_8px_#FDB827]"
            ></span>
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl hover:text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 right-6 bg-[#0A2351] text-[#FDB827] flex flex-col p-4 rounded-md shadow-md md:hidden"
        >
          {["Home", "Programs", "Contact"].map((link) => (
            <a
              key={link}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="py-2 text-lg font-medium hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
