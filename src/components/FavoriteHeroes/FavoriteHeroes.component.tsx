import React from 'react';
import Collapsable from '@/components/Collapsable/Collapsable.component';
import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';

import heartSmallImage from '@/assets/images/small-heart.svg';

const mockedHeroes = [
  {
    image:
      'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg',
    name: 'A-Bomb',
    power: 10,
    realName: 'Richard Milhouse Jones',
  },
  {
    image:
      'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg',
    name: 'A-Bomb',
    power: 10,
    realName: 'Richard Milhouse Jones',
  },
  {
    image:
      'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg',
    name: 'A-Bomb',
    power: 10,
    realName: 'Richard Milhouse Jones',
  },
  {
    image:
      'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg',
    name: 'A-Bomb',
    power: 10,
    realName: 'Richard Milhouse Jones',
  },
  {
    image:
      'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg',
    name: 'A-Bomb',
    power: 10,
    realName: 'Richard Milhouse Jones',
  },
];

const heroes = mockedHeroes.map(hero => ({ ...hero, isFavorite: true }));

const FavoriteHeroes = (): JSX.Element => {
  return (
    <Collapsable headerIcon={heartSmallImage} title="Liked">
      <SuperHeroesBoard heroes={heroes} />
    </Collapsable>
  );
};

export default FavoriteHeroes;
