import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { PosterComponent } from './poster.component'

describe('Given the <Poster /> component', () => {
  let posterComponent: PosterComponent
  let fixture: ComponentFixture<PosterComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PosterComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterComponent)
    posterComponent = fixture.componentInstance
    fixture.detectChanges()
  })

  it('Then it must validate if the component was created', () => {
    expect(posterComponent).toBeTruthy()
  })
})
