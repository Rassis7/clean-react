import axios from 'axios'
import { HttpPostParams } from '@/data/protocols/http/http-post-client';

export class AxiosHttpClient {
  async post ({ url, body }: HttpPostParams<any>): Promise<void> {
    await axios.post(url, body)
  }
}
