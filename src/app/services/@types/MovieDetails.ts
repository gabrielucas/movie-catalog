import { MovieData } from './MovieData'

export type MovieDetails = {
  budget: number
  genres: Array<{
    id: number
    name: string
  }>
  production_companies: Array<{
    id: number
    logo_path: string
    name: string
    origin_country: string
  }>
  production_countries: Array<{
    iso_3166_1: string
    name: string
  }>
  revenue: number
  runtime: number
  status: string
} & Omit<MovieData, 'genre_ids'>
