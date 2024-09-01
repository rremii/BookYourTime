import { useMutation } from '@tanstack/react-query'
import { AuthResponse, LoginDto, Roles } from '@shared/entities/auth/types'
import { ReactNode, useContext, useEffect } from 'react'
import { AxiosError } from 'axios'
import * as SecureStore from 'expo-secure-store'

import { HostAuthContext, setAuthReject, setAuthSuccess } from './authStore'
import { authApi } from '../api/api'
import { getTokenNameByRole } from '@shared/utils/getTokenNameByRole'
import { useModal } from '@shared/moduls/modals/useModal'
import { Toast, ToastType } from '@shared/ui/Toast'

export const useLogin = () => {
  const { dispatch } = useContext(HostAuthContext)
  const { openModal } = useModal()

  const {
    data,
    error,
    isPending,
    mutate: mutateLogin,
    isError,
    isSuccess,
  } = useMutation<AuthResponse, AxiosError, LoginDto>({
    mutationFn: authApi.login,
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
          children: 'Could not login',
        },
      })

      console.log('login error', error)
      SecureStore.deleteItemAsync(getTokenNameByRole(Roles.HOST)).catch(() =>
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
          children: 'Successfully logged in',
        },
      })

      console.log('login success')
      dispatch(setAuthSuccess())
      SecureStore.setItem(getTokenNameByRole(Roles.HOST), token)
    },
  })

  const login = (loginDto: LoginDto) => {
    mutateLogin(loginDto)
  }

  return { login, isPending, isSuccess, error, isError }
}
