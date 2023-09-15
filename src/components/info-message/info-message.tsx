import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import './info-message.scss';

type InfoMessageProps = {
  text: string,
  goToRoot?: boolean,
}

const InfoMessage: FC<InfoMessageProps> = ({text, goToRoot = false}): JSX.Element => {
  return (
    <div className='info-message'>
      <p className='info-message__text'>{text}</p>
      {goToRoot && <Link className='info-message__link' to={AppRoute.Root}>{'<< Back to Home Page'}</Link>}      
    </div>
  );
}

export default InfoMessage;