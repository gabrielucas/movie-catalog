import { faker } from '@faker-js/faker'
import { DebugElement } from '@angular/core'
import { By } from '@angular/platform-browser'
import { Router, RouterLink, provideRouter } from '@angular/router'
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing'

import { PosterComponent } from './poster.component'

describe('Given the <app-poster /> component', () => {
  let posterComponent: PosterComponent
  let fixture: ComponentFixture<PosterComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PosterComponent, RouterLink],
      providers: [provideRouter([])],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterComponent)
    posterComponent = fixture.componentInstance
  })

  describe('When the component is mounted', () => {
    it('Then it must validate if the component was created', () => {
      expect(posterComponent).toBeTruthy()
    })

    it('Then must validate that the "movieData" property has, initially, an undefined value', () => {
      expect(posterComponent.movieData).toBeUndefined()
    })

    it('Then must validate that the "isDisplayedTitle" property has, initially, an false value', () => {
      expect(posterComponent.isDisplayedTitle).toBeFalsy()
    })

    it('Then must validate that the "hasShadowEffectApplied" property has, initially, an false value', () => {
      expect(posterComponent.hasShadowEffectApplied).toBeFalsy()
    })

    it('Then the movie title should not be displayed in the DOM', () => {
      const movieTitleElement = fixture.debugElement.query(By.css('h2'))
      expect(movieTitleElement).toBeNull()
    })

    it('Then the bottom shadow effect should not be displayed in the movie poster', () => {
      const shadowElement = fixture.debugElement.query(By.css('div.shadow'))
      expect(shadowElement).toBeNull()
    })
  })

  describe('When the "movieData" property is set', () => {
    beforeEach(() => {
      posterComponent.movieData = {
        id: faker.number.int(),
        poster_path: faker.image.url(),
        title: faker.word.sample(),
      }

      fixture.detectChanges()
    })

    describe('And sets the "isDisplayedTitle" property to TRUE value', () => {
      it('Then it must display the title of the film on the poster in the DOM', () => {
        posterComponent.isDisplayedTitle = true

        fixture.detectChanges()

        const movieTitleElement = fixture.nativeElement.querySelector(
          'h2',
        ) as HTMLTimeElement

        expect(movieTitleElement).toBeTruthy()
        expect(movieTitleElement.textContent).toBe(
          posterComponent.movieData.title,
        )
      })
    })

    describe('And sets the "hasShadowEffectApplied" property to TRUE value', () => {
      it('Then must apply the shadow effect to the bottom of the container', () => {
        posterComponent.hasShadowEffectApplied = true

        fixture.detectChanges()

        const shadowElement = fixture.nativeElement.querySelector(
          '.shadow',
        ) as HTMLDivElement

        expect(shadowElement).toBeTruthy()
        expect(shadowElement).toHaveClass('shadow')
      })
    })
  })

  describe('When testing the RouterLink', () => {
    let linkDebugElement: DebugElement
    let routerLink: RouterLink

    beforeEach(() => {
      posterComponent.movieData = {
        id: faker.number.int(),
        poster_path: faker.image.url(),
        title: faker.word.sample(),
      }

      fixture.detectChanges()

      linkDebugElement = fixture.debugElement.query(By.directive(RouterLink))
      routerLink = linkDebugElement.injector.get(RouterLink)
    })

    it('Then should be able to validate the href of the link', () => {
      expect(routerLink.href).toBe(`/movie/${posterComponent.movieData.id}`)
    })

    it('Then you should be able to click the link to view the movie details', fakeAsync(() => {
      TestBed.inject(Router).resetConfig([{ path: '**', children: [] }])
      linkDebugElement.triggerEventHandler('click', { button: 0 })
      tick()
      fixture.detectChanges()

      expect(TestBed.inject(Router).url).toBe(
        `/movie/${posterComponent.movieData.id}`,
      )
    }))
  })
})
