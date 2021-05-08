import React from 'react';
import { render, screen } from '@testing-library/react';

import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';

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

describe('SuperHeroesBoard component', () => {
  it('should render in document', () => {
    const addtoFavoritesHandler = jest.fn();
    const removeFromFavoritesHandler = jest.fn();

    render(
      <SuperHeroesBoard
        heroes={superHeroes}
        onAddToFavorites={addtoFavoritesHandler}
        onRemoveFromFavorites={removeFromFavoritesHandler}
      />,
    );

    expect(screen.getByTestId('super-hero-board')).toBeInTheDocument();
  });
});
