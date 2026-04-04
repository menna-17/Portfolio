
import { useState } from "react";
function App() {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-slate-900 text-white min-h-screen">

      <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
  
  {/* LOGO */}
  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
    MM
  </h1>

  {/* DESKTOP MENU */}
  <div className="hidden md:flex gap-6 text-slate-300">
    {["home", "about", "projects", "contact"].map((item) => (
      <a
        key={item}
        href={`#${item}`}
        className="text-lg bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:text-xl transition-all duration-300"
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
          className="text-lg bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:text-xl transition-all duration-300"
        >
          {item}
        </a>
      ))}
    </div>
  )}

</nav>

      {/* HERO */}
      <section
        id="home"
        className="flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800"
      >
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-2xl font-bold shadow-lg mb-6">
          MM
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Mennatalla Mostafa
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
          Frontend Developer | React Specialist
        </h2>

        <p className="max-w-xl text-slate-400 mb-8">
          I build fast, modern, and responsive web applications with clean
          design and great user experience.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-400 to-purple-500 px-6 py-3 rounded-lg font-medium transition duration-300  shadow-lg hover:shadow-purple-400/20"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-slate-200 text-slate-200  px-6 py-3 rounded-lg transition duration-300  shadow-lg hover:shadow-purple-400/20 "
          >
            Contact Me
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
          <div>
            <p className="text-slate-100 mb-6 text-xl">
              I'm a passionate Frontend Developer specializing in building
              modern web applications using React.
            </p>

            <p className="text-slate-300 mb-4 text-lg">
              I focus on creating clean, responsive, and user-friendly
              interfaces that provide a great user experience.
            </p>

            <p className="text-slate-400 text-md">
              I'm constantly learning and improving my skills to build better
              and more efficient applications.
            </p>
          </div>

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
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD */}
          {[
            {
              name: "Craftora",
              img: "1.png",
              desc: "Full-stack e-commerce platform with Stripe payments and 100+ products.",
              demo: "https://craftoraa.netlify.app/",
              github: "https://github.com/menna-17/e-commerce.git",
            },
            {
              name: "Hasmin",
              img: "2.png",
              desc: "Responsive bakery website with reusable components.",
              demo: "https://hasminbakery.netlify.app/",
              github: "https://github.com/menna-17/hassmen-project.git",
            },
            {
              name: "Flyee",
              img: "3.png",
              desc: "Flight booking app with search and seat selection.",
              demo: "https://flyee-fullstack-z7qg.vercel.app/",
            },
          ].map((project) => (
            <div
              key={project.name}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-purple-400/20 transition duration-300"
            >
              <img src={project.img} className="w-full h-40 object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-slate-300 text-sm mb-4">{project.desc}</p>

                <div className="flex gap-4 text-sm">
                  <a
                    href={project.demo}
                    className="text-purple-300 hover:underline"
                  >
                    Live Demo
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      className="text-purple-300 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
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
            className="bg-gradient-to-r from-blue-400 to-purple-500 px-6 py-3 rounded-lg font-medium transition duration-300  shadow-lg hover:shadow-purple-400/20">
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
