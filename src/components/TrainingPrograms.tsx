"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TrainingPrograms() {
  const programs = [
    {
      id: "pitching",
      title: "Pitching Development",
      desc: "Focused on command, velocity development, and arm health. We build efficient, repeatable movements using video breakdown and modern training concepts.",
      icon: "/icons/pitching.svg",
      href: "/programs#pitching",
    },
    {
      id: "hitting",
      title: "Hitting Training",
      desc: "Develop consistent contact, barrel control, and power. Our approach builds confidence and repeatable swing mechanics through live reps and situational drills.",
      icon: "/icons/hitting.svg",
      href: "/hitting",
    },
    {
      id: "group",
      title: "Group / Team Workouts",
      desc: "Small-group sessions focused on competition, teamwork, and game-speed execution. Custom scheduling available.",
      icon: "/icons/group.svg",
      href: "/programs#group",
    },
  ];

  return (
    <section className="py-20 bg-[#42B3E0] text-center overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2351] mb-12 drop-shadow-[0_3px_4px_rgba(10,35,81,0.15)]">
          Training Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((p, i) => (
            <motion.div
              key={p.id}
              className="group bg-white rounded-xl border-2 border-[#FDB827] shadow-lg p-8 flex flex-col items-center transition-all hover:translate-y-[-6px] hover:shadow-[0_0_25px_#FDB82755]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={p.icon} alt={p.title} className="w-12 mb-4" />
              <h3 className="text-2xl font-bold text-[#0A2351] mb-3 group-hover:text-[#FDB827] transition-colors">
                {p.title}
              </h3>
              <p className="text-[#0A2351] opacity-90 mb-6 leading-relaxed">{p.desc}</p>
              <Link
                href={p.href}
                className="bg-[#0A2351] text-[#FDB827] font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#FDB827] hover:text-[#0A2351] hover:shadow-[0_0_15px_#FDB82790] transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
