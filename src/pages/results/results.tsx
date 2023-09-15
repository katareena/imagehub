import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGlobalContext } from '../../hooks/use-context';
import useFetch from '../../hooks/use-fetch';
import useLocalStorage from '../../hooks/use-local-storage';
import useWindowSize from '../../hooks/use-window-size';
import { IImage } from '../../interfaces/image';
import {
  URL,
  FETCH_OPTIONS,
  ITEMS_PER_FETCHING,
  InfoText,
  HEADER_HEIGHT,
  ITEM_HEIGHT,
} from '../../constants/constants';
import { getElementsInRow } from '../../utils/adaptive-elements';
import { toMatrix } from '../../utils/to-matrix';
import ScrollVirtualizer from '../../components/scroll-virtualizer/scroll-virtualizer';
import InfoMessage from '../../components/info-message/info-message';

const Results = (): JSX.Element => {
  const { fetchData, items, error, currentPage, isLoading, isNextPage } =
    useFetch();
  const [fetchMore, setFetchMore] = useState(true);
  const { searchTerm } = useGlobalContext();
  const [width, height] = useWindowSize();
  const elementsInRow = getElementsInRow(width);
  const visibleRows = Math.ceil((height - HEADER_HEIGHT) / ITEM_HEIGHT);

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
        `${URL.Search}?page=${currentPage}&per_page=${ITEMS_PER_FETCHING}&query=${searchTerm}`,
        FETCH_OPTIONS
      );
    }
    setFetchMore(false);
  }, [fetchData, fetchMore, searchTerm]);

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

  if (error)
    return (
      <InfoMessage 
        text={InfoText.Error}
        goToRoot={true}
      /> 
    );

  if (!items.length && !isLoading) return (
    <InfoMessage text={InfoText.NotFoundImg} /> 
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
          <InfoMessage text={InfoText.Loading} />           
        )}
      </ScrollVirtualizer>
    </section>
  );
};

export default Results;
