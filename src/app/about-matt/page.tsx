"use client";
import { motion } from "framer-motion";

export default function AboutMatt() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#42B3E0] to-[#2095C6] py-20 px-6 flex flex-col items-center text-center">
      {/* === HEADER === */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-[#0A2351] mb-8 drop-shadow-[0_3px_4px_rgba(10,35,81,0.25)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Matt Maysey
      </motion.h1>

      <motion.p
  className="text-[#0A2351]/90 text-lg max-w-3xl mx-auto leading-relaxed mb-16"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  From big-league clubhouses to local diamonds, Matt Maysey has lived every inch
  of the game. A former MLB pitcher turned master developer of talent, he builds
  players the way he once built innings — with intent, intensity, and command.
  His coaching blends old-school toughness with cutting-edge data, turning raw
  potential into reliable performance. Matt’s mission:{" "}
  <span className="font-semibold text-[#0A2351]">
    teach the game, elevate the player, and shape the person.
  </span>
</motion.p>


      {/* === CARD FLIP AREA === */}
      <motion.div
        className="relative w-72 h-96 [perspective:1000px] mb-20 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <img
              src="/images/matt-card-front.jpg"
              alt="Matt Maysey Baseball Card Front"
              className="w-full h-full rounded-xl shadow-lg object-cover border-2 border-[#FDB827]"
            />
          </div>

          {/* Back */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <img
              src="/images/matt-card-back.jpg"
              alt="Matt Maysey Baseball Card Back"
              className="w-full h-full rounded-xl shadow-lg object-cover border-2 border-[#FDB827]"
            />
          </div>
        </div>
      </motion.div>

     {/* === CTA === */}
<motion.div
  className="max-w-xl bg-white rounded-xl p-6 shadow-md border-2 border-[#FDB827]"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.0, duration: 0.8 }}
>
  <p className="text-[#0A2351] opacity-90 mb-4 leading-relaxed">
    Matt works hands-on with developing athletes, bridging the gap between
    potential and performance. Every player he coaches learns more than
    mechanics — they learn accountability, resilience, and how to compete with
    intent. His focus is simple: prepare athletes for the next level —
    technically, mentally, and competitively.
  </p>
</motion.div>

      
    </section>
  );
}
