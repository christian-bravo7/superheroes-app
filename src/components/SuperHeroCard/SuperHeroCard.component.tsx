import React from 'react';

import classes from '@/components/SuperHeroCard/SuperHeroCard.module.scss';

import powerImage from '@/assets/images/fist.svg';
import heartFilledImage from '@/assets/images/medium-filled-heart.svg';

const SuperHeroCard = (): JSX.Element => {
  return (
    <div
      data-testid="SuperHeroCard"
      className={classes.SuperHeroCard}
      style={{
        backgroundImage: `url("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg")`,
      }}
    >
      <div className={classes.SuperHeroCard__Content}>
        <div className={classes.SuperHeroCard__PictureWrapper}>
          <img
            className={classes.SuperHeroCard__Picture}
            src="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg"
          ></img>
          <button className={classes.SuperHeroCard__LikeButton}>
            <img src={heartFilledImage}></img>
          </button>
        </div>
        <div className={classes.SuperHeroCard__Information}>
          <span className={classes.SuperHeroCard__Name}>Batgirl</span>
          <span>Real Name: Barbara Gordon</span>
          <div className={classes.SuperHeroCard__PowerInformation}>
            <img
              className={classes.SuperHeroCard__PowerImage}
              src={powerImage}
              alt=""
            />
            <span>
              <span className={classes.SuperHeroCard__PowerPoints}>10</span> /10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperHeroCard;
