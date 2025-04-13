import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={40} />, progress: 90 },
    { name: "CSS3", icon: <FaCss3Alt size={40} />, progress: 85 },
    { name: "JavaScript", icon: <FaJsSquare size={40} />, progress: 80 },
    { name: "React.js", icon: <FaReact size={40} />, progress: 70 },
    { name: "Next.js", icon: <SiNextdotjs size={40} />, progress: 70 },
    { name: "Tailwind", icon: <SiTailwindcss size={40} />, progress: 85 },
    { name: "Bootstrap", icon: <FaBootstrap size={40} />, progress: 80 },
    { name: "Redux", icon: <SiRedux size={40} />, progress: 80 },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
      <div className="w-16 h-1 bg-black mb-10 mx-auto"></div>

      <h3 className="text-xl md:text-2xl font-semibold mb-8">
        Technical Skills
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-50 p-12 rounded-lg shadow-md flex flex-col items-center hover:-translate-y-1 transition-all"
          >
            <div className="mb-4">{skill.icon}</div>
            <p className="text-base md:text-lg font-medium mb-2">
              {skill.name}
            </p>
            <div className="w-full h-1 bg-gray-200 rounded-full">
              <div
                className="h-1 bg-black rounded-full"
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
