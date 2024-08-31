import { useQuery } from '@tanstack/react-query'
import { bookingApi } from '../api/api'

export const useGetBooking = (id?: string) => {
  const { data: booking, isLoading } = useQuery({
    queryKey: ['bookings', id],
    queryFn: () => bookingApi.getBooking(id),
    enabled: !!id,
  })

  return { booking, isPending: isLoading }
}
