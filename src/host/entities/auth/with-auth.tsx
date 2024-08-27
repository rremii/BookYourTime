import { FC, PropsWithChildren, useReducer } from 'react'
import {
  AuthContext,
  AuthReducer,
  initialState,
} from '../../entities/auth/authStore'

interface Props extends PropsWithChildren {}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthContext.Provider value={{ ...authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
