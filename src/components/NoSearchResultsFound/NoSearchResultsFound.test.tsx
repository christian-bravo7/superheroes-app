import React from 'react';
import { render, screen } from '@testing-library/react';

import NoSearchResultsFound from '@/components/NoSearchResultsFound/NoSearchResultsFound.component';

describe('NoSearchResultsFound component', () => {
  it('should render in document', () => {
    render(<NoSearchResultsFound />);

    expect(screen.getByTestId('no-search-results-found')).toBeInTheDocument();
  });
});
