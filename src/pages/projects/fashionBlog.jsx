import PageWrapper from '../../components/PageWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './singleProject.css';

export default function GameCollection() {
  return (
    <PageWrapper>
      <div className="project-detail-container">
        <h1>Fashion blog page</h1>
        <img
          src="../fashionBlog.png"
          alt="Fashion blog page screenshot"
          className="project-image"
        />
        <p>
          Fashion blog page is a frontend web project that was initially built using HTML and CSS to match a provided mockup. 
          It was later refactored into a React application for improved component reusability and maintainability. 
          Functional components such as Header, Footer, and Article were used for better component structure, reusability, and future scalability.
        </p>
        <div className="project-links">
          <a
            href="https://iridescent-semifreddo-74c8fd.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href="https://github.com/l-rud/fashion-blog-react"
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