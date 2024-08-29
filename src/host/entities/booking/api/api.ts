import { hostApiConfig } from '@host/shared/api/api'
import { CancelBookingDto, UpdateBookingDto } from '../types'
import { Booking } from '@shared/entities/booking/types'

class BookingApi {
  async getBookings(hostId: string): Promise<Booking[]> {
    const response = await hostApiConfig.get<Booking[]>(
      `hosts/${hostId}/bookings`,
    )

    return response.data
  }
  async updateBooking(updateBookingDto: UpdateBookingDto): Promise<Booking> {
    const response = await hostApiConfig.patch<Booking>(
      `hosts/${updateBookingDto.hostId}/bookings/${updateBookingDto.id}`,
      updateBookingDto,
    )
    return response.data
  }
  async cancelBooking(cancelBookingDto: CancelBookingDto): Promise<Booking> {
    const response = await hostApiConfig.post<Booking>(
      `hosts/${cancelBookingDto.hostId}/bookings/${cancelBookingDto.bookingId}/cancel`,
    )
    return response.data
  }
}

export const bookingApi = new BookingApi()
