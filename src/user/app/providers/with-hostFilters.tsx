import { HostFiltersProvider } from '@user/entities/host/model/HostFiltersProvider'
import { FC } from 'react'

export const withHostFilters = (Component: FC): FC => {
  return (props) => {
    return (
      <HostFiltersProvider>
        <Component {...props} />
      </HostFiltersProvider>
    )
  }
}
