import React from 'react';
import faker from 'faker';
import { render, RenderResult } from '@testing-library/react';
import Input from './input';
import Context from '@/presentation/contexts/form-context'

const makeSut = (name: string): RenderResult => render(
  <Context.Provider value={{ state: {} }}>
    <Input name={name}/>
  </Context.Provider>
)

describe('Input component', () => {
  it('Should begin with readOnly', () => {
    const name = faker.random.word()
    const { getByTestId } = makeSut(name)
    const input = getByTestId(name) as HTMLInputElement
    expect(input.readOnly).toBeTruthy()
  });
});
