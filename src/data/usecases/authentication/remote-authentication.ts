import { AccountModel } from '@/domain/models/account-model';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import { InvalidCredentialError } from '@/domain/errors/invalid-credentials-error';
import { AuthenticationParams } from '@/domain/usecases/authentication';
import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { HttpStatusCode } from '@/data/protocols/http/http-response';

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unathorized: throw new InvalidCredentialError()
      default: throw new UnexpectedError()
    }
  }
}
