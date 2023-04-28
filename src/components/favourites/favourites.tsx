import React from 'react';
import { useGlobalContext } from '../../hooks/use-context';
import useLocalStorage from '../../hooks/use-local-storage';
import CatalogItem from '../catalog-item/catalog-item';
import { IImage } from '../../interfaces/image';
import ButtonUp from '../button-up/button-up';

const Favourites = (): JSX.Element => {
  const { items } = useGlobalContext();
  const [ favourites, setFavourites ] = useLocalStorage([], 'favourites');

  const addToFavouritesHandler = (id: number) => {
    const isSelectedItems = favourites.find((item: IImage) => item.id === id);
    const newItem = items.find((item: IImage) => item.id === id);

    setFavourites((prev: IImage[]) => (      
      isSelectedItems
        ? prev.filter((el: IImage) => el.id !== id) 
        : [...prev, newItem]
    ))    
  }

  if (!favourites.length) return <div className='info'>Please add something to your favourites...</div>;

  return (
    <section className='catalog'>
      <h2 className='visually-hidden'>catalog</h2>

      <div className='catalog__box'>
        {favourites.map((item: IImage, index: number) => (
          <CatalogItem
            item={item}
            key={`${item.id}-${index}`}
            addToFavouritesHandler={addToFavouritesHandler}
            favourites={favourites}
          />        
        ))}
      </div>

      <ButtonUp/>           
    </section>                
  )
}

export default Favourites;
