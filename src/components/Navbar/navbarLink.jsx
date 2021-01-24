import { NavLink } from 'react-router-dom';

const NavbarLink = ({ link, ico, children }) => {
  return (
    <li>
      <NavLink to={link}>
        <i className={`fas fa-${ico}`}></i>
        {children}
      </NavLink>
    </li>
  );
};

export default NavbarLink;
