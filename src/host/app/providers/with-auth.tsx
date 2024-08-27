import { FC, PropsWithChildren, useReducer } from 'react'
import {
  AuthContext,
  AuthReducer,
  initialState,
} from '../../entities/auth/authStore'
import { AuthProvider } from '@host/entities/auth/with-auth'

export const withAuth =
  (Component: FC): FC =>
  (props) => {
    return (
      <AuthProvider>
        <Component {...props} />
      </AuthProvider>
    )
  }
