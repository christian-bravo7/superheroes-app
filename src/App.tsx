import React, { useEffect, useMemo, useState } from 'react';

import Header from '@/components/Header/Header.component';
import FavoriteHeroes from '@/components/FavoriteHeroes/FavoriteHeroes.component';
import AllSuperHeroes from '@/components/AllSuperHeroes/AllSuperHeroes.component';

import getAllSuperHeroes, { SuperHero } from '@/api/getAllSuperHeroes';

import useLocalStorage from '@/hooks/useLocalStorage';

import classes from '@/App.module.scss';

const setHeroesAsFavoritesWithIndices = (
  heroes: SuperHero[],
  indices: number[],
) => {
  const heroesCopy = [...heroes];
  for (const index of indices) {
    heroesCopy[index].isFavorite = true;
  }
  return heroesCopy;
};

const App = (): JSX.Element => {
  const [heroes, setHeroes] = useState<SuperHero[]>([]);
  const [favoriteHeroes, setFavoriteHeroes] = useState<SuperHero[]>([]);
  const [nonFavoriteHeroes, setNonFavoriteHeroes] = useState<SuperHero[]>([]);
  const [indicesOfFavoriteHeroes, setIndicesOfFavoriteHeroes] = useLocalStorage(
    'favorite-heroes',
    [],
  );

  useEffect(() => {
    const fetchSuperHeroes = async () => {
      const heroes = await getAllSuperHeroes();
      const transformedHeroes = setHeroesAsFavoritesWithIndices(
        heroes,
        indicesOfFavoriteHeroes,
      );

      setHeroes(transformedHeroes);
    };

    fetchSuperHeroes();
  }, []);

  useEffect(() => {
    setNonFavoriteHeroes(
      heroes.filter(({ isFavorite }: SuperHero) => !isFavorite),
    );
    setFavoriteHeroes(heroes.filter(({ isFavorite }: SuperHero) => isFavorite));
  }, [heroes]);

  const saveIndexInLocalStorage = (index: number) => {
    const copyIndices = [...indicesOfFavoriteHeroes];
    copyIndices.push(index);
    setIndicesOfFavoriteHeroes(copyIndices);
  };

  const deleteIndexInLocalStorage = (index: number) => {
    const copyIndices = [...indicesOfFavoriteHeroes];
    const indexToRemove = copyIndices.indexOf(index);
    copyIndices.splice(indexToRemove, 1);

    setIndicesOfFavoriteHeroes(copyIndices);
  };

  const addToFavoritesHandler = (index: number) => {
    saveIndexInLocalStorage(index);
    setHeroes(heroesState => {
      const copyHeroes = [...heroesState];
      copyHeroes[index].isFavorite = true;
      copyHeroes[index].isNew = true;

      return copyHeroes;
    });
  };

  const removeFromFavoritesHandler = (index: number) => {
    deleteIndexInLocalStorage(index);
    setHeroes(heroesState => {
      const copyHeroes = [...heroesState];
      copyHeroes[index].isFavorite = false;

      return copyHeroes;
    });
  };

  const removeNewFlag = (index: number) => {
    setTimeout(() => {
      setHeroes(heroesState => {
        const copyHeroes = [...heroesState];
        copyHeroes[index].isFavorite = true;
        copyHeroes[index].isNew = true;

        return copyHeroes;
      });
    }, 2000);
  };

  const AllSuperHeroesMemoized = useMemo(
    () => (
      <AllSuperHeroes
        heroes={nonFavoriteHeroes}
        onAddToFavorites={addToFavoritesHandler}
      />
    ),
    [nonFavoriteHeroes],
  );

  const FavoriteHeroesMemoized = useMemo(
    () => (
      <FavoriteHeroes
        heroes={favoriteHeroes}
        onRemoveFromFavorites={removeFromFavoritesHandler}
      />
    ),
    [favoriteHeroes],
  );

  const HeaderMemoized = useMemo(() => <Header />, []);

  return (
    <main className={classes.app}>
      {HeaderMemoized}
      {FavoriteHeroesMemoized}
      {AllSuperHeroesMemoized}
    </main>
  );
};

export default App;
