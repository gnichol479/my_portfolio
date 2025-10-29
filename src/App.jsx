import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import Carousel from "./components/Carousel.jsx";
import ExperienceItem from "./components/ExperienceItem.jsx";
import projects from "./data/projects.js";
import ProjectCard from "./components/ProjectCard.jsx";
import experience from "./data/experience.js";
import Footer from "./components/Footer.jsx";
import ProjectModal from "./components/ProjectModal.jsx"; // ✅ added

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={"min-h-screen bg-neutral-950 text-neutral-100"}>
      <Navbar />

      {/* about */}
      <Section id={"about"} title={"about me"}>
        <div className={"flex flex-col items-center gap-6"}>
          <img
            src={"/personal.jpg"}
            alt={"personal"}
            className={"size-40 rounded-2xl object-cover ring-2 ring-neutral-800"}
          />
          <div className={"space-y-4 leading-relaxed text-neutral-300"}>
            <p>
              Enter some stuff here{" "}
              <span className={"font-semibold text-white"}>Gibson Nichol</span>
            </p>
            <p>I enjoy perforamdjfalskdjfalskfjldfkjalfkja;lfjas;lfkjl</p>
            <div className={"flex gap-3 pt-2 justify-center"}>
              <a
                href={"#projects"}
                className={"rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15"}
              >
                Projects
              </a>
              <a
                href={"#experience"}
                className={"rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15"}
              >
                Work Experience
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* projects with carousel */}
      <Section id={"projects"} title={"Projects"} subtitle={"Some of my recent work"}>
        <Carousel>
          {projects.map((p) => (
            <div
              key={p.id}
              className="cursor-pointer"
              onClick={() => setSelectedProject(p)} // ✅ opens modal
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </Carousel>
      </Section>

      {/* experience */}
      <Section id={"experience"} title={"Experience"} subtitle={"My Work Experience"}>
        <div className={"space-y-4 text-left"}>
          {experience.map((job) => (
            <ExperienceItem key={job.id} item={job} />
          ))}
        </div>
      </Section>

      <Footer />

      {/* ✅ modal (for Shadows of the Moon media gallery) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
