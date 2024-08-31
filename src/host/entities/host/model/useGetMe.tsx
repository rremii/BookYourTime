import { useQuery } from '@tanstack/react-query'
import { hostApi } from '../api/api'

export const useGetMe = () => {
  const { data: host } = useQuery({
    queryKey: ['me'],
    queryFn: () => hostApi.getMe(),
  })

  return { host }
}
