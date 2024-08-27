import axios from 'axios'
import {
  createAuthRefreshInterceptor,
  createWithNewTokenInterceptor,
  createWithTokenInterceptor,
} from '../../../shared/api/interceptors'
import { API_NGROK } from '@shared/api/temp'
import { Roles } from '@shared/entities/auth/types'

export const API_URL = API_NGROK || 'http://localhost:3000/'

export const hostApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

export const hostApiDefault = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

hostApi.interceptors.request.use(createWithTokenInterceptor(Roles.HOST))
hostApi.interceptors.response.use(createWithNewTokenInterceptor(Roles.HOST))
hostApi.interceptors.response.use((config) => {
  return config
}, createAuthRefreshInterceptor(Roles.HOST))
