import { NgStyle } from '@angular/common'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { SpinnerComponent } from './spinner.component'

describe('Given the <Spinner /> component', () => {
  let spinnerComponent: SpinnerComponent
  let fixture: ComponentFixture<SpinnerComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SpinnerComponent, NgStyle],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent)
    spinnerComponent = fixture.componentInstance
  })

  describe('When to render the component', () => {
    it('Then it must validate if the component was rendered', () => {
      expect(fixture.nativeElement).toBeTruthy()
    })
  })

  describe('When the spinner color is not changed', () => {
    it("Then the 'color' property should be given its default value", () => {
      expect(spinnerComponent.color).toBe('#1e3497')
    })
  })

  describe('When the spinner color is changed', () => {
    it("Then the 'color' property must have its value changed", () => {
      spinnerComponent.color = 'red'
      fixture.detectChanges()
      expect(spinnerComponent.color).toBe('red')
    })
  })
})
