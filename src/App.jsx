import { useState } from "react";

const projects = [
  {
    name: "Craftora",
    type: "Full-Stack E-Commerce",
    img: "/1.png",
    desc: "Full-stack e-commerce platform with role-based access, Stripe payments, RESTful APIs, and product management for 100+ products.",
    demo: "https://craftoraa.netlify.app/",
    github: "https://github.com/menna-17/e-commerce.git",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    name: "Hasmin",
    type: "Frontend Web Application",
    img: "/2.png",
    desc: "Responsive bakery website built with reusable React components and a mobile-first design using Tailwind CSS.",
    demo: "https://hasminbakery.netlify.app/",
    github: "https://github.com/menna-17/hassmen-project.git",
    tech: ["React", "Tailwind CSS"],
  },
  {
    name: "Flyee",
    type: "Frontend Web Application",
    img: "/3.png",
    desc: "Flight booking application featuring real-time search, interactive seat selection, and simulated user authentication.",
    demo: "https://flyee-fullstack-z7qg.vercel.app/",
    github: null,
    tech: ["React", "Tailwind CSS"],
  },
];

const skills = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "State Management",
    items: ["Redux Toolkit", "Context API"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vite", "npm", "Postman"],
  },
  {
    title: "Concepts",
    items: [
      "Responsive Web Development",
      "REST API Integration",
      "Performance Optimization",
      "Reusable Components",
    ],
  },
];

