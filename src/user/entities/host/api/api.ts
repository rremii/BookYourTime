import {Host} from '@shared/entities/host/types'
import {clientApiConfig} from '@user/shared/api/api'
import {HostFilters} from '../type'
import {getQueryFromHostFilters} from '../utils/getQueryFromHostFilters'

class HostApi {
  async getHosts(filters: HostFilters): Promise<Host[]> {
    const queryFilters = getQueryFromHostFilters(filters)

    const response = await clientApiConfig.get<Host[]>('hosts?' + queryFilters)
    return response.data
  }

  async getHost(id: string): Promise<Host> {
    const response = await clientApiConfig.get<Host>(`hosts/${id}`)
    return response.data
  }
}
export const hostApi = new HostApi()
