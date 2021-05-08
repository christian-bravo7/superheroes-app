import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '@/App';

it('renders learn react link', () => {
  render(<App />);

  const helloWorldText = screen.getByText(/Hello world/i);

  expect(helloWorldText).toBeInTheDocument();
});
