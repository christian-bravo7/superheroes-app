import React from 'react';

import SuperHeroCard from '@/components/SuperHeroCard/SuperHeroCard.component';

import classes from '@/components/SuperHeroesBoard/SuperHeroesBoard.module.scss';

import { SuperHero } from '@/api/getAllSuperHeroes';

interface propTypes {
  heroes: Array<SuperHero | null>;
  onAddToFavorites: (index: number) => void;
  onRemoveFromFavorites: (index: number) => void;
}

const SuperHeroesBoard = ({
  heroes,
  onAddToFavorites,
  onRemoveFromFavorites,
}: propTypes): JSX.Element => {
  return (
    <div data-testid="super-hero-board" className={classes.SuperHeroesBoard}>
      <div className={classes.SuperHeroesBoard__Content}>
        {heroes.map((hero, index) =>
          hero ? (
            <SuperHeroCard
              {...hero}
              index={index}
              key={index}
              onAddToFavorites={onAddToFavorites}
              onRemoveFromFavorites={onRemoveFromFavorites}
            />
          ) : null,
        )}
      </div>
    </div>
  );
};

export default SuperHeroesBoard;
