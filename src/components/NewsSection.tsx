"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NewsSection() {
  const articles = [
    {
      title: "Baseball America – Perfect Game Teams Up With Prep Baseball Report",
      site: "BaseballAmerica.com",
      href: "https://www.baseballamerica.com/stories/perfect-game-teams-up-with-prep-baseball-report/",
      blurb:
        "Baseball America covers the partnership driving high-school player development nationwide.",
    },
    {
      title: "MLB Trade Rumors – Hot Stove Updates and Player Moves",
      site: "MLBTraderumors.com",
      href: "https://www.mlbtraderumors.com/",
      blurb:
        "Daily league-wide transaction updates and analysis from trusted insiders.",
    },
    {
      title: "Baseball Factory – Developing the Next Generation",
      site: "BaseballFactory.com",
      href: "https://www.baseballfactory.com/news/",
      blurb:
        "Insights and stories from one of the nation’s premier player-development programs.",
    },
  ];

  return (
    <section className="relative bg-[#081A3D] text-[#F2CB70] py-28 px-6 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
          In the News
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((item, i) => (
            <motion.div
              key={i}
              className="group bg-[#0A2351]/70 backdrop-blur-md border border-[#FDB827]/20 rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(253,184,39,0.3)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <Link href={item.href} target="_blank" className="block p-6 text-left">
                <h3 className="text-xl font-semibold mb-1 text-[#FDB827] hover:text-[#FFD76D] transition">
                  {item.title}
                </h3>
                <p className="text-sm text-[#f2cb70]/70 italic mb-3">
                  {item.site}
                </p>
                <p className="text-[#f2cb70]/85 text-sm leading-relaxed">
                  {item.blurb}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
