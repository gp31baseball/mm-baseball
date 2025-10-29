"use client";
import { motion } from "framer-motion";

export default function VideoBreakdownPage() {
  return (
    <section className="min-h-screen bg-[#42B3E0] py-20 px-6 flex flex-col items-center text-center">
      {/* === HEADER === */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-[#0A2351] mb-12 drop-shadow-[0_3px_4px_rgba(10,35,81,0.25)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Video Breakdown
      </motion.h1>

    {/* === VIDEO SECTION === */}
<motion.div
  className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#FDB827]"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
>
  <video
    autoPlay
    muted
    loop
    playsInline
    controls
    className="w-full h-auto rounded-t-xl"
    src="/videos/nate_oct_55.mov"
  />
  <div className="p-6 text-left">
    <h2 className="text-2xl font-bold text-[#0A2351] mb-3">
      Fastball (53 MPH @ 50 ft)
    </h2>
    <p className="text-[#0A2351] opacity-90 leading-relaxed">
      This swing shows excellent rhythm against 11U true game tempo. The load
      is smooth and compact with a soft, balanced landing that keeps the
      head quiet through launch. The barrel enters the zone early and stays
      on plane for roughly 17–18 inches of path length — ideal for
      adjustability. Sequencing efficiency sits around 94–95 % of
      top-velocity swings, producing bat speed near 64 mph and an estimated
      exit velocity of 63 mph. Launch angle comes off 13–15°, carrying
      roughly 155–165 ft.
    </p>
  </div>
</motion.div>


      {/* === CTA OR INFO === */}
      <motion.div
        className="mt-16 max-w-2xl bg-white rounded-xl p-6 shadow-md border-2 border-[#FDB827]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-[#0A2351] mb-2">
          Submit Your Own Swing
        </h3>
        <p className="text-[#0A2351] opacity-90 mb-4">
          Upload a short .MOV or .MP4 of your swing for a personalized video
          breakdown. Each analysis includes slow-motion review, mechanical
          notes, and progress tracking.
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
