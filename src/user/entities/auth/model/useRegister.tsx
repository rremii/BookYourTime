import {useMutation} from '@tanstack/react-query'
import {AuthResponse, RegisterDto, Roles,} from '@shared/entities/auth/types'
import {useContext, useEffect} from 'react'
import {AxiosError} from 'axios'
import * as SecureStore from 'expo-secure-store'

import {authApi} from '../api/api'
import {ClientAuthContext, setAuthReject, setAuthSuccess} from './authStore'
import {getTokenNameByRole} from '@shared/utils/getTokenNameByRole'

export const useRegister = () => {
  const { dispatch } = useContext(ClientAuthContext)

  const {
    data,
    error,
    isPending,
    mutate: mutateRegister,
    isError,
    isSuccess,
  } = useMutation<AuthResponse, AxiosError, RegisterDto>({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      console.log(data)
    },
  })

  useEffect(() => {
    if (!error) return

    console.log('register error', error)
    SecureStore.deleteItemAsync(getTokenNameByRole(Roles.CLIENT)).catch(() =>
      console.log('could not delete clientToken'),
    )
    dispatch(setAuthReject())
  }, [isError])

  useEffect(() => {
    if (!isSuccess || !data || !data.token) return
    const { token } = data

    console.log('register success')
    SecureStore.setItem(getTokenNameByRole(Roles.CLIENT), token)
    dispatch(setAuthSuccess())
  }, [isSuccess])

  const register = (registerDto: RegisterDto) => {
    mutateRegister(registerDto)
  }

  return { register, isPending, isSuccess, error }
}
