import { QueryClientProvider } from '@tanstack/react-query'
import { queryApiClient } from '@user/shared/api/queryApiClient'
import { FC } from 'react'

export const withClientApi =
  (Component: FC): FC =>
  (props) => {
    return (
      <QueryClientProvider client={queryApiClient}>
        <Component {...props} />
      </QueryClientProvider>
    )
  }
