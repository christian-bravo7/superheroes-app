import React from 'react';
import { render, screen } from '@testing-library/react';

import SuperHeroCard from '@/components/SuperHeroCard/SuperHeroCard.component';

describe('SuperHeroCard component', () => {
  it('should render in document', () => {
    render(<SuperHeroCard />);

    expect(screen.getByTestId('SuperHeroCard')).toBeInTheDocument();
  });
});
