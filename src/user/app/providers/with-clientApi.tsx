import { apiClient } from '@host/shared/api/apiClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'

export const withClientApi =
  (Component: FC): FC =>
  (props) => {
    return (
      <QueryClientProvider client={apiClient}>
        <Component {...props} />
      </QueryClientProvider>
    )
  }
