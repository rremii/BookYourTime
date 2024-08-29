import { useMutation } from '@tanstack/react-query'
import { bookingApi } from '../api/api'
import { CancelBookingDto } from '../types'

export const useCancelBooking = () => {
  const {
    mutate: cancel,
    data,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: bookingApi.cancelBooking,
  })

  const cancelBooking = (cancelBookingDto: CancelBookingDto) => {
    cancel(cancelBookingDto)
  }

  return { cancelBooking, data, isPending, isSuccess, error }
}
