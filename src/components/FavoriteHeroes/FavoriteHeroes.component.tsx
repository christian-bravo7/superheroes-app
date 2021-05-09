import React from 'react';
import Collapsable from '@/components/Collapsable/Collapsable.component';
import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';

import heartSmallImage from '@/assets/images/small-heart.svg';
import { SuperHero } from '@/api/getAllSuperHeroes';

interface propTypes {
  heroes: SuperHero[];
  onRemoveFromFavorites: (index: number) => void;
}
const FavoriteHeroes = ({
  heroes,
  onRemoveFromFavorites,
}: propTypes): JSX.Element => {
  return (
    <Collapsable isOpen={true} headerIcon={heartSmallImage} title="Liked">
      <SuperHeroesBoard
        heroes={heroes}
        onRemoveFromFavorites={onRemoveFromFavorites}
      />
    </Collapsable>
  );
};

export default FavoriteHeroes;
