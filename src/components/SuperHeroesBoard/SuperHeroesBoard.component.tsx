import React from 'react';

import SuperHeroCard from '@/components/SuperHeroCard/SuperHeroCard.component';

import classes from '@/components/SuperHeroesBoard/SuperHeroesBoard.module.scss';

import { SuperHero } from '@/api/getAllSuperHeroes';

interface propTypes {
  heroes: Array<SuperHero>;
}

const SuperHeroesBoard = ({ heroes }: propTypes): JSX.Element => {
  const addToFavorites = () => {
    console.log('favorito');
  };
  const removeFromFavorites = () => {
    console.log('alv');
  };

  return (
    <div data-testid="super-hero-board" className={classes.SuperHeroesBoard}>
      <div className={classes.SuperHeroesBoard__Content}>
        {heroes.map((hero, index) => (
          <SuperHeroCard
            {...hero}
            key={index}
            onAddToFavorites={addToFavorites}
            onRemoveFromFavorites={removeFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default SuperHeroesBoard;
