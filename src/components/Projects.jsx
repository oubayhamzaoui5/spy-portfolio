import { useState } from "react";
import styles from "./Projects.module.css";
import ProjectView from "./Projects/ProjectView";

const projects = [
  {
    id: "rushtype",
    name: "RushType",
    settings: {
      title: ">RushType",
      imgSrc: "assets/rushtype.PNG", // Updated path
      imgAlt: "RushType Image",
      buttons: [
        { text: "Live Demo", link: "https://oubayhamzaoui5.github.io/RushType/" },
        { text: "Github Repo", link: "https://github.com/oubayhamzaoui5/RushType" }
      ],
      technologies: [">HTML", ">CSS", ">JavaScript"],
      intelReport: {
        status: "ACTIVE",
        description: ">RushType is a retro-pixeled typing game inspired by Tetris. The game helps improve typing speed by challenging players to type words as they appear on the screen. Play at different difficulty levels and compete to achieve the highest score!"
      }
    }
  },
  {
    id: "spxacepower",
    name: "Spxacepower",
    settings: {
      title: ">Spxacepower",
      imgSrc: "assets/spacepower.PNG", // Updated path
      imgAlt: "Spxacepower Image",
      buttons: [
        { text: "Live Demo", link: "https://oubayhamzaoui5.github.io/spxcepower/" },
        { text: "Github Repo", link: "https://github.com/oubayhamzaoui5/spxcepower" }
      ],
      technologies: [">React",">CSS"],
      intelReport: {
        status: "Completed",
        description: ">Spxcepower is a techno festival project I created for an event that took place on November 28. The festival reimagines childhood cartoon songs into dark techno remixes, blending nostalgia with an electrifying rave experience."
      }
    }
  },
  {
    id: "iqraa",
    name: "Iqraa",
    settings: {
      title: ">Iqraa",
      imgSrc: "assets/platform.PNG", // Updated path
      imgAlt: "Iqraa",
      buttons: [
        { text: "Github Repo", link: "https://github.com/oubayhamzaoui5/iqraa/tree/main" }
      ],
      technologies: [">React", ">Node.js", ">Express.js"],
      intelReport: {
        status: "Under Development",
        description: ">Iqraa is an educational platform designed for students to access and upload courses. Teachers can also create and manage their own courses, making it easier to share knowledge. The platform offers both free and paid courses, ensuring accessibility for everyone. It aims to provide a structured and interactive learning experience."
      }
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <aside className={styles.menu}>
          <h2>&gt;MISSION FILES</h2>
          <br />
          <ul>
            {projects.map((project) => (
              <li
                key={project.id}
                className={`${styles.projectItem} ${
                  selectedProject.id === project.id ? styles.active : ""
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {project.name}
              </li>
            ))}
          </ul>
        </aside>
        <section className={styles.content}>
          <ProjectView settings={selectedProject.settings} />
        </section>
      </div>
    </div>
  );
}
