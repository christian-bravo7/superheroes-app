import React from 'react';
import { render, screen } from '@testing-library/react';

import SuperHeroCard from '@/components/SuperHeroCard/SuperHeroCard.component';
import userEvent from '@testing-library/user-event';

describe('SuperHeroCard component', () => {
  it('should render in document', () => {
    const superHero = {
      image: 'agent-zero.png',
      isFavorite: false,
      name: 'Agent Zero',
      power: 10,
      realName: 'Christoph Nord',
    };

    const addToFavorites = jest.fn();
    const removeFromFavorites = jest.fn();

    render(
      <SuperHeroCard
        {...superHero}
        onAddToFavorites={addToFavorites}
        onRemoveFromFavorites={removeFromFavorites}
      />,
    );

    expect(screen.getByTestId('super-hero-card')).toBeInTheDocument();
  });

  it('should call addToFavorites handler when super hero is not favorite', async () => {
    const superHero = {
      image: 'agent-zero.png',
      isFavorite: false,
      name: 'Agent Zero',
      power: 10,
      realName: 'Christoph Nord',
    };

    const addToFavorites = jest.fn();
    const removeFromFavorites = jest.fn();

    render(
      <SuperHeroCard
        {...superHero}
        onAddToFavorites={addToFavorites}
        onRemoveFromFavorites={removeFromFavorites}
      />,
    );

    await userEvent.click(screen.getByTestId('favorite-button'));

    expect(addToFavorites).toHaveBeenCalledTimes(1);
    expect(removeFromFavorites).toHaveBeenCalledTimes(0);
  });

  it('should call removeFromFavorites handler when super hero is favorite', async () => {
    const superHero = {
      image: 'agent-zero.png',
      isFavorite: true,
      name: 'Agent Zero',
      power: 10,
      realName: 'Christoph Nord',
    };

    const addToFavorites = jest.fn();
    const removeFromFavorites = jest.fn();

    render(
      <SuperHeroCard
        {...superHero}
        onAddToFavorites={addToFavorites}
        onRemoveFromFavorites={removeFromFavorites}
      />,
    );

    await userEvent.click(screen.getByTestId('favorite-button'));

    expect(removeFromFavorites).toHaveBeenCalledTimes(1);
    expect(addToFavorites).toHaveBeenCalledTimes(0);
  });
});
