import React from 'react';
import { render, screen } from '@testing-library/react';

import FavoriteHeroes from '@/components/FavoriteHeroes/FavoriteHeroes.component';

const superHeroes = [
  {
    index: 0,
    image: 'agent-zero.png',
    isFavorite: false,
    name: 'Agent Zero',
    averagePower: 10,
    realName: 'Christoph Nord',
  },
];

describe('FavoriteHeroes component', () => {
  it('should render in document', () => {
    const removeFromFavoritesHandler = jest.fn();

    render(
      <FavoriteHeroes
        heroes={superHeroes}
        onRemoveFromFavorites={removeFromFavoritesHandler}
      />,
    );

    expect(screen.getByTestId('collapsable')).toBeInTheDocument();
    expect(screen.getByTestId('favorite-super-hero-board')).toBeInTheDocument();
  });
});
