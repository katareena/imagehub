import React, { FC, useRef, useEffect } from 'react';
import './search.scss';
import { ReactComponent as LoupeIcon } from '../../assets/icon-loupe.svg';
import { ReactComponent as ResetIcon } from '../../assets/icon-close.svg';

const Search: FC = (): JSX.Element => {
  const searchInput = useRef<HTMLInputElement>(null);
  useEffect(() => searchInput.current?.focus(), []);

  return (
    <div className='search'>
      {/* <h2 className='search__title'>find your photos</h2> */}
      <p className='search__text'>
        Quam beatae sapiente facere non nesciunt at id repudiandae, modi iste? Eligendi, rerum!
      </p>

      <form className='search__form' method='get' action='#'>
        <div className='search__box'>
          <label
            className='visually-hidden'
            htmlFor='search'
            aria-hidden='true'
          >
            search field
          </label>
          <input
            className='search__input'
            type='text'
            id='search'
            autoComplete='off'
            placeholder='Search...'
            required
            ref={searchInput}
          />
          <button
            className='search__reset'
            type='button'
            aria-label='reset search'
          >
            <ResetIcon />
          </button>

          <button
            className='search__submit'
            type='submit'
            aria-label='start to search'
          >
            <LoupeIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
