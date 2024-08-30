import {
  HostFilterAction,
  HostFilters,
  ResetFilters,
  SetFilters,
} from './../type'
import { createContext } from 'react'

interface InitialState extends HostFilters {}

export const hostFiltersInitialState: InitialState = {
  name: '',
  date: null,
  startTime: null,
  endTime: null,
  tags: [],
}

export const HostFilterContext = createContext<InitialState>({
  ...hostFiltersInitialState,
})
export const HostFilterDispatchContext = createContext<{
  dispatch: React.Dispatch<HostFilterAction>
}>({
  dispatch: (action: HostFilterAction) => {},
})

export const HostFiltersReducer = (
  state: InitialState,
  action: HostFilterAction,
): InitialState => {
  switch (action.type) {
    case 'set_filters': {
      return {
        ...state,
        ...action.payload,
      }
    }
    case 'reset_filters': {
      return {
        ...hostFiltersInitialState,
      }
    }
    default:
      return state
  }
}

export function setFilters(payload: Partial<HostFilters>): SetFilters {
  return {
    type: 'set_filters',
    payload,
  }
}
export function resetFilters(): ResetFilters {
  return {
    type: 'reset_filters',
  }
}
