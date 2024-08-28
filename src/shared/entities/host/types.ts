import { Time } from '../types'

export interface Host {
  id: string
  forwardBooking: string
  workHours: Time[]
  workDays: WorkDays[]

  tags: string[]
  firstName: string
  lastName: string
}
export enum WorkDays {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
  Sunday = 'sunday',
}
