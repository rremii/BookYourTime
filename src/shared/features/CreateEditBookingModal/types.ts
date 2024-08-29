import { Time } from '@shared/entities/types'

export interface BookingFormValues {
  date: Date | null
  startTime: Date | null
  endTime: Date | null
  title: string
}
export type BookingInfoDto = {
  date: string
  time: Time
  title: string
}
