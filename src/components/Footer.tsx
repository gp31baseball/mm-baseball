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

        <div className="flex flex-col md:flex-row justify-center gap-6 text-lg font-medium">
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
      </div>

      <div className="mt-12 border-t border-[#FDB827]/40 pt-6 text-sm opacity-80">
        <p>MM Baseball © {new Date().getFullYear()} • Train with Purpose</p>
      </div>
    </section>
  );
}
