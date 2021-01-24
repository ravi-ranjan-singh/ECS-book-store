import { NavLink } from 'react-router-dom';
import MobileNav from './mobileNav';
import NavbarLink from './navbarLink';
import './navbar.css';

const Navbar = ({ itemCount }) => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">
            ECS Book Store
          </NavLink>
          <NavLink to="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="fas fa-bars"></i>
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <NavbarLink link="/" ico="home" />
            <NavbarLink link="/cart" ico="shopping-cart">
              <span className="badge blue">{itemCount}</span>
            </NavbarLink>
          </ul>
        </div>
      </nav>
      <MobileNav items={itemCount} />
    </>
  );
};

export default Navbar;
