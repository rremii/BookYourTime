import { Time } from '../types'

export interface Booking {
  id: string
  clientId: string
  hostId: string
  date: string
  time: Time
  title: string
}
