import PageWrapper from '../../components/PageWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './singleProject.css';

export default function Portfolio() {
  return (
    <PageWrapper>
      <div className="project-detail-container">
        <h1>Portfolio</h1>
        <img
          src="../portfolio.png"
          alt="Portfolio screenshot"
          className="project-image"
        />
        <p>
        Portfolio is a fully responsive front-end project built using vanilla HTML and CSS, presenting a collection of personal web development projects. 
         The layout adapts to desktop, tablet, and mobile viewports using custom media queries and separate CSS files. 
         Each project is presented in a card-style format, featuring a title, image, tech stack, and links to both GitHub repositories and live demos. 
        </p>
        <div className="project-links">
          <a
            href="https://l-rud.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href="https://github.com/l-rud/portfolio"
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