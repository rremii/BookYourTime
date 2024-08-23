import { useContext } from 'react'
import { changeMainTheme, ThemeContext } from './themeStore'
import { getThemeByName } from './getThemeByName'
import { ThemeObject, ThemeType } from './types'

export const useTheme = () => {
  const { dispatch, theme } = useContext(ThemeContext)

  const colors: ThemeObject = getThemeByName(theme)

  const changeTheme = (theme: ThemeType) => {
    dispatch(changeMainTheme(theme))
  }

  return { colors, changeTheme }
}
