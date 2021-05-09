import React from 'react';

import Collapsable from '@/components/Collapsable/Collapsable.component';
import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';
import NoFavoriteHeroesAdded from '@/components/NoFavoriteHeroesAdded/NoFavoriteHeroesAdded.component';
import SuperHeroesBoardLoader from '@/components/SuperHeroesBoardLoader/SuperHeroesBoardLoader.component';

import { SuperHero } from '@/api/getAllSuperHeroes';

import heartSmallImage from '@/assets/images/small-heart.svg';

import classes from '@/components/FavoriteHeroes/FavoriteHeroes.module.scss';

interface propTypes {
  heroes: SuperHero[];
  isLoading?: boolean;
  onRemoveFromFavorites: (index: number) => void;
}
const FavoriteHeroes = ({
  heroes,
  isLoading,
  onRemoveFromFavorites,
}: propTypes): JSX.Element => {
  return (
    <section className={classes.FavoriteHeroes}>
      {isLoading ? (
        <SuperHeroesBoardLoader />
      ) : (
        <Collapsable isOpen={true} headerIcon={heartSmallImage} title="Liked">
          {heroes.length ? (
            <SuperHeroesBoard
              heroes={heroes}
              onRemoveFromFavorites={onRemoveFromFavorites}
            />
          ) : (
            <NoFavoriteHeroesAdded />
          )}
        </Collapsable>
      )}
    </section>
  );
};

export default FavoriteHeroes;
