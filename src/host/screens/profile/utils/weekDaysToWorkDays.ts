import { WorkDays } from '@shared/entities/host/types'
import { WeekDays } from '@shared/moduls/weekDaysPicker/types'

export const weekDaysToWorkDays = (days: WeekDays[]): WorkDays[] => {
  return days.map((day) => WorkDays[day])
}
