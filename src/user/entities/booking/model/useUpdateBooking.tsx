import { useMutation } from '@tanstack/react-query'
import { bookingApi } from '../api/api'
import { UpdateBookingDto } from '../types'
import { queryApiClient } from '@user/shared/api/queryApiClient'

export const useUpdateBooking = () => {
  const {
    mutate: update,
    data,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    onSuccess: (data) => {
      queryApiClient
        .invalidateQueries({ queryKey: ['bookings', data?.id] })
        .catch(() => console.log('could not invalidate bookings'))
    },
    mutationFn: bookingApi.updateBooking,
  })

  const updateBooking = (updateBookingDto: UpdateBookingDto) => {
    update(updateBookingDto)
  }

  return { updateBooking, data, isPending, isSuccess, error }
}
