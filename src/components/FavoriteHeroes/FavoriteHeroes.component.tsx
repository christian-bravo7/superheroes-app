import React from 'react';

import Collapsable from '@/components/Collapsable/Collapsable.component';
import NoFavoriteHeroesAdded from '@/components/NoFavoriteHeroesAdded/NoFavoriteHeroesAdded.component';
import SuperHeroesBoardLoader from '@/components/SuperHeroesBoardLoader/SuperHeroesBoardLoader.component';
import FavoriteSuperHeroesBoard from '@/components/FavoriteSuperHeroesBoard/FavoriteSuperHeroesBoard';

import { SuperHero } from '@/api/getAllSuperHeroes';
import useLocalStorage from '@/hooks/useLocalStorage';

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
  const [isFavoritesOpened, setIsFavoritesOpened] = useLocalStorage(
    'favorite-heroes-opened',
    false,
  );

  const saveFavoritesOpenedState = (state: boolean) => {
    setIsFavoritesOpened(state);
  };

  return (
    <section className={classes.FavoriteHeroes}>
      {isLoading ? (
        <SuperHeroesBoardLoader />
      ) : (
        <Collapsable
          onChange={saveFavoritesOpenedState}
          isOpen={isFavoritesOpened}
          headerIcon={heartSmallImage}
          title="Liked"
        >
          {heroes.length ? (
            <FavoriteSuperHeroesBoard
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
