import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './header.scss';
import cn from 'classnames';
import useWindowSize from '../../hooks/use-window-size';
import { useGlobalContext } from '../../hooks/use-context';
import { AppRoute, MOBILE_WIDTH } from '../../constants/constants';
import { ReactComponent as BurgerIcon } from '../../assets/icon-burger.svg';
import { ReactComponent as LogoIcon } from '../../assets/icon-airguard.svg';
import { ReactComponent as BurgerCloseIcon } from '../../assets/icon-close.svg';
import SearchForm from '../search-form/search-form';

const Header = (): JSX.Element => {
  const { setSearchTerm, setIsSearchActive, setInputValue } =
    useGlobalContext();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { pathname } = useLocation();
  const [isDarkHeader, setIsDarkHeader] = useState(true);
  let windowOffset = 0;
  const [width] = useWindowSize();
  const offsetY = width > MOBILE_WIDTH ? 100 : 70;

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= offsetY) {
        setIsDarkHeader(false);
      } else {
        setIsDarkHeader(true);
      }
    }

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

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

  function clickNavHandler() {
    setSearchTerm('');
    setInputValue('');
    setIsSearchActive(false);
    width <= MOBILE_WIDTH && setIsBurgerOpen(false);
    windowOffset = window.scrollY;
    document.body.setAttribute('style', '');
    window.scrollTo(0, windowOffset);
  }

  return (
    <header
      className={cn('header', {
        'header--dark-theme': pathname === AppRoute.Root && isDarkHeader,
      })}
    >
      <h1 className="visually-hidden">ImageHub App</h1>
      <div className="header__inner">
        <div className="header__box">
          <Link className="logo" to={AppRoute.Root} onClick={clickNavHandler}>
            <LogoIcon />
            <span>ImageHub</span>
          </Link>

          {pathname === AppRoute.Root && !isDarkHeader && <SearchForm />}
          {pathname !== AppRoute.Root && <SearchForm />}

          <button
            className="header__burger"
            type="button"
            onClick={clickOpenHandler}
            aria-label="open-close site navigation"
          >
            <BurgerIcon />
          </button>
        </div>

        <nav className={cn('nav', { 'nav--open': isBurgerOpen })}>
          <button
            className="header__burger-close"
            type="button"
            onClick={clickCloseHandler}
            aria-label="open-close site navigation"
          >
            <BurgerCloseIcon />
          </button>

          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                className="nav__link"
                to={AppRoute.Root}
                onClick={clickNavHandler}
              >
                popular
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className="nav__link"
                to={AppRoute.Favourites}
                onClick={clickNavHandler}
              >
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
