interface IData {
  nameRu: string | null;
  ratingKinopoisk: number | null;
  ratingImdb: number | null;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
}

const data: IData[] = [
  {
    nameRu: 'Космос',
    ratingKinopoisk: 9.3,
    ratingImdb: null,
    year: 2019,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1309325.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1309325.jpg',
  },
  {
    nameRu: 'Планета Земля 2',
    ratingKinopoisk: 9.2,
    ratingImdb: 9.5,
    year: 2016,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1007472.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1007472.jpg',
  },
  {
    nameRu: 'Друзья',
    ratingKinopoisk: 9.2,
    ratingImdb: 9,
    year: 1994,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/77044.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/77044.jpg',
  },
  {
    nameRu: 'Жил-был пёс',
    ratingKinopoisk: 9.2,
    ratingImdb: 8.4,
    year: 1982,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/45319.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/45319.jpg',
  },
  {
    nameRu: 'Гамильтон',
    ratingKinopoisk: 9.2,
    ratingImdb: null,
    year: 2015,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1003587.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1003587.jpg',
  },
  {
    nameRu: 'Счастливые люди',
    ratingKinopoisk: 9.2,
    ratingImdb: 8.8,
    year: 2008,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/674243.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/674243.jpg',
  },
  {
    nameRu: 'Побег из Шоушенка',
    ratingKinopoisk: 9.1,
    ratingImdb: 9.3,
    year: 1994,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/326.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/326.jpg',
  },
  {
    nameRu: 'Зеленая миля',
    ratingKinopoisk: 9.1,
    ratingImdb: 8.6,
    year: 1999,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/435.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/435.jpg',
  },
  {
    nameRu: 'Малышарики',
    ratingKinopoisk: 9.1,
    ratingImdb: 7.3,
    year: 2015,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/988056.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/988056.jpg',
  },
  {
    nameRu: 'Говорящий Том и друзья',
    ratingKinopoisk: 9.1,
    ratingImdb: 6.2,
    year: 2014,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1189947.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1189947.jpg',
  },
  {
    nameRu: 'Бойцовский клуб',
    ratingKinopoisk: 8.6,
    ratingImdb: 8.8,
    year: 1999,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/361.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/361.jpg',
  },
  {
    nameRu: 'Властелин колец: Возвращение короля',
    ratingKinopoisk: 8.6,
    ratingImdb: 8.9,
    year: 2003,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/3498.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/3498.jpg',
  },
  {
    nameRu: 'Клаус',
    ratingKinopoisk: 8.6,
    ratingImdb: 8.2,
    year: 2019,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/957887.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/957887.jpg',
  },
  {
    nameRu: 'Гамлет',
    ratingKinopoisk: 8.6,
    ratingImdb: 8.1,
    year: 2009,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/474867.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/474867.jpg',
  },
  {
    nameRu: 'Трамвай «Желание»',
    ratingKinopoisk: 8.6,
    ratingImdb: null,
    year: 2014,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/843290.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/843290.jpg',
  },
  {
    nameRu: 'Фландрийский пёс',
    ratingKinopoisk: 8.6,
    ratingImdb: 7.7,
    year: 1997,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/81914.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/81914.jpg',
  },
];

export { data };
