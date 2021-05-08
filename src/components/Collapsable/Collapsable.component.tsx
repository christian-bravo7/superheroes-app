import React, { useState } from 'react';

import arrowImage from '@/assets/images/arrow-up.svg';

import classes from '@/components/Collapsable/Collapsable.module.scss';

interface propTypes {
  children: JSX.Element | string;
  headerIcon: string;
  title: string;
}

const Collapsable = ({
  children,
  headerIcon,
  title,
}: propTypes): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const toggleCollapsable = () => {
    setIsActive(isActive => !isActive);
  };

  return (
    <div
      data-testid="collapsable"
      className={`${classes.Collapsable} ${
        isActive ? classes.Collapsable__Active : ''
      }`}
    >
      <div className={classes.Collapsable__Header}>
        <div className={classes.Collapsable__HeaderLeftSection}>
          <div className={classes.Collapsable__HeaderIcon}>
            <img data-testid="header-icon" src={headerIcon} alt="" />
          </div>
          <span
            data-testid="header-title"
            className={classes.Collapsable__HeaderTitle}
          >
            {title}
          </span>
        </div>
        <button
          data-testid="toggle-button"
          onClick={toggleCollapsable}
          className={`${classes.Collapsable__ToggleButton} ${
            isActive ? classes.Collapsable__ToggleButtonActive : ''
          }`}
        >
          <img src={arrowImage} alt="" />
        </button>
      </div>
      <div
        data-testid="content"
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
