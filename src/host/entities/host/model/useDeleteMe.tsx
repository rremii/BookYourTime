import { useMutation } from '@tanstack/react-query'
import { hostApi } from '../api/api'

export const useDeleteMe = () => {
  const {
    data: host,
    mutate: mutateMe,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: hostApi.deleteMe,
  })

  const deleteMe = () => {
    mutateMe()
  }

  return { deleteMe, host, isPending, isSuccess, error }
}
