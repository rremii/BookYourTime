import { createContext } from 'react'
import { ThemeAction, ThemeType } from './types'

interface InitialState {
  theme: ThemeType
}

export const initialState: InitialState = {
  theme: 'dark',
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

export const changeMainTheme = (payload: ThemeType): ThemeAction => ({
  type: 'change',
  payload,
})
