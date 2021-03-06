import faker from 'faker'
import { SetStorageMock } from '@/data/test/mock-storage'
import { LocalSaveAccessToken } from './local-save-access-token'

type SutTypes = {
  sut: LocalSaveAccessToken
  setStorageMock: SetStorageMock
}

const makeSut = (): SutTypes => {
  const setStorageMock = new SetStorageMock()
  const sut = new LocalSaveAccessToken(setStorageMock)
  return { setStorageMock, sut }
}

describe('LocalSaveAccessToken', () => {
  it('Should call SetStorage with correct value', async () => {
    const { setStorageMock, sut } = makeSut()
    const accessToken = faker.datatype.uuid()
    await sut.save(accessToken)
    expect(setStorageMock.key).toBe('accessToken')
    expect(setStorageMock.value).toBe(accessToken)
  })
  it('Should throw if SetStorage throws', async () => {
    const { setStorageMock, sut } = makeSut()
    jest.spyOn(setStorageMock, 'set').mockRejectedValueOnce(new Error())
    // N quero a promise resolvida, por isso faço sem await
    const promise = sut.save(faker.datatype.uuid())
    // aqui já quero o throw, por isso uso o await
    await expect(promise).rejects.toThrow(new Error())
  })
})
