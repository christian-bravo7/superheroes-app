import React from 'react';

import Header from '@/components/Header/Header.component';
import SuperHerosBoard from '@/components/SuperHerosBoard/SuperHerosBoard.component';

import classes from '@/App.module.scss';

const App = (): JSX.Element => {
  return (
    <main className={classes.app}>
      <Header />
      <SuperHerosBoard />
      Hello world
    </main>
  );
};

export default App;
