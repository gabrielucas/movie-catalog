import { ComponentFixture, TestBed } from '@angular/core/testing'

import { IndicatorsFlagsComponent } from './indicators-flags.component'

describe('IndicatorsFlagsComponent', () => {
  let component: IndicatorsFlagsComponent
  let fixture: ComponentFixture<IndicatorsFlagsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicatorsFlagsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(IndicatorsFlagsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
