import { InvalidFieldError } from '@/validation/errors';
import { FieldValidation } from '@/validation/protocols';

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {
    this.field = field
  }

  validate (value: string): Error {
    return new InvalidFieldError(this.field)
  }
}
