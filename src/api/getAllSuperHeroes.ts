import axios from 'axios';

const getAllSuperHeroes = async (): Promise<Array<SuperHero>> => {
  const { data } = await axios.get('');

  console.log(data);

  const superHeroes = data.map((data: any) => formatSuperHeroData(data));

  console.log(superHeroes);

  return superHeroes;
};

export interface SuperHero {
  image: string;
  name: string;
  realName: string;
  power: number;
}

const formatSuperHeroData = (data: any): SuperHero => {
  const image = data.images.md;
  const name = data.name;

  const realName = data.biography.fullName || '-';
  const power = 10;

  return {
    image,
    name,
    realName,
    power,
  };
};

export default getAllSuperHeroes;
