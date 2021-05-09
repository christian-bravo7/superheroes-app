import React from 'react';

import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';
import Search from '@/components/Search/Search.component';

import { SuperHero } from '@/api/getAllSuperHeroes';

import classes from '@/components/AllSuperHeroes/AllSuperHeroes.module.scss';

interface propTypes {
  heroes: Array<SuperHero | null>;
  onAddToFavorites: (index: number) => void;
}

const AllSuperHeroes = ({
  heroes,
  onAddToFavorites,
}: propTypes): JSX.Element => {
  return (
    <>
      <div className={classes.AllSuperHeroes__Header}>
        <h2 className={classes.AllSuperHeroes__Title}>All Superheroes</h2>
        <Search />
      </div>
      <SuperHeroesBoard heroes={heroes} onAddToFavorites={onAddToFavorites} />
    </>
  );
};

export default AllSuperHeroes;
