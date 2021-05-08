import React from 'react';

import SuperHeroCard from '@/components/SuperHeroCard/SuperHeroCard.component';

import classes from '@/components/SuperHeroesBoard/SuperHeroesBoard.module.scss';

import { SuperHero } from '@/api/getAllSuperHeroes';

interface propTypes {
  heroes: Array<SuperHero>;
}

const SuperHeroesBoard = ({ heroes }: propTypes): JSX.Element => {
  return (
    <div data-testid="SuperHeroesBoard" className={classes.SuperHeroesBoard}>
      <div className={classes.SuperHeroesBoard__Content}>
        {heroes.map((hero, index) => (
          <SuperHeroCard {...hero} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SuperHeroesBoard;
