import { AuthenticationParams } from '@/domain/usecases';
import { AccountModel } from '../models';
import faker from 'faker'

// factory
export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})