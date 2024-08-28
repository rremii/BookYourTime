import { Booking } from '@shared/entities/booking/types'
import { clientApiConfig } from '@user/shared/api/api'
import { CancelBookingDto, UpdateBookingDto } from '../types'

class BookingApi {
  async getBookings(clientId: string): Promise<Booking[]> {
    const response = await clientApiConfig.get<Booking[]>(
      `clients/${clientId}/bookings`,
    )

    return response.data
  }
  async updateBooking(updateBookingDto: UpdateBookingDto): Promise<Booking> {
    const response = await clientApiConfig.patch<Booking>(
      `clients/${updateBookingDto.clientId}/bookings/${updateBookingDto.id}`,
      updateBookingDto,
    )
    return response.data
  }

  async cancelBooking({
    clientId,
    bookingId,
  }: CancelBookingDto): Promise<Booking> {
    const response = await clientApiConfig.post<Booking>(
      `clients/${clientId}/bookings/${bookingId}/cancel`,
    )
    return response.data
  }
}

export const bookingApi = new BookingApi()
