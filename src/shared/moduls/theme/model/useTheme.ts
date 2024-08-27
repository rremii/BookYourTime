import { useContext } from 'react'
import { changeTheme, ThemeContext } from './themeStore'
import { ThemeType } from '../types'
import { useGetThemeByName } from './useGetThemeByType'

export const useTheme = () => {
  const { dispatch, theme } = useContext(ThemeContext)

  const colors = useGetThemeByName(theme)

  const change = (theme: ThemeType) => {
    dispatch(changeTheme(theme))
  }

  return { colors, changeTheme: change }
}
