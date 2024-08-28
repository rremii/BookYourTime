import { useMutation } from '@tanstack/react-query'
import { hostApi } from '../api/api'
import { UpdateHostDto } from '../types'

export const useUpdateMe = () => {
  const {
    data: host,
    mutate: mutateHost,
    isPending,
    isSuccess,
    error,
  } = useMutation<UpdateHostDto, Error, UpdateHostDto>({
    mutationFn: hostApi.updateMe,
  })

  const updateMe = (hostDto: UpdateHostDto) => {
    mutateHost(hostDto)
  }

  return { host, updateMe, isPending, isSuccess, error }
}
