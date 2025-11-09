"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Dumbbell,
  Gauge,
  Crosshair,
  HeartPulse,
  Target,
  Brain,
  Star,
} from "lucide-react";

export default function PitchingPage() {
  const pillars = [
    {
      title: "Biomechanics + Movement Patterning",
      blurb:
        "We refine the kinetic chain from the ground up — optimizing posture, timing, and sequencing to create effortless velocity and repeatable mechanics.",
      icon: Dumbbell,
    },
    {
      title: "Velocity Development",
      blurb:
        "Customized velocity programming using overload/underload training, tempo control, and power transfer drills. Safe velocity gains average +3–6 mph.",
      icon: Gauge,
    },
    {
      title: "Command + Consistency",
      blurb:
        "Zone precision training using visual target feedback and rhythm-based command work. Build feel, not guesswork.",
      icon: Crosshair,
    },
    {
      title: "Recovery + Arm Care",
      blurb:
        "Every session ends with individualized recovery protocols — J-bands, mobility work, and workload tracking for long-term durability.",
      icon: HeartPulse,
    },
    {
      title: "Game Mound Application",
      blurb:
        "Bridge the gap between practice and performance. Develop mound tempo, sequencing strategies, and confidence under pressure.",
      icon: Target,
    },
    {
      title: "Mental Execution & Competitive Mindset",
      blurb:
        "Pitching isn’t just mechanics — it’s conviction. We train composure, pre-pitch routines, and approach under pressure to help athletes compete with confidence.",
      icon: Brain,
    },
  ];

  const tiers = [
    {
      name: "Starter",
      details: "1-on-1 45-min mechanical session with full video analysis.",
      color: "#CD7F32", // Bronze
    },
    {
      name: "Advanced",
      details: "Weekly programming + arm-care plan. Includes velocity tracking.",
      color: "#C0C0C0", // Silver
    },
    {
      name: "Elite",
      details:
        "Full-season development track. Custom workload plan, bullpen feedback, and in-season data monitoring.",
      color: "#FDB827", // Gold
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#42B3E0] to-[#2095C6] py-20 px-6 text-center flex flex-col items-center">
      {/* === HERO HEADER === */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-[#0A2351] mb-4 drop-shadow-[0_3px_4px_rgba(10,35,81,0.25)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Pitching Development
      </motion.h1>

      <motion.p
        className="text-[#0A2351]/90 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Building efficient, durable pitchers through mechanical precision,
        workload management, and individualized velocity & command training.
      </motion.p>

      {/* === SIX PILLARS GRID === */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={i}
              className="relative bg-white/90 text-[#0A2351] rounded-xl shadow-md border-2 border-[#FDB827]/40 p-6 text-left backdrop-blur-md hover:shadow-[0_0_25px_rgba(253,184,39,0.45)] transition-all card-gold-border"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute inset-0 pointer-events-none border border-[#FDB827]/10 rounded-xl" />

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#FDB827]/10 rounded-md border border-[#FDB827]/40">
                  <Icon
                    className="w-6 h-6 text-[#FDB827] icon-gold"
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0A2351]">{p.title}</h3>
              </div>

              <p className="text-[#0A2351]/90 leading-relaxed">{p.blurb}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* === THE MAYSEY APPROACH FEATURE (POLISHED) === */}
      <motion.div
        className="maysey-feature relative overflow-hidden max-w-5xl mx-auto mb-24 rounded-2xl border-2 border-[#FDB827]/40 bg-gradient-to-r from-white/90 to-[#F8F7F2] shadow-lg backdrop-blur-md flex flex-col md:flex-row transition-all duration-500 hover:shadow-[0_0_40px_rgba(253,184,39,0.25)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Gold Accent Column */}
        <div className="md:w-1/3 relative bg-[#FDB827]/90 flex flex-col justify-center items-center text-[#0A2351] p-8 overflow-hidden">
          {/* Light sweep animation overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 animate-lightSweep" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display uppercase mb-3 drop-shadow-[0_2px_2px_rgba(10,35,81,0.3)]">
            The Maysey
            <br />
            Approach
          </h2>
          <div className="brand-divider mt-2 mb-4 animate-dividerGlow" />
          <p className="text-sm font-semibold italic text-[#0A2351]/90">
            “Train to repeat excellence.”
          </p>
        </div>

        {/* Right Content Section */}
        <div className="md:w-2/3 relative p-10 text-left flex flex-col justify-center overflow-hidden">
          {/* Faint baseball stitching texture */}
          <div className="absolute inset-0 bg-[url('/images/stitches-light.png')] bg-repeat bg-center bg-[length:300px_300px] opacity-[0.12] z-0 mix-blend-multiply animate-stitchesDrift" />

          {/* Text content */}
          <div className="relative z-10">
            <p className="text-[#0A2351]/90 leading-relaxed mb-4">
              The Maysey Approach blends time-tested pitching fundamentals with
              modern, data-driven precision. Each athlete receives detailed
              movement assessments and high-speed video feedback to develop
              mechanical consistency and individualized cues. The goal is
              simple — build pitchers who can feel and repeat their best
              delivery.
            </p>

            <p className="text-[#0A2351]/90 leading-relaxed">
              Every session connects mechanics, tempo, and mindset. By linking
              technique with confidence and discipline, the program develops
              durable, efficient pitchers who perform under pressure with
              conviction.
            </p>

            <p className="mt-6 text-[#0A2351]/70 italic font-semibold self-end">
              “Precision. Consistency. Confidence.”
            </p>
          </div>
        </div>
      </motion.div>

      {/* === PROGRAM TIERS === */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            className="relative bg-[#0A2351]/90 border border-[#FDB827]/40 text-[#FDB827] rounded-xl p-6 shadow-md hover:shadow-[0_0_25px_rgba(253,184,39,0.45)] transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            {/* Star Icon */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#0A2351] rounded-full p-2 border-2 border-[#FDB827]/40">
              <Star
                className="w-6 h-6 tier-star transition-all duration-500"
                color={tier.color}
                strokeWidth={2}
                fill={tier.color}
              />
            </div>

            <h3 className="text-2xl font-bold mt-4 mb-3">{tier.name}</h3>
            <p className="text-sm text-[#F2CB70]/90 leading-relaxed mb-4">
              {tier.details}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#FDB827] text-[#0A2351] font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#f2cb70] hover:shadow-[0_0_12px_#FDB82790] transition-all"
            >
              Book Now
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* === CTA === */}
      <motion.div
        className="max-w-xl mx-auto bg-white rounded-xl p-6 shadow-md border-2 border-[#FDB827]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold text-[#0A2351] mb-2">
          Ready to Elevate Your Pitching Game?
        </h3>
        <p className="text-[#0A2351] opacity-90 mb-4">
          Schedule your first pitching evaluation and experience the
          individualized approach that’s helped countless athletes maximize
          their command, velocity, and longevity.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#0A2351] text-[#FDB827] font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#FDB827] hover:text-[#0A2351] hover:shadow-[0_0_15px_#FDB82790] transition-all"
        >
          Book an Evaluation
        </Link>
      </motion.div>
    </section>
  );
}
