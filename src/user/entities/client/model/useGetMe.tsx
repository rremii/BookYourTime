import { useQuery } from '@tanstack/react-query'
import { clientApi } from '../api/api'

export const useGetMe = () => {
  const { data: client } = useQuery({
    queryKey: [''],
    queryFn: () => clientApi.getMe(),
  })

  return { client }
}
