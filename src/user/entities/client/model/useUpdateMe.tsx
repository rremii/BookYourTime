import { useMutation } from '@tanstack/react-query'
import { clientApi } from '../api/api'
import { UpdateClientDto } from '../types'

export const useUpdateMe = () => {
  const {
    data: client,
    mutate: mutateMe,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: clientApi.updateMe,
  })

  const updateHost = (clientDto: UpdateClientDto) => {
    mutateMe(clientDto)
  }

  return { client, updateHost, isPending, isSuccess, error }
}
