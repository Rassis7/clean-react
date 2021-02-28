import faker from 'faker'
import { InvalidFieldError } from '@/validation/errors';
import { EmailValidation } from './email-validation';

const makeSut = (word = faker.database.column()): EmailValidation => new EmailValidation(word)

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate(field)
    expect(error).toEqual(new InvalidFieldError(field))
  });

  test('Should return falsy if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  });
});
