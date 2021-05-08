import React, { useEffect, useState } from 'react';

import Header from '@/components/Header/Header.component';
import SuperHerosBoard from '@/components/SuperHerosBoard/SuperHerosBoard.component';

import getAllSuperHeros, { SuperHero } from '@/api/getAllSuperHeros';

import classes from '@/App.module.scss';

const App = (): JSX.Element => {
  const [heroes, setHeroes] = useState<Array<SuperHero>>([]);

  useEffect(() => {
    const anyNameFunction = async () => {
      const heroes = await getAllSuperHeros();

      setHeroes(heroes);
    };

    anyNameFunction();
  }, []);

  return (
    <main className={classes.app}>
      <Header />
      <SuperHerosBoard heroes={heroes} />
      Hello world
    </main>
  );
};

export default App;
