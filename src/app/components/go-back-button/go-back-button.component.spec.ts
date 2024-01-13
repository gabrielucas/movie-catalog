import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router'

import { GoBackButtonComponent } from './go-back-button.component'
import { By } from '@angular/platform-browser'

describe('Given the <GoBackButton /> component', () => {
  let goBackComponent: GoBackButtonComponent
  let fixture: ComponentFixture<GoBackButtonComponent>
  let router: Router

  beforeEach(() => {
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [GoBackButtonComponent, RouterTestingModule],
      }).compileComponents()
    })

    fixture = TestBed.createComponent(GoBackButtonComponent)
    goBackComponent = fixture.componentInstance
    router = TestBed.inject(Router)
    fixture.detectChanges()
  })

  describe('When to render the component', () => {
    it('Then it must validate if the component was rendered', () => {
      expect(goBackComponent).toBeTruthy()
    })

    it('Then validate that the button was created', () => {
      const button = fixture.debugElement.query(By.css('button'))

      expect(button).toBeDefined()
    })
  })

  describe('When to execute the goBackToHomePage() function', () => {
    it('Then check if the navigate method was called', () => {
      const navigateSpy = spyOn(router, 'navigate')

      goBackComponent.goBackToHomePage()

      expect(navigateSpy).toHaveBeenCalledTimes(1)
      expect(navigateSpy).toHaveBeenCalledWith([''])
    })
  })
})
