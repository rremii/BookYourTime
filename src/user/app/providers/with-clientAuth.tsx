import { AuthProvider } from '@user/entities/auth/model/AuthProvider'
import { FC, PropsWithChildren, useReducer } from 'react'

export const withClientAuth =
  (Component: FC): FC =>
  (props) => {
    return (
      <AuthProvider>
        <Component {...props} />
      </AuthProvider>
    )
  }
