import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios'
import * as SecureStore from 'expo-secure-store'

export const createAuthRefreshInterceptor =
  (api: AxiosInstance, baseUrl: string) =>
  async (error: AxiosError<unknown>) => {
    const originalRequest = error.config
    if (
      error.response?.status === 401 &&
      error.config &&
      !error.config._isRetry &&
      originalRequest
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get<{ accessToken: string }>(
          baseUrl + 'auth/refresh',
          { withCredentials: true },
        )

        SecureStore.setItem('accessToken', response.data.accessToken)
        return await api.request(originalRequest)
      } catch (e) {
        SecureStore.deleteItemAsync('accessToken').catch(() =>
          console.log('could not delete accessToken'),
        )
      }
    }
    throw error
  }

export const createWithTokenInterceptor =
  () => (config: InternalAxiosRequestConfig) => {
    if (config.headers !== null) {
      config.headers.Authorization = `Bearer ${SecureStore.getItem(
        'accessToken',
      )}`
    }
    return config
  }
