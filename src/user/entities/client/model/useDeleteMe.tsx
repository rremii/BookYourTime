import { useMutation } from '@tanstack/react-query'
import { clientApi } from '../api/api'

export const useDeleteMe = () => {
  const {
    data: host,
    mutate: mutateMe,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: clientApi.deleteMe,
  })

  const deleteMe = () => {
    mutateMe()
  }

  return { deleteMe, host, isPending, isSuccess, error }
}
