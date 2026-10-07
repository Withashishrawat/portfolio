import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-title">
            Ashish <span className="gradient-text">Rawat</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-desc">
            I build fast, scalable and modern web applications using
            <strong> React</strong>, <strong>Next.js</strong>,{" "}
            <strong>Node.js</strong>, <strong>Express.js</strong>,
            <strong>TypeScript</strong> and cloud-native tools.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Hire Me
            </Link>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a href="mailto:call.ashishrawat@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="code-filename">developer.ts</span>
            </div>
            <pre className="code-body">
              {`const ashish = {
  role: "Full Stack Dev",
  skills: [
    "React", "Next.js",
    "Node.js", "TypeScript"
  ],
  databases: ["MongoDB", "SQL"],
  passion: "Building cool stuff"
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
