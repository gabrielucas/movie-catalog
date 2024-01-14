import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { AdditionalInformationComponent } from '../additional-information.component'
import { additionalInformationForTesting } from './constants'

describe('Given the <AdditionalInformation /> component', () => {
  let additionalInfComponent: AdditionalInformationComponent
  let fixture: ComponentFixture<AdditionalInformationComponent>

  beforeEach(() => {
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [AdditionalInformationComponent],
      }).compileComponents()
    })

    fixture = TestBed.createComponent(AdditionalInformationComponent)
    additionalInfComponent = fixture.componentInstance
  })

  describe('When the component is mounted', () => {
    it('Then it must validate that the element was created in the DOM', () => {
      expect(fixture.nativeElement).toBeDefined()
    })

    it('Then must validate that the "movieDetails" property has, initially, an undefined value', () => {
      expect(additionalInfComponent.movieDetails).toBeUndefined()
    })
  })

  describe('When the "modeDetails" property is set', () => {
    beforeEach(() => {
      additionalInfComponent.movieDetails = additionalInformationForTesting

      fixture.detectChanges()
    })

    it('Then must validate that the "movieDetails" property has an defined value', () => {
      expect(additionalInfComponent.movieDetails).toBeDefined()
    })

    it('Then validate that the genres are being displayed', () => {
      const genreBlock = fixture.nativeElement.querySelectorAll(
        'div:not(div.additional-information)',
      )[0] as HTMLDivElement

      expect(genreBlock.textContent).toContain('Gêneros')
      expect(genreBlock.textContent).toContain(
        additionalInfComponent.movieDetails.genres[0].name,
      )
      expect(genreBlock.textContent).toContain(
        additionalInfComponent.movieDetails.genres[1].name,
      )
    })

    it('Then validate that the production companies are being displayed', () => {
      const productionCompaniesBlock = fixture.nativeElement.querySelectorAll(
        'div:not(div.additional-information)',
      )[1] as HTMLDivElement

      expect(productionCompaniesBlock.textContent).toContain('Produtoras')
      expect(productionCompaniesBlock.textContent).toContain(
        additionalInfComponent.movieDetails.production_companies[0]?.name,
      )
      expect(productionCompaniesBlock.textContent).toContain(
        additionalInfComponent.movieDetails.production_companies[1]?.name,
      )
    })

    it('Then validate that the production countries are being displayed', () => {
      const productionCountriesBlock = fixture.nativeElement.querySelectorAll(
        'div:not(div.additional-information)',
      )[2] as HTMLDivElement

      expect(productionCountriesBlock.textContent).toContain('Países')
      expect(productionCountriesBlock.textContent).toContain(
        additionalInfComponent.movieDetails.production_countries[0]?.name,
      )
      expect(productionCountriesBlock.textContent).toContain(
        additionalInfComponent.movieDetails.production_countries[1]?.name,
      )
    })
  })
})
