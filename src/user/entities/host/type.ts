type Action<T, P = undefined> = {
  type: T
  payload?: P
}

export interface HostFilters {
  fullText: string
  date: Date | null
  startTime: Date | null
  endTime: Date | null
  tags: string[]
}

export type SetFilters = Action<'set_filters', Partial<HostFilters>>
export type ResetFilters = Action<'reset_filters'>

export type HostFilterAction = SetFilters | ResetFilters
