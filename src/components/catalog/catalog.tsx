import React, { FC } from 'react';
import './catalog.scss';
import { useGlobalContext } from '../../hooks/use-context';
import CatalogItem from '../catalog-item/catalog-item';
import Loading from '../loading/loading';

const Catalog: FC = (): JSX.Element => {
  const { items, isLoading } = useGlobalContext();
  console.log(items[0]);

  if(isLoading) return <Loading />;

  return (
    <section className='catalog'>
      <h2 className='visually-hidden'>catalog</h2>

      <div className='catalog__box'>
        {items.map(item => (
          <CatalogItem {...item} key={item.id}/>
        ))} 
      </div>
            
    </section>
  )
}

export default Catalog;
