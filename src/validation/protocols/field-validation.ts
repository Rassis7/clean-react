export interface FieldValidation {
  field: string
  validade(value: string): Error
}
