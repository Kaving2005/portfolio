import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMui,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiBootstrap,
  SiSwagger,
  SiMysql,
  SiExpress,
  SiRedux
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { icon: <SiHtml5 size={70} color="#E44D26" />, label: "HTML" },          // Orange
    { icon: <SiCss3 size={70} color="#1572B6" />, label: "CSS" },            // Blue
    { icon: <SiJavascript size={70} color="#F7DF1E" />, label: "JavaScript" }, // Yellow
    { icon: <SiReact size={70} color="#61DBFB" />, label: "React" },         // React Blue
    { icon: <FaJava size={70} color="#f89820" />, label: "Java" },          // Java Orange
    { icon: <SiPython size={70} color="#3776AB" />, label: "Python" },       // Blue Python
    { icon: <SiNodedotjs size={70} color="#23A455" />, label: "NodeJS" },    // Green
    { icon: <SiMongodb size={70} color="#4DB33D" />, label: "MongoDB" },     // Green
    { icon: <SiMui size={70} color="#007FFF" />, label: "MUI" },             // MUI Blue
    { icon: <SiBootstrap size={70} color="#7952B3" />, label: "Bootstrap" }, // Purple
    { icon: <SiSwagger size={70} color="#85EA2D" />, label: "Swagger" },     // Green Swagger
    { icon: <SiMysql size={70} color="#4479A1" />, label: "MySQL" },         // MySQL Blue
    { icon: <SiExpress size={70} color="#000000" />, label: "Express" },      // Black
    { icon: <SiRedux size={70} color="#764ABC" />, label: "Redux" }          // Purple Redux
  ];

  return (
    <div className="skills-bg">
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-10">
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 "
        >
          Skills
        </motion.h1>
        <br />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 ">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {skill.icon}
              <p className="text-lg font-semibold">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
