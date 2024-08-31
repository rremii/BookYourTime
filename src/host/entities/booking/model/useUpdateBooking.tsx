import { useMutation } from '@tanstack/react-query'
import { bookingApi } from '../api/api'
import { UpdateBookingDto } from '../types'
import { queryApiHost } from '@host/shared/api/queryApiHost'

export const useUpdateBooking = () => {
  const {
    mutate: update,
    data,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    onSuccess: (data) => {
      queryApiHost
        .invalidateQueries({ queryKey: ['bookings', data.id] })
        .catch(() => console.log('could not invalidate bookings'))
    },
    mutationFn: bookingApi.updateBooking,
  })

  const updateBooking = (updateBookingDto: UpdateBookingDto) => {
    update(updateBookingDto)
  }

  return { updateBooking, data, isPending, isSuccess, error }
}
