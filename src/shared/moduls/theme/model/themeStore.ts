import { createContext } from 'react'
import { ChangeTheme, ThemeAction, ThemeType } from '../types'

interface InitialState {
  theme: ThemeType
}

export const initialState: InitialState = {
  theme: 'light',
}

export const ThemeContext = createContext<
  InitialState & { dispatch: React.Dispatch<ThemeAction> }
>({ ...initialState, dispatch: (action: ThemeAction) => {} })

export const ThemeReducer = (
  state: InitialState,
  action: ThemeAction,
): InitialState => {
  switch (action.type) {
    case 'change': {
      return {
        ...state,
        theme: action.payload,
      }
    }
    default:
      return state
  }
}

export const changeTheme = (payload: ThemeType): ChangeTheme => ({
  type: 'change',
  payload,
})
