import { Time } from '@shared/entities/types'

export interface UpdateHostDto {
  id: string
  forwardBooking?: string
  workHours?: Time[]
  workDays?: string[]
  tags?: string[]
  firstName?: string
  lastName?: string
}
