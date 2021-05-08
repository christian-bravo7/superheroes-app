import React from 'react';
import { render, screen } from '@testing-library/react';

import Collapsable from '@/components/Collapsable/Collapsable.component';

describe('Collapsable component', () => {
  it('should render component', () => {
    render(<Collapsable />);

    expect(screen.getByTestId('Collapsable')).toBeInTheDocument();
  });
});
