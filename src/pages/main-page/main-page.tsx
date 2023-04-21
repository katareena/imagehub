import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './main-page.scss';
import Header from '../../components/header/header';

const MainPage: FC = (): JSX.Element => {
  return (
    <div className="layout">
      <Header />

      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  );
};

export default MainPage;
