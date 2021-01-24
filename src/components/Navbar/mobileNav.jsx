import NavbarLink from './navbarLink';

const MobileNav = ({items}) => {
  return (
    <ul className="sidenav" id="mobile-demo">
      <NavbarLink link="/" ico="home">
        Home
      </NavbarLink>
      <NavbarLink link="/cart" ico="shopping-cart">
        Cart
        <span className="badge blue">{items}</span>
      </NavbarLink>
    </ul>
  );
};

export default MobileNav;
