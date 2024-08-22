import {
  createAuthRefreshInterceptor,
  createWithTokenInterceptor,
} from '@shared/api/interceptors'
import { API_NGROK } from '@shared/api/temp'
import axios from 'axios'

export const API_URL = API_NGROK || 'http://localhost:3000/'

export const clientApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

export const clientApiDefault = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

clientApi.interceptors.request.use(createWithTokenInterceptor())
clientApi.interceptors.response.use(
  (config) => {
    return config
  },
  createAuthRefreshInterceptor(clientApi, API_URL),
)
