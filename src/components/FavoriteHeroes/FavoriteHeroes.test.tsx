import React from 'react';
import { render, screen } from '@testing-library/react';

import FavoriteHeroes from '@/components/FavoriteHeroes/FavoriteHeroes.component';

describe('FavoriteHeroes component', () => {
  it('should render in document', () => {
    render(<FavoriteHeroes />);

    expect(screen.getByTestId('collapsable')).toBeInTheDocument();
    expect(screen.getByTestId('SuperHeroesBoard')).toBeInTheDocument();
  });
});
