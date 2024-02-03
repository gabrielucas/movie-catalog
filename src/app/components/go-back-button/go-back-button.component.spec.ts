import { Spectator, SpyObject, createComponentFactory } from '@ngneat/spectator'
import { By } from '@angular/platform-browser'

import { GoBackButtonComponent } from './go-back-button.component'
import { Router } from '@angular/router'

describe('Given the <app-go-back-button /> component', () => {
  let spectator: Spectator<GoBackButtonComponent>
  let serviceRouter: SpyObject<Router>

  const createComponent = createComponentFactory({
    component: GoBackButtonComponent,
    imports: [],
    detectChanges: true,
  })

  beforeEach(() => {
    spectator = createComponent()
    serviceRouter = spectator.inject(Router)
  })

  describe('When to render the component', () => {
    it('Then it must validate if the component was rendered', () => {
      expect(spectator.component).toBeTruthy()
    })

    it('Then validate that the button was created', () => {
      const button = spectator.debugElement.query(By.css('button'))
      expect(button).toBeDefined()
    })
  })

  describe('When to execute the goBackToHomePage() function', () => {
    it('Then check if the navigate method was called', () => {
      const navigateSpy = spyOn(serviceRouter, 'navigate')

      spectator.component.goBackToHomePage()

      expect(navigateSpy).toHaveBeenCalledTimes(1)
      expect(navigateSpy).toHaveBeenCalledWith([''])
    })
  })
})
