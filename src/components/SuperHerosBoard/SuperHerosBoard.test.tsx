import React from 'react';
import { render, screen } from '@testing-library/react';

import SuperHerosBoard from '@/components/SuperHerosBoard/SuperHerosBoard.component';

describe('SuperHerosBoard component', () => {
  it('should render in document', () => {
    render(<SuperHerosBoard heroes={[1, 2, 3, 4]} />);

    expect(screen.getByTestId('SuperHerosBoard')).toBeInTheDocument();
  });
});
