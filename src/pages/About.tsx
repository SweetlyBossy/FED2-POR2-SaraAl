import { Link } from "react-router-dom";

export default function About() {
  return (
    <main
      id="main-content"
      className="w-full pb-20 md:pb-32 focus:outline-none"
    >
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 text-center mb-12">
        <h1 className="text-xl sm:text-5xl md:text-6xl font-serif text-[#5C1616] uppercase tracking-widest mb-6">
          Sara Al
        </h1>
        <p className="text-xl md:text-2xl font-serif text-stone-900 italic">
          Crafting digital experiences that feel as good as they look.
        </p>
        <p className="mt-4 text-xs font-sans uppercase tracking-[0.2em] text-[#5C1616]">
          Based in Enebakk, Norway
        </p>
      </header>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="w-100 m-auto bg-stone-200 overflow-hidden rounded-sm relative group shadow-sm">
          <img
            src="/Me.png"
            alt="Sara Al, Professional Front-End Developer"
            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#5C1616]/0 transition-colors duration-500 group-hover:bg-[#5C1616]/10 pointer-events-none"></div>
        </div>
      </div>

      {/* --- 3. Centered Narrative */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32 flex flex-col gap-8 text-lg text-stone-700 leading-relaxed font-serif">
        <p className="text-2xl text-stone-900 mb-4">
          <strong className="font-bold text-[#5C1616]">━ </strong>I am a
          front-end developer driven by logic, clean architecture, and
          performance. While I appreciate a beautiful interface, my true passion
          lies in the engineering that makes it function seamlessly.
        </p>
        <p>
          I have dedicated myself to mastering component-driven development and
          type-safe ecosystems. I specialize in building with React and
          TypeScript, focusing heavily on scalable state management, efficient
          API integration, and writing modular codebases.
        </p>
        <p>
          I build with longevity in mind, writing code that is just as seamless
          for developers to scale as it is for users to navigate. Away from the
          keyboard, I believe a strong body powers a strong mind, so staying
          active is a huge part of my life, right alongside clearing my head
          with a long drive, enjoying great music, and spending quality time
          with my family.
        </p>
      </div>

      <hr
        className="max-w-6xl mx-auto border-t border-stone-300/60 mb-20 md:mb-28"
        aria-hidden="true"
      />

      {/* --- 4. Horizontal Skills Cards --- */}
      <section
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-labelledby="about-skills"
      >
        <h2
          id="about-skills"
          className="text-center text-sm font-sans uppercase tracking-[0.2em] text-stone-500 mb-12"
        >
          Core Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Design Card */}
          <div className="bg-white p-8 rounded-sm border border-stone-200/60 shadow-sm text-center flex flex-col items-center">
            <h3 className="font-serif text-stone-900 text-xl mb-6 uppercase tracking-wider">
              Design
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "UI/UX Strategy",
                "Brand Identity",
                "Wireframing",
                "Prototyping",
                "Editorial Layouts",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-stone-100 text-stone-700 text-xs font-medium uppercase tracking-wider rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Technology Card */}
          <div className="bg-white p-8 rounded-sm border border-stone-200/60 shadow-sm text-center flex flex-col items-center">
            <h3 className="font-serif text-stone-900 text-xl mb-6 uppercase tracking-wider">
              Technology
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Vite",
                "WCAG Accessibility",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#5C1616]/5 text-[#5C1616] text-xs font-medium uppercase tracking-wider rounded-full border border-[#5C1616]/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. Call to Action --- */}
      <section
        className="mt-24 md:mt-32 text-center"
        aria-label="Call to Action"
      >
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-[#5C1616] text-white px-10 py-4 uppercase tracking-[0.15em] text-sm font-medium rounded-sm shadow-md hover:bg-[#430f0f] hover:shadow-lg transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#5C1616]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f2eb]"
        >
          Let's Work Together
        </Link>
      </section>
    </main>
  );
}
