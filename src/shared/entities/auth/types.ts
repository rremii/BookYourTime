type Action<T, P = undefined> = {
  type: T
  payload?: P
}

export type SetAuthSuccess = Action<'set_auth_success'>
export type SetAuthReject = Action<'set_auth_reject'>

export type AuthAction = SetAuthSuccess | SetAuthReject

export enum Roles {
  CLIENT = 'client',
  HOST = 'host',
}

export type LoginDto = {
  email: string
  password: string
}

export type RegisterDto = {
  email: string
  password: string
  role: Roles
}

export type AuthResponse = {
  token: string
}
