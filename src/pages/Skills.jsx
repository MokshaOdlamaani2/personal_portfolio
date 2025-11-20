import React, { useEffect, useState } from 'react';
import '../styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostman, SiCanva, SiVercel, SiNumpy, SiPandas, SiScikitlearn, SiSpacy, SiJupyter } from 'react-icons/si';

const Skills = () => {
  const [showTitle, setShowTitle] = useState(true);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTitle(false), 2000);
    const timer2 = setTimeout(() => setShowSkills(true), 2200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const skillCategories = [
    {
      heading: 'Languages',
      skills: [
        { icon: <FaPython color="#3776AB" />, label: 'Python' },
        { icon: <FaJsSquare color="#F7DF1E" />, label: 'JavaScript' },
      ],
    },
    {
      heading: 'Web Development',
      skills: [
        { icon: <FaHtml5 color="#E34F26" />, label: 'HTML5' },
        { icon: <FaCss3Alt color="#1572B6" />, label: 'CSS3' },
        { icon: <FaReact color="#61DAFB" />, label: 'React.js' },
        { icon: <FaNodeJs color="#339933" />, label: 'Node.js' },
        { icon: <SiExpress color="#000" />, label: 'Express.js' },
        { icon: <SiMongodb color="#47A248" />, label: 'MongoDB' },
      ],
    },
    {
      heading: 'Machine Learning / NLP',
      skills: [
        { icon: <SiScikitlearn color="#F7931E" />, label: 'Scikit-learn' },
        { icon: <SiPandas color="#150458" />, label: 'Pandas' },
        { icon: <SiNumpy color="#013243" />, label: 'NumPy' },
        { icon: <FaPython color="#3776AB" />, label: 'NLTK' },
        { icon: <SiSpacy color="#09A3D5" />, label: 'spaCy' },
      ],
    },
    {
      heading: 'Tools & Platforms',
      skills: [
        { icon: <FaGitAlt color="#F05032" />, label: 'Git & GitHub' },
        { icon: <SiPostman color="#FF6C37" />, label: 'Postman' },
        { icon: <SiCanva color="#00C4CC" />, label: 'Canva' },
        { icon: <SiVercel color="#000" />, label: 'Vercel' },
        { icon: <SiJupyter color="#F37626" />, label: 'Jupyter' },
        { icon: <FaCode color="#007ACC" />, label: 'VS Code' },
      ],
    },
  ];

  return (
   <section className="skills-container">
      {/* Top title */}
      <h1 className="skills-main-title">🛠️ Technical Skills</h1>

      {showSkills && (
        <div className="all-skills-row">
          {skillCategories.map(({ heading, skills }, index) => (
            <section
              key={heading}
              className={`skills-section ${index % 2 === 0 ? 'slideUp' : 'slideDown'}`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <h2 className="skills-heading">{heading}</h2>
              <div className="skills-grid">
                {skills.map(({ icon, label }) => (
                  <div key={label} className="skill-item" title={label}>
                    {React.cloneElement(icon, { size: 50 })}
                    <p>{label}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
   </section>
  );
};

export default Skills;
