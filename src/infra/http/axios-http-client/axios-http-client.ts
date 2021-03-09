import axios, { AxiosResponse } from 'axios'
import { HttpPostParams, HttpPostClient, HttpResponse } from '@/data/protocols/http';

// Adapter
export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post ({ url, body }: HttpPostParams<any>): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>;
    try {
      httpResponse = await axios.post(url, body)
    } catch (error) {
      httpResponse = error.response
    }
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
