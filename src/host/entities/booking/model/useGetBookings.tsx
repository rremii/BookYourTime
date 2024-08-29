import { useQuery } from '@tanstack/react-query'
import { bookingApi } from '../api/api'

export const useGetBookings = (hostId: string) => {
  const { data: bookings } = useQuery({
    queryKey: [''],
    queryFn: () => bookingApi.getBookings(hostId),
  })

  return { bookings }
}
