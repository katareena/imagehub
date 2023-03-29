import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import './lost-page.scss';

const LostPage = (): JSX.Element => {
  return (
    <div className='lost'>
      <h2 className='lost__title'>404. Page Not Found</h2>
      <Link className='lost__link' to={AppRoute.Root}>{'<< Back to Home Page'}</Link>
    </div>
  );
}

export default LostPage;