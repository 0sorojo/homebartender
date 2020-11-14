import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <div>
      <h1 className='section-title'>Search Form</h1>
    </div>
  );
};

export default SearchForm;
