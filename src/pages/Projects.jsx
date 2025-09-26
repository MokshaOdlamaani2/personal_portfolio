import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';

// Import images from src/assets folder
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

  const convertDropboxURL = (url) => {
    if (!url) return '';
    if (url.includes('dropbox.com')) {
      return url.replace('?dl=1', '?raw=1');
    }
    return url;
  };

  const convertYouTubeURL = (url) => {
    if (!url) return '';

    const shortMatch = url.match(/youtu\.be\/([\w-]+)/);
    if (shortMatch && shortMatch[1]) {
      return `https://www.youtube.com/embed/${shortMatch[1]}`;
    }
    const watchMatch = url.match(/[?&]v=([\w-]+)/);
    if (watchMatch && watchMatch[1]) {
      return `https://www.youtube.com/embed/${watchMatch[1]}`;
    }

    if (url.includes('youtube.com/embed/')) {
      return url;
    }

    return url;
  };

  const openModal = (url) => {
    let convertedUrl = url;

    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      convertedUrl = convertYouTubeURL(url);
    } else if (url.includes('dropbox.com')) {
      convertedUrl = convertDropboxURL(url);
    }

    setVideoUrl(convertedUrl);
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
        "Full-stack MERN Bookstore App featuring ML-based genre prediction, keyword extraction, search autocomplete, and similar book recommendations. Includes secure authentication, book browsing, search, and full CRUD operations.",
      link: "https://your-project-live-link.com",
      source: "https://github.com/MokshaOdlamaani2/BookBazaar-Smarter-book-shopping-via-ML-and-NLP.git",
      demo: "https://youtu.be/KNVM1atBTw4?si=lblVr6nzePUTrgBN",
      thumbnail: bbThumbnail,
    },
    {
      title: "Prohire - Freelancer Marketplace",
      description:
        "MERN-based freelancer marketplace with separate portals for clients and freelancers. Clients can post projects, shortlist, and hire, while freelancers apply and manage bids. Real-time notifications and chat powered by WebSockets ensure instant updates and smooth communication.",
      link: "https://your-deployment-link.com",
      source: "https://github.com/MokshaOdlamaani2/Prohire-freelancer-marketplace.git",
      demo: "https://youtu.be/qKVfBD8BHJQ",
      thumbnail: fmsThumbnail,
    },
    {
      title: "Employee Management System (EMS)",
      description:
        "A full-stack MERN application to manage employee records with role-based access. Features include employee CRUD operations, search/filter, CSV export, JWT authentication, and a responsive dashboard.",
      link: "https://your-live-demo-link.com",
      source: "https://github.com/MokshaOdlamaani2/PRODIGY_WD_02.git",
      demo: "https://youtu.be/T6ZhmAu9qc0?si=KqONBC3w3PYtN2nC",
      thumbnail: emsThumbnail,
    },
    {
  title: "Sentiment Sense",
  description: "A web app that analyzes text input to classify sentiment as positive, negative, or neutral using a machine learning model.",
  link: "https://your-live-demo-link.com",
  source: "https://github.com/MokshaOdlamaani2/sentiment-Analysis.git",
  demo: "https://youtu.be/r5JpUtfFHvk",  // add your live demo link here if available
  thumbnail: saThumbnail,
},

    
    {
      title: "MovieVerse",
      description:
        "A dynamic React app that uses the TMDB API to display trending movies, web series, genre-specific content, and trailers. Features include liking web series.",
      source: "https://github.com/MokshaOdlamaani2/MovieVerse.git",
      demo: "https://youtu.be/9hmoeID7_QI?si=voRcOA1oQsfQzkj6",
      thumbnail: ottThumbnail,
    },
    {
      title: "Quiz Master - Interactive Quiz App",
      description:
        "A dynamic quiz platform with category and difficulty selection, real-time scoring, countdown timer, and leaderboard. Features randomized questions.",
      link: "https://your-deployment-link.com",
      source: "https://github.com/MokshaOdlamaani2/Quiz-app.git",
      demo: "https://youtu.be/B8IZbQ2oM1w",
      thumbnail: quizThumbnail,
    },
  ];

  return (
    <div className="projects-container bg-[#F9F5E3] text-[#4B352A] min-h-screen pt-24 p-8">
      {showTitle && <h1 className="projects-title">My Projects</h1>}

      {showCards && (
        <>
          {/* 🔹 Section 1: First 3 projects */}
          <h2 className="section-title "style={{ fontSize: '1.5rem',padding:'10px' }}>Featured Projects</h2>
          <div className="projects-grid">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="project-card"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="thumbnail-container">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  {project.demo && project.demo.trim() !== "" && (
                    <button
                      className="view-video-btn"
                      onClick={() => openModal(project.demo)}
                    >
                      ▶ Video
                    </button>
                  )}
                </div>

                <div className="project-buttons">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                    View Project
                  </a>
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn">
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 🔹 Section 2: Last 3 projects */}
          <h2 className="section-title mt-14" style={{ fontSize: '1.5rem',padding:'10px' }}>
  Other Projects
</h2>

          <div className="projects-grid">
            {projects.slice(3).map((project, index) => (
              <div
                key={index + 3}
                className="project-card"
                style={{ animationDelay: `${(index + 3) * 0.3}s` }}
              >
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="thumbnail-container">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  {project.demo && project.demo.trim() !== "" && (
                    <button
                      className="view-video-btn"
                      onClick={() => openModal(project.demo)}
                    >
                      ▶ Video
                    </button>
                  )}
                </div>

                <div className="project-buttons">
                  {project.demo && project.demo.trim() !== "" && (
                    <button className="btn" onClick={() => openModal(project.demo)}>
                      View Video
                    </button>
                  )}
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn">
                    Source Code
                  </a>
                </div>
              </div>
            ))}
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
