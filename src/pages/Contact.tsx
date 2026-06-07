export default function Contact() {
  return (
    <main
      id="main-content"
      className="w-full max-w-5xl mx-auto p-4 sm:p-8 lg:p-12 flex flex-col items-center justify-center min-h-[65vh] focus:outline-none"
    >
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-center mb-6 tracking-widest uppercase text-[#5C1616]">
        Get In Touch
      </h1>
      {/* Decorative Brand Divider */}
      <div className="w-12 h-1 bg-[#5C1616] mb-12 sm:mb-16 aria-hidden" />
      {/* Contact Card Layout */}
      <section
        aria-label="Contact Information"
        className="bg-white w-full max-w-140 rounded-xl shadow-sm border border-stone-200/60 p-8 sm:p-12 flex flex-col items-center text-center focus-within:ring-2 focus-within:ring-[#5C1616] focus-within:ring-offset-2 focus-within:ring-offset-[#f4f2eb] transition-shadow hover:shadow-md"
      >
        <h2 className="text-2xl sm:text-3xl font-serif tracking-wider text-[#5C1616] uppercase mb-8 sm:mb-10">
          Sara Al
        </h2>
        <p className="text-sm sm:text-base text-black font-sans text-center max-w-100 mb-8 leading-relaxed">
          Whether you are looking to collaborate on a new project, discuss an
          internship opportunity or discuss any other matters, feel free to
          reach out. I typically respond within 24 hours.
        </p>

        <div className="flex flex-col gap-8 sm:gap-10 w-full">
          {/* Phone Detail */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold font-sans uppercase tracking-[0.2em] text-[#5C1616] mb-2">
              Phone
            </h3>
            <a
              href="tel:+4792050418"
              className="text-base sm:text-lg text-stone-800 hover:text-[#5C1616] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C1616] rounded p-1"
            >
              (+47) 92050418
            </a>
          </div>

          {/* Email Detail */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold font-sans uppercase tracking-[0.2em] text-[#5C1616] mb-2">
              E-Mail
            </h3>
            <a
              href="mailto:Sara.al.ya@hotmail.com"
              className="text-base sm:text-lg text-stone-800 hover:text-[#5C1616] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C1616] rounded p-1"
            >
              Sara.al.ya@hotmail.com
            </a>
          </div>

          {/* GitHub Detail */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold font-sans uppercase tracking-[0.2em] text-[#5C1616] mb-2">
              GitHub
            </h3>
            <a
              href="https://github.com/SweetlyBossy"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile for SweetlyBossy (opens in a new tab)"
              className="text-base sm:text-lg text-stone-800 hover:text-[#5C1616] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C1616] rounded p-1"
            >
              @SweetlyBossy
            </a>
          </div>
          <p className="text-xs uppercase tracking-widest text-[#5C1616] font-medium mt-6 mb-8">
            Based in Enebakk, Norway
          </p>
        </div>
      </section>
    </main>
  );
}
