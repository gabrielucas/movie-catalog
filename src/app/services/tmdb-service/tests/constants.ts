import { faker } from '@faker-js/faker'

import { MovieDetails } from '../../@types/MovieDetails'
import { MovieDataResponse } from '../../@types/MovieDataResponse'

const mockMovieDataResponse: MovieDataResponse = {
  page: faker.number.int(),
  results: [],
  total_pages: faker.number.int(),
  total_results: faker.number.int(),
}

const mockMovieDetailsResponse: MovieDetails = {
  adult: faker.datatype.boolean(),
  backdrop_path: faker.image.url(),
  budget: faker.number.float(),
  genres: [
    { id: faker.number.int(), name: faker.music.genre() },
    { id: faker.number.int(), name: faker.music.genre() },
  ],
  id: faker.number.int(),
  original_language: faker.word.sample(),
  original_title: faker.music.songName(),
  overview: faker.word.words(),
  popularity: faker.number.int(),
  poster_path: faker.image.url(),
  production_companies: [
    {
      id: faker.number.int(),
      name: faker.company.name(),
      logo_path: faker.image.url(),
      origin_country: faker.location.country(),
    },
    {
      id: faker.number.int(),
      name: faker.company.name(),
      logo_path: faker.image.url(),
      origin_country: faker.location.country(),
    },
  ],
  production_countries: [
    {
      iso_3166_1: faker.string.uuid(),
      name: faker.location.country(),
    },
    {
      iso_3166_1: faker.string.uuid(),
      name: faker.location.country(),
    },
  ],
  release_date: String(faker.date.recent().getFullYear()),
  revenue: faker.number.int(),
  runtime: faker.number.int(),
  status: faker.word.sample(),
  title: faker.music.songName(),
  video: faker.datatype.boolean(),
  vote_average: faker.number.int(),
  vote_count: faker.number.int(),
}

export { mockMovieDataResponse, mockMovieDetailsResponse }
