import { useMutation } from '@tanstack/react-query'
import { AuthResponse, LoginDto, Roles } from '@shared/entities/auth/types'
import { useContext, useEffect } from 'react'
import { Axios, AxiosError } from 'axios'
import * as SecureStore from 'expo-secure-store'

import { authApi } from '../api/api'
import { ClientAuthContext, setAuthReject, setAuthSuccess } from './authStore'
import { getTokenNameByRole } from '@shared/utils/getTokenNameByRole'

export const useLogin = () => {
  const { dispatch } = useContext(ClientAuthContext)

  const {
    data,
    error,
    isPending,
    mutate: mutateLogin,
    isError,
    isSuccess,
  } = useMutation<AuthResponse, AxiosError, LoginDto>({
    mutationFn: authApi.login,
  })

  useEffect(() => {
    if (!error) return
    console.log('login error', error)
    SecureStore.deleteItemAsync(getTokenNameByRole(Roles.CLIENT)).catch(() =>
      console.log('could not delete clientToken'),
    )
    dispatch(setAuthReject())
  }, [isError])

  useEffect(() => {
    if (!isSuccess || !data || !data.token) return
    const { token } = data

    console.log('login success')
    SecureStore.setItemAsync(getTokenNameByRole(Roles.CLIENT), token).then(() =>
      dispatch(setAuthSuccess()),
    )
  }, [isSuccess])

  const login = (loginDto: LoginDto) => {
    mutateLogin(loginDto)
  }

  return { login, isPending, isSuccess, error }
}
