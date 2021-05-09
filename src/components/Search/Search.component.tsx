import React from 'react';

import searchImage from '@/assets/images/search.svg';
import cancelImage from '@/assets/images/cancel.svg';

const Search = (): JSX.Element => {
  return (
    <div data-testid="search">
      <div>
        <img src={searchImage} alt=""></img>
      </div>
      <input></input>
      <div>
        <img src={cancelImage} alt=""></img>
      </div>
    </div>
  );
};

export default Search;
