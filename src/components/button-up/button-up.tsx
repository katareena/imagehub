import React from 'react';
import './button-up.scss';
import { ReactComponent as ButtonUpIcon } from '../../assets/icon-arrow.svg';

function scrollUpHandler() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

const ButtonUp = (): JSX.Element => {
  return (
    <button
      className='button-up'
      aria-label='go to the top of the site'
      onClick={scrollUpHandler}
    >
      <ButtonUpIcon />
    </button>
    )
}

export default ButtonUp;