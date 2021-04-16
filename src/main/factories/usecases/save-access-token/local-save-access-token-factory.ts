import { LocalSaveAccessToken } from '@/data/usecases/save-access-token/local-save-access-token'
import { SaveAccessToken } from '@/domain/usecases'
import { makeLocalStorageAdapter } from '@/main/factories/cache'

export const makeLocalSaveAccessToken = (): SaveAccessToken =>
  new LocalSaveAccessToken(makeLocalStorageAdapter())
