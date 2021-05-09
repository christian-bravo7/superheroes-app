import React, { useMemo, useState } from 'react';

import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';
import Search from '@/components/Search/Search.component';

import { SuperHero } from '@/api/getAllSuperHeroes';

import classes from '@/components/AllSuperHeroes/AllSuperHeroes.module.scss';

interface propTypes {
  heroes: SuperHero[];
  onAddToFavorites: (index: number) => void;
}

const AllSuperHeroes = ({
  heroes,
  onAddToFavorites,
}: propTypes): JSX.Element => {
  const [value, setValue] = useState('');

  const onChangeHandler = (value: string) => {
    setValue(value);
  };

  const SuperHeroesBoardMemoized = useMemo(
    () => (
      <SuperHeroesBoard heroes={heroes} onAddToFavorites={onAddToFavorites} />
    ),
    [heroes],
  );

  return (
    <div className={classes.AllSuperHeroes}>
      <div className={classes.AllSuperHeroes__Header}>
        <h2 className={classes.AllSuperHeroes__Title}>All Superheroes</h2>
        <Search value={value} onChange={onChangeHandler} />
      </div>
      {SuperHeroesBoardMemoized}
    </div>
  );
};

export default AllSuperHeroes;
