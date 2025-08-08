import React from "react";

const projects = [
  {
    title: "EatX - Online Food Ordering App",
    description:
      "A full-stack food ordering app built with React, Spring Boot, MongoDB, AWS S3, and Razorpay integration. Features user authentication, cart, and admin panel.",
    tech: ["React", "Spring Boot", "MongoDB", "AWS S3", "Razorpay"],
    demoLink: "https://eatx.netlify.app/",
    githubLink: "https://github.com/ankesh1717/eatX",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80", // example image from Unsplash
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive portfolio site built with React and Bootstrap showcasing skills, projects, and achievements.",
    tech: ["React", "Bootstrap", "CSS3"],
    demoLink: "#",
    githubLink: "https://github.com/ankesh1717",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Java DSA Practice",
    description:
      "Java console app with optimized solutions for various Data Structures & Algorithms problems.",
    tech: ["Java", "DSA"],
    demoLink: "#",
    githubLink: "https://github.com/ankesh1717",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

const Project = () => {
  return (
    <section className="py-5 bg-light" id="projects">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">🚀 My Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-primary me-1"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto d-flex justify-content-between">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                    >
                      GitHub
                    </a>
                    {project.demoLink !== "#" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
