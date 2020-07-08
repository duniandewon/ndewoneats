import React from 'react';

const SearchBox = () => {
  return (
    <div className='search-container'>
      <input type='text' className='search' placeholder='Search menu...' />
      <button className='search-btn'>
        <i className='material-icons'>search</i>
      </button>
    </div>
  );
};

export default SearchBox;
