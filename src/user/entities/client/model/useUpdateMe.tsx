import { useMutation } from '@tanstack/react-query'
import { clientApi } from '../api/api'
import { UpdateClientDto } from '../types'
import { queryApiClient } from '@user/shared/api/queryApiClient'

export const useUpdateMe = () => {
  const {
    data: client,
    mutate: mutateMe,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    onSuccess() {
      queryApiClient
        .invalidateQueries({
          queryKey: ['me'],
        })
        .catch(() => console.log('couldnt invalidate me'))
    },
    mutationFn: clientApi.updateMe,
  })

  const updateMe = (clientDto: UpdateClientDto) => {
    mutateMe(clientDto)
  }

  return { client, updateMe, isPending, isSuccess, error }
}
