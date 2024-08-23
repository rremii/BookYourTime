import compose from 'compose-function'
import { withNavigation } from './with-navigation'
import { withSaveArea } from './with-saveArea'
import { withHostAuth } from '@host/app/providers/with-hostAuth'
import { withClientAuth } from '@user/app/providers/with-clientAuth'
import { withTheme } from './with-theme'

export const withProviders = compose(
  withNavigation,
  withSaveArea,
  withHostAuth,
  withClientAuth,
  withTheme,
)
