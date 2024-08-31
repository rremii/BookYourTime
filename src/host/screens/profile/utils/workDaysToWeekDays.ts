import { WorkDays } from '@shared/entities/host/types'
import { WeekDays } from '@shared/moduls/weekDaysPicker/types'

export const workDaysToWeekDays = (days: WorkDays[]): WeekDays[] => {
  return days.map(
    (day) => day.slice(0, 1).toUpperCase() + day.slice(1),
  ) as WeekDays[]
}
