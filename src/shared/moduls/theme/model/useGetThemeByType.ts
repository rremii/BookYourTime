import { DarkTheme, LightTheme } from '../constants/themes'
import { Theme, ThemeType } from '../types'
import { useColorScheme } from 'react-native'

export const useGetThemeByName = (theme: ThemeType): Theme => {
  const systemTheme = useColorScheme()

  switch (theme) {
    case 'light':
      return LightTheme
    case 'dark':
      return DarkTheme
    case 'system': {
      if (systemTheme === 'dark') return DarkTheme
      return LightTheme
    }
    default:
      return DarkTheme
  }
}
