import {Booking} from '@shared/entities/booking/types'
import {clientApiConfig} from '@user/shared/api/api'
import {CreateBookingDto, UpdateBookingDto,} from '../types'

class BookingApi {
  async getBookings(): Promise<Booking[]> {
    const response = await clientApiConfig.get<Booking[]>(`clients/bookings`)

    return response.data
  }

  async getBooking(id: string): Promise<Booking> {
    const response = await clientApiConfig.get<Booking>(
      `clients/bookings/${id}`,
    )
    return response.data
  }

  async updateBooking(updateBookingDto: UpdateBookingDto): Promise<Booking> {
    const response = await clientApiConfig.patch<Booking>(
      `clients/bookings/${updateBookingDto.id}`,
      updateBookingDto,
    )
    return response.data
  }

  async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
    const response = await clientApiConfig.post<Booking>(
      `clients/bookings`,
      createBookingDto,
    )
    return response.data
  }

  async deleteBooking(id: string): Promise<Booking> {
    const response = await clientApiConfig.post<Booking>(
      `clients/bookings/${id}/cancel`,
    )
    return response.data
  }
}

export const bookingApi = new BookingApi()
