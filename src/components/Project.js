import "../components/utility/Project.css";

function Projects() {
  const projects = [
    { title: "E-Commerce App", desc: "MERN stack online store", link: "#" },
    { title: "Spotify Clone", desc: "Music streaming web app", link: "#" }
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
