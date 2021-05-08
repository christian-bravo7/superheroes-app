import React from 'react';

import SuperHeroCard from '@/components/SuperHeroCard/SuperHeroCard.component';

import classes from '@/components/SuperHerosBoard/SuperHerosBoard.module.scss';

import { SuperHero } from '@/api/getAllSuperHeros';

interface propTypes {
  heroes: Array<SuperHero>;
}

const SuperHerosBoard = ({ heroes }: propTypes): JSX.Element => {
  return (
    <div data-testid="SuperHerosBoard" className={classes.SuperHerosBoard}>
      <div className={classes.SuperHerosBoard__Content}>
        {heroes.map((hero, index) => (
          <SuperHeroCard {...hero} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SuperHerosBoard;
