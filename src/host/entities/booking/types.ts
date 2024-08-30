import {Time} from '@shared/entities/types'

export interface CreateBookingDto {
  clientId: string
  hostId: string
  date: string
  time: Time
}

export interface UpdateBookingDto {
  id: string
  date?: string
  time?: Time
}
