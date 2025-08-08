import React from "react";
import { FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaDatabase, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiJavascript } from "react-icons/si";

const SkillsPanel = () => {
  const skills = [
    { name: "Java", icon: <FaJava className="text-orange-500" />, level: "Advanced" },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" />, level: "Intermediate" },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, level: "Advanced" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: "Advanced" },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, level: "Advanced" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: "Intermediate" },
    { name: "React.js", icon: <FaReact className="text-sky-400" />, level: "Intermediate" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, level: "Intermediate" },
    { name: "SQL", icon: <FaDatabase className="text-gray-500" />, level: "Intermediate" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          My <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">{skill.name}</h3>
              <p className="text-sm text-gray-500">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPanel;
