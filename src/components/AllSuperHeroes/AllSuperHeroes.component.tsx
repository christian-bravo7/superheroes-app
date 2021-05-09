import React, { useEffect, useState } from 'react';

import SuperHeroesBoardLoader from '@/components/SuperHeroesBoardLoader/SuperHeroesBoardLoader.component';
import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';
import Search from '@/components/Search/Search.component';

import { SuperHero } from '@/api/getAllSuperHeroes';

import classes from '@/components/AllSuperHeroes/AllSuperHeroes.module.scss';

interface propTypes {
  heroes: SuperHero[];
  isLoading?: boolean;
  onAddToFavorites: (index: number) => void;
}

const AllSuperHeroes = ({
  heroes,
  isLoading,
  onAddToFavorites,
}: propTypes): JSX.Element => {
  const [value, setValue] = useState('');
  const [filteredHeroes, setFilteredHeroes] = useState<SuperHero[]>(heroes);

  useEffect(() => {
    if (value.trim() !== '') {
      const matchHeroes = heroes.filter(
        ({ name, realName }) =>
          name.toLowerCase().startsWith(value.toLowerCase()) ||
          realName.toLowerCase().startsWith(value.toLowerCase()),
      );
      setFilteredHeroes(matchHeroes);
    } else {
      setFilteredHeroes(heroes);
    }
  }, [value]);

  useEffect(() => {
    setFilteredHeroes(heroes);
  }, [heroes]);

  const onChangeHandler = (value: string) => {
    setValue(value);
  };

  return (
    <section className={classes.AllSuperHeroes}>
      {isLoading ? (
        <SuperHeroesBoardLoader />
      ) : (
        <>
          <div className={classes.AllSuperHeroes__Header}>
            <h2 className={classes.AllSuperHeroes__Title}>All Superheroes</h2>
            <Search value={value} onChange={onChangeHandler} />
          </div>
          <SuperHeroesBoard
            heroes={filteredHeroes}
            onAddToFavorites={onAddToFavorites}
          />
        </>
      )}
    </section>
  );
};

export default AllSuperHeroes;
