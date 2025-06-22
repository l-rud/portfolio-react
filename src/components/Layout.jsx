import { Outlet, NavLink, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  // Define your known paths
  const knownPaths = ['/', '/about', '/projects'];
  // If current path is NOT known, it's 404
  const is404 = !knownPaths.includes(location.pathname);

  return (
    <div className="popup layout-container">
      <div className="content">
        <Outlet />
      </div>

      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            !is404 && isActive ? 'pop-button active' : 'pop-button'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            !is404 && isActive ? 'pop-button active' : 'pop-button'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            !is404 && isActive ? 'pop-button active' : 'pop-button'
          }
        >
          Projects
        </NavLink>
      </nav>
    </div>
  );
}