import {FC, PropsWithChildren, useReducer} from 'react'
import {authInitialState, AuthReducer, HostAuthContext} from './authStore'

interface Props extends PropsWithChildren {}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState)
  return (
    <HostAuthContext.Provider value={{ ...authState, dispatch }}>
      {children}
    </HostAuthContext.Provider>
  )
}
