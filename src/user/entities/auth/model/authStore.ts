import {AuthAction, SetAuthReject, SetAuthSuccess,} from '@shared/entities/auth/types'
import {createContext} from 'react'

interface InitialState {
  isLoggedIn: boolean
}

export const authInitialState: InitialState = {
  isLoggedIn: false,
}

export const ClientAuthContext = createContext<
  InitialState & { dispatch: React.Dispatch<AuthAction> }
>({ ...authInitialState, dispatch: (action: AuthAction) => {} })

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
