import PageWrapper from '../../components/PageWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './singleProject.css';

export default function Todo() {
  return (
    <PageWrapper>
      <div className="project-detail-container">
        <h1>To-Do List</h1>
        <img
          src="../todo.png"
          alt="To-Do List screenshot"
          className="project-image"
        />
        <p>
         To-Do List is a React single-page web application that allows users to create, manage, and track their daily tasks. 
         The app uses the useReducer hook to handle complex state logic, enabling users to add, delete, and toggle the completion status of tasks. 
         The user interface is built with basic custom CSS, and useState is used to manage input field state for new todos. 
         Tasks are dynamically rendered and updated in real time, providing a seamless and interactive experience.
        </p>
        <div className="project-links">
          <a
            href="https://6672b3f4235f9b00a0a5c1ce--vocal-lollipop-00586b.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href="https://github.com/l-rud/react-todo-list"
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