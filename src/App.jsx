import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import GameCollection from './pages/projects/gameCollection'; 
import RecipeCollection from './pages/projects/recipeCollection';
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

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
