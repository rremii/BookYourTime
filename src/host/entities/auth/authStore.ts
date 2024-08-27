import { createContext } from 'react'
import { AuthAction, SetAuthReject, SetAuthSuccess } from './types'

interface InitialState {
  isLoggedIn: boolean
}

export const initialState: InitialState = {
  isLoggedIn: false,
}

export const AuthContext = createContext<
  InitialState & { dispatch: React.Dispatch<AuthAction> }
>({ ...initialState, dispatch: (action: AuthAction) => {} })

export const AuthReducer = (
  state: InitialState,
  action: AuthAction,
): InitialState => {
  switch (action.type) {
    case 'set_auth_success': {
      return {
        ...state,
        isLoggedIn: true,
      }
    }

    case 'set_auth_reject': {
      return {
        ...state,
        isLoggedIn: false,
      }
    }

    default:
      return state
  }
}

export function setAuthSuccess(): SetAuthSuccess {
  return {
    type: 'set_auth_success',
  }
}
export function setAuthReject(): SetAuthReject {
  return {
    type: 'set_auth_reject',
  }
}
