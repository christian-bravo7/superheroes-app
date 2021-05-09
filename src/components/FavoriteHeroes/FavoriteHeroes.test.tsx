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
        isLoading={false}
        heroes={superHeroes}
        onRemoveFromFavorites={removeFromFavoritesHandler}
      />,
    );

    expect(screen.getByTestId('collapsable')).toBeInTheDocument();
    expect(screen.getByTestId('favorite-super-hero-board')).toBeInTheDocument();
  });

  it('should render loader component', () => {
    const removeFromFavoritesHandler = jest.fn();

    render(
      <FavoriteHeroes
        isLoading={true}
        heroes={superHeroes}
        onRemoveFromFavorites={removeFromFavoritesHandler}
      />,
    );

    expect(screen.queryByTestId('collapsable')).toBeNull();
    expect(screen.queryByTestId('favorite-super-hero-board')).toBeNull();
    expect(screen.getByTestId('super-heroes-loader')).toBeInTheDocument();
  });

  it('should render no heroes added component', () => {
    const removeFromFavoritesHandler = jest.fn();

    render(
      <FavoriteHeroes
        isLoading={false}
        heroes={[]}
        onRemoveFromFavorites={removeFromFavoritesHandler}
      />,
    );

    expect(screen.queryByTestId('collapsable')).toBeInTheDocument();
    expect(screen.queryByTestId('favorite-super-hero-board')).toBeNull();
    expect(screen.queryByTestId('super-heroes-loader')).toBeNull();
    expect(screen.getByTestId('no-favorite-heroes-added')).toBeInTheDocument();
  });
});
