import React, { useEffect, useState } from 'react';
import './catalog.scss';
import { useInView } from 'react-intersection-observer';
import useLocalStorage from '../../hooks/use-local-storage';
import useFetch from '../../hooks/use-fetch';
import { IImage } from '../../interfaces/image';
import { URL, FETCH_OPTIONS, ITEMS_PER_FETCHING, InfoTitle } from '../../constants/constants';
import CatalogItem from '../catalog-item/catalog-item';
import ButtonUp from '../button-up/button-up';

const Catalog = (): JSX.Element => {
  const { fetchData, items, error, currentPage, isLoading, isNextPage } = useFetch();
  const [ fetchMore, setFetchMore ] = useState(true);
    
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px 0px 0px 0px',
  });

  useEffect(() => {
    if (inView && isNextPage) {
      setFetchMore(true);
    }
  }, [inView, isNextPage, setFetchMore]);

  useEffect(() => {
    if (fetchMore) {
      fetchData(
        `${URL.Resource}?page=${currentPage}&per_page=${ITEMS_PER_FETCHING}`,
        FETCH_OPTIONS
      );
    } 
    setFetchMore(false);
  }, [fetchData, fetchMore]);


  const [favourites, setFavourites] = useLocalStorage([], 'favourites');

  const addToFavouritesHandler = (id: number) => {
    const isSelectedItems = favourites.find((item: IImage) => item.id === id);
    const newItem = items.find((item: IImage) => item.id === id);

    setFavourites((prev: IImage[]) =>
      isSelectedItems
        ? prev.filter((el: IImage) => el.id !== id)
        : [...prev, newItem]
    );
  };

  if (error) return <div className='info'>{InfoTitle.Error}</div>;

  return (
    <section className='catalog'>
      <h2 className='visually-hidden'>catalog</h2>

      <div className='catalog__box'>
        {items.map((item, index) => (
          <CatalogItem
            item={item}
            key={`${item.id}-${index}`}
            favouritesHandler={addToFavouritesHandler}
            favourites={favourites}
          />
        ))}
        {isNextPage && isLoading && <div className='info'>{InfoTitle.Loading}</div>}
      </div>
      <div ref={ref}></div>

      <ButtonUp/>
    </section>
  );
};

export default Catalog;
