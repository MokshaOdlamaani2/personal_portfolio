import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';

// Import images
import bbThumbnail from '../assets/bb.jpg';
import fmsThumbnail from '../assets/fms.jpg';
import emsThumbnail from '../assets/ems.jpg';
import ottThumbnail from '../assets/ott.jpg';
import saThumbnail from '../assets/sa.jpg';
import quizThumbnail from '../assets/quiz.jpg';

const Projects = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 200);
    setTimeout(() => setShowCards(true), 1200);
  }, []);

  const convertYouTubeURL = (url) => {
    if (!url) return '';
    const shortMatch = url.match(/youtu\.be\/([\w-]+)/);
    if (shortMatch?.[1]) return `https://www.youtube.com/embed/${shortMatch[1]}`;
    const watchMatch = url.match(/[?&]v=([\w-]+)/);
    if (watchMatch?.[1]) return `https://www.youtube.com/embed/${watchMatch[1]}`;
    if (url.includes('youtube.com/embed/')) return url;
    return url;
  };

  const openModal = (url) => {
    setVideoUrl(convertYouTubeURL(url));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setVideoUrl(null);
    setIsModalOpen(false);
  };

const projects = [
  {
    title: "BookBazaar - Online Bookstore",
    description:
      "Full-stack MERN Bookstore App with ML-based genre prediction, search autocomplete, and book recommendations. Includes authentication and full CRUD.",
    link: "https://your-project-live-link.com",
    source: "https://github.com/MokshaOdlamaani2/BookBazaar-Smarter-book-shopping-via-ML-and-NLP.git",
    demo: "https://youtu.be/KNVM1atBTw4?si=lblVr6nzePUTrgBN",
    thumbnail: bbThumbnail,
    techStack: ["React", "Node.js", "Express", "MongoDB", "ML/NLP", "Scikit-learn"],
  },
  {
    title: "Prohire - Freelancer Marketplace",
    description:
      "MERN-based marketplace for clients and freelancers with real-time chat, project posting, and bidding system.",
    link: "https://your-deployment-link.com",
    source: "https://github.com/MokshaOdlamaani2/Prohire-freelancer-marketplace.git",
    demo: "https://youtu.be/qKVfBD8BHJQ",
    thumbnail: fmsThumbnail,
    techStack: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
  },
  {
    title: "Employee Management System (EMS)",
    description:
      "Manage employee records with CRUD, search, CSV export, role-based access, and JWT authentication.",
    link: "https://your-live-demo-link.com",
    source: "https://github.com/MokshaOdlamaani2/PRODIGY_WD_02.git",
    demo: "https://youtu.be/T6ZhmAu9qc0?si=KqONBC3w3PYtN2nC",
    thumbnail: emsThumbnail,
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Sentiment Sense",
    description:
      "Web app classifying text as positive, negative, or neutral using ML.",
    link: "https://your-live-demo-link.com",
    source: "https://github.com/MokshaOdlamaani2/sentiment-Analysis.git",
    demo: "https://youtu.be/r5JpUtfFHvk",
    thumbnail: saThumbnail,
    techStack: ["React", "Python", "Scikit-learn", "ML"],
  },
  {
    title: "MovieVerse",
    description:
      "React app displaying trending movies/web series via TMDB API with trailers and likes.",
    source: "https://github.com/MokshaOdlamaani2/MovieVerse.git",
    demo: "https://youtu.be/9hmoeID7_QI?si=voRcOA1oQsfQzkj6",
    thumbnail: ottThumbnail,
    techStack: ["React", "TMDB API", "CSS"],
  },
  {
    title: "Quiz Master - Interactive Quiz App",
    description:
      "Dynamic quiz app with category/difficulty selection, timer, leaderboard, and randomized questions.",
    link: "https://your-deployment-link.com",
    source: "https://github.com/MokshaOdlamaani2/Quiz-app.git",
    demo: "https://youtu.be/B8IZbQ2oM1w",
    thumbnail: quizThumbnail,
    techStack: ["React", "JavaScript", "CSS"],
  },
];

  const renderProjectCard = (project, index) => (
    <div key={index} className="project-card" style={{ animationDelay: `${index * 0.3}s` }}>
      <div className="thumbnail-container" onClick={() => openModal(project.demo)}>
        <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
        {project.demo && (
          <div className="video-overlay">
            <span className="video-icon">▶</span>
            <span className="video-text">VIDEO</span>
          </div>
        )}
      </div>
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="tech-stack">
        {project.techStack.map((tech, idx) => (
          <span key={idx} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div className="project-buttons">
        <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
      </div>
    </div>
  );

  return (
    <div className="projects-container bg-[#F9F5E3] text-[#4B352A] min-h-screen pt-24 p-8">
      {showTitle && <h1 className="projects-title">My Projects</h1>}

      {showCards && (
        <>
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.slice(0, 3).map(renderProjectCard)}
          </div>

          <h2 className="section-title mt-14">Other Projects</h2>
          <div className="projects-grid">
            {projects.slice(3).map(renderProjectCard)}
          </div>
        </>
      )}

      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <iframe
              width="100%"
              height="400"
              src={videoUrl + "?autoplay=1"}
              title="Project Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
