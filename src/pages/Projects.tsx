import { Link } from "react-router-dom";
import { projectData } from "../Data/Data"; // Adjust this path if your data.ts is elsewhere

export default function Projects() {
  return (
    <main
      id="main-content"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 focus:outline-none"
    >
      {/* Header Section */}
      <header className="mb-12 md:mb-16 border-b border-stone-300/60 pb-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-serif text-[#5C1616] uppercase tracking-widest mb-2">
          Projects
        </h1>
        <p className="text-sm font-sans uppercase tracking-[0.15em] text-stone-500">
          A collection of front-end development
        </p>
      </header>

      {/* Projects Display Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((projects) => (
          <article
            key={projects.id}
            className="bg-white rounded-xl border border-stone-200/60 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full group"
          >
            {/* Project Frame Wrapper */}
            <div className="aspect-video w-full overflow-hidden border-b border-stone-200/40 relative bg-stone-300">
              <img
                src={projects.imageUrl}
                alt={projects.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col grow">
              <h2 className="text-lg sm:text-xl font-serif text-[#5C1616] uppercase tracking-wider mb-3">
                {projects.title}
              </h2>
              <p className="text-stone-900 text-sm leading-relaxed mb-6 grow line-clamp-10">
                {projects.description}
              </p>

              {/* Action Trigger */}
              <Link
                to={`/projects/${projects.id}`}
                className="inline-flex items-center text-sm font-sans uppercase tracking-widest text-[#5C1616] font-semibold group-hover:translate-x-1 transition-transform self-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C1616] rounded"
              >
                Explore Case Study{" "}
                <span aria-hidden="true" className="ml-1.5">
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
