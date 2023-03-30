import React from 'react';
import { useGlobalContext } from '../../hooks/use-context';
import useLocalStorage from '../../hooks/use-local-storage';
import CatalogItem from '../catalog-item/catalog-item';
import { IImage } from '../../interfaces/image';

const Favorites = (): JSX.Element => {
  const { items } = useGlobalContext();
  const [ favorites, setFavorites ] = useLocalStorage([], 'favorites');

  const addToFavoritesHandler = (id: number) => {
    const isSelectedItems = favorites.find((item: IImage) => item.id === id);
    const newItem = items.find((item: IImage) => item.id === id);

    setFavorites((prev: IImage[]) => (      
      isSelectedItems
        ? prev.filter((el: IImage) => el.id !== id) 
        : [...prev, newItem]
    ))    
  }

  return (
    <section className='catalog'>
      <h2 className='visually-hidden'>catalog</h2>

      <div className='catalog__box'>
        {favorites.map((item: IImage, index: number) => (
          <CatalogItem
            item={item}
            key={`${item.id}-${index}`}
            addToFavoritesHandler={addToFavoritesHandler}
            favorites={favorites}
          />        
        ))}
      </div>              
    </section>                
  )
}

export default Favorites;
