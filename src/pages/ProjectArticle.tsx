import { useParams, Link } from "react-router-dom";
import { projectData } from "../Data/Data";

export default function ProjectArticle() {
  const { id } = useParams<{ id: string }>();
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return (
      <main
        id="main-content"
        className="w-full max-w-7xl mx-auto p-8 text-center min-h-[50vh] flex flex-col items-center justify-center focus:outline-none"
      >
        <h1 className="text-3xl font-serif text-[#5C1616] mb-4">
          Project Not Found
        </h1>
        <p className="text-stone-700 mb-8">
          The case study you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/projects"
          className="bg-[#5C1616] text-white px-6 py-3 uppercase tracking-widest text-sm rounded-sm hover:bg-[#430f0f] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#5C1616]/40"
        >
          Return to Projects
        </Link>
      </main>
    );
  }

  return (
    <main
      id="main-content"
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16 focus:outline-none"
    >
      {/* Structural Breadcrumb Backlink */}
      <nav aria-label="Breadcrumb" className="mb-10 sm:mb-16">
        <Link
          to="/projects"
          className="inline-flex items-center text-xs sm:text-sm font-sans uppercase tracking-[0.15em] text-stone-700 hover:text-[#5C1616] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C1616] rounded p-1"
        >
          <span aria-hidden="true" className="mr-2">
            ←
          </span>
          Back to Projects
        </Link>
      </nav>

      {/* Main Presentation Header */}
      <header className="mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#5C1616] uppercase tracking-widest leading-tight mb-4">
          {project.title}
        </h1>

        <p className="text-stone-800 font-serif text-base sm:text-lg italic leading-relaxed max-w-3xl mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-sans uppercase tracking-[0.2em] text-black border-t border-stone-400 pt-4">
          <div>
            <span className="text-[#5C1616] font-bold">Client:</span>{" "}
            {project.client}
          </div>
          <div className="hidden sm:block text-stone-400" aria-hidden="true">
            •
          </div>
          <div>
            <span className="text-[#5C1616] font-bold">Year:</span>{" "}
            {project.year}
          </div>
        </div>
      </header>

      {/* Hero Media Display Case */}
      <figure className="mb-12 sm:mb-16">
        <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-stone-300/50 bg-stone-400 aspect-video">
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="mt-4 text-center text-sm md:text-base font-serif italic text-stone-800 px-4">
          {project.caption}
        </figcaption>
      </figure>

      {/* Direct Interactive Call to Action Links */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <a
          href={project.LiveUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center bg-[#5C1616] text-white px-6 py-4 uppercase tracking-[0.15em] text-xs sm:text-sm font-medium rounded-sm shadow-sm hover:bg-[#430f0f] transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#5C1616]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f2eb]"
        >
          Launch Live Website
          <span className="sr-only"> (opens in a new window/tab)</span>
        </a>

        <a
          href={project.RepoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center bg-transparent border border-stone-800 text-stone-900 px-6 py-4 uppercase tracking-[0.15em] text-xs sm:text-sm font-medium rounded-sm hover:bg-stone-900 hover:text-white transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-stone-900/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f2eb]"
        >
          Inspect Code Repository
          <span className="sr-only"> (opens in a new window/tab)</span>
        </a>
      </div>

      {/* Case Study Content Breakdown */}
      <article className="prose prose-stone max-w-none">
        <section aria-labelledby="section-overview" className="mb-12">
          <h2
            id="section-overview"
            className="text-xl sm:text-2xl font-serif font-normal text-[#5C1616] uppercase tracking-wider mb-4"
          >
            Overview
          </h2>
          <p className="text-stone-900 leading-relaxed text-sm sm:text-base">
            {project.overview}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 border-t border-stone-400/60 pt-10 mb-12">
          <section aria-labelledby="section-challenge">
            <h2
              id="section-challenge"
              className="text-xl sm:text-2xl font-serif font-normal text-[#5C1616] uppercase tracking-wider mb-4"
            >
              The Challenge
            </h2>
            <p className="text-stone-900 leading-relaxed text-sm sm:text-base">
              {project.challenge}
            </p>
          </section>

          <section aria-labelledby="section-solution">
            <h2
              id="section-solution"
              className="text-xl sm:text-2xl font-serif font-normal text-[#5C1616] uppercase tracking-wider mb-4"
            >
              The Solution
            </h2>
            <p className="text-stone-900 leading-relaxed text-sm sm:text-base">
              {project.solution}
            </p>
          </section>
        </div>

        {/* Specialized Technologies Stack Listing */}
        <section
          aria-labelledby="section-tools"
          className="border-t border-stone-400/60 pt-10"
        >
          <h2
            id="section-tools"
            className="text-xl sm:text-2xl font-serif font-normal text-[#5C1616] uppercase tracking-wider mb-6"
          >
            Technologies Implemented
          </h2>
          <ul
            role="list"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 list-none p-0 m-0"
          >
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-stone-300/40 text-stone-900 font-sans text-xs sm:text-sm px-4 py-2.5 rounded-sm text-center border border-stone-400/40 tracking-wide font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
