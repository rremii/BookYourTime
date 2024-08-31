import {HostFilters} from '../type'

export const getQueryFromHostFilters = (filters: HostFilters) => {
  const queryFilters = new URLSearchParams()
  if (filters.fullText) queryFilters.append('fullText', filters.fullText)
  if (filters.date) queryFilters.append('date', filters.date.toISOString())
  if (filters.startTime)
    queryFilters.append('startTime', filters.startTime.toISOString())
  if (filters.endTime)
    queryFilters.append('endTime', filters.endTime.toISOString())
  if (filters.tags) queryFilters.append('tags', filters.tags.join(','))

  return queryFilters.toString()
}
