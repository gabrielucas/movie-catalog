import { of } from 'rxjs'
import { faker } from '@faker-js/faker'
import { provideRouter } from '@angular/router'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { HomeComponent } from './home.component'

import { TMDBService } from '../../services/tmdb-service/tmdb.service'
import {
  mockMovieDataByTitleResponse,
  mockMovieDataResponse,
} from '../../services/tmdb-service/tests/constants'

describe('Given the <app-home /> component', () => {
  let homeComponent: HomeComponent
  let fixture: ComponentFixture<HomeComponent>
  let mockTmdbService: jasmine.SpyObj<TMDBService>

  beforeEach(async () => {
    mockTmdbService = jasmine.createSpyObj('TMDBService', [
      'getPopularMovies',
      'getMoviesByTitle',
      'getMovieDetailsById',
    ])

    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientTestingModule],
      providers: [
        { provide: TMDBService, useValue: mockTmdbService },
        provideRouter([]),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(HomeComponent)
    homeComponent = fixture.componentInstance
  })

  afterEach(() => {
    fixture.destroy()
  })

  describe('When the component is mounted', () => {
    it('Then it must validate that the element was created in the DOM', () => {
      expect(homeComponent).toBeTruthy()
    })

    it('Then must validate that the "movies" property is, initially, an empty list', () => {
      expect(homeComponent.movies).toEqual([])
    })

    it('Then it must validate that the page title is being displayed', () => {
      const titleElement = fixture.nativeElement.querySelector(
        'h1',
      ) as HTMLTitleElement

      expect(titleElement).toBeTruthy()
      expect(titleElement.textContent).toContain('Filmes populares')
    })
  })

  describe('When #ngOnInit() is executed', () => {
    it('Then must get the data from the server and store it in the "movies" property', () => {
      mockTmdbService.getPopularMovies.and.returnValue(
        of(mockMovieDataResponse),
      )

      fixture.detectChanges()

      expect(homeComponent.movies.length).toBe(3)
      expect(homeComponent.movies).toEqual(mockMovieDataResponse.results)
    })

    it('Then should display a list of movie posters', async () => {
      mockTmdbService.getPopularMovies.and.returnValue(
        of(mockMovieDataResponse),
      )

      fixture.detectChanges()

      await fixture.whenStable()
      const posterList = await fixture.getDeferBlocks()

      expect(posterList.length).toBe(mockMovieDataResponse.results.length)
    })
  })

  describe('When #onSearchMovieByTitle() is executed', () => {
    it('Then must get the data from the server and store new data in the "movies" property', () => {
      mockTmdbService.getMoviesByTitle.and.returnValue(
        of(mockMovieDataByTitleResponse),
      )

      const mockMovieTitle = faker.music.songName()

      homeComponent.onSearchMovieByTitle(mockMovieTitle)

      expect(homeComponent.movies.length).toBe(2)
      expect(homeComponent.movies).toEqual(mockMovieDataByTitleResponse.results)
    })
  })
})
