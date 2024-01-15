import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { TMDBService } from '../tmdb.service'
import { mockMovieDetailsResponse, mockMovieDataResponse } from './constants'
import { faker } from '@faker-js/faker'

describe('Given TMDB service testing', () => {
  let tmdbService: TMDBService
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TMDBService],
    })

    tmdbService = TestBed.inject(TMDBService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  describe('When execute the #getPopularMovies() method', () => {
    it('Then should can test the request/response HTTP', () => {
      const mockPageNumber = faker.number.int()

      tmdbService.getPopularMovies(mockPageNumber).subscribe(response => {
        expect(response).toEqual(mockMovieDataResponse)
      })

      const url = httpTestingController.expectOne(
        `/movie/popular?page=${mockPageNumber}`,
      )

      expect(url.request.method).toBe('GET')

      url.flush(mockMovieDataResponse)
    })
  })

  describe('When execute the #getMoviesByTitle() method', () => {
    it('Then should can test the request/response HTTP', () => {
      const mockMovieTitle = faker.music.songName()
      const mockPageNumber = faker.number.int()

      tmdbService
        .getMoviesByTitle(mockMovieTitle, mockPageNumber)
        .subscribe(response => {
          expect(response).toEqual(mockMovieDataResponse)
        })

      const url = httpTestingController.expectOne(
        `/search/movie?include_adult=false&query=${mockMovieTitle}&page=${mockPageNumber}`,
      )

      expect(url.request.method).toBe('GET')

      url.flush(mockMovieDataResponse)
    })
  })

  describe('When execute the #getMovieDetailsById() method', () => {
    it('Then should can test the request/response HTTP', () => {
      const mockMovieId = faker.number.int()

      tmdbService.getMovieDetailsById(mockMovieId).subscribe(response => {
        expect(response).toEqual(mockMovieDetailsResponse)
      })

      const url = httpTestingController.expectOne(`/movie/${mockMovieId}`)

      expect(url.request.method).toBe('GET')

      url.flush(mockMovieDetailsResponse)
    })
  })
})
