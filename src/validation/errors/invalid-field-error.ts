export class InvalidFieldError extends Error {
  constructor (private readonly field: string) {
    super(`O ${field} é inválido`)
    this.name = 'InvalidFieldError'
  }
}
