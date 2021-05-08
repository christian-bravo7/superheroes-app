import React from 'react';
import { render, screen } from '@testing-library/react';

import SuperHerosBoard from '@/components/SuperHerosBoard/SuperHerosBoard.component';

describe('SuperHerosBoard component', () => {
  it('should render in document', () => {
    render(<SuperHerosBoard />);

    expect(screen.getByTestId('SuperHerosBoard')).toBeInTheDocument();
  });
});
