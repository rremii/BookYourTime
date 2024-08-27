import { FC, PropsWithChildren, useReducer } from 'react'
import { authInitialState, AuthReducer, ClientAuthContext } from './authStore'

interface Props extends PropsWithChildren {}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState)
  return (
    <ClientAuthContext.Provider value={{ ...authState, dispatch }}>
      {children}
    </ClientAuthContext.Provider>
  )
}
