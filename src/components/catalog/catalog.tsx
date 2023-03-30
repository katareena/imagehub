import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './catalog.scss';
import { useGlobalContext } from '../../hooks/use-context';
import CatalogItem from '../catalog-item/catalog-item';
import useLocalStorage from '../../hooks/use-local-storage';
import { IImage } from '../../interfaces/image';

const Catalog = (): JSX.Element => {
  const { items, setFetching, isNextPage } = useGlobalContext();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px 0px 0px 0px',
  }); 

  useEffect(() => {
    if (inView && isNextPage) {
      setFetching(true);   
    }
  }, [inView, isNextPage, setFetching]);

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
        {items.map((item, index) => (
          <CatalogItem
            item={item}
            key={`${item.id}-${index}`}
            addToFavoritesHandler={addToFavoritesHandler}
            favorites={favorites}
          />        
        ))}
        <div className='loading' ref={ref}>Loading...</div>
      </div>              
    </section>                
  )
}

export default Catalog;
