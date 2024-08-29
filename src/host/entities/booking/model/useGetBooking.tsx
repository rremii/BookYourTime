import { Booking } from '@shared/entities/booking/types'
import { useQuery } from '@tanstack/react-query'
import { bookingApi } from '../api/api'

export const useGetBooking = (id?: string, hostId?: string) => {
  const { data: booking, isLoading } = useQuery({
    queryKey: [''],
    queryFn: () => bookingApi.getBooking({ id, hostId }),
    enabled: !!id && !!hostId,
  })

  return { booking, isPending: isLoading }
}
