import { useMutation } from '@tanstack/react-query'
import { bookingApi } from '../api/api'
import { CreateBookingDto } from '../types'

export const useCreateBooking = () => {
  const {
    data: booking,
    mutate: create,
    isPending,
    error,
  } = useMutation({
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
