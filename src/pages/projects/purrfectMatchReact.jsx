import PageWrapper from '../../components/PageWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './singleProject.css';

export default function PurrfectMatchReact() {
  return (
    <PageWrapper>
      <div className="project-detail-container">
        <h1>Purrfect Match (React Version)</h1>
        <img
          src="../purrfectMatchReact.png"
          alt="Purrfect Match React screenshot"
          className="project-image"
        />
        <p>
          Purrfect Match is a refactored React-based version of the previously built original Purrfect Match web application. 
          This single-page application allows users to discover which cat breed best matches their personality traits by selecting self-assessed values for key characteristics. 
          The app dynamically compares user input with real cat breed data sourced from The Cat API, using a custom matching algorithm. 
          After calculating the best match, it presents the user with an image and description of the breed they resemble most. 
          The UI is fully responsive, styled with modern CSS techniques, and features a clean component-based architecture for maintainability and scalability.
        </p>
        <div className="project-links">
          <a
            href="https://purrfect-match-react.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href="https://github.com/l-rud/react-purrfect-match"
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