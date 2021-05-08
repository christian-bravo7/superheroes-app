import React from 'react';
import { render, screen } from '@testing-library/react';

import SuperHeroCard from '@/components/SuperHeroCard/SuperHeroCard.component';

describe('SuperHeroCard component', () => {
  it('should render in document', () => {
    const superHero = {
      image: 'agent-zero.png',
      isFavorite: false,
      name: 'Agent Zero',
      power: 10,
      realName: 'Christoph Nord',
    };

    render(<SuperHeroCard {...superHero} />);

    expect(screen.getByTestId('super-hero-card')).toBeInTheDocument();
  });
});
