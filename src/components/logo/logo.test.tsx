import React from 'react';
import { render, screen } from '@testing-library/react';

import Logo from '@/components/logo/logo.component';

describe('Logo component', () => {
  it('should render logo img', () => {
    render(<Logo />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
