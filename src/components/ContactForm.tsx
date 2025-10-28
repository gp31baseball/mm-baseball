export default function ContactForm() {
  return (
    <section id="contact" className="bg-[#5DC1E9] py-20 text-center px-4">
      <h2 className="text-3xl font-bold text-[#0A2351] mb-6">Contact</h2>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 rounded-md border border-[#0A2351]" />
        <input type="email" placeholder="Email" className="p-3 rounded-md border border-[#0A2351]" />
        <textarea placeholder="Message" rows={4} className="p-3 rounded-md border border-[#0A2351]"></textarea>
        <button type="submit" className="bg-[#FDB827] text-[#0A2351] font-semibold py-3 rounded-md hover:opacity-90">
          Send Message
        </button>
      </form>
    </section>
  );
}
