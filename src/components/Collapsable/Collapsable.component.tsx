import React from 'react';

import heartSmallImage from '@/assets/images/small-heart.svg';
import arrowImage from '@/assets/images/arrow-up.svg';

import classes from '@/components/Collapsable/Collapsable.module.scss';

const Collapsable = (): JSX.Element => {
  return (
    <div data-testid="Collapsable" className={classes.Collapsable}>
      <div className={classes.Collapsable__Header}>
        <div className={classes.Collapsable__HeaderLeftSection}>
          <div className={classes.Collapsable__HeaderIcon}>
            <img src={heartSmallImage} alt="" />
          </div>
          <span className={classes.Collapsable__HeaderTitle}>Liked</span>
        </div>
        <button className={classes.Collapsable__ToggleButton}>
          <img src={arrowImage} alt="" />
        </button>
      </div>
      <div className={classes.Collapsable}>Content</div>
    </div>
  );
};

export default Collapsable;
