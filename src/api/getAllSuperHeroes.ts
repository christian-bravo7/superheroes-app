import { Dictionary } from '@/types';
import axios from 'axios';

const getAllSuperHeroes = async (): Promise<SuperHero[]> => {
  const { data } = await axios.get('');

  const superHeroes: SuperHero[] = data.map(
    (data: Dictionary, index: number) => ({
      ...formatSuperHeroData(data),
      index,
    }),
  );

  return superHeroes;
};

export interface SuperHero {
  index: number;
  isNew?: boolean;
  image: string;
  name: string;
  realName: string;
  averagePower: number;
  isFavorite: boolean;
}

const formatSuperHeroData = (data: Dictionary): Omit<SuperHero, 'index'> => {
  const image = data.images.md;
  const name = data.name;

  const realName = data.biography.fullName || '-';

  const {
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat,
  } = data.powerstats;

  const averagePower = (
    (intelligence + strength + speed + durability + power + combat) /
    6 /
    10
  ).toFixed(0);

  return {
    image,
    name,
    realName,
    averagePower: Number(averagePower),
    isFavorite: false,
  };
};

export default getAllSuperHeroes;
