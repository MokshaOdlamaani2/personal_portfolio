import React, { useEffect, useState } from 'react';
import '../styles/About.css';
import profileImg from '../assets/profile.jpeg'; // ✅ Importing image from src/assets

const About = () => {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Step 1: Open curtain after 100ms (small buffer)
    const curtainTimer = setTimeout(() => {
      setCurtainOpen(true);
    }, 100);

    // Step 2: Show content after curtain animation finishes (~1.8s)
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1900);

    return () => {
      clearTimeout(curtainTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="about-container bg-[#F6F1DE]">
      <div className="split-background">
        <div className={`split left ${curtainOpen ? 'open' : ''}`}></div>
        <div className={`split right ${curtainOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`about-content ${showContent ? 'reveal' : ''}`}>
        <div className="about-image">
          <img
            src={profileImg} // ✅ Image will show correctly now
            alt="Profile"
            className="profile-img"
          />
        </div>

        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, I’m Moksha Odlamaani — a B.Tech Software Engineering student passionate about building scalable applications and intelligent solutions.
          </p>
          <p>
            I specialize in <strong>Full-Stack Web Development (MERN)</strong> with experience in <strong>React.js, Node.js, Express.js, MongoDB</strong>, and secure authentication. I am also exploring <strong>Machine Learning & NLP</strong> using Python libraries like Scikit-learn, Pandas, and NLTK.
          </p>
          <p>
            With strong foundations in <strong>DSA, OOP, DBMS, and Operating Systems</strong>, I aim to grow as a <strong>Software Development Engineer</strong> by solving real-world problems and contributing to impactful projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
