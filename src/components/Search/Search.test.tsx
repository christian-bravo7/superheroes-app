import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '@/components/Search/Search.component';

describe('Search component', () => {
  it('should render Search', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
