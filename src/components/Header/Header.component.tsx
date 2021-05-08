import React from 'react';

import Logo from '@/components/Logo/Logo.component';

import classes from '@/components/header/header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <Logo />
    </header>
  );
};

export default Header;
