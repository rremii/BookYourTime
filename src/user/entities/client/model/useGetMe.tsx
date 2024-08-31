import { useQuery } from '@tanstack/react-query'
import { clientApi } from '../api/api'

export const useGetMe = () => {
  const { data: client, error } = useQuery({
    queryKey: ['me'],
    queryFn: () => clientApi.getMe(),
  })

  return { client }
}
