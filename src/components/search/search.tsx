import React, { FC, FormEvent } from 'react';
import './search.scss';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/use-context';
import { WHITESPACE_REGEXP, AppRoute } from '../../constants/constants';
import { ReactComponent as LoupeIcon } from '../../assets/icon-loupe.svg';
import { ReactComponent as ResetIcon } from '../../assets/icon-close.svg';

const Search: FC = (): JSX.Element => {
  const {
    setSearchTerm,
    isSearchActive,
    setIsSearchActive,
    inputValue,
    setInputValue,
  } = useGlobalContext();
  const navigate = useNavigate();

  function resetHandler() {
    setSearchTerm('');
    setIsSearchActive(false);
    setInputValue('');
    navigate(AppRoute.Root);
  }

  function changeHandler(evt: FormEvent<HTMLInputElement>) {
    if (evt.currentTarget.value.length > 0) {
      setInputValue(evt.currentTarget.value);
   } else {
      resetHandler();
   }
 }

  function submitHandler(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if((!WHITESPACE_REGEXP.test(inputValue))) { //if only spaces are entered      
      setInputValue('');
    } else {
      setSearchTerm(inputValue);
      setIsSearchActive(true);
      navigate(AppRoute.Search);     
    }  
  }

  return (
    <form
      className='search__form'
      method='get'
      action='#'
      onSubmit={submitHandler}  
    >
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
          value={inputValue} 
          onChange={changeHandler}
          required
        />
        <button
          className={cn('search__reset', {'search__reset--active': isSearchActive})}
          type='button'
          aria-label='reset search'
          onClick={resetHandler}
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
  );
};

export default Search;
