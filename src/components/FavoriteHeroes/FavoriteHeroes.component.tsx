import React from 'react';
import Collapsable from '@/components/Collapsable/Collapsable.component';
import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';

import heartSmallImage from '@/assets/images/small-heart.svg';
import { SuperHero } from '@/api/getAllSuperHeroes';

interface propTypes {
  heroes: Array<SuperHero | null>;
  onAddToFavorites: (index: number) => void;
  onRemoveFromFavorites: (index: number) => void;
}
const FavoriteHeroes = ({
  heroes,
  onRemoveFromFavorites,
  onAddToFavorites,
}: propTypes): JSX.Element => {
  return (
    <Collapsable headerIcon={heartSmallImage} title="Liked">
      <SuperHeroesBoard
        heroes={heroes}
        onRemoveFromFavorites={onRemoveFromFavorites}
        onAddToFavorites={onAddToFavorites}
      />
    </Collapsable>
  );
};

export default FavoriteHeroes;
