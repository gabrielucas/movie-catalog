import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { DetailsComponent } from './pages/details/details.component'

describe('Given the <app-root>', () => {
  let fixture: ComponentFixture<AppComponent>

  beforeEach(() => {
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [AppComponent, HomeComponent, DetailsComponent],
      }).compileComponents()
    })

    fixture = TestBed.createComponent(AppComponent)
  })

  describe('When the component is mounted', () => {
    it('Then it must validate if the component was created', () => {
      const appComponent = fixture.componentInstance
      expect(appComponent).toBeTruthy()
    })
  })
})
