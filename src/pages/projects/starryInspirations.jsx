import PageWrapper from '../../components/PageWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './singleProject.css';

export default function StarryInspirations() {
  return (
    <PageWrapper>
      <div className="project-detail-container">
        <h1>Starry Inspirations</h1>
        <img
          src="../starryInspirations.png"
          alt="Starry Inspirations screenshot"
          className="project-image"
        />
        <p>
         Starry Inspirations is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) 
         that allows users to select a zodiac sign and receive a randomly generated inspirational quote tailored to that sign. 
         The app delivers personalized content using custom-built RESTful API endpoints and dynamic routing on the frontend. 
         A CORS-enabled backend ensures smooth cross-origin requests from the React frontend. 
         The responsive UI is styled with CSS Grid and media queries to adapt effectively to mobile, tablet, and desktop devices.
        </p>
        <div className="project-links">
          <a
            href="https://starry-inspirations.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href="https://github.com/l-rud/starry-inspirations"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub /> GitHub Repo
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}