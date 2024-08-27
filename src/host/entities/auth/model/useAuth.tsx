import { useContext, useEffect } from 'react'
import { HostAuthContext, setAuthReject, setAuthSuccess } from './authStore'
import { getTokenNameByRole } from '@shared/utils/getTokenNameByRole'
import { Roles } from '@shared/entities/auth/types'
import * as SecureStore from 'expo-secure-store'
import { jwtDecode } from 'jwt-decode'

export const useAuth = () => {
  const { dispatch, isLoggedIn } = useContext(HostAuthContext)

  useEffect(() => {
    if (isLoggedIn) return

    const token = SecureStore.getItem(getTokenNameByRole(Roles.HOST))

    const exp = token ? jwtDecode(token).exp : null
    const isTokenValid = exp && exp * 1000 > Date.now()

    if (isTokenValid) {
      console.log('host token is valid')
      dispatch(setAuthSuccess())
    } else {
      console.log('host token expired')
      dispatch(setAuthReject())
      if (token) SecureStore.deleteItemAsync(getTokenNameByRole(Roles.HOST))
    }
  }, [])
}
