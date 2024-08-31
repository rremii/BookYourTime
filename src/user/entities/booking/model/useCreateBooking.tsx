import { useMutation } from '@tanstack/react-query'
import { bookingApi } from '../api/api'
import { CreateBookingDto } from '../types'
import { queryApiClient } from '@user/shared/api/queryApiClient'

export const useCreateBooking = () => {
  const {
    data: booking,
    mutate: create,
    isPending,
    error,
  } = useMutation({
    onSuccess: () => {
      queryApiClient
        .invalidateQueries({ queryKey: ['bookings'] })
        .catch(() => console.log('could not invalidate bookings'))
    },
    mutationFn: bookingApi.createBooking,
  })

  const createBooking = (createBookingDto: CreateBookingDto) => {
    create(createBookingDto)
  }

  return {
    booking,
    createBooking,
    isPending,
    error,
  }
}
