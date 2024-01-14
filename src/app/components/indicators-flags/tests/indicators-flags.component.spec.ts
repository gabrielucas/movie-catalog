import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { IndicatorsFlagsComponent } from '../indicators-flags.component'
import {
  indicatorsFlagForTesting,
  voteAverageForExactTesting,
} from './constants'

describe('Given the <IndicatorsFlags /> component', () => {
  let indicatorsFlagComponent: IndicatorsFlagsComponent
  let fixture: ComponentFixture<IndicatorsFlagsComponent>

  beforeEach(() => {
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [IndicatorsFlagsComponent],
      }).compileComponents()
    })

    fixture = TestBed.createComponent(IndicatorsFlagsComponent)
    indicatorsFlagComponent = fixture.componentInstance
  })

  describe('When the component is mounted', () => {
    it('Then it must validate that the element was created in the DOM', () => {
      expect(indicatorsFlagComponent).toBeTruthy()
    })

    it('Then must validate that the "movieFlags" property has, initially, an undefined value', () => {
      expect(indicatorsFlagComponent.movieFlags).toBeUndefined()
    })

    it('Then must validate that the "colorByRelevance" property has, initially, an undefined value', () => {
      expect(indicatorsFlagComponent.colorByRelevance).toBeUndefined()
    })
  })

  describe('When the "movieFlags" property is set', () => {
    beforeEach(() => {
      indicatorsFlagComponent.movieFlags = indicatorsFlagForTesting
      fixture.detectChanges()
    })

    it('Then must validate that the "movieFlags" property has an defined value', () => {
      expect(indicatorsFlagComponent.movieFlags).toBeDefined()
    })

    it('Then must validate that the "colorByRelevance" property has an defined value', () => {
      expect(indicatorsFlagComponent.colorByRelevance).toBeDefined()
    })

    it('Then validate that the average vote is being displayed on the screen', () => {
      const voteAverageSpan = fixture.nativeElement.querySelectorAll(
        'span',
      )[0] as HTMLSpanElement

      expect(voteAverageSpan.textContent).toContain(
        indicatorsFlagForTesting.vote_average.toFixed(2),
      )
    })

    it('Then validate that the release date is being displayed on the screen', () => {
      const releaseDateSpan = fixture.nativeElement.querySelectorAll(
        'span',
      )[1] as HTMLSpanElement

      expect(releaseDateSpan.textContent).toContain(
        indicatorsFlagForTesting.release_date,
      )
    })

    it('Then validate that the runtime is being displayed on the screen', () => {
      const runtimeSpan = fixture.nativeElement.querySelectorAll(
        'span',
      )[2] as HTMLSpanElement

      expect(runtimeSpan.textContent).toEqual(
        `${indicatorsFlagForTesting.runtime} min`,
      )
    })
  })

  describe('When testing the color of average vote span displayed in the DOM', () => {
    it('should render RED color if the value is below 6', () => {
      indicatorsFlagComponent.movieFlags = {
        ...indicatorsFlagForTesting,
        vote_average: voteAverageForExactTesting.bad,
      }

      fixture.detectChanges()

      const voteAverageSpan = fixture.nativeElement.querySelectorAll(
        'span',
      )[0] as HTMLSpanElement
      const computedStyleOfVoteAverage =
        window.getComputedStyle(voteAverageSpan)

      expect(computedStyleOfVoteAverage.color).toBe('rgb(231, 76, 60)')
    })

    it('should render YELLOW color if the value is between 6 and 7', () => {
      indicatorsFlagComponent.movieFlags = {
        ...indicatorsFlagForTesting,
        vote_average: voteAverageForExactTesting.regular,
      }

      fixture.detectChanges()

      const voteAverageSpan = fixture.nativeElement.querySelectorAll(
        'span',
      )[0] as HTMLSpanElement
      const computedStyleOfVoteAverage =
        window.getComputedStyle(voteAverageSpan)

      expect(computedStyleOfVoteAverage.color).toBe('rgb(241, 196, 15)')
    })

    it('should render GREEN color if the value is greater than 7', () => {
      indicatorsFlagComponent.movieFlags = {
        ...indicatorsFlagForTesting,
        vote_average: voteAverageForExactTesting.excellent,
      }

      fixture.detectChanges()

      const voteAverageSpan = fixture.nativeElement.querySelectorAll(
        'span',
      )[0] as HTMLSpanElement
      const computedStyleOfVoteAverage =
        window.getComputedStyle(voteAverageSpan)

      expect(computedStyleOfVoteAverage.color).toBe('rgb(46, 204, 113)')
    })
  })
})
