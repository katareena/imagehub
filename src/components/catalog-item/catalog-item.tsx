import React, { FC } from 'react';
import './catalog-item.scss';

const CatalogItem: FC = (): JSX.Element => {
  return (
    <article className='item'>
      <h3 className='visually-hidden'>catalog item</h3>
      
      <div className='item__img'>
        <img src='http://xoxo.ru/wp-content/uploads/2020/12/por.jpg' aria-label='some alt' alt=''/>
      </div>
      
      <div className='item__mask'>          
        <p className='item__info item__info--decor'><b>Lorem ipsum</b></p>
        <span className='item__decor'></span>
        <p className='item__info'><i>Lorem ipsum</i></p>
        <button className='item__favorite' type='button'>favorite</button>
      </div>

    </article>
  )
}

export default CatalogItem;
