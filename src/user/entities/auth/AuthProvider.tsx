import {
  AuthReducer,
  ClientAuthContext,
  initialState,
} from '@shared/entities/auth/authStore'
import { FC, PropsWithChildren, useReducer } from 'react'

interface Props extends PropsWithChildren {}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState)
  return (
    <ClientAuthContext.Provider value={{ ...authState, dispatch }}>
      {children}
    </ClientAuthContext.Provider>
  )
}
