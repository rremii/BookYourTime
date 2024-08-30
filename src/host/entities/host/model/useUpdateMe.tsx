import { useMutation } from '@tanstack/react-query'
import { hostApi } from '../api/api'
import { UpdateHostDto } from '../types'
import { queryApiHost } from '@host/shared/api/queryApiHost'

export const useUpdateMe = () => {
  const {
    data: host,
    mutate: mutateHost,
    isPending,
    isSuccess,
    error,
  } = useMutation<UpdateHostDto, Error, UpdateHostDto>({
    onSuccess: () => {
      queryApiHost
        .invalidateQueries({ queryKey: ['me'] })
        .catch(() => console.log('could not invalidate me'))
    },
    mutationFn: hostApi.updateMe,
  })

  const updateMe = (hostDto: UpdateHostDto) => {
    mutateHost(hostDto)
  }

  return { host, updateMe, isPending, isSuccess, error }
}
