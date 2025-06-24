import PageWrapper from '../../components/PageWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './singleProject.css';

export default function GroceryList() {
  return (
    <PageWrapper>
      <div className="project-detail-container">
        <h1>Grocery List</h1>
        <img
          src="../groceryList.png"
          alt="Grocery List screenshot"
          className="project-image"
        />
        <p>
         Grocery List is a single-page web application built using vanilla JavaScript, HTML, 
         and CSS that allows users to add/remove products and increment quantities in a grocery table. 
         After creating a grocery list, users can print it. 
         The project shows how to use basic DOM and BOM techniques to create an interactive and responsive user experience.
        </p>
        <div className="project-links">
          <a
            href="https://l-rud.github.io/grocery-list-web-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href="https://github.com/l-rud/grocery-list-web-app"
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