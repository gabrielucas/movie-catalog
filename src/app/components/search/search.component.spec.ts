import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SearchComponent } from './search.component'
import { faker } from '@faker-js/faker'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

describe('Given the <app-search /> component', () => {
  let searchComponent: SearchComponent
  let fixture: ComponentFixture<SearchComponent>
  let inputElement: HTMLInputElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SearchComponent)
    searchComponent = fixture.componentInstance
    inputElement = fixture.nativeElement.querySelector('input')
  })

  describe('When the component is mounted', () => {
    it('Then it must validate that the element was created in the DOM', () => {
      expect(searchComponent).toBeTruthy()
    })

    it('Then must validate that the "searchText" property has, initially, an undefined value', () => {
      expect(searchComponent.searchText).toBeUndefined()
    })

    it('Then check if the button was created in the DOM', () => {
      const buttonElement = fixture.nativeElement.querySelector(
        'button',
      ) as HTMLButtonElement

      expect(buttonElement).toBeTruthy()
      expect(buttonElement.textContent).toEqual('Buscar')
    })

    it('Then the input value must be an empty string', () => {
      expect(inputElement).toBeTruthy()
      expect(inputElement.value).toBe('')
    })
  })

  describe('When testing onSearch event', () => {
    let emittedSearchText: string | undefined
    const mockSearchText = faker.word.words()

    beforeEach(() => {
      searchComponent.searchText = mockSearchText

      searchComponent.searchEvent
        .pipe()
        .subscribe((searchText: string) => (emittedSearchText = searchText))
    })

    describe('When the user clicks the button', () => {
      it('Then check if the onSearch event was raised', () => {
        const buttonDebugElement: DebugElement = fixture.debugElement.query(
          By.css('button'),
        )

        buttonDebugElement.triggerEventHandler('click')
        expect(emittedSearchText).toBe(mockSearchText)
      })
    })

    describe('When the user presses the enter key', () => {
      it('Then check if the onSearch event was raised', () => {
        const inputDebugElement: DebugElement = fixture.debugElement.query(
          By.css('input'),
        )

        inputDebugElement.triggerEventHandler('keyup.enter')

        expect(emittedSearchText).toBe(mockSearchText)
      })
    })
  })
})
