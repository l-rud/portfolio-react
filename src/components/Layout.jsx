import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="popup">
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Outlet />
    </div>
  );
}