const navItems = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth bg-slate-950 text-white">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/80 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight transition hover:opacity-80"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              M.
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="group relative text-sm font-medium capitalize text-slate-300 transition duration-300 hover:text-white"
              >
                {item}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-slate-700 px-3 py-2 text-xl text-slate-200 transition hover:border-purple-400 hover:text-white md:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full border-b border-slate-800 bg-slate-950/95 px-6 py-6 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium capitalize text-slate-300 transition hover:text-purple-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-32"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for Frontend Opportunities
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent">
              Mennatalla Mostafa
            </span>
          </h1>

          <h2 className="mb-6 text-xl font-semibold text-slate-200 md:text-3xl">
            Frontend Developer specializing in React.js & TypeScript.
          </h2>

          <p className="mx-auto mb-9 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            I build responsive and scalable web applications using React.js and
            TypeScript, with experience in reusable UI components, REST API
            integration, state management, and performance optimization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-7 py-3 font-semibold shadow-lg shadow-purple-500/10 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 bg-slate-900/40 px-7 py-3 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              Contact Me
            </a>

            <a
              href="/cv.pdf"
              download="Mennatalla-Mostafa-CV.pdf"
              className="rounded-lg border border-slate-700 bg-slate-900/40 px-7 py-3 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Download CV
            </a>
          </div>

          {/* Technology Stack */}
          <div className="mt-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Technologies I work with
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React.js",
                "TypeScript",
                "JavaScript (ES6+)",
                "Redux Toolkit",
                "Context API",
                "Tailwind CSS",
                "Bootstrap",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition hover:border-purple-400/50 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="border-t border-slate-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="About Me" />

          <div className="grid items-center gap-14 md:grid-cols-2">
            {/* Text */}
            <div>
              <p className="mb-5 text-xl font-medium leading-8 text-slate-100">
                I'm a Frontend Developer specializing in React.js and
                TypeScript, with a strong foundation in modern web development.
              </p>

              <p className="mb-5 text-base leading-7 text-slate-400">
                I hold a degree in Computer Science with a GPA of 3.5 and
                completed an intensive MEARN Stack program at ITI, where I
                gained hands-on experience building full-stack applications
                using React, Node.js, Express.js, and MongoDB.
              </p>

              <p className="mb-7 text-base leading-7 text-slate-500">
                I enjoy building responsive, reusable, and user-focused
                interfaces while integrating APIs and managing application state
                with tools such as Redux Toolkit and Context API.
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {[
                  "Built 4+ real-world web projects",
                  "Experience with React.js and TypeScript",
                  "Hands-on experience with REST API integration",
                  "Experience with Redux Toolkit and Context API",
                  "Strong focus on responsive design and performance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-300">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />

                <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-2 shadow-2xl">
                  <img
                    src="/4.png"
                    alt="Mennatalla Mostafa"
                    className="h-72 w-72 rounded-2xl object-cover transition duration-500 hover:scale-105 md:h-80 md:w-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        className="border-t border-slate-900 bg-slate-900/30 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <SectionTitle title="Experience" />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[11px] top-2 hidden h-[calc(100%-20px)] w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:block" />

            <div className="space-y-10">
              {/* ITI */}
              <div className="relative md:pl-12">
                <div className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-slate-950 bg-gradient-to-r from-blue-400 to-purple-500 md:flex" />

                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-purple-500/30">
                  <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-start">
                    <div>
                      <p className="text-sm font-medium text-purple-400">
                        Information Technology Institute (ITI)
                      </p>

                      <h3 className="mt-1 text-xl font-semibold text-slate-100">
                        Web Development Intern — MERN Track
                      </h3>
                    </div>

                    <span className="text-sm text-slate-500">
                      Nov 2024 – Apr 2025
                    </span>
                  </div>

                  <ul className="space-y-3 text-sm leading-6 text-slate-400">
                    <li className="flex gap-3">
                      <span className="text-purple-400">•</span>
                      Built a full-stack MERN web application using React.js,
                      JavaScript (ES6+), Node.js, and MongoDB.
                    </li>

                    <li className="flex gap-3">
                      <span className="text-purple-400">•</span>
                      Engineered and integrated RESTful APIs for application
                      data and CRUD operations.
                    </li>

                    <li className="flex gap-3">
                      <span className="text-purple-400">•</span>
                      Developed responsive, component-based frontend interfaces
                      using Bootstrap.
                    </li>

                    <li className="flex gap-3">
                      <span className="text-purple-400">•</span>
                      Managed global application state using Redux Toolkit and
                      Context API.
                    </li>

                    <li className="flex gap-3">
                      <span className="text-purple-400">•</span>
                      Collaborated in Agile teams using Git and GitHub for
                      version control and code reviews.
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "JavaScript",
                      "Node.js",
                      "MongoDB",
                      "Redux Toolkit",
                      "REST APIs",
                      "Git",
                      "GitHub",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* UKLC */}
              <div className="relative md:pl-12">
                <div className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-slate-950 bg-gradient-to-r from-blue-400 to-purple-500 md:flex" />

                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-purple-500/30">
                  <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-start">
                    <div>
                      <p className="text-sm font-medium text-purple-400">
                        UKLC — UK Language Courses
                      </p>

                      <h3 className="mt-1 text-xl font-semibold text-slate-100">
                        Activity Team Leader
                      </h3>
                    </div>

                    <span className="text-sm text-slate-500">
                      Summer 2026 · Nantwich, UK
                      <br />
                      Summer 2025 · Manchester, UK
                    </span>
                  </div>

                  <ul className="space-y-3 text-sm leading-6 text-slate-400">
                    <li className="flex gap-3">
                      <span className="text-purple-400">•</span>
                      Led and coordinated daily activities and excursions for
                      groups of 15+ international students.
                    </li>

                    <li className="flex gap-3">
                      <span className="text-purple-400">•</span>
                      Managed real-time problem solving, conflict resolution,
                      and safety protocols in a fast-paced environment.
                    </li>

                    <li className="flex gap-3">
                      <span className="text-purple-400">•</span>
                      Developed strong cross-cultural communication skills while
                      collaborating with students from 5+ countries.
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Leadership",
                      "Communication",
                      "Problem Solving",
                      "Teamwork",
                      "Cross-Cultural Communication",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Featured Projects" />

          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            A selection of projects where I applied modern frontend and
            full-stack technologies to build practical web experiences.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="border-t border-slate-900 bg-slate-900/30 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Skills & Technologies" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-purple-500/10"
              >
                <h3 className="mb-5 text-lg font-semibold text-purple-300">
                  {skill.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-300 transition group-hover:border-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle title="Let's Work Together" />

          <p className="mx-auto mb-10 max-w-xl text-base leading-7 text-slate-400">
            I'm open to Frontend Developer opportunities, internships, freelance
            work, and interesting collaborations. Feel free to reach out.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:mennatalla.mostafa.khedr@gmail.com"
              className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-7 py-3 font-semibold shadow-lg shadow-purple-500/10 transition hover:-translate-y-1 hover:shadow-purple-500/30"
            >
              Email Me
            </a>

            <a
              href="https://github.com/menna-17"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-7 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-purple-400 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mennatalla-mostafa-abdelhamed-43274727b/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-7 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-blue-400 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 bg-slate-900 py-6 text-center">
        <p className="text-sm text-slate-400">
          Designed & Developed by{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-medium text-transparent">
            Mennatalla Mostafa
          </span>
        </p>

        <p className="mt-2 text-xs text-slate-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}

/* ================= SECTION TITLE ================= */

function SectionTitle({ title }) {
  return (
    <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
      <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
  );
}

/* ================= PROJECT CARD ================= */

function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-purple-500/10">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.img}
          alt={`${project.name} project screenshot`}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium uppercase tracking-wider text-purple-400">
            {project.type}
          </span>

          <h3 className="mt-1 text-xl font-semibold text-slate-100">
            {project.name}
          </h3>
        </div>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mb-6 min-h-[84px] text-sm leading-6 text-slate-400">
          {project.desc}
        </p>

        {/* Project Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            Live Demo
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-purple-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
