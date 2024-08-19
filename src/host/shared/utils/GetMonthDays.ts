export const GetMonthDays = (dateStr: string | Date) => {
  const date = new Date(dateStr)

  const monthStart = new Date(date.getFullYear(), date.getMonth() + 1, 0)

  const daysAmount = monthStart.getDate()
  const weekDayShift = monthStart.getDay()

  const days: { dateFrom: Date; dateTo: Date }[] = []
  for (let index = 0; index < daysAmount; index++) {
    const dateFrom = new Date(date.getFullYear(), date.getMonth(), index)
    const dateTo = new Date(date.getFullYear(), date.getMonth(), index + 1)
    days.push({ dateFrom, dateTo })
  }

  return {
    weekDayShift,
    days,
  }
}
