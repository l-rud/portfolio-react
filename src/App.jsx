import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import GameCollection from './pages/projects/gameCollection'; 
import RecipeCollection from './pages/projects/recipeCollection';
import FashionBlog from './pages/projects/fashionBlog';
import Todo from './pages/projects/todo';
import PomodoroTimer from './pages/projects/pomodoroTimer';
import HomeLibraryCatalog from './pages/projects/homeLibraryCatalog';
import Portfolio from './pages/projects/portfolio';
import GroceryList from './pages/projects/groceryList';
import PurrfectMatch from './pages/projects/purrfectMatch';
import PurrfectMatchReact from './pages/projects/purrfectMatchReact';
import StarryInspirations from './pages/projects/starryInspirations';
import NotFound from './pages/NotFound'; 
import './App.css';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/gameCollection" element={<GameCollection />} />
          <Route path="projects/recipeCollection" element={<RecipeCollection />} />
          <Route path="projects/fashionBlog" element={<FashionBlog />} />
          <Route path="projects/todo" element={<Todo />} />
          <Route path="projects/pomodoroTimer" element={<PomodoroTimer />} />
          <Route path="projects/homeLibraryCatalog" element={<HomeLibraryCatalog />} />
          <Route path="projects/portfolio" element={<Portfolio />} />
          <Route path="projects/groceryList" element={<GroceryList />} />
          <Route path="projects/purrfectMatch" element={<PurrfectMatch />} />
          <Route path="projects/purrfectMatchReact" element={<PurrfectMatchReact />} />
          <Route path="projects/starryInspirations" element={<StarryInspirations />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
