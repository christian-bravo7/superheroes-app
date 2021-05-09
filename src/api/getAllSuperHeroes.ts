import axios from 'axios';

const getAllSuperHeroes = async (): Promise<Array<SuperHero>> => {
  const { data } = await axios.get('');

  console.log(data);

  const superHeroes = data.map((data: any, index: number) => ({
    ...formatSuperHeroData(data),
    index,
  }));

  console.log(superHeroes);

  return superHeroes;
};

export interface SuperHero {
  index: number;
  image: string;
  name: string;
  realName: string;
  power: number;
  isFavorite: boolean;
}

const formatSuperHeroData = (data: any): Omit<SuperHero, 'index'> => {
  const image = data.images.md;
  const name = data.name;

  const realName = data.biography.fullName || '-';
  const power = 10;

  return {
    image,
    name,
    realName,
    power,
    isFavorite: false,
  };
};

export default getAllSuperHeroes;
