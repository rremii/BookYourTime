import { useMutation } from '@tanstack/react-query'
import { bookingApi } from '../api/api'
import { UpdateBookingDto } from '../types'

export const useUpdateBooking = () => {
  const {
    mutate: update,
    data,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: bookingApi.updateBooking,
  })

  const updateBooking = (updateBookingDto: UpdateBookingDto) => {
    update(updateBookingDto)
  }

  return { updateBooking, data, isPending, isSuccess, error }
}
