import {hostApiConfig} from '@host/shared/api/api'
import {UpdateBookingDto} from '../types'
import {Booking} from '@shared/entities/booking/types'

class BookingApi {
  async getBookings(): Promise<Booking[]> {
    const response = await hostApiConfig.get<Booking[]>(`hosts/bookings`)

    return response.data
  }
  async updateBooking(updateBookingDto: UpdateBookingDto): Promise<Booking> {
    const response = await hostApiConfig.patch<Booking>(
      `hosts/bookings/${updateBookingDto.id}`,
      updateBookingDto,
    )
    return response.data
  }
  async deleteBooking(id: string): Promise<Booking> {
    const response = await hostApiConfig.post<Booking>(
      `hosts/bookings/${id}/cancel`,
    )
    return response.data
  }
  async getBooking(id: string): Promise<Booking> {
    const response = await hostApiConfig.get<Booking>(`hosts/bookings/${id}`)
    return response.data
  }
}

export const bookingApi = new BookingApi()
