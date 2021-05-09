import React from 'react';
import Collapsable from '@/components/Collapsable/Collapsable.component';
import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';

import { SuperHero } from '@/api/getAllSuperHeroes';

import heartSmallImage from '@/assets/images/small-heart.svg';

import classes from '@/components/FavoriteHeroes/FavoriteHeroes.module.scss';

interface propTypes {
  heroes: SuperHero[];
  onRemoveFromFavorites: (index: number) => void;
}
const FavoriteHeroes = ({
  heroes,
  onRemoveFromFavorites,
}: propTypes): JSX.Element => {
  return (
    <section className={classes.FavoriteHeroes}>
      <Collapsable isOpen={true} headerIcon={heartSmallImage} title="Liked">
        <SuperHeroesBoard
          heroes={heroes}
          onRemoveFromFavorites={onRemoveFromFavorites}
        />
      </Collapsable>
    </section>
  );
};

export default FavoriteHeroes;
