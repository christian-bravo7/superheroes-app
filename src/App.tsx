import React, { useEffect, useState } from 'react';

import Header from '@/components/Header/Header.component';
import SuperHeroesBoard from '@/components/SuperHeroesBoard/SuperHeroesBoard.component';
import FavoriteHeroes from '@/components/FavoriteHeroes/FavoriteHeroes.component';

import getAllSuperHeroes, { SuperHero } from '@/api/getAllSuperHeroes';

import classes from '@/App.module.scss';
import useLocalStorage from '@/hooks/useLocalStorage';
import AllSuperHeroes from './components/AllSuperHeroes/AllSuperHeroes.component';

const getElementsWithIndices: <T>(
  items: Array<T>,
  indices: Array<number>,
) => Array<T> = (items, indices) => {
  const newElements = items.filter((_, index) => indices.includes(index));

  return newElements;
};

const removeElementsWithIndices: <T>(
  items: Array<T | null>,
  indices: Array<number>,
) => Array<T | null> = (items, indices) => {
  const newArray = [...items];

  for (const index of indices) {
    newArray.splice(index, 1, null);
  }

  return newArray;
};

const App = (): JSX.Element => {
  const [heroes, setHeroes] = useState<Array<SuperHero | null>>([]);
  const [favoriteHeroes, setFavoriteHeroes] = useState<Array<SuperHero | null>>(
    [],
  );
  const [favoriteHeroesStored, setFavoriteHeroesStored] = useLocalStorage(
    'favoriteHeroesStored',
    [],
  );

  useEffect(() => {
    const fetchSuperHeroes = async () => {
      const heroes = await getAllSuperHeroes();

      const nonFavoriteHeroes = removeElementsWithIndices(
        heroes,
        favoriteHeroesStored,
      );
      const favoriteHeroes = getElementsWithIndices(
        heroes,
        favoriteHeroesStored,
      );

      setHeroes(nonFavoriteHeroes);
      setFavoriteHeroes(favoriteHeroes);
    };

    fetchSuperHeroes();
  }, []);

  const saveHeroeToLocalStorage = (index: number) => {
    const copyIndices = [...favoriteHeroesStored];
    copyIndices.push(index);
    setFavoriteHeroesStored(copyIndices);
  };

  const removeFromFavoritesHandler = (index: number) => {
    setHeroes(heroesState => {
      const copyHeroes = [...heroesState];
      copyHeroes.push(favoriteHeroes[index] as SuperHero);
      return copyHeroes;
    });

    setFavoriteHeroes(heroesState => {
      const copyHeroes = [...heroesState];
      copyHeroes.splice(index, 1, null);

      return copyHeroes;
    });

    saveHeroeToLocalStorage(index);
  };

  const addToFavoritesHandler = (index: number) => {
    setFavoriteHeroes(heroesState => {
      const copyHeroes = [...heroesState];
      copyHeroes.push(heroes[index] as SuperHero);
      return copyHeroes;
    });

    setHeroes(heroesState => {
      const copyHeroes = [...heroesState];
      copyHeroes.splice(index, 1, null);
      return copyHeroes;
    });

    saveHeroeToLocalStorage(index);
  };

  return (
    <main className={classes.app}>
      <Header />
      <FavoriteHeroes
        heroes={favoriteHeroes}
        onRemoveFromFavorites={removeFromFavoritesHandler}
      />
      <AllSuperHeroes
        heroes={heroes}
        onAddToFavorites={addToFavoritesHandler}
      />
      Hello world
    </main>
  );
};

export default App;
