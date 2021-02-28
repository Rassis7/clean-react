import faker from 'faker'
import { InvalidFieldError } from '@/validation/errors';
import { EmailValidation } from './email-validation';

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const field = faker.random.word()
    const sut = new EmailValidation(field)
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError(field))
  });

  test('Should return falsy if email is valid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  });
});
