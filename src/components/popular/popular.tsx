import React, { FC } from 'react';
import Search from '../search/search';
import Catalog from '../catalog/catalog';

const Popular: FC = (): JSX.Element => {
  return (
    <>
      <Search/>
      <Catalog/>    
    </>    
  );
};

export default Popular;