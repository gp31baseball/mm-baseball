"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Zap, Ruler, Activity, Gauge, Trophy, Star } from "lucide-react";


export default function HittingPage() {
  const focuses = [
    {
      title: "Barrel Path + Launch Efficiency",
      icon: Ruler,
      blurb:
        "We teach hitters to move the barrel through the zone with consistency and adjustability — creating optimal launch angles and true ball flight.",
    },
    {
      title: "Lower-Half Sequencing",
      icon: Activity,
      blurb:
        "Efficient energy transfer starts from the ground up. Our focus on lower-half mechanics builds rhythm, torque, and controlled explosiveness.",
    },
    {
      title: "Timing + Rhythm Training",
      icon: Gauge,
      blurb:
        "Live and machine-based timing work trains hitters to sync their moves and recognize velocity patterns — developing confidence under game speed.",
    },
    {
      title: "Bat Speed Development",
      icon: Zap,
      blurb:
        "Customized overload/underload and intent-driven training designed to safely increase swing speed, force output, and adjustability.",
    },
    {
      title: "Contact Quality + Feedback",
      icon: Target,
      blurb:
        "Using high-speed video, HitTrax, and Rapsodo data, we measure barrel accuracy and exit velocity to guide every athlete’s personal approach.",
    },
    {
      title: "Mental Approach + Game Adjustments",
      icon: Trophy,
      blurb:
        "We train hitters to think like competitors — reading counts, trusting their plan, and winning pitch-by-pitch battles.",
    },
  ];

  const tiers = [
    {
      name: "Foundation",
      color: "#CD7F32", // Bronze
      details:
        "Individual 45-min session focusing on mechanical baseline and movement sequencing.",
    },
    {
      name: "Advanced",
      color: "#C0C0C0", // Silver
      details:
        "Weekly training program integrating data feedback and progressive swing refinement.",
    },
    {
      name: "Elite",
      color: "#FDB827", // Gold
      details:
        "Full-season offensive development plan including approach work, analytics, and video review.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#42B3E0] to-[#2095C6] py-20 px-6 flex flex-col items-center text-center">
      {/* === HERO HEADER === */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-[#0A2351] mb-4 drop-shadow-[0_3px_4px_rgba(10,35,81,0.25)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Hitting Development
      </motion.h1>

      <motion.p
        className="text-[#0A2351]/90 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Building confident, explosive hitters through efficient movement, data-driven feedback, and a repeatable, game-speed approach.
      </motion.p>

      {/* === SIX FOCUS PILLARS === */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {focuses.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              className="relative bg-white/90 text-[#0A2351] rounded-xl shadow-md border-2 border-[#FDB827]/40 p-6 text-left backdrop-blur-md hover:shadow-[0_0_25px_rgba(253,184,39,0.45)] transition-all card-gold-border"
              whileHover={{ scale: 1.04 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#FDB827]/10 rounded-md border border-[#FDB827]/40">
                  <Icon
                    className="w-6 h-6 text-[#FDB827] icon-gold"
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0A2351]">{f.title}</h3>
              </div>
              <p className="text-[#0A2351]/90 leading-relaxed">{f.blurb}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* === THE MAYSEY HITTING PHILOSOPHY FEATURE === */}
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
            Method
          </h2>
          <div className="brand-divider mt-2 mb-4 animate-dividerGlow" />
          <p className="text-sm font-semibold italic text-[#0A2351]/90">
            “Hit with rhythm. React with confidence.”
          </p>
        </div>

        {/* Right Content Section */}
        <div className="md:w-2/3 relative p-10 text-left flex flex-col justify-center overflow-hidden">
          {/* Faint baseball stitching texture */}
          <div className="absolute inset-0 bg-[url('/images/stitches-light.png')] bg-repeat bg-center bg-[length:300px_300px] opacity-[0.12] z-0 mix-blend-multiply animate-stitchesDrift" />

          <div className="relative z-10">
            <p className="text-[#0A2351]/90 leading-relaxed mb-4">
              The Maysey Method teaches hitters to build power from balance and tempo — 
              transferring energy efficiently while keeping adjustability through the zone.
              Using modern feedback tools, we help athletes understand the “why” behind their best swings.
            </p>
            <p className="text-[#0A2351]/90 leading-relaxed">
              Our hitters learn to compete at game speed — reading pitch patterns, controlling timing windows,
              and attacking with confidence. It’s not about more swings — it’s about better ones.
            </p>
            <p className="mt-6 text-[#0A2351]/70 italic font-semibold self-end">
              “Intent. Rhythm. Adjustability.”
            </p>
          </div>
        </div>
      </motion.div>

      {/* === TRAINING TIERS === */}
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
          Ready to Elevate Your Offense?
        </h3>
        <p className="text-[#0A2351] opacity-90 mb-4">
          Schedule a hitting evaluation today and start training with intent, rhythm, and data-backed confidence.
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
