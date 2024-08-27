import { useMutation } from '@tanstack/react-query'
import { AuthResponse, LoginDto, Roles } from '@shared/entities/auth/types'
import { useContext, useEffect } from 'react'
import { Axios, AxiosError } from 'axios'
import * as SecureStore from 'expo-secure-store'

import { HostAuthContext, setAuthReject, setAuthSuccess } from './authStore'
import { authApi } from '../api/api'
import { getTokenNameByRole } from '@shared/utils/getTokenNameByRole'

export const useLogin = () => {
  const { dispatch } = useContext(HostAuthContext)

  const {
    data,
    error,
    isPending,
    mutate: mutateLogin,
    isError,
    isSuccess,
  } = useMutation<AuthResponse, AxiosError, LoginDto>({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      console.log(data)
    },
  })

  useEffect(() => {
    if (!error) return
    console.log('login error', error)
    SecureStore.deleteItemAsync(getTokenNameByRole(Roles.HOST)).catch(() =>
      console.log('could not delete clientToken'),
    )
    dispatch(setAuthReject())
  }, [isError])

  useEffect(() => {
    if (!isSuccess || !data || !data.token) return
    const { token } = data

    console.log('login success')
    dispatch(setAuthSuccess())
    SecureStore.setItem(getTokenNameByRole(Roles.HOST), token)
  }, [isSuccess])

  const login = (loginDto: LoginDto) => {
    mutateLogin(loginDto)
  }

  return { login, isPending, isSuccess, error }
}
