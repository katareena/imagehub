import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import './lost.scss';

const Lost = (): JSX.Element => {
  return (
    <div className='lost'>
      <h2 className='lost__title'>Oh no!</h2>
      <p className='lost__text'>The page you are looking for doesn't exist.</p>
      <Link className='lost__link' to={AppRoute.Root}>{'<< Back to Home Page'}</Link>
    </div>
  );
}

export default Lost;