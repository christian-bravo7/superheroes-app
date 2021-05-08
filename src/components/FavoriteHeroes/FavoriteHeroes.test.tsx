import React from 'react';
import { render, screen } from '@testing-library/react';

import FavoriteHeroes from '@/components/FavoriteHeroes/FavoriteHeroes.component';

const superHeroes = [
  {
    index: 0,
    image: 'agent-zero.png',
    isFavorite: false,
    name: 'Agent Zero',
    power: 10,
    realName: 'Christoph Nord',
  },
];

describe('FavoriteHeroes component', () => {
  it('should render in document', () => {
    const addtoFavoritesHandler = jest.fn();
    const removeFromFavoritesHandler = jest.fn();

    render(
      <FavoriteHeroes
        heroes={superHeroes}
        onAddToFavorites={addtoFavoritesHandler}
        onRemoveFromFavorites={removeFromFavoritesHandler}
      />,
    );

    expect(screen.getByTestId('collapsable')).toBeInTheDocument();
    expect(screen.getByTestId('super-hero-board')).toBeInTheDocument();
  });
});
