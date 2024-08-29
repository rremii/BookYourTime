import { Time } from '@shared/entities/types'

export interface CancelBookingDto {
  hostId: string
  bookingId: string
}
export interface CreateBookingDto {
  clientId: string
  hostId: string
  date: string
  time: Time
}

export interface UpdateBookingDto {
  hostId: string
  id: string
  date?: string
  time?: Time
}
export interface GetBookingDto {
  id: string
  hostId: string
}
