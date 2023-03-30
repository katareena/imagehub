import React, { FC } from 'react';
import { IImage } from '../../interfaces/image';

const ProgressiveImage: FC<IImage> = ({alt, src: {small, original, large, large2x, medium, portrait, tiny, landscape}, width, height, avgColor}: IImage): JSX.Element => {
  const title = alt || 'Untitled photo'; 

  return (
    <div
      className='item__img'
      style={{backgroundColor: avgColor}}
    >
      <img
        src={small}
        srcSet={`
          ${tiny} 375w,
          ${landscape} 576w,
          ${medium} 767w,
          ${large} 1024w,
          ${large2x} 1200w,         
        `}
        alt={title}
        width={width}
        height={height}
      />
    </div>  
  )
}

export default ProgressiveImage;