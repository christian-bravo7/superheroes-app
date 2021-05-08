import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '@/components/Header/Header.component';

describe('header component', () => {
  it('should render Logo component', () => {
    render(<Header />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
