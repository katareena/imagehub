import React, { FC, useState, useEffect } from 'react';
import cn from 'classnames';
import { IImage } from '../../interfaces/image';

const ProgressiveImage: FC<IImage> = ({alt, src: {original, small}, width, height}: IImage): JSX.Element => {
  const [imageSrc, setImageSrc] = useState(small);

  useEffect(() => {
    const img: HTMLImageElement = new (Image as any)(width, height);
    img.src = original;
    img.onload = () => {
      setImageSrc(original)
    }
  }, [original, width, height]);
  
  const title = alt || 'Untitled photo'; 

  return (
    <div className={cn(
      'item__img', {
        'item__img--loading': imageSrc === small,
        'item__img--loaded': imageSrc !== small
        })}>
      <img
        src={imageSrc}
        alt={title}
        width={width}
        height={height}
      />
    </div>  
  )
}

export default ProgressiveImage;