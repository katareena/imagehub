import React from 'react';
import './search.scss';
import SearchForm from '../search-form/search-form';

const Search = (): JSX.Element => {
  return (
    <div className="search">
      <div className="search__bg"></div>
        <p className="search__text">
          Quam beatae sapiente facere non nesciunt at id repudiandae, modi iste?
          Eligendi, rerum!
        </p>

      <SearchForm />
  </div>
  )
}

export default Search;