import { faker } from '@faker-js/faker'

import { MovieDetails } from '../../../services/@types/MovieDetails'

const indicatorsFlagForTesting: Pick<
  MovieDetails,
  'release_date' | 'runtime' | 'vote_average'
> = {
  release_date: String(faker.date.recent().getFullYear()),
  runtime: faker.number.int(),
  vote_average: faker.number.float(),
}

const voteAverageForExactTesting = {
  bad: 5,
  regular: 6,
  excellent: 8,
}

export { indicatorsFlagForTesting, voteAverageForExactTesting }
