import { useMutation } from '@tanstack/react-query'
import { bookingApi } from '../api/api'
import { queryApiClient } from '@user/shared/api/queryApiClient'

export const useDeleteBooking = () => {
  const {
    mutate: cancel,
    data,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    onSuccess: () => {
      queryApiClient
        .invalidateQueries({ queryKey: ['bookings'] })
        .catch(() => console.log('could not invalidate bookings'))
    },
    mutationFn: bookingApi.deleteBooking,
  })

  const deleteBooking = (id: string) => {
    cancel(id)
  }

  return { deleteBooking, data, isPending, isSuccess, error }
}
