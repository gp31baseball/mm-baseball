"use client";
import { motion } from "framer-motion";
import { Gauge, Activity, Brain } from "lucide-react";

export default function VideoBreakdownPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#42B3E0] to-[#2095C6] py-20 px-6 flex flex-col items-center text-center">
      {/* === HEADER === */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-[#0A2351] mb-4 drop-shadow-[0_3px_4px_rgba(10,35,81,0.25)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Video Breakdown
      </motion.h1>

      <motion.p
        className="text-[#0A2351]/90 text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Side-by-side swing analysis revealing how timing, rhythm, and
        adjustability separate elite hitters — every rep, every pitch type.
      </motion.p>

      {/* === DUAL BREAKDOWN BLOCK === */}
      <motion.div
        className="max-w-6xl mx-auto mb-16 w-full flex flex-col md:grid md:grid-cols-2 gap-10 
        overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scroll-smooth scrollbar-thin md:scrollbar-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* --- FASTBALL BREAKDOWN --- */}
        <motion.div
          className="relative flex-shrink-0 snap-start w-[90%] md:w-auto bg-white/90 rounded-2xl border-2 border-[#FDB827]/40 shadow-lg overflow-hidden backdrop-blur-md hover:shadow-[0_0_30px_rgba(253,184,39,0.35)] transition-all flex flex-col"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-[#FDB827]/30 bg-white">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="/videos/thumbnail.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/nate_oct_55.mov"
            />
          </div>

          <div className="p-6 text-left flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-2xl font-bold text-[#0A2351] mb-2">
                Fastball (55 MPH @ 50 ft)
              </h2>
              <p className="text-[#0A2351]/90 leading-relaxed mb-4">
                This reference swing shows elite rhythm and sequencing at true
                game speed. The load stays compact, posture holds firm, and the
                barrel stays on-plane ≈ 18 in. Bat speed ≈ 65 mph, exit velo ≈
                64 mph, launch ≈ 14°, carry ≈ 170 ft.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm font-semibold text-[#0A2351]/90 mt-auto">
              <div className="bg-[#FDB827]/10 p-2 rounded-md border border-[#FDB827]/30 text-center">
                Bat Speed 65 mph
              </div>
              <div className="bg-[#FDB827]/10 p-2 rounded-md border border-[#FDB827]/30 text-center">
                Exit Velo 64 mph
              </div>
              <div className="bg-[#FDB827]/10 p-2 rounded-md border border-[#FDB827]/30 text-center">
                Launch 14°
              </div>
              <div className="bg-[#FDB827]/10 p-2 rounded-md border border-[#FDB827]/30 text-center">
                Carry 170 ft
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- OFF-SPEED BREAKDOWN --- */}
        <motion.div
          className="relative flex-shrink-0 snap-start w-[90%] md:w-auto bg-white/90 rounded-2xl border-2 border-[#FDB827]/40 shadow-lg overflow-hidden backdrop-blur-md hover:shadow-[0_0_30px_rgba(253,184,39,0.35)] transition-all flex flex-col"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-[#FDB827]/30 bg-white">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/nate_offspeed.mov"
            />
          </div>

          <div className="p-6 text-left flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-2xl font-bold text-[#0A2351] mb-2">
                Off-Speed (45–47 MPH @ 50 ft)
              </h2>
              <p className="text-[#0A2351]/90 leading-relaxed mb-4">
                Nate recognizes the changeup late — front-foot lands early but
                posture and sequence hold together. Adjusts mid-swing, keeps
                barrel lag, and drives a 175 ft fly to center. Exit velo ≈ 63
                mph, launch ≈ 15°, showing elite adjustability.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm font-semibold text-[#0A2351]/90 mt-auto">
              <div className="bg-[#FDB827]/10 p-2 rounded-md border border-[#FDB827]/30 text-center">
                Bat Speed 63 mph
              </div>
              <div className="bg-[#FDB827]/10 p-2 rounded-md border border-[#FDB827]/30 text-center">
                Exit Velo 63 mph
              </div>
              <div className="bg-[#FDB827]/10 p-2 rounded-md border border-[#FDB827]/30 text-center">
                Launch 15°
              </div>
              <div className="bg-[#FDB827]/10 p-2 rounded-md border border-[#FDB827]/30 text-center">
                Carry 175 ft
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* === COACH'S INSIGHT === */}
      <motion.div
        className="max-w-4xl mx-auto bg-white/90 border-2 border-[#FDB827]/40 rounded-2xl shadow-md p-8 text-left backdrop-blur-md mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-[#0A2351] mb-3">
          Coach’s Insight
        </h3>
        <p className="text-[#0A2351]/90 leading-relaxed mb-4">
          Great hitters don’t have two swings — they have one movement pattern
          that adjusts to timing. The goal of breakdown work isn’t to fix
          mechanics; it’s to understand how efficient movement translates
          across pitch types and speeds.
        </p>

        <div className="flex items-center gap-3 mt-6">
          <div className="p-2 bg-[#FDB827]/10 rounded-md border border-[#FDB827]/40">
            <Brain className="w-6 h-6 text-[#FDB827]" strokeWidth={2.5} />
          </div>
          <p className="text-[#0A2351]/80 italic font-semibold">
            “Repeatability creates confidence — confidence creates adjustability.”
          </p>
        </div>
      </motion.div>

      {/* === WHY VIDEO ANALYSIS WORKS === */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[
          {
            icon: Gauge,
            title: "Measure Progress",
            blurb:
              "Video paired with metrics quantifies every improvement — bat speed, timing, and path efficiency.",
          },
          {
            icon: Activity,
            title: "Identify Adjustments",
            blurb:
              "Slow-motion review isolates movement patterns so corrections are fast, targeted, and repeatable.",
          },
          {
            icon: Brain,
            title: "Train Awareness",
            blurb:
              "Seeing your own mechanics builds feel — bridging the gap between visual feedback and muscle memory.",
          },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              className="bg-white/90 text-[#0A2351] rounded-xl shadow-md border-2 border-[#FDB827]/40 p-6 text-left hover:shadow-[0_0_20px_rgba(253,184,39,0.3)] transition-all card-gold-border"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#FDB827]/10 rounded-md border border-[#FDB827]/40">
                  <Icon
                    className="w-6 h-6 text-[#FDB827] icon-gold"
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-[#0A2351]/90 leading-relaxed">
                {item.blurb}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* === CTA === */}
      <motion.div
        className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-md border-2 border-[#FDB827]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <h3 className="text-2xl font-semibold text-[#0A2351] mb-2">
          Submit Your Own Swing
        </h3>
        <p className="text-[#0A2351] opacity-90 mb-4">
          Upload a short .MOV or .MP4 for personalized video analysis. Each
          review includes slow-motion feedback, mechanical notes, and progress
          tracking.
        </p>
        <a
          href="/upload"
          className="inline-block bg-[#0A2351] text-[#FDB827] font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#FDB827] hover:text-[#0A2351] hover:shadow-[0_0_15px_#FDB82790] transition-all"
        >
          Upload Video
        </a>
      </motion.div>
    </section>
  );
}
