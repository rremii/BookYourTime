import {
  AuthResponse,
  LoginDto,
  RegisterDto,
} from '@shared/entities/auth/types'
import { clientApi } from '@user/shared/api/api'

class AuthApi {
  async login(loginDto: LoginDto): Promise<AuthResponse> {
    const response = await clientApi.post<AuthResponse>('auth/login', loginDto)

    return response.data
  }

  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    const response = await clientApi.post<AuthResponse>(
      'auth/register',
      registerDto,
    )
    return response.data
  }
}
export const authApi = new AuthApi()
