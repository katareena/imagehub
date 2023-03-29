import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import cn from 'classnames';
import { ReactComponent as BurgerIcon } from '../../assets/icon-burger.svg';
import { ReactComponent as LogoIcon } from '../../assets/icon-airguard.svg';
import { ReactComponent as BurgerCloseIcon } from '../../assets/icon-close.svg';
import { AppRoute } from '../../constants/constants';

const Header: FC = (): JSX.Element => {
  const [ isBurgerOpen, setIsBurgerOpen ] = useState(false);

  return (
    <header className='header'>
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
            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            aria-label='open-close site navigation'
          >
            {isBurgerOpen ? <BurgerCloseIcon /> : <BurgerIcon />}
          </button>
        </div>

        <nav className={cn('nav', {'nav--open': isBurgerOpen})}>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link className='nav__link' to={AppRoute.MyFavorite}>my favorites</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header;
