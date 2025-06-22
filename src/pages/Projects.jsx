import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiExpress,
  SiVite,
  SiMongodb,
  SiMongoose,
  SiEjs,
  SiOpenapiinitiative,
} from 'react-icons/si';
import './Projects.css';

const techIcons = {
  HTML: <FaHtml5 color="#E34F26" title="HTML" />,
  CSS: <FaCss3Alt color="#1572B6" title="CSS" />,
  JavaScript: <FaJs color="#F7DF1E" title="JavaScript" />,
  React: <FaReact color="#61DAFB" title="React" />,
  Vite: <SiVite color="#646CFF" title="Vite" />,
  Node: <FaNodeJs color="#339933" title="Node.js" />,
  Express: <SiExpress color="#000000" title="Express.js" />,
  MongoDB: <SiMongodb color="#47A248" title="MongoDB" />,
  Mongoose: <SiMongoose color="#880000" title="Mongoose" />,
  EJS: <SiEjs color="#A91E50" title="EJS" />,
  PublicAPI: <SiOpenapiinitiative color="#6BA539" title="Public API" />,
};

const projects = [
  {
    name: 'Game Collection',
    path: '/projects/gameCollection',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'React', 'Vite'],
  },
  {
    name: 'Purrfect Match React',
    path: '/projects/purrfectMatchReact',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'React', 'Vite', 'PublicAPI'],
  },
  {
    name: 'Starry Inspirations',
    path: '/projects/starryInspirations',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'React', 'Vite', 'Express', 'MongoDB', 'Mongoose'],
  },
  {
    name: 'Recipe Collection',
    path: '/projects/recipeCollection',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'React', 'Vite', 'Express', 'MongoDB', 'Mongoose'],
  },
  {
    name: 'Home Library Catalog',
    path: '/projects/homeLibraryCatalog',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express', 'EJS'],
  },
  {
    name: 'Pomodoro Timer',
    path: '/projects/pomodoroTimer',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'React', 'Vite'],
  },
  {
    name: 'Fashion blog page',
    path: '/projects/fashionBlog',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'React', 'Vite'],
  },
   {
    name: 'To-Do List',
    path: '/projects/todo',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'React', 'Vite'],
  },
   {
    name: 'Purrfect Match',
    path: '/projects/purrfectMatch',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'PublicAPI'],
  },
   {
    name: 'Portfolio',
    path: '/projects/portfolio',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Grocery List',
    path: '/projects/groceryList',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Future project',
    path: '/projects/futureProject',
    tech: [ '', ''],
  }
];

export default function Projects() {
  return (
     <PageWrapper>
    <div className="about-container">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <Link to={project.path} className="project-link">
              {project.name}
            </Link>
            <div className="tech-icons">
              {project.tech.map((tech, i) =>
                techIcons[tech] ? <span key={i}>{techIcons[tech]}</span> : null
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </PageWrapper>
  );
}