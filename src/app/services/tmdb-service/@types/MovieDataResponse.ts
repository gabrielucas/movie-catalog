import { MovieData } from './MovieData'

export type MovieDataResponse = {
  page: number
  results: MovieData[]
  total_pages: number
  total_results: number
}
