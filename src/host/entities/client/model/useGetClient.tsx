import { useQuery } from '@tanstack/react-query'
import { clientApi } from '../api/api'

export const useGetClient = (id?: string) => {
  const { data: client, isLoading } = useQuery({
    queryKey: [''],
    queryFn: () => clientApi.getClient(id),
    enabled: !!id,
  })

  return { client, isPending: isLoading }
}
