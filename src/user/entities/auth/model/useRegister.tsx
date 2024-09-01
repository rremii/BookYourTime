import { useMutation } from '@tanstack/react-query'
import { AuthResponse, RegisterDto, Roles } from '@shared/entities/auth/types'
import { ReactNode, useContext, useEffect } from 'react'
import { AxiosError } from 'axios'
import * as SecureStore from 'expo-secure-store'

import { authApi } from '../api/api'
import { ClientAuthContext, setAuthReject, setAuthSuccess } from './authStore'
import { getTokenNameByRole } from '@shared/utils/getTokenNameByRole'
import { Toast, ToastType } from '@shared/ui/Toast'
import { useModal } from '@shared/moduls/modals/useModal'

export const useRegister = () => {
  const { dispatch } = useContext(ClientAuthContext)
  const { openModal } = useModal()
  const {
    data,
    error,
    isPending,
    mutate: mutateRegister,
    isError,
    isSuccess,
  } = useMutation<AuthResponse, AxiosError, RegisterDto>({
    mutationFn: authApi.register,
    onError: (error) => {
      if (!error) return

      openModal<{
        type: ToastType
        children: ReactNode
      }>({
        name: 'Toast',
        duration: 2000,
        modal: Toast,
        props: {
          type: 'error',
          children: 'Could not register',
        },
      })

      console.log('register error', error)
      SecureStore.deleteItemAsync(getTokenNameByRole(Roles.CLIENT)).catch(() =>
        console.log('could not delete clientToken'),
      )
      dispatch(setAuthReject())
    },
    onSuccess: (data) => {
      if (!isSuccess || !data || !data.token) return
      const { token } = data

      openModal<{
        type: ToastType
        children: ReactNode
      }>({
        name: 'Toast',
        duration: 2000,
        modal: Toast,
        props: {
          type: 'warn',
          children: 'Successfully registered',
        },
      })

      console.log('register success')
      dispatch(setAuthSuccess())
      SecureStore.setItem(getTokenNameByRole(Roles.CLIENT), token)
    },
  })

  const register = (registerDto: RegisterDto) => {
    mutateRegister(registerDto)
  }

  return { register, isPending, isSuccess, error, isError }
}
