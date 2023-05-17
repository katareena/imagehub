import React from 'react';
import useLocalStorage from '../../hooks/use-local-storage';
import CatalogItem from '../catalog-item/catalog-item';
import { IImage } from '../../interfaces/image';
import ButtonUp from '../button-up/button-up';

const Favourites = (): JSX.Element => {
  const [ favourites, setFavourites ] = useLocalStorage([], 'favourites');

  const removeFromFavouritesHandler = (id: number) => {
    const newFavourites = favourites.filter((item: IImage) => item.id !== id);
    setFavourites(newFavourites);
  }

  if (!favourites.length) return <div className='info'>Please add something to your favourites...</div>;

  return (
    <section className='catalog'>
      <h2 className='visually-hidden'>catalog</h2>

      <div className='catalog__box catalog__box--basic'>
        {favourites.map((item: IImage, index: number) => (
          <CatalogItem
            item={item}
            key={`${item.id}-${index}`}
            favouritesHandler={removeFromFavouritesHandler}
            favourites={favourites}
          />        
        ))}
      </div>

      <ButtonUp/>           
    </section>                
  )
}

export default Favourites;
