import { faker } from '@faker-js/faker'

import { MovieDetails } from '../../../services/@types/MovieDetails'

const additionalInformationForTesting: Pick<
  MovieDetails,
  'genres' | 'production_companies' | 'production_countries'
> = {
  genres: [
    { id: faker.number.int(), name: faker.music.genre() },
    { id: faker.number.int(), name: faker.music.genre() },
  ],
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
}

export { additionalInformationForTesting }
