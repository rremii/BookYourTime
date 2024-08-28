import { Host } from '@shared/entities/host/types'
import { UpdateHostDto } from '../types'
import { hostApiConfig } from '@host/shared/api/api'

class HostApi {
  async getMe(): Promise<Host> {
    const response = await hostApiConfig.get<Host>(`hosts/me`)
    return response.data
  }

  async updateMe(updateHostDto: UpdateHostDto): Promise<Host> {
    const response = await hostApiConfig.patch<Host>(`hosts/me`, updateHostDto)
    return response.data
  }

  async deleteMe(): Promise<Host> {
    const response = await hostApiConfig.delete<Host>(`hosts/me`)
    return response.data
  }
}
export const hostApi = new HostApi()
