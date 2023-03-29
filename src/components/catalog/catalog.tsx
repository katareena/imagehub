import React, { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './catalog.scss';
import { useGlobalContext } from '../../hooks/use-context';
import CatalogItem from '../catalog-item/catalog-item';

const Catalog: FC = (): JSX.Element => {
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

  return (
    <section className='catalog'>
      <h2 className='visually-hidden'>catalog</h2>

      <div className='catalog__box'>
        {items.map((item, index) => (
          <CatalogItem {...item} key={`${item.id}-${index}`}/>        
        ))}
        <div className='loading' ref={ref}>Loading...</div>
      </div>              
    </section>                
  )
}

export default Catalog;
