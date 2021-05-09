/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useRef } from 'react';
import { AutoSizer, List } from 'react-virtualized';

import SuperHeroCard from '@/components/SuperHeroCard/SuperHeroCard.component';
import classes from '@/components/SuperHeroesBoard/SuperHeroesBoard.module.scss';

import { SuperHero } from '@/api/getAllSuperHeroes';

interface propTypes {
  heroes: SuperHero[];
  onAddToFavorites?: (index: number) => void;
  onRemoveFromFavorites?: (index: number) => void;
}

const SuperHeroesBoard = ({
  heroes,
  onAddToFavorites = () => {},
  onRemoveFromFavorites = () => {},
}: propTypes): JSX.Element => {
  const totalItems = heroes.length;
  const rowHeight = 192;

  const rowRenderer = ({ index, key, style, parent }: any) => {
    const items: any = [];

    const { width } = parent.props;
    const itemsPerRow = Math.floor(width / 285);
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, totalItems);

    for (let i = fromIndex; i < toIndex; i++) {
      const hero = heroes[i];

      items.push(
        <div key={i} className={classes.SuperHeroesBoard__Item}>
          <SuperHeroCard
            {...hero}
            onAddToFavorites={onAddToFavorites}
            onRemoveFromFavorites={onRemoveFromFavorites}
          />
        </div>,
      );
    }

    return (
      <div className={classes.SuperHeroesBoard__Row} key={key} style={style}>
        {items}
      </div>
    );
  };

  return (
    <div
      className={classes.SuperHeroesBoard__Container}
      data-testid="super-hero-board"
    >
      <AutoSizer>
        {({ height, width }: any) => {
          const itemsPerRow = Math.floor(width / 285);
          const rowCount = Math.ceil(totalItems / itemsPerRow);

          return (
            <List
              className="List"
              width={width}
              height={height}
              rowCount={rowCount}
              rowHeight={rowHeight}
              rowRenderer={rowRenderer}
            />
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default SuperHeroesBoard;
