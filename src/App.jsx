import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css'

const App = () => {
   return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div> Home page </div>} />
      </Route>
    </Routes>
  );
};

export default App;
