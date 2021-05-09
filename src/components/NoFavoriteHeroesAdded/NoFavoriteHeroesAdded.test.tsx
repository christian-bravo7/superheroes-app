import React from 'react';
import { render, screen } from '@testing-library/react';

import NoFavoriteHeroesAdded from '@/components/NoFavoriteHeroesAdded/NoFavoriteHeroesAdded.component';

describe('NoFavoriteHeroesAdded component', () => {
  it('should render in document', () => {
    render(<NoFavoriteHeroesAdded />);

    expect(screen.getByTestId('no-favorite-heroes-added')).toBeInTheDocument();
  });
});
