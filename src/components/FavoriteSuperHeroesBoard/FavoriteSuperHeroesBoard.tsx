/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import SuperHeroCard from '@/components/SuperHeroCard/SuperHeroCard.component';

import classes from '@/components/FavoriteSuperHeroesBoard/FavoriteSuperHeroesBoard.module.scss';

import { SuperHero } from '@/api/getAllSuperHeroes';

interface propTypes {
  heroes: SuperHero[];
  onAddToFavorites?: (index: number) => void;
  onRemoveFromFavorites?: (index: number) => void;
}

const FavoriteSuperHeroesBoard = ({
  heroes,
  onAddToFavorites = () => {},
  onRemoveFromFavorites = () => {},
}: propTypes): JSX.Element => {
  return (
    <div
      data-testid="favorite-super-hero-board"
      className={classes.FavoriteSuperHeroesBoard}
    >
      <div className={classes.FavoriteSuperHeroesBoard__Content}>
        {heroes.map(hero => (
          <SuperHeroCard
            {...hero}
            key={hero.index}
            onAddToFavorites={onAddToFavorites}
            onRemoveFromFavorites={onRemoveFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteSuperHeroesBoard;
