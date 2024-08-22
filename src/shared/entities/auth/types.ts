type Action<T, P = undefined> = {
  type: T
  payload?: P
}

export type SetAuthSuccess = Action<'set_auth_success'>
export type SetAuthReject = Action<'set_auth_reject'>

export type AuthAction = SetAuthSuccess | SetAuthReject
