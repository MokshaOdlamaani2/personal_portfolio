import React, { useEffect, useState } from 'react';
import '../styles/Skills.css';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaCode,
FaCogs, FaKey} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiPostman, SiCanva, SiVercel,
  SiNumpy, SiPandas, SiScikitlearn, SiSpacy, SiRedux, SiMongoose
} from 'react-icons/si';

const Skills = () => {
  const [showTitle, setShowTitle] = useState(true);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTitle(false), 2000);
    const timer2 = setTimeout(() => setShowSkills(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const skillCategories = [
    {
      heading: 'Languages',
      skills: [
        { icon: <FaPython size={60} color="#3776AB" />, label: 'Python' },
        { icon: <FaJsSquare size={60} color="#F7DF1E" />, label: 'JavaScript (ES6+)' },
      ],
    },
   {
  heading: 'Web Development',
  skills: [
    // 🌐 Core Web
    { icon: <FaHtml5 size={60} color="#E34F26" />, label: 'HTML5' },
    { icon: <FaCss3Alt size={60} color="#1572B6" />, label: 'CSS3' },

    // ⚙️ MERN Stack
    { icon: <FaReact size={60} color="#61DAFB" />, label: 'React.js' },
    { icon: <FaNodeJs size={60} color="#339933" />, label: 'Node.js' },
    { icon: <SiExpress size={60} color="#000000" />, label: 'Express.js' },
    { icon: <SiMongodb size={60} color="#47A248" />, label: 'MongoDB' },

    // 🧠 Advanced & Related
    { icon: <FaCogs size={60} color="#6D6D6D" />, label: 'RESTful APIs' },
    { icon: <FaKey size={60} color="#F4A261" />, label: 'JWT Authentication' },
    { icon: <SiRedux size={60} color="#764ABC" />, label: 'Redux / Context API' },
    { icon: <SiMongoose size={60} color="#800000" />, label: 'Mongoose ODM' },
  ],
},

    {
      heading: 'Machine Learning / NLP',
      skills: [
        { icon: <SiScikitlearn size={60} color="#F7931E" />, label: 'Scikit-learn' },
        { icon: <SiPandas size={60} color="#150458" />, label: 'Pandas' },
        { icon: <SiNumpy size={60} color="#013243" />, label: 'NumPy' },
        { icon: <FaPython size={60} color="#3776AB" />, label: 'NLTK' },
        { icon: <SiSpacy size={60} color="#09A3D5" />, label: 'spaCy' },
      ],
    },
    {
      heading: 'Tools & Platforms',
      skills: [
        { icon: <FaGitAlt size={60} color="#F05032" />, label: 'Git & GitHub' },
        { icon: <SiPostman size={60} color="#FF6C37" />, label: 'Postman' },
        { icon: <SiCanva size={60} color="#00C4CC" />, label: 'Canva' },
        { icon: <SiVercel size={60} color="#000000" />, label: 'Vercel' },
        { icon: <FaCode size={60} color="#007ACC" />, label: 'VS Code' },
      ],
    },
  ];

  return (
    <div className="skills-container">
      {showTitle && <h1 className="skills-title">🛠️ Technical Skills</h1>}

      {showSkills && (
        <div className="all-skills-row">
          {skillCategories.map(({ heading, skills }) => (
            <section key={heading} className="skills-section">
              <h2 className="skills-heading">{heading}</h2>
              <div className="skills-grid">
                {skills.map(({ icon, label }) => (
                  <div key={label} className="skill-item">
                    {icon}
                    <p>{label}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
