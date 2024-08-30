import { useQuery } from '@tanstack/react-query'
import { hostApi } from '../api/api'
import { HostFilters } from '../type'

export const useGetHosts = (filters: HostFilters) => {
  const { data: hosts } = useQuery({
    queryKey: [''],
    queryFn: () => hostApi.getHosts(filters),
  })

  return { hosts }
}
