import { useQuery } from '@tanstack/react-query'
import { clientApi } from '../api/api'
import { useEffect } from 'react'

export const useGetMe = () => {
  const { data: client, error } = useQuery({
    queryKey: [''],
    queryFn: () => clientApi.getMe(),
  })

  return { client }
}
