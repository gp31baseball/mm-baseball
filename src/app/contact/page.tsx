"use client";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#42B3E0] to-[#2095C6] py-20 px-6 flex flex-col items-center text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-[#0A2351] mb-6 drop-shadow-[0_3px_4px_rgba(10,35,81,0.25)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact
      </motion.h1>

      <motion.p
        className="text-[#0A2351]/90 text-lg max-w-xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Use this form to reach out about training availability, video breakdowns,
        or tryout prep. Coach Matt reviews each message personally and works with
        a limited number of players.
      </motion.p>

      <motion.div
        className="mt-16 w-full max-w-md bg-white rounded-xl p-6 shadow-md border-2 border-[#FDB827]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
}

