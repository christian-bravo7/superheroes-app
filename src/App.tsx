import React, { useEffect, useState } from 'react';

import Header from '@/components/Header/Header.component';
import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';

import getAllSuperHeroes, { SuperHero } from '@/api/getAllSuperHeroes';

import classes from '@/App.module.scss';
import FavoriteHeroes from '@/components/FavoriteHeroes/FavoriteHeroes.component';

const App = (): JSX.Element => {
  const [heroes, setHeroes] = useState<Array<SuperHero>>([]);

  useEffect(() => {
    const anyNameFunction = async () => {
      const heroes = await getAllSuperHeroes();

      console.log(heroes);

      setHeroes(heroes);
    };

    anyNameFunction();
  }, []);

  return (
    <main className={classes.app}>
      <Header />
      <FavoriteHeroes />
      <SuperHeroesBoard heroes={heroes} />
      Hello world
    </main>
  );
};

export default App;
