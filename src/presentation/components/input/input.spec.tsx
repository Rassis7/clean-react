import React from 'react'
import faker from 'faker'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import Input from './input'
import Context from '@/presentation/contexts/form-context'

const makeSut = (fieldName: string): RenderResult => render(
  <Context.Provider value={{ state: {} }}>
    <Input name={fieldName}/>
  </Context.Provider>
)

describe('Input component', () => {
  it('Should begin with readOnly', () => {
    const name = faker.database.column()
    const { getByTestId } = makeSut(name)
    const input = getByTestId(name) as HTMLInputElement
    expect(input.readOnly).toBeTruthy()
  })
  it('Should remove readOnly on focus', () => {
    const name = faker.database.column()
    const { getByTestId } = makeSut(name)
    const input = getByTestId(name) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBeFalsy()
  })
})
