import React from 'react';
import './favourites.scss';
import useLocalStorage from '../../hooks/use-local-storage';
import { IImage } from '../../interfaces/image';
import { InfoText } from '../../constants/constants';
import CatalogItem from '../../components/catalog-item/catalog-item';
import InfoMessage from '../../components/info-message/info-message';

const Favourites = (): JSX.Element => {
  const [ favourites, setFavourites ] = useLocalStorage([], 'favourites');

  const removeFromFavouritesHandler = (id: number) => {
    const newFavourites = favourites.filter((item: IImage) => item.id !== id);
    setFavourites(newFavourites);
  };

  if (!favourites.length)
    return (
      <InfoMessage text={InfoText.EmptyFavourites} /> 
    );

  return (
    <main className="favourites__main">
      <section>
        <div className="catalog__box">
          {favourites.map((item: IImage, index: number) => (
            <CatalogItem
              item={item}
              key={`${item.id}-${index}`}
              favouritesHandler={removeFromFavouritesHandler}
              favourites={favourites}
            />
          ))}
        </div>
      </section>
    </main>    
  );
};

export default Favourites;
