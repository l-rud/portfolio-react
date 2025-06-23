import PageWrapper from '../../components/PageWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './singleProject.css';

export default function RecipeCollection() {
  return (
    <PageWrapper>
      <div className="project-detail-container">
        <h1>Recipe Collection</h1>
        <img
          src="../recipeCollection.png"
          alt="Recipe Collection screenshot"
          className="project-image"
        />
        <p>
          Recipe Collection is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) 
          that allows users to browse and manage food recipes effectively. 
          Full CRUD functionality is implemented on the backend to manage recipes and categories. 
          React Router’s Outlet component is utilized on the frontend to render nested routes and dynamic content.
        </p>
        <div className="project-links">
          <a
            href="https://recipe-collection-mern.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href="https://github.com/l-rud/recipe-collection-capstone"
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