import {AuthResponse, LoginDto, RegisterDto,} from '@shared/entities/auth/types'
import {clientApiConfig} from '@user/shared/api/api'

class AuthApi {
  async login(loginDto: LoginDto): Promise<AuthResponse> {
    const response = await clientApiConfig.post<AuthResponse>(
      'auth/login',
      loginDto,
    )

    return response.data
  }

  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    const response = await clientApiConfig.post<AuthResponse>(
      'auth/register',
      registerDto,
    )
    return response.data
  }
}
export const authApi = new AuthApi()
