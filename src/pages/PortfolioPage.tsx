import { Link } from "react-router-dom";
import { projectData } from "../Data/Data";

export default function Home() {
  return (
    <div className="w-full">
      {/* --- HERO SECTION --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight mb-6">
          Frontend Developer crafting <br className="hidden md:block" />
          <span className="text-[#5C1616] italic">digital experiences.</span>
        </h1>
        <p className="max-w-2xl text-sm md:text-lg text-stone-900 leading-relaxed font-serif mb-32">
          <strong className="font-bold text-[#5C1616]">━ </strong>Hi, I'm Sara.
          I specialize in creating clean, responsive, and user-friendly
          applications. With a passion for design and a commitment to
          accessibility, I strive to build digital products that are not only
          visually appealing but also intuitive and inclusive.
        </p>
        <div className="">
          <h2 className="text-3xl font-serif text-[#5C1616] mb-2 mt-12 font-bold">
            My Philosophy
          </h2>
          <h3 className="text-lg font-bold text-[#5C1616] mb-4 block">
            ━ The Invisible Engine of Experience
          </h3>
          <p className="text-base font-serif text-stone-900 leading-relaxed max-w-3xl font-regular">
            A beautiful interface means nothing if the underlying architecture
            is fragile. I approach app development by establishing strict,
            scalable, and modular foundations first. Clean state management and
            component-driven architecture ensure that the application remains
            robust as it grows, making the digital experience feel incredibly
            stable and reliable.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-block mt-12 border-2 border-[#5C1616] text-[#5C1616] py-3 px-6 rounded-md hover:bg-[#5C1616] hover:text-white transition-colors duration-300 hover:cursor-pointer"
          aria-label="Go to Contact Page"
        >
          Contact Me
        </Link>
      </section>
      <hr
        className="w-[90%] m-auto border-t-2 border-stone-300 my-16 md:my-24"
        aria-hidden="true"
      />

      {/* EXPERTISE SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Expertise Column */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-serif text-[#5C1616] mb-8 border-b border-stone-300 pb-4">
              Core Expertise
            </h2>
            <ul className="space-y-10">
              <li>
                <h3 className="text-lg font-semibold text-[#5C1616] mb-2">
                  Component-Driven Architecture
                </h3>
                <p className="text-stone leading-relaxed text-sm md:text-base font-regular">
                  Building scalable, modular applications using React and Vite.
                  I focus on creating reusable, DRY (Don't Repeat Yourself) UI
                  components that keep the codebase maintainable as project
                  complexity grows.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold text-[#5C1616] mb-2">
                  Type-Safe Development
                </h3>
                <p className="text-stone leading-relaxed text-sm md:text-base font-regular">
                  Leveraging TypeScript to catch errors at compile-time rather
                  than runtime. This ensures robust data handling, explicit prop
                  definitions, and safer integration with external REST APIs.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold text-[#5C1616] mb-2">
                  Responsive & Accessible Design
                </h3>
                <p className="text-stone leading-relaxed text-sm md:text-base font-regular">
                  Utilizing Tailwind CSS's utility-first approach to craft fluid
                  layouts that look exceptional on any device. I prioritize
                  semantic HTML and WCAG standards to ensure web experiences are
                  inclusive for all users.
                </p>
              </li>
            </ul>
          </div>

          {/* Technical Arsenal Column */}
          <div className="lg:col-span-5 bg-stone-200/40 p-8 md:p-10 rounded-sm border border-stone-300/40">
            <h2 className="text-3xl font-serif text-[#5C1616] mb-8">
              Technical Arsenal
            </h2>

            <div className="space-y-8">
              {/* Languages */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#5C1616] mb-4">
                  Core Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-white text-stone-800 text-xs font-medium border border-stone-300/60 rounded-sm shadow-sm"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#5C1616] mb-4">
                  Frameworks & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Vite",
                    "Tailwind CSS",
                    "Git & GitHub",
                    "Figma",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white text-stone-800 text-xs font-medium border border-stone-300/60 rounded-sm shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture & Concepts */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#5C1616] mb-4">
                  Architecture
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "RESTful API",
                    "State Management",
                    "Context API",
                    "Responsive UI",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white text-stone-800 text-xs font-medium border border-stone-300/60 rounded-sm shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr
        className="w-[90%] m-auto border-t-2 border-stone-300 my-16 md:my-24"
        aria-hidden="true"
      />
      {/* --- FEATURED PROJECTS SECTION --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <h2 className="text-3xl font-serif text-[#5C1616] pb-4">
          Featured Projects
        </h2>
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-40">
          {projectData.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={project.id}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center group`}
              >
                {/* Image Container */}
                <div className="w-full md:w-1/2 aspect-4/3 sm:aspect-video md:aspect-4/3 bg-stone-300 overflow-hidden rounded-sm relative">
                  <Link
                    to={`/projects/${project.id}`}
                    className="block w-full h-full"
                    aria-label={`View ${project.title} case study`}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-[#5C1616]/0 transition-colors duration-500 group-hover:bg-[#5C1616]/10"></div>
                  </Link>
                </div>

                {/* Content Container */}
                <div className="w-full md:w-1/2 flex flex-col items-start">
                  {/* Meta data: Year & Client */}
                  <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-stone-500 mb-4">
                    <span>{project.year}</span>
                    <span className="w-8 h-0.5 bg-stone-300"></span>
                    <span>{project.client}</span>
                  </div>

                  {/* Title & Caption */}
                  <h2 className="text-3xl md:text-4xl font-serif text-[#5C1616] mb-4">
                    {project.title}
                  </h2>
                  <p className="text-stone-600 mb-8 leading-relaxed text-base md:text-lg">
                    {project.caption}
                  </p>

                  {/* Technology Pills */}
                  <ul
                    className="flex flex-wrap gap-2 mb-8"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 text-sm font-medium border border-stone-300 text-black rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {/* Call to Action */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm md:text-base uppercase tracking-widest font-semibold text-[#5C1616] hover:border-b-2 hover:text-stone-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C1616] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f2eb] rounded-sm py-1"
                  >
                    Read Case Study
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
