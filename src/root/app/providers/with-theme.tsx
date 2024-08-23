import { ThemeProvider } from '@shared/moduls/theme/themeProvider'
import { FC } from 'react'

export const withTheme = (Component: FC): FC => {
  return (props) => {
    return (
      <ThemeProvider>
        <Component {...props} />
      </ThemeProvider>
    )
  }
}
