import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '@/App';

it('renders learn react link', () => {
  render(<App />);

  expect(screen.getAllByTestId('super-hero-board')).toHaveLength(1);
  expect(screen.getByTestId('no-favorite-heroes-added')).toBeInTheDocument();
});
