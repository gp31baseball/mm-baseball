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

        {/* Placeholder text while waiting on final contact info */}
        <div className="text-lg font-medium opacity-90 max-w-xl mx-auto bg-[#0F2B6E]/40 rounded-xl py-6 px-6 shadow-inner border border-[#FDB827]/40 mb-10">
          <p className="text-[#FDB827] font-semibold mb-2">
            Contact Information Coming Soon
          </p>
          <p className="text-gray-200">
            For now, please reach out directly through your MM Baseball coach or
            staff member.
          </p>
        </div>

        {/* === Meet Matt button === */}
        <div className="mt-6">
          <a
            href="/about-matt"
            className="inline-block bg-[#FDB827] text-[#0A2351] font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#0A2351] hover:text-[#FDB827] hover:shadow-[0_0_15px_#FDB82790] transition-all"
          >
            Meet Matt
          </a>
        </div>

        {/* 
        --- Original links (saved for later use) ---
        <div className="flex flex-col md:flex-row justify-center gap-6 text-lg font-medium mt-6">
          <a
            href="mailto:info@mm-baseball.com"
            className="hover:text-[#FDB827] transition-colors duration-300"
          >
            📧 info@mm-baseball.com
          </a>
          <a
            href="tel:+15555555555"
            className="hover:text-[#FDB827] transition-colors duration-300"
          >
            📞 (555) 555-5555
          </a>
          <a
            href="https://www.instagram.com/mm_baseball"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FDB827] transition-colors duration-300"
          >
            📸 @mm_baseball
          </a>
        </div>
        */}
      </div>

      <div className="mt-12 border-t border-[#FDB827]/40 pt-6 text-sm opacity-80">
        <p>MM Baseball © {new Date().getFullYear()} • Train with Purpose</p>
      </div>
    </section>
  );
}
