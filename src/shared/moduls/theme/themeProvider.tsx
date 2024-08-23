import { FC, PropsWithChildren, useReducer } from 'react'
import { initialState, ThemeContext, ThemeReducer } from './themeStore'

interface Props extends PropsWithChildren {}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [themeState, dispatch] = useReducer(ThemeReducer, initialState)

  return (
    <ThemeContext.Provider value={{ ...themeState, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
