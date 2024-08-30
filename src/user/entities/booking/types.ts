import { Time } from '@shared/entities/types'

export interface CancelBookingDto {
  clientId: string
  bookingId: string
}
export interface CreateBookingDto {
  hostId: string
  date: string
  time: Time
  title: string
}

export interface UpdateBookingDto {
  id: string
  date?: string
  time?: Time
  title?: string
}
