import React from 'react';
import { render, screen } from '@testing-library/react';

import AllSuperHeroes from '@/components/AllSuperHeroes/AllSuperHeroes.component';

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

describe('AllSuperHeroes component', () => {
  it('should render in document', () => {
    const addToFavoritesHandler = jest.fn();

    render(
      <AllSuperHeroes
        heroes={superHeroes}
        onAddToFavorites={addToFavoritesHandler}
      />,
    );

    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByTestId('super-hero-board')).toBeInTheDocument();
  });
});
