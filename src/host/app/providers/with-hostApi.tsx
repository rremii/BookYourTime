import { queryApiHost } from '@host/shared/api/queryApiHost'
import { QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'

export const withHostApi =
  (Component: FC): FC =>
  (props) => {
    return (
      <QueryClientProvider client={queryApiHost}>
        <Component {...props} />
      </QueryClientProvider>
    )
  }
