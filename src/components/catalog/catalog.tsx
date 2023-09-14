import React, { useEffect, useState } from 'react';
import './catalog.scss';
import { useInView } from 'react-intersection-observer';
import useLocalStorage from '../../hooks/use-local-storage';
import useWindowSize from '../../hooks/use-window-size';
import useFetch from '../../hooks/use-fetch';
import { IImage } from '../../interfaces/image';
import {
  URL,
  FETCH_OPTIONS,
  ITEMS_PER_FETCHING,
  InfoText,
  HEADER_HEIGHT,
  ITEM_HEIGHT,
} from '../../constants/constants';
import {
  getElementsInRow,
  getSercherHeight,
} from '../../utils/adaptive-elements';
import { toMatrix } from '../../utils/to-matrix';
import ScrollVirtualizer from '../scroll-virtualizer/scroll-virtualizer';
import InfoMessage from '../info-message/info-message';

const Catalog = (): JSX.Element => {
  const { fetchData, items, error, currentPage, isLoading, isNextPage } =
    useFetch();
  const [fetchMore, setFetchMore] = useState(true);
  const [width, height] = useWindowSize();
  const elementsInRow = getElementsInRow(width);
  const sercherHeight = getSercherHeight(width);
  const visibleRows = (height - HEADER_HEIGHT - sercherHeight) / ITEM_HEIGHT;

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

  if (error) return (
    <InfoMessage 
      text={InfoText.Error}
      goToRoot={false}
    /> 
  );

  return (
    <section>
      <ScrollVirtualizer
        data={toMatrix(items, elementsInRow)}
        rowHeight={ITEM_HEIGHT}
        visibleRows={visibleRows}
        elementsInRow={elementsInRow}
        favouritesHandler={addToFavouritesHandler}
        favourites={favourites}
      >

        <div className="catalog__fetching" ref={ref}></div>

        {isNextPage && isLoading && (
          <InfoMessage 
            text={InfoText.Loading}
            goToRoot={false}
          />          
        )}

      </ScrollVirtualizer>
    </section>
  );
};

export default Catalog;
