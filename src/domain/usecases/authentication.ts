import { AccountModel } from '../models/account-model'

type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth (param: AuthenticationParams): Promise<AccountModel>
}
