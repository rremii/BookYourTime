import { useQuery } from '@tanstack/react-query'
import { hostApi } from '../api/api'

export const useGetHosts = () => {
  const { data: hosts } = useQuery({
    queryKey: [''],
    queryFn: hostApi.getHosts,
  })

  return { hosts }
}
