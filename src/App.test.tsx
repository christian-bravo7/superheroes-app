import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '@/App';

it('renders learn react link', () => {
  render(<App />);

  expect(screen.getAllByTestId('super-heroes-loader')).toHaveLength(2);
});
