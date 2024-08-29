import { Booking } from '@shared/entities/booking/types'
import { clientApiConfig } from '@user/shared/api/api'
import {
  CancelBookingDto,
  CreateBookingDto,
  GetBookingDto,
  UpdateBookingDto,
} from '../types'

class BookingApi {
  async getBookings(clientId: string): Promise<Booking[]> {
    const response = await clientApiConfig.get<Booking[]>(
      `clients/${clientId}/bookings`,
    )

    return response.data
  }

  async getBooking(getBookingDto: GetBookingDto): Promise<Booking> {
    const response = await clientApiConfig.get<Booking>(
      `clients/${getBookingDto.clientId}/bookings/${getBookingDto.id}`,
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

  async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
    const response = await clientApiConfig.post<Booking>(
      `clients/${createBookingDto.clientId}/bookings`,
      createBookingDto,
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
