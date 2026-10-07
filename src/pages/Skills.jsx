import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { FaJava, FaDatabase, FaServer } from "react-icons/fa";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
        { name: "React.js", icon: <SiReact />, color: "#61dafb" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
        { name: "Redux", icon: <SiRedux />, color: "#764abc" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764abc" },
        { name: "Zustand", icon: <SiReact />, color: "#f59e0b" },
        { name: "TanStack Query", icon: <SiReactquery />, color: "#ff4154" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#68a063" },
        { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
        { name: "REST API", icon: <FaServer />, color: "#00d4ff" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
        { name: "SQL", icon: <SiMysql />, color: "#4479a1" },
        { name: "Redis", icon: <SiRedis />, color: "#dc382d" },
        { name: "Databases", icon: <FaDatabase />, color: "#a855f7" },
      ],
    },
    {
      title: "Languages & CS",
      skills: [
        { name: "C", icon: <SiC />, color: "#a8b9cc" },
        { name: "C++", icon: <SiCplusplus />, color: "#00599c" },
        { name: "Java", icon: <FaJava />, color: "#f89820" },
      ],
    },
  ];

  return (
    <section className="skills page-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">Technologies I work with</p>

        {categories.map((cat) => (
          <div className="skill-category" key={cat.title}>
            <h3 className="skill-cat-title">{cat.title}</h3>
            <div className="skills-grid">
              {cat.skills.map((s) => (
                <div
                  className="skill-card"
                  key={s.name}
                  style={{ "--accent": s.color }}
                >
                  <div className="skill-icon" style={{ color: s.color }}>
                    {s.icon}
                  </div>
                  <span className="skill-name">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
