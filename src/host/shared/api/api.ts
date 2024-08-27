import axios from 'axios'
import {
  createAuthRefreshInterceptor,
  createWithTokenInterceptor,
} from '../../../shared/api/interceptors'
import { API_NGROK } from '@shared/api/temp'

export const API_URL = API_NGROK || 'http://localhost:3000/'

export const hostApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

export const hostApiDefault = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

hostApi.interceptors.request.use(createWithTokenInterceptor())
hostApi.interceptors.response.use(
  (config) => {
    return config
  },
  createAuthRefreshInterceptor(hostApi, API_URL),
)
