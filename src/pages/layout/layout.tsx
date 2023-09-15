import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';
import { InfoText } from '../../constants/constants';
import Header from '../../components/header/header';
import InfoMessage from '../../components/info-message/info-message';

const Layout = (): JSX.Element => {
  return (
    <div className='layout'>
      <Header />

      <Suspense fallback={<InfoMessage text={InfoText.Loading}/>}>
        <Outlet />
      </Suspense> 
      
    </div>
  );
};

export default Layout;
