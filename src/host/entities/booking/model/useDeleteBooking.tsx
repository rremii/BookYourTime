import { useMutation } from '@tanstack/react-query'
import { bookingApi } from '../api/api'
import { queryApiHost } from '@host/shared/api/queryApiHost'

export const useDeleteBooking = () => {
  const {
    mutate: cancel,
    data,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    onSuccess: (data) => {
      queryApiHost
        .invalidateQueries({
          queryKey: ['bookings', data.id],
        })
        .catch(() => console.log('couldnt invalidate bookings'))
    },
    mutationFn: bookingApi.deleteBooking,
  })

  const deleteBooking = (id: string) => {
    cancel(id)
  }

  return { deleteBooking, data, isPending, isSuccess, error }
}
