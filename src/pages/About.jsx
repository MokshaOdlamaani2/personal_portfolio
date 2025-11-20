import React, { useEffect, useState } from 'react';
import '../styles/About.css';
import profileImg from '../assets/profile.jpeg';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector('.about-container');
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.3 } // slightly before fully visible
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`about-container ${visible ? 'enter' : ''}`}>
      <div className="split-background">
        <div className="split left"></div>
        <div className="split right"></div>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>

        <div className="about-text">
          <h1 className="text-item">About Me</h1>
          <p className="text-item">
            Hi, I’m Moksha Odlamaani — a B.Tech Software Engineering student passionate about building scalable applications and intelligent solutions.
          </p>
          <p className="text-item">
            I specialize in <strong>Full-Stack Web Development (MERN)</strong> with experience in <strong>React.js, Node.js, Express.js, MongoDB</strong>, and secure authentication. I am also exploring <strong>Machine Learning & NLP</strong> using Python libraries like Scikit-learn, Pandas, and NLTK.
          </p>
          <p className="text-item">
            With strong foundations in <strong>DSA, OOP, DBMS, and Operating Systems</strong>, I aim to grow as a <strong>Software Development Engineer</strong> by solving real-world problems and contributing to impactful projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
