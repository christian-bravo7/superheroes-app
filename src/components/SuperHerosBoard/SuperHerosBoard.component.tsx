import React from 'react';

import SuperHeroCard from '@/components/SuperHeroCard/SuperHeroCard.component';

import classes from '@/components/SuperHerosBoard/SuperHerosBoard.module.scss';

const list = [1, 2, 3, 4, 5, 6];

const SuperHerosBoard = (): JSX.Element => {
  return (
    <div data-testid="SuperHerosBoard" className={classes.SuperHerosBoard}>
      <div className={classes.SuperHerosBoard__Content}>
        {list.map((_, index) => (
          <SuperHeroCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default SuperHerosBoard;
