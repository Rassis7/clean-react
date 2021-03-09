import React from 'react'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remove-authentication-factory'
import { Login } from '@/presentation/pages'
import { makeLoginValidation } from './login-vallidation-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}
