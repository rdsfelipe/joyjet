import './index.scss';
import logo from '../../assets/img/logo.png';
import 'bootstrap/js/dist/collapse';
import Menu from '../Menu';
import MenuToggler from '../MenuToggler';
import React, { useEffect, useState } from 'react';

const Header = (props) => {
  var headerClass = '_header';

  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 90) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  });

  headerClass += sticky ? ' sticky' : '';
  headerClass += mobileMenuOpen ? ' menu-open' : '';

  return (
    <header className={headerClass}>
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container align-items-between">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Space" />
          </a>
          <MenuToggler target="#navbarNav" />
          <Menu stateChanger={setMobileMenuOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
