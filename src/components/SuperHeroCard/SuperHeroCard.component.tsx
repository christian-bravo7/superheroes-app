import React from 'react';

import { SuperHero } from '@/api/getAllSuperHeroes';

import classes from '@/components/SuperHeroCard/SuperHeroCard.module.scss';

import powerImage from '@/assets/images/fist.svg';
import heartFilledImage from '@/assets/images/medium-filled-heart.svg';
import heartImage from '@/assets/images/medium-heart.svg';

interface propTypes extends SuperHero {
  index: number;
  onAddToFavorites: (index: number) => void;
  onRemoveFromFavorites: (index: number) => void;
}

const SuperHeroCard = ({
  index,
  name,
  realName,
  image,
  power,
  isFavorite,
  onAddToFavorites,
  onRemoveFromFavorites,
}: propTypes): JSX.Element => {
  const favoriteButtonHandler = () => {
    if (isFavorite) {
      onRemoveFromFavorites(index);
    } else {
      onAddToFavorites(index);
    }
  };

  return (
    <div
      data-testid="super-hero-card"
      className={classes.SuperHeroCard}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={classes.SuperHeroCard__Content}>
        <div className={classes.SuperHeroCard__PictureWrapper}>
          <img className={classes.SuperHeroCard__Picture} src={image}></img>
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
                {index}
              </span>{' '}
              /10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperHeroCard;
