import React, { useEffect, useState } from 'react';

import Header from '@/components/Header/Header.component';
import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';
import Collapsable from '@/components/Collapsable/Collapsable.component';

import getAllSuperHeroes, { SuperHero } from '@/api/getAllSuperHeroes';

import classes from '@/App.module.scss';

import heartSmallImage from '@/assets/images/small-heart.svg';

const App = (): JSX.Element => {
  const [heroes, setHeroes] = useState<Array<SuperHero>>([]);

  useEffect(() => {
    const anyNameFunction = async () => {
      const heroes = await getAllSuperHeroes();

      setHeroes(heroes);
    };

    anyNameFunction();
  }, []);

  return (
    <main className={classes.app}>
      <Header />
      <Collapsable headerIcon={heartSmallImage} title="Liked">
        Content
      </Collapsable>
      Hello world
    </main>
  );
};

export default App;
