import { HttpPostParams } from '@/data/protocols/http/http-post-client';
import axios from 'axios'
import faker from 'faker'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and verb', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url)
  })

  // test('Should call axios with correct body', async () => {
  //   const sut = makeSut()
  //   await sut.post({ url: faker.internet.url() })
  //   expect(mockedAxios.post).toHaveBeenCalledWith(url)
  // })
})
