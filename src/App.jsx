import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 px-6 py-4 flex justify-end items-center">
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-slate-300">
          {["home", "about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-lg bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:text-xl transition-all duration-300 capitalize"
            >
              {item}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 flex flex-col items-center gap-6 py-6 md:hidden">
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="text-lg bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:text-xl transition-all duration-300 capitalize"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
      <section
        id="home"
        className="flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Mennatalla Mostafa
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-200 mb-4">
          Frontend Developer specializing in React.js
        </h2>

        <p className="max-w-xl text-slate-400 mb-9">
          I build modern frontend applications with React.js and have hands-on
          experience developing full-stack web applications and e-commerce
          platforms using Node.js and MongoDB.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 w-full md:w-auto">
          <a
            href="#projects"
            className="w-full md:w-auto bg-gradient-to-r from-blue-400 to-purple-500 px-6 py-3 rounded-lg font-medium text-center transition duration-300 shadow-lg hover:shadow-purple-400/20"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="w-full md:w-auto border border-slate-200 text-slate-200 px-6 py-3 rounded-lg text-center transition duration-300 shadow-lg hover:shadow-purple-400/20"
          >
            Contact Me
          </a>

          <a
            href="/cv.pdf"
            download="Mennatalla-Mostafa-CV.pdf"
            className="w-full md:w-auto border border-slate-200 text-slate-200 px-6 py-3 rounded-lg text-center transition duration-300 shadow-lg hover:shadow-purple-400/20"
          >
            Download CV
          </a>
        </div>
      </section>
      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <p className="text-slate-100 mb-3 text-xl">
              I'm a Frontend Developer with a strong foundation in React.js.
            </p>

            <p className="text-slate-300 mb-3 text-lg">
              I hold a degree in Computer Science with a GPA of 3.5 and
              completed an intensive MEARN Stack program at ITI, where I built
              full-stack applications using React, Node.js, and MongoDB.
            </p>

            <p className="text-slate-400 text-md">
              I enjoy building scalable web applications and interactive user
              experiences, especially in projects like e-commerce platforms and
              dynamic web apps.
            </p>

            {/* HIGHLIGHTS */}
            <ul className="mt-6 space-y-2 text-slate-400">
              <li>✔ Built 4+ real-world projects</li>
              <li>✔ Experience with full-stack development</li>
              <li>✔ Strong focus on performance and user experience</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center relative">
            <div className="absolute w-64 h-64 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src="4.png"
              alt="Mennatalla"
              className="w-64 h-64 object-cover rounded-2xl border border-slate-700 shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-8 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Craftora",
              img: "1.png",
              desc: "Full-stack e-commerce platform with role-based access, Stripe payments, and RESTful APIs managing 100+ products.",
              demo: "https://craftoraa.netlify.app/",
              github: "https://github.com/menna-17/e-commerce.git",
              tech: ["React", "Node.js", "MongoDB", "Stripe"],
            },
            {
              name: "Hasmin",
              img: "2.png",
              desc: "Responsive bakery website built with reusable components and mobile-first design using React and Tailwind CSS.",
              demo: "https://hasminbakery.netlify.app/",
              github: "https://github.com/menna-17/hassmen-project.git",
              tech: ["React", "Tailwind"],
            },
            {
              name: "Flyee",
              img: "3.png",
              desc: "Flight booking application featuring real-time search, interactive seat selection, and simulated user authentication.",
              demo: "https://flyee-fullstack-z7qg.vercel.app/",
              tech: ["React", "Tailwind"],
            },
          ].map((project) => (
            <a
              key={project.name}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-purple-400/20 transition duration-300"
            >
              <img src={project.img} className="w-full h-40 object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

                {/* TECH BADGES */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-slate-700 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 text-sm mb-4">{project.desc}</p>

                <div className="flex gap-4 text-sm">
                  <span className="text-purple-300">Live Demo</span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-purple-300 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      {/* SKILLS */}
      <section id="skills" className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Frontend",
              items: [
                "React.js",
                "JavaScript",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind",
                "Bootstrap",
                "SASS",
              ],
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
              items: ["Git", "GitHub", "Vite"],
            },
          ].map((skill) => (
            <div
              key={skill.title}
              className="bg-slate-800 p-6 rounded-xl shadow hover:-translate-y-2 shadow-lg  hover:shadow-purple-400/20 transition duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-purple-300">
                {skill.title}
              </h3>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-slate-700 text-slate-200 text-xs px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center bg-slate-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Contact Me
          </span>
        </h2>

        <p className="text-slate-300 mb-8">
          Feel free to reach out for opportunities or collaboration!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:menna_mostafa.khedr@yahoo.com"
            className="bg-gradient-to-r from-blue-400 to-purple-500 px-6 py-3 rounded-lg font-medium transition duration-300  shadow-lg hover:shadow-purple-400/20"
          >
            Email Me
          </a>

          <a
            href="https://github.com/menna-17"
            className="border border-slate-200 text-slate-200  px-6 py-3 rounded-lg transition duration-300  shadow-lg hover:shadow-purple-400/20 "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mennatalla-mostafa-abdelhamed-43274727b/"
            className="border border-slate-200 text-slate-200  px-6 py-3 rounded-lg transition duration-300  shadow-lg hover:shadow-purple-400/20 "
          >
            LinkedIn
          </a>
        </div>
      </section>
      <footer className="bg-slate-900 border-t border-slate-800 py-6 text-center">
        <p className="text-slate-400 text-sm">
          Designed & Developed by{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-medium">
            Mennatalla Mostafa
          </span>
        </p>

        <p className="text-slate-500 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
