import { hostApiConfig } from '@host/shared/api/api'
import { Client } from '@shared/entities/client/types'

class ClientApi {
  async getClient(clientId: string): Promise<Client> {
    const response = await hostApiConfig.get<Client>(`clients/${clientId}`)

    return response.data
  }
}
export const clientApi = new ClientApi()
