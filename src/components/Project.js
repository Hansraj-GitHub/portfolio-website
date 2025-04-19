import "../components/utility/Project.css";
import quizImg from "../assets/quiz.png";
import loginSignupImg from "../assets/image.png";

function Projects() {
  const projects = [
    {
      title: "Quiz App",
      desc: "HTML CSS JAVASCRIPT",
      link: "https://github.com/Hansraj-GitHub/Quiz-App",
      images: [quizImg] // always use 'images' (array), even if one
    },
    {
      title: "MERN AUTHENTICATION",
      desc: "React , Node.js , Express.js , MongoDB",
      link: "https://github.com/Hansraj-GitHub/mern-authentication/tree/main",
      images: [loginSignupImg]
    },
    
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-images">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="project-img"
                />
              ))}
            </div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a
              href={project.link}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
      <div className="arrow-box">
        <span className="arrow">&#8595;</span>
      </div>
    </section>
  );
}

export default Projects;
