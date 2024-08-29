import { Booking } from '@shared/entities/booking/types'
import { useQuery } from '@tanstack/react-query'
import { bookingApi } from '../api/api'

export const useGetBooking = (id?: string, clientId?: string) => {
  const { data: booking, isLoading } = useQuery({
    queryKey: [''],
    queryFn: () => bookingApi.getBooking({ id, clientId }),
    enabled: !!id && !!clientId,
  })

  return { booking, isPending: isLoading }
}
