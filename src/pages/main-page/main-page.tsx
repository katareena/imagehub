import React, { FC } from 'react';
import './main-page.scss';
import Catalog from '../../components/catalog/catalog';
import Header from '../../components/header/header';

const MainPage: FC = (): JSX.Element => {
  return (
    <div className='layout'>
      <Header />
      
      <main className='main'>        
        <Catalog />    
      </main>
    </div>
  )
}

export default MainPage;
