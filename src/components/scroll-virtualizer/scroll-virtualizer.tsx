import React, { FC, useState, ReactNode } from 'react';
import { IImage } from '../../interfaces/image';
import CatalogItem from '../catalog-item/catalog-item';

type ScrollVirtualizerProps = {
  data: IImage[][],
  rowHeight: number,
  visibleRows: number,
  children: ReactNode,
  favouritesHandler: (id: number) => void;
  favourites: IImage[] | [];
  elementsInRow: number,
}

const ScrollVirtualizer: FC<ScrollVirtualizerProps> = ({ 
  data, 
  rowHeight, 
  visibleRows, 
  children,
  favouritesHandler,
  favourites,
  elementsInRow,
}) => {
  const [ start, setStart ] = useState(0);
  const getItemWidth = (elementsInRow: number): number => 100 / elementsInRow;  
  
  function getTopHeight() {
    return rowHeight * start;
  }

  function getBottomHeight() {
    return rowHeight * (data.length - (start + visibleRows + 1));
  }

  function onScroll(event: any) {
    setStart(Math.min(
      data.length - visibleRows - 1,
      Math.floor(event.target.scrollTop < 0 ? 0 : event.target.scrollTop / rowHeight) // safari fix
    ));
  }  

  return (
    <div
      style={{ 
        height: rowHeight * visibleRows + 1, // rowHeight * visibleRows + 1,
        overflow: 'auto' 
        }} 
      onScroll={onScroll}
    >

      <div style={{ height: getTopHeight() }} />
        
      <table
        className='catalog__table'          
      >
        <tbody>
          {data.slice(start, start + visibleRows + 1).map((row) => (
            <tr
              style={{ height: rowHeight }}
              key={row.reduce((accum, el) => accum + el.id, 0)}
            >
              {row.map((item) => (
                <td
                  style={{ width: `${getItemWidth(elementsInRow)}%`}}
                  key={item.id}
                >                  
                  <CatalogItem
                    item={item}
                    favouritesHandler={favouritesHandler}
                    favourites={favourites}
                  />                 
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {children}

      <div style={{ height: getBottomHeight() }} /> 
       
    </div>
  )
}

export default ScrollVirtualizer;
