import { ValidationComposite } from '@/validation/validators';
import { ValidationBuilder } from '@/validation/validators/buider/validation-builder';
import { makeLoginValidation } from './login-validation-factory';

describe('LoginValidationFactory', () => {
  it('Should make ValidationComposite with correct validations', () => {
    const composite = makeLoginValidation()
    expect(composite).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('email').email().required().build(),
      ...ValidationBuilder.field('password').min(5).required().build()
    ]))
  });
});
