import { useQuery } from '@tanstack/react-query'
import { hostApi } from '../api/api'

export const useGetHost = (hostId: string) => {
  const { data: host } = useQuery({
    queryKey: ['hosts', hostId],
    queryFn: () => hostApi.getHost(hostId),
  })

  return { host }
}
