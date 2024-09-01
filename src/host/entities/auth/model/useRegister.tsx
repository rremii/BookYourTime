import { useMutation } from '@tanstack/react-query'
import { AuthResponse, RegisterDto, Roles } from '@shared/entities/auth/types'
import { ReactNode, useContext, useEffect } from 'react'
import { AxiosError } from 'axios'
import * as SecureStore from 'expo-secure-store'
import { HostAuthContext, setAuthReject, setAuthSuccess } from './authStore'
import { authApi } from '../api/api'
import { getTokenNameByRole } from '@shared/utils/getTokenNameByRole'
import { useModal } from '@shared/moduls/modals/useModal'
import { Toast, ToastType } from '@shared/ui/Toast'

export const useRegister = () => {
  const { dispatch } = useContext(HostAuthContext)

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
          children: 'Successfully registered',
        },
      })

      console.log('register success')
      dispatch(setAuthSuccess())
      SecureStore.setItem(getTokenNameByRole(Roles.HOST), token)
    },
  })

  const register = (registerDto: RegisterDto) => {
    mutateRegister(registerDto)
  }

  return { register, isPending, isSuccess, error, isError }
}
