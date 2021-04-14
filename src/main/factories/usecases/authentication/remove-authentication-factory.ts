import { makeApiUrl } from '@/main/factories/http/api-url-factory';
import { makeAxiosHttpClient } from '@/main/factories/http/axiosHttpClient-factory'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { Authentication } from '@/domain/usecases'

export const makeRemoteAuthentication = (): Authentication =>
  new RemoteAuthentication(makeApiUrl('/login'), makeAxiosHttpClient())
