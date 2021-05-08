import React, { useState } from 'react';

import heartSmallImage from '@/assets/images/small-heart.svg';
import arrowImage from '@/assets/images/arrow-up.svg';

import classes from '@/components/Collapsable/Collapsable.module.scss';

interface propTypes {
  children: JSX.Element | string;
}

const Collapsable = ({ children }: propTypes): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const toggleCollapsable = () => {
    setIsActive(isActive => !isActive);
  };

  return (
    <div data-testid="Collapsable" className={classes.Collapsable}>
      <div className={classes.Collapsable__Header}>
        <div className={classes.Collapsable__HeaderLeftSection}>
          <div className={classes.Collapsable__HeaderIcon}>
            <img src={heartSmallImage} alt="" />
          </div>
          <span className={classes.Collapsable__HeaderTitle}>Liked</span>
        </div>
        <button
          onClick={toggleCollapsable}
          className={`${classes.Collapsable__ToggleButton} ${
            isActive ? classes.Collapsable__ToggleButtonActive : ''
          }`}
        >
          <img src={arrowImage} alt="" />
        </button>
      </div>
      <div
        className={`${classes.Collapsable__Content} ${
          isActive ? classes.Collapsable__ContentActive : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsable;
