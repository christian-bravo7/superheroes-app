import React from 'react';
import { render, screen } from '@testing-library/react';

import Collapsable from '@/components/Collapsable/Collapsable.component';

import heartSmallImage from '@/assets/images/small-heart.svg';
import userEvent from '@testing-library/user-event';

describe('Collapsable component', () => {
  it('should render component', () => {
    render(
      <Collapsable headerIcon={heartSmallImage} title="Categories">
        Hello world
      </Collapsable>,
    );

    expect(screen.getByTestId('collapsable')).toBeInTheDocument();
  });

  it('should render header title, image and content', () => {
    render(
      <Collapsable headerIcon="icon" title="Categories">
        Hello world
      </Collapsable>,
    );

    expect(screen.getByTestId('header-icon').getAttribute('src')).toBe('icon');
    expect(screen.getByTestId('header-title')).toHaveTextContent('Categories');
    expect(screen.getByTestId('content')).toHaveTextContent('Hello world');
  });

  it('should add new classes when toggle button is clicked', async () => {
    render(
      <Collapsable headerIcon="icon" title="Heroes">
        Hello heroes
      </Collapsable>,
    );

    await userEvent.click(screen.getByTestId('toggle-button'));

    expect(screen.getByTestId('collapsable')).toHaveClass(
      'Collapsable__Active',
    );
    expect(screen.getByTestId('toggle-button')).toHaveClass(
      'Collapsable__ToggleButtonActive',
    );
    expect(screen.getByTestId('content')).toHaveClass(
      'Collapsable__ContentActive',
    );
  });
});
