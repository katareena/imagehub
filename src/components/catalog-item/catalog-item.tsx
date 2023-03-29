import React, { FC } from 'react';
import './catalog-item.scss';
import { useGlobalContext } from '../../hooks/use-context';
import ProgressiveImage from '../image/image';
import { IImage } from '../../interfaces/image';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';

const CatalogItem: FC<IImage> = (item: IImage): JSX.Element => {
  const { photographer, alt, id } = item;
  const { favourites, setFavourites } = useGlobalContext();
  const ids = favourites.map((el) => el.id);
  const title = alt || 'Untitled photo';
  const { ref, inView } = useInView({
    threshold: 0.1,
  }); 

  function clickHandler() {
    setFavourites((prev) => (
      !ids.includes(id)
        ? [...prev, item]
        : prev.filter((el) => el.id !== id)
    ))
  }

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
              onClick={clickHandler}
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
