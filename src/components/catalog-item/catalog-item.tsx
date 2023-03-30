import React, { FC } from 'react';
import './catalog-item.scss';
import { IImage } from '../../interfaces/image';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';
import ProgressiveImage from '../image/image';

export interface ICatalogItem {
  item: IImage,
  addToFavoritesHandler: (id: number) => void,
  favorites: IImage[] | [],
}

const CatalogItem: FC<ICatalogItem> = ({item, addToFavoritesHandler, favorites}): JSX.Element => {
  const { photographer, alt, id } = item;
  const ids = favorites.map((el) => el.id);
  const title = alt || 'Untitled photo';
  const { ref, inView } = useInView({
    threshold: 0.1,
  }); 

  return (
    <article className='item' ref={ref}>
      <h3 className='visually-hidden'>catalog item</h3>

      {inView && (
        <>
          <ProgressiveImage {...item}/>          
          <div className='item__mask'>          
            <p className='item__info item__info--decor'><b>{title}</b></p>
            <span className='item__decor'></span>
            <p className='item__info'><i>{photographer}</i></p>
            <button
              className={cn('item__favorite', {'item__favorite--active': ids.includes(id)})}
              type='button'
              onClick={() => addToFavoritesHandler(id)}
            >
              favorite
            </button>
          </div>
        </>
      )}
    </article>
  )
}

export default CatalogItem;
