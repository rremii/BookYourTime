import { AuthNavigationParam } from '@host/app/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootNavigationParam } from '@root/app/navigation/types'
import { navigateToWelcome } from '@root/app/providers/with-navigation'
import { Roles } from '@shared/entities/auth/types'
import { getTokenNameByRole } from '@shared/utils/getTokenNameByRole'
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import * as SecureStore from 'expo-secure-store'

export const createWithNewTokenInterceptor =
  (role: Roles) => (config: AxiosResponse) => {
    if (config.headers && config.headers['new-token']) {
      const newToken = config.headers['new-token'] as string

      SecureStore.setItem(getTokenNameByRole(role), newToken)
      config.headers.Authorization = `Bearer ${newToken}`
    }
    return config
  }

export const createAuthRefreshInterceptor =
  (role: Roles) => async (error: AxiosError<unknown>) => {
    if (error.response?.status === 401) {
      SecureStore.deleteItemAsync(getTokenNameByRole(role)).finally(
        navigateToWelcome,
      )
    }
    throw error
  }

export const createWithTokenInterceptor =
  (role: Roles) => (config: InternalAxiosRequestConfig) => {
    if (config.headers !== null) {
      const token = SecureStore.getItem(getTokenNameByRole(role))
      config.headers.Authorization = `${token}`
    }
    return config
  }
