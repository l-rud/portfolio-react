import PageWrapper from '../../components/PageWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './singleProject.css';

export default function PurrfectMatch() {
  return (
    <PageWrapper>
      <div className="project-detail-container">
        <h1>Purrfect Match</h1>
        <img
          src="../purrfectMatch.png"
          alt="Purrfect Match screenshot"
          className="project-image"
        />
        <p>
          Purrfect Match is a fun, single-page web application built using vanilla JavaScript, HTML, and CSS. 
          It allows users to discover which cat breed best matches their personality traits through a simple self-assessment. 
          By rating themselves on various attributes such as affection, intelligence, energy, and social needs, 
          users are matched with a cat breed that closely aligns with their responses. 
          The app uses real-time data from The Cat API to fetch breed information and images. 
          It calculates a compatibility score for each breed using user input, 
          sorts the breeds based on match index, and displays the top match with a description and picture.
        </p>
        <div className="project-links">
          <a
            href="https://l-rud.github.io/purrfect-match-web-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href="https://github.com/l-rud/purrfect-match-web-app"
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