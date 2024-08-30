import { FC, PropsWithChildren, useReducer } from 'react'
import {
  HostFilterContext,
  HostFilterDispatchContext,
  hostFiltersInitialState,
  HostFiltersReducer,
} from './filtersStore'

interface Props extends PropsWithChildren {}

export const HostFiltersProvider: FC<Props> = ({ children }) => {
  const [filtersState, dispatch] = useReducer(
    HostFiltersReducer,
    hostFiltersInitialState,
  )

  return (
    <HostFilterDispatchContext.Provider value={{ dispatch }}>
      <HostFilterContext.Provider value={filtersState}>
        {children}
      </HostFilterContext.Provider>
    </HostFilterDispatchContext.Provider>
  )
}
