import { AuthenticationParams } from './../usecases/authentication';
import faker from 'faker'

// factory
export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
