import { Time } from '@shared/entities/types'

export interface CancelBookingDto {
  clientId: string
  bookingId: string
}
export interface CreateBookingDto {
  clientId: string
  hostId: string
  date: string
  time: Time
  title: string
}

export interface UpdateBookingDto {
  clientId: string
  id: string
  date?: string
  time?: Time
  title?: string
}

export interface GetBookingDto {
  id: string
  clientId: string
}
