import { useQuery } from '@tanstack/react-query'
import { bookingApi } from '../api/api'

export const useGetBookings = (clientId?: string) => {
  const { data: bookings } = useQuery({
    queryKey: [''],
    enabled: !!clientId,
    queryFn: () => bookingApi.getBookings(clientId),
  })

  return { bookings }
}
