import { useQuery } from '@tanstack/react-query'
import { bookingApi } from '../api/api'

export const useGetBookings = () => {
  const { data: bookings } = useQuery({
    queryKey: ['bookings'],
    queryFn: () => bookingApi.getBookings(),
  })

  return { bookings }
}
