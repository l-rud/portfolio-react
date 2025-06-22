import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="popup layout-container">
      <div className="content">
        <Outlet />
      </div>

      <nav>
        <Link to="/" className="pop-button">Home</Link>
        <Link to="/about" className="pop-button">About</Link>
        <Link to="/projects" className="pop-button">Projects</Link>
      </nav>
    </div>
  );
}