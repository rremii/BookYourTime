import { AuthProvider } from '@host/entities/auth/AuthProvider'
import { FC, PropsWithChildren, useReducer } from 'react'

export const withHostAuth =
  (Component: FC): FC =>
  (props) => {
    return (
      <AuthProvider>
        <Component {...props} />
      </AuthProvider>
    )
  }
