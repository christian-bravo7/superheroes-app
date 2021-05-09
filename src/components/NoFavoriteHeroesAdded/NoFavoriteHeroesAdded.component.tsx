import React from 'react';

import bigHeartImage from '@/assets/images/big-heart.svg';

import classes from '@/components/NoFavoriteHeroesAdded/NoFavoriteHeroesAdded.module.scss';

const NoFavoriteHeroesAdded = (): JSX.Element => {
  return (
    <div
      data-testid="no-favorite-heroes-added"
      className={classes.NoFavoriteHeroesAdded}
    >
      <img
        className={classes.NoFavoriteHeroesAdded__Icon}
        src={bigHeartImage}
        alt=""
      />
      <p className={classes.NoFavoriteHeroesAdded__Description}>
        You haven&#39;t liked any superhero yet
      </p>
    </div>
  );
};

export default NoFavoriteHeroesAdded;
