import React, { FC } from 'react';
import Search from '../search/search';
import Catalog from '../catalog/catalog';

const Popular: FC = (): JSX.Element => {
  return (
    <>
      <div className='search'>
        <p className='search__text'>
          Quam beatae sapiente facere non nesciunt at id repudiandae, modi iste? Eligendi, rerum!
        </p>

        <Search/>
      </div>
      
      <Catalog/>    
    </>    
  );
};

export default Popular;