import faker from 'faker/locale/cz'
import { MinLengthValidation } from './min-length-validation';
import { InvalidFieldError } from '@/validation/errors';

const makeSut = (field = faker.database.column()): MinLengthValidation =>
  new MinLengthValidation(field, 5)

describe('MinLengthValidation', () => {
  it('Should return error if value is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new InvalidFieldError(field))
  });

  it('Should return false if value is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  });
});
