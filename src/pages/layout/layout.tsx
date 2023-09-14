import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';
import Header from '../../components/header/header';

const Layout = (): JSX.Element => {
  return (
    <div className='layout'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
