import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './header.scss';
import cn from 'classnames';
import { ReactComponent as BurgerIcon } from '../../assets/icon-burger.svg';
import { ReactComponent as LogoIcon } from '../../assets/icon-airguard.svg';
import { ReactComponent as BurgerCloseIcon } from '../../assets/icon-close.svg';
import { AppRoute } from '../../constants/constants';

const Header = (): JSX.Element => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  let windowOffset = 0;
  const { pathname } = useLocation();

  function clickOpenHandler() {
    setIsBurgerOpen(!isBurgerOpen);
    windowOffset = window.scrollY;
    document.body.setAttribute(
      'style',
      `position: fixed; top: -${windowOffset}px; left: 0; right: 0;`
    );
  }

  function clickCloseHandler() {
    setIsBurgerOpen(!isBurgerOpen);
    windowOffset = window.scrollY;
    document.body.setAttribute('style', '');
    window.scrollTo(0, windowOffset);
  }

  return (
    <header className={cn('header', { 'header--index': pathname === AppRoute.Root })}>
      <h1 className='visually-hidden'>ImageHub App</h1>
      <div className='header__inner'>
        <div className='header__box'>
          <Link className='logo' to={AppRoute.Root}>
            <LogoIcon />
            <span>ImageHub</span>
          </Link>

          <button
            className='header__burger'
            type='button'
            onClick={clickOpenHandler}
            aria-label='open-close site navigation'
          >
            <BurgerIcon />
          </button>
        </div>

        <nav className={cn('nav', { 'nav--open': isBurgerOpen })}>
          <button
            className='header__burger-close'
            type='button'
            onClick={clickCloseHandler}
            aria-label='open-close site navigation'
          >
            <BurgerCloseIcon />
          </button>

          <ul className='nav__list'>
            <li className='nav__item'>
              <NavLink className='nav__link' to={AppRoute.Root}>
                popular
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink className='nav__link' to={AppRoute.Favourites}>
                favourites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
