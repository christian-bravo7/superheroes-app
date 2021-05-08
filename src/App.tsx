import React, { useEffect, useState } from 'react';

import Header from '@/components/Header/Header.component';
import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';
import FavoriteHeroes from '@/components/FavoriteHeroes/FavoriteHeroes.component';

import getAllSuperHeroes, { SuperHero } from '@/api/getAllSuperHeroes';

import classes from '@/App.module.scss';

const App = (): JSX.Element => {
  const [heroes, setHeroes] = useState<Array<SuperHero>>([]);

  useEffect(() => {
    const fetchSuperHeroes = async () => {
      const heroes = await getAllSuperHeroes();
      setHeroes(heroes);
    };

    fetchSuperHeroes();
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
