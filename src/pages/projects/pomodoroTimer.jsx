import PageWrapper from '../../components/PageWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './singleProject.css';

export default function Todo() {
  return (
    <PageWrapper>
      <div className="project-detail-container">
        <h1>Pomodoro Timer</h1>
        <img
          src="../pomodoroTimer.png"
          alt="Pomodoro Timer screenshot"
          className="project-image"
        />
        <p>
        Pomodoro Timer is a React single-page web application designed to help users manage focused work sessions and breaks using the Pomodoro Technique. 
        The app utilizes React Router to provide seamless navigation between Pomodoro work sessions, short breaks, and long breaks within a consistent layout. 
        Functional components such as PomodoroTimer, ShortBreak, and LongBreak are rendered dynamically using nested routes through React Router’s Outlet component. 
        The UI is styled with a custom CSS and includes a simple navigation menu for switching between timer modes.
        </p>
        <div className="project-links">
          <a
            href="https://pomodoro-timer-vite.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href="https://github.com/l-rud/react-pomodoro-timer"
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