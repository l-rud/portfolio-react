import PageWrapper from '../../components/PageWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './singleProject.css';

export default function GameCollection() {
  return (
    <PageWrapper>
      <div className="project-detail-container">
        <h1>Game Collection</h1>
        <img
          src="../games.png"
          alt="Game Collection screenshot"
          className="project-image"
        />
        <p>
          The Game Collection is a React web application that utilizes the React Outlet component to dynamically display
           three games: Tic-Tac-Toe, Memory Game, and Candy Crush within a single interface. This approach allowed for managing game routes efficiently while maintaining a clean and organized structure for the application.
        </p>
        <div className="project-links">
          <a
            href="https://react-game-collection.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href="https://github.com/l-rud/react-game-collection"
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