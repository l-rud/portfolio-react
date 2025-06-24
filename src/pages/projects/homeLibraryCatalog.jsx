import PageWrapper from '../../components/PageWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './singleProject.css';

export default function HomeLibraryCatalog() {
  return (
    <PageWrapper>
      <div className="project-detail-container">
        <h1>Home Library Catalog</h1>
        <img
          src="../homeLibraryCatalog.png"
          alt="Home Library Catalog screenshot"
          className="project-image"
        />
        <p>
          Home Library Catalog Server is a Node.js and Express-based backend application that functions as a simple home library system. 
          It provides structured routes for managing books, authors, and genres via RESTful API endpoints. 
          The server supports full CRUD operations through GET, POST, PATCH, and DELETE methods, with built-in error handling and API key validation middleware for secure access to all /api routes. 
          The server uses the EJS templating engine to render dynamic views, allowing genre and book data to be displayed on the client side. 
          Middlware is implemented for request parsing, static file serving, request logging, and centralized error processing, making the server robust and ready for integration with a frontend application.
        </p>
        <div className="project-links">
          <a
            href="https://home-library-catalog.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href="https://github.com/l-rud/home-library-catalog"
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