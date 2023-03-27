import React, { FC, useState } from 'react';
import './header.scss';
import cn from 'classnames';
import { ReactComponent as BurgerIcon } from '../../assets/icon-burger.svg';
import { ReactComponent as LogoIcon } from '../../assets/icon-airguard.svg';
import { ReactComponent as BurgerCloseIcon } from '../../assets/icon-close.svg';

const Header: FC = (): JSX.Element => {
  const [ isBurgerOpen, setIsBurgerOpen ] = useState(false);

  return (
    <header className='header'>
      <h1 className='visually-hidden'>ImageHub App</h1>
      <div className='header__inner'>
        
        <div className='header__box'>
          <div className='logo'>
            <LogoIcon />
            <span>ImageHub</span>
          </div>

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
              <a className='nav__link' href='https://www.pexels.com/api/documentation'>my favorite</a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header;