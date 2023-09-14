import React from 'react';
import Catalog from '../../components/catalog/catalog';
import Search from '../../components/search/search';

const Popular = (): JSX.Element => {
  return (      
    <main>
      <Search />
      <Catalog />
    </main>
  );
};

export default Popular;
