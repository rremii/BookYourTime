import { Client } from '@shared/entities/client/types'
import { clientApiConfig } from '@user/shared/api/api'
import { UpdateClientDto } from '../types'

class ClientApi {
  async getMe(): Promise<Client> {
    const response = await clientApiConfig.get<Client>(`clients/me`)
    return response.data
  }

  async updateMe(updateClientDto: UpdateClientDto): Promise<Client> {
    const response = await clientApiConfig.patch<Client>(
      `clients/me`,
      updateClientDto,
    )
    return response.data
  }

  async deleteMe(): Promise<Client> {
    const response = await clientApiConfig.delete<Client>(`clients/me`)
    return response.data
  }
}
export const clientApi = new ClientApi()
