import React from 'react';
import { render, screen } from '@testing-library/react';

import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';

describe('SuperHeroesBoard component', () => {
  it('should render in document', () => {
    render(<SuperHeroesBoard heroes={[1, 2, 3, 4]} />);

    expect(screen.getByTestId('SuperHeroesBoard')).toBeInTheDocument();
  });
});
