import axios from 'axios'
import {
    createAuthRefreshInterceptor,
    createWithNewTokenInterceptor,
    createWithTokenInterceptor,
} from '../../../shared/api/interceptors'
import {API_NGROK} from '@shared/api/temp'
import {Roles} from '@shared/entities/auth/types'

export const API_URL = API_NGROK || 'http://localhost:3000/'

export const hostApiConfig = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

export const hostApiDefaultConfig = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

hostApiConfig.interceptors.request.use(createWithTokenInterceptor(Roles.HOST))
hostApiConfig.interceptors.response.use(
  createWithNewTokenInterceptor(Roles.HOST),
)
hostApiConfig.interceptors.response.use((config) => {
  return config
}, createAuthRefreshInterceptor(Roles.HOST))
