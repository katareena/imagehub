import React, { FC } from 'react';
import './catalog.scss';
import CatalogItem from '../catalog-item/catalog-item';
import Loading from '../loading/loading';

const Catalog: FC = (): JSX.Element => {
  const isLoading = false;

  if(isLoading) return <Loading />;

  return (
    <section className='catalog'>
      <h2 className='visually-hidden'>catalog</h2>

      <div className='catalog__box'>
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />         
        <CatalogItem />         
        <CatalogItem />         
        <CatalogItem />         
        <CatalogItem />         
        <CatalogItem />         
        <CatalogItem />         
        <CatalogItem />         
      </div>
            
    </section>
  )
}

export default Catalog;
