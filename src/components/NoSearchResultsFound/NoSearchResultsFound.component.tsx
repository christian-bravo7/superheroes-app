import React from 'react';

import classes from '@/components/NoSearchResultsFound/NoSearchResultsFound.module.scss';

interface propTypes {
  text: string;
}

const NoSearchResultsFound = (): JSX.Element => {
  return (
    <div
      data-testid="no-search-results-found"
      className={classes.NoSearchResultsFound}
    >
      <p className={classes.NoSearchResultsFound__Description}>
        No results found
      </p>
    </div>
  );
};

export default NoSearchResultsFound;
