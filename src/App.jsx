import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import './App.css'

const App = () => {
   return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
