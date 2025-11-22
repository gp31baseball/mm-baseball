export default function Footer() {
  return (
    <section
      id="contact"
      className="bg-[#0A2351] text-white py-16 mt-20 text-center relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#FDB827] mb-8">
          Get in Touch
        </h2>

        <p className="text-lg md:text-xl mb-8 opacity-90">
          Interested in training or have questions? Reach out today — let’s
          start building your game.
        </p>

        {/* ⭐ Clean Contact CTA */}
        <div className="mt-6 mb-10">
          <a
            href="/contact"
            className="inline-block bg-[#FDB827] text-[#0A2351] font-semibold px-6 py-3 rounded-md shadow-md
            hover:bg-[#0A2351] hover:text-[#FDB827] hover:shadow-[0_0_15px_#FDB82790] transition-all"
          >
            Contact Coach Matt
          </a>
        </div>

        {/* === Meet Matt button === */}
        <div className="mt-6">
          <a
            href="/about-matt"
            className="inline-block bg-[#FDB827] text-[#0A2351] font-semibold px-6 py-2 rounded-md shadow-md 
            hover:bg-[#0A2351] hover:text-[#FDB827] hover:shadow-[0_0_15px_#FDB82790] transition-all"
          >
            Meet Matt
          </a>
        </div>
      </div>

      {/* === Footer Bottom Section with FortyOneBuilt Link + Coach Login === */}
      <div className="mt-12 border-t border-[#FDB827]/40 pt-6 text-sm opacity-80 flex flex-col md:flex-row items-center justify-center gap-3">

        <p>MM Baseball © {new Date().getFullYear()} • Train with Purpose</p>

        <span className="hidden md:inline text-[#FDB827]">|</span>

        <a
          href="https://www.fortyonebuilt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FDB827] hover:text-white transition-colors duration-300"
        >
          Built by FortyOne
        </a>

        <span className="hidden md:inline text-[#FDB827]">|</span>

        {/* ⭐ Coach Login — subtle, professional, easy for Matt to find */}
        <a
          href="/coach"
          className="text-[#FDB827]/70 hover:text-[#FDB827] text-xs md:text-sm transition-colors duration-300"
        >
          Coach Login
        </a>
      </div>
    </section>
  );
}
