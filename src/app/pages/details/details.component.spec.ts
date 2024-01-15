import { of } from 'rxjs'
import { faker } from '@faker-js/faker'
import { ActivatedRoute } from '@angular/router'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { DetailsComponent } from './details.component'
import { TMDBService } from '../../services/tmdb-service/tmdb.service'
import { mockMovieDetailsResponse } from '../../services/tmdb-service/tests/constants'

describe('Given <app-details /> component', () => {
  let detailsComponent: DetailsComponent
  let fixture: ComponentFixture<DetailsComponent>
  let mockTmdbService: jasmine.SpyObj<TMDBService>

  const mockeParamId = faker.number.int()

  const mockActivatedRoute = {
    snapshot: {
      params: {
        id: mockeParamId,
      },
    },
  }

  beforeEach(async () => {
    mockTmdbService = jasmine.createSpyObj('TMDBService', [
      'getMovieDetailsById',
    ])

    await TestBed.configureTestingModule({
      imports: [DetailsComponent, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: TMDBService, useValue: mockTmdbService },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(DetailsComponent)
    detailsComponent = fixture.componentInstance
  })

  describe('When the component is mounted', () => {
    it('Then it must validate that the element was created in the DOM', () => {
      expect(detailsComponent).toBeTruthy()
    })

    it('Then must validate that the "movieDetails" property is, initially, undefined', () => {
      expect(detailsComponent.movieDetails).toBeUndefined()
    })
  })

  describe('When #ngOnInit() is executed', () => {
    beforeEach(() => {
      mockTmdbService.getMovieDetailsById.and.returnValue(
        of(mockMovieDetailsResponse),
      )

      fixture.detectChanges()
    })

    it('Then must get the data from the server and store it in the "movieDetails" property', () => {
      expect(detailsComponent.movieDetails).toEqual({
        ...mockMovieDetailsResponse,
        release_date: String(
          new Date(mockMovieDetailsResponse.release_date).getFullYear(),
        ),
      })
    })

    it('Then it should display the page title', () => {
      const titleElement = fixture.nativeElement.querySelector(
        'h1',
      ) as HTMLTimeElement

      expect(titleElement).toBeTruthy()
      expect(titleElement.textContent).toEqual(mockMovieDetailsResponse.title)
    })

    it('Then it should display the synopsis', () => {
      const synopsisElement = fixture.nativeElement.querySelector(
        '.synopsis',
      ) as HTMLDivElement

      expect(synopsisElement).toBeTruthy()
      expect(synopsisElement.textContent).toContain(
        mockMovieDetailsResponse.overview,
      )
    })
  })
})
