import { ValidationComposite } from '@/validation/validators';
import { ValidationBuilder } from '@/validation/validators/buider/validation-builder';

export const makeLoginValidation = (): ValidationComposite => ValidationComposite.build([
  ...ValidationBuilder.field('email').email().required().build(),
  ...ValidationBuilder.field('password').min(5).required().build()
])
