import compose from 'compose-function'
import {withNavigation} from './with-navigation'
import {withSaveArea} from './with-saveArea'
import {withClientAuth} from '@user/app/providers/with-clientAuth'
import {withTheme} from './with-theme'
import {withHostAuth} from '@host/app/providers/with-hostAuth'
import {withClientApi} from '@user/app/providers/with-clientApi'
import {withHostApi} from '@host/app/providers/with-hostApi'
import {withHostFilters} from '@user/app/providers/with-hostFilters'

export const withProviders = compose(
  withNavigation,
  withSaveArea,
  withTheme,

  //client
  withClientAuth,
  withClientApi,
  withHostFilters,

  //host
  withHostAuth,
  withHostApi,
)
