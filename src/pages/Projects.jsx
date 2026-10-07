import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack e-commerce app with Next.js, Node.js, MongoDB, Redis caching and Stripe payments.",
      tags: ["Next.js", "Node.js", "MongoDB", "Redis"],
      github: "/",
      demo: "/",
    },
    {
      title: "Real-Time Chat App",
      desc: "Scalable chat application using React, Express, Socket.io and Redis pub/sub for realtime messaging.",
      tags: ["React", "Express", "Redis", "Socket.io"],
      github: "/",
      demo: "/",
    },
    {
      title: "Task Management Dashboard",
      desc: "Kanban-style dashboard with TanStack Query, Zustand state management and REST API backend.",
      tags: ["React", "Zustand", "TanStack Query", "REST API"],
      github: "/",
      demo: "/",
    },
    {
      title: "URL Shortener API",
      desc: "High-performance URL shortener using Node.js, Express, MongoDB with Redis based rate limiting.",
      tags: ["Node.js", "Express", "MongoDB", "Redis"],
      github: "/",
      demo: "/",
    },
  ];

  return (
    <section className="projects page-section">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">Some things I've built recently</p>

        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-header">
                <span className="folder-icon">📁</span>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <ul className="project-tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
