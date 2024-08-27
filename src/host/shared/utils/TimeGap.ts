class TimeGap {
  GetMonthGap(index: number, initDateStr?: string | Date) {
    const initDate = initDateStr ? new Date(initDateStr) : new Date()

    const dateFromMonth = initDate.getMonth() + index
    const dateToMonth = initDate.getMonth() + index + 1

    const dateFrom = new Date(initDate.getFullYear(), dateFromMonth)
    const dateTo = new Date(initDate.getFullYear(), dateToMonth)

    return { dateFrom, dateTo }
  }
}

export const timeGap = new TimeGap()
