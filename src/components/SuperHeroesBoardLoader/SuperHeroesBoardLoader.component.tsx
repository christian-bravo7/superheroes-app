import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import classes from '@/components/SuperHeroesBoardLoader/SuperHeroesBoardLoader.module.scss';

const SuperHeroesBoardLoader = (): JSX.Element => {
  return (
    <div data-testid="super-heroes-loader">
      <SkeletonTheme color="#261851" highlightColor="#3f317a">
        <div className={classes.SuperHeroesBoardLoader__Header}>
          <Skeleton
            width={285}
            height={30}
            className={classes.SuperHeroesBoardLoader__Title}
          />
        </div>
        <div className={classes.SuperHeroesBoardLoader}>
          {[...Array(8)].map((_, index) => (
            <Skeleton
              key={index}
              width={285}
              height={174}
              className={classes.SuperHeroesBoardLoader__Card}
            />
          ))}
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SuperHeroesBoardLoader;
