import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      desc: "Writing maintainable, scalable and well-tested code.",
    }, 
    {
      icon: <FaRocket />,
      title: "Fast Delivery",
      desc: "Shipping features quickly without compromising quality.",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      desc: "Turning complex problems into simple, elegant solutions.",
    },
  ];

  return (
    <section className="about page-section">
      <div className="container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">A quick intro about who I am</p>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hi! I'm <strong>Ashish Rawat</strong>, a passionate{" "}
              <strong>Full Stack Developer</strong> who loves building
              end-to-end web applications. From crafting pixel-perfect UIs with
              React & Next.js to designing robust backend APIs with Node.js,
              Express and databases like MongoDB, SQL and Redis — I enjoy every
              layer of the stack.
            </p>
            <p>
              I also have strong foundations in{" "}
              <strong>Data Structures & Algorithms</strong> with hands-on
              experience in <strong>C, C++ and Java</strong>. I'm always
              exploring new tools, patterns and best practices to stay ahead in
              the fast-moving world of web development.
            </p>
          </div>

          <div className="about-cards">
            {cards.map((c) => (
              <div className="about-card" key={c.title}>
                <div className="about-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
