import React from 'react';
import { useGlobalContext } from '../../hooks/use-context';
import CatalogItem from '../catalog-item/catalog-item';

const Favorites = (): JSX.Element => {
  const { favourites } = useGlobalContext();

  return (
    <section className='catalog'>
      <h2 className='visually-hidden'>catalog</h2>

      <div className='catalog__box'>
        {favourites.map((item, index) => (
          <CatalogItem {...item} key={`${item.id}-${index}`}/>        
        ))}
      </div>              
    </section>                
  )
}

export default Favorites;
