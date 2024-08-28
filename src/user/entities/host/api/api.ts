import { Host } from '@shared/entities/host/types'
import { clientApiConfig } from '@user/shared/api/api'

class HostApi {
  async getHosts(): Promise<Host[]> {
    const response = await clientApiConfig.get<Host[]>('hosts')
    return response.data
  }

  async getHost(id: string): Promise<Host> {
    const response = await clientApiConfig.get<Host>(`hosts/${id}`)
    return response.data
  }
}
export const hostApi = new HostApi()
