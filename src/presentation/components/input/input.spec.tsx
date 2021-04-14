import React from 'react';
import faker from 'faker';
import { render } from '@testing-library/react';
import Input from './input';
import Context from '@/presentation/contexts/form-context'

describe('Input component', () => {
  it('Should begin with readOnly', () => {
    const name = faker.random.word()
    const { getByTestId } = render(
      <Context.Provider value={{ state: {} }}>
        <Input name={name}/>
      </Context.Provider>
    )
    const input = getByTestId(name) as HTMLInputElement
    expect(input.readOnly).toBeTruthy()
  });
});
