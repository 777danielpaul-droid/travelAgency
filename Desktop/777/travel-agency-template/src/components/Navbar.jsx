import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl">
          Travel
        </NavLink>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal items-baseline gap-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/destinations">Destinations</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
