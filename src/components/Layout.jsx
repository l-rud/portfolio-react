import { Outlet, NavLink } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="popup layout-container">
      <div className="content">
        <Outlet />
      </div>

      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'pop-button active' : 'pop-button'}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'pop-button active' : 'pop-button'}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => isActive ? 'pop-button active' : 'pop-button'}
        >
          Projects
        </NavLink>
      </nav>
    </div>
  );
}