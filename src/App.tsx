import React from 'react';

import Header from '@/components/Header/Header.component';

import classes from '@/App.module.scss';

const App = (): JSX.Element => {
  return (
    <main className={classes.app}>
      <Header />
      Hello world
    </main>
  );
};

export default App;
