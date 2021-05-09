import React from 'react';

import searchImage from '@/assets/images/search.svg';
import cancelImage from '@/assets/images/cancel.svg';

import classes from '@/components/Search/Search.module.scss';

interface propTypes {
  value: string;
  onChange: (value: string) => void;
}

const Search = ({ value, onChange }: propTypes): JSX.Element => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
  };

  const isClearButtonVisible = value.trim() !== '';

  const clearSearchHandler = () => {
    onChange('');
  };

  return (
    <div className={classes.Search} data-testid="search">
      <div className={classes.Search__SearchIcon}>
        <img src={searchImage} alt=""></img>
      </div>
      <input
        className={classes.Search__Input}
        value={value}
        onChange={changeHandler}
      ></input>
      <button
        onClick={clearSearchHandler}
        className={`${classes.Search__ClearButton} ${
          isClearButtonVisible ? classes.Search__ClearButtonVisible : ''
        }`}
      >
        <img src={cancelImage} alt=""></img>
      </button>
    </div>
  );
};

export default Search;
