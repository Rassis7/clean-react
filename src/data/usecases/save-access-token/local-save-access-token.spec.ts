import faker from 'faker'
import { SetStorageSpy } from '@/data/test/mock-storage'
import { LocalSaveAccessToken } from './local-save-access-token'

describe('LocalSaveAccessToken', () => {
  it('Should call SetStorage with correct value', async () => {
    const setStorageSpy = new SetStorageSpy()
    const sut = new LocalSaveAccessToken(setStorageSpy)
    const accessToken = faker.datatype.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
