"use client";
import { motion } from "framer-motion";

export default function BookALessonPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#42B3E0] to-[#2095C6] py-20 px-6 flex flex-col items-center text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-[#0A2351] mb-6 drop-shadow-[0_3px_4px_rgba(10,35,81,0.25)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Book a Lesson
      </motion.h1>

      <motion.p
        className="text-[#0A2351]/90 text-lg max-w-xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Online lesson booking is currently under construction.
        <br />
        <span className="font-semibold text-[#FDB827]">
          Coming Soon — you’ll be able to schedule your private training sessions directly from this page.
        </span>
      </motion.p>

      <motion.div
        className="mt-16 max-w-md bg-white rounded-xl p-6 shadow-md border-2 border-[#FDB827]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p className="text-[#0A2351] opacity-90 mb-4">
          For now, please reach out through our contact page or social media to set up your next session.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#0A2351] text-[#FDB827] font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#FDB827] hover:text-[#0A2351] hover:shadow-[0_0_15px_#FDB82790] transition-all"
        >
          Go to Contact
        </a>
      </motion.div>
    </section>
  );
}
