export class InvalidCredentialError extends Error {
  constructor () {
    super('Credenciais inválidas')
    this.name = 'InvalidCredentialError'
  }
}
