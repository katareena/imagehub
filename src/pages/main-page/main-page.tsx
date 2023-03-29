import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './main-page.scss';
import Header from '../../components/header/header';
import { useGlobalContext } from '../../hooks/use-context';
import { setToStorageData, getFromStorageData } from '../../utils/local-storage';

const MainPage: FC = (): JSX.Element => {
  const { favourites, setFavourites } = useGlobalContext();

  useEffect(() => {
    setFavourites(getFromStorageData('selected') ?? []);
  }, []);

  useEffect(() => {    
    setToStorageData('selected', favourites);
  }, [favourites]);

  return (
    <div className='layout'>
      <Header />
      
      <main className='main'>        
        <Outlet />    
      </main>
    </div>
  )
}

export default MainPage;
