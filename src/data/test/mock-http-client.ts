import { HttpResponse, HttpStatusCode } from './../protocols/http/http-response';
import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent
  }

  async post ({ url, body }: HttpPostParams): Promise<HttpResponse> {
    this.url = url
    this.body = body
    return Promise.resolve(this.response)
  }
}
