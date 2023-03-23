import React, { FC } from 'react';
import './catalog-item.scss';
import { IImage } from '../../interfaces/image';

const CatalogItem: FC<IImage> = ({photographer, alt, src: {small}}: IImage): JSX.Element => {
  const title = alt || 'Untitled photo';

  return (
    <article className='item'>
      <h3 className='visually-hidden'>catalog item</h3>
      
      <div className='item__img'>
        <img src={small} alt={title}/>
      </div>
      
      <div className='item__mask'>          
        <p className='item__info item__info--decor'><b>{title}</b></p>
        <span className='item__decor'></span>
        <p className='item__info'><i>{photographer}</i></p>
        <button className='item__favorite' type='button'>favorite</button>
      </div>

    </article>
  )
}

export default CatalogItem;
