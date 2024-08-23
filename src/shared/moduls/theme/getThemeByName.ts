import * as themes from './Themes'
import { ThemeObject, ThemeType } from './types'

export const getThemeByName = (theme: ThemeType): ThemeObject => {
  switch (theme) {
    case 'light':
      return themes.LightTheme
    case 'dark':
      return themes.DarkTheme
    default:
      return themes.LightTheme
  }
}
