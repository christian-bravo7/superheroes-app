import React, { useEffect, useRef, useState } from 'react';

import { SuperHero } from '@/api/getAllSuperHeroes';

import classes from '@/components/SuperHeroCard/SuperHeroCard.module.scss';

import powerImage from '@/assets/images/fist.svg';
import heartFilledImage from '@/assets/images/medium-filled-heart.svg';
import heartImage from '@/assets/images/medium-heart.svg';

interface propTypes extends SuperHero {
  index: number;
  isNew?: boolean;
  onAddToFavorites: (index: number) => void;
  onRemoveFromFavorites: (index: number) => void;
}

const SuperHeroCard = ({
  index,
  name,
  realName,
  image,
  averagePower,
  isNew,
  isFavorite,
  onAddToFavorites,
  onRemoveFromFavorites,
}: propTypes): JSX.Element => {
  const [isAdded, setIsAdded] = useState(false);
  const superHeroCardRef = useRef<HTMLDivElement>(null);

  const favoriteButtonHandler = () => {
    if (isFavorite) {
      onRemoveFromFavorites(index);
    } else {
      onAddToFavorites(index);
    }
  };

  useEffect(() => {
    let timeoudId: NodeJS.Timeout;

    if (isNew) {
      setTimeout(() => {
        setIsAdded(true);
        superHeroCardRef?.current?.scrollIntoView(false);
      }, 500);

      timeoudId = setTimeout(() => {
        setIsAdded(false);
      }, 6000);
    }

    return () => {
      clearTimeout(timeoudId);
    };
  }, [isNew]);

  return (
    <div
      ref={superHeroCardRef}
      data-testid="super-hero-card"
      className={classes.SuperHeroCard}
    >
      <div
        className={`${classes.SuperHeroCard__Wrapper} ${
          isAdded ? classes.SuperHeroCard__WrapperIsAdded : ''
        }`}
      >
        <img
          className={classes.SuperHeroCard__BackgroundImage}
          src={image}
          loading="lazy"
        ></img>
        <div className={classes.SuperHeroCard__Content}>
          <div className={classes.SuperHeroCard__PictureWrapper}>
            <img
              className={classes.SuperHeroCard__Picture}
              src={image}
              loading="lazy"
            ></img>
            <button
              data-testid="favorite-button"
              className={classes.SuperHeroCard__FavoriteButton}
              onClick={favoriteButtonHandler}
            >
              <img src={isFavorite ? heartFilledImage : heartImage}></img>
            </button>
          </div>
          <div className={classes.SuperHeroCard__Information}>
            <span className={classes.SuperHeroCard__Name}>{name}</span>
            <span className={classes.SuperHeroCard__RealName}>
              Real Name: {realName}
            </span>
            <div className={classes.SuperHeroCard__PowerInformation}>
              <img
                className={classes.SuperHeroCard__PowerImage}
                src={powerImage}
                alt=""
              />
              <span>
                <span className={classes.SuperHeroCard__PowerPoints}>
                  {averagePower}
                </span>{' '}
                /10
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.SuperHeroCard__RecentAdded} ${
          isAdded ? classes.SuperHeroCard__RecentAddedActive : ''
        }`}
      >
        Recent added
      </div>
    </div>
  );
};

export default SuperHeroCard;
