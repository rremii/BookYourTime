import compose from 'compose-function'
import { withNavigation } from './with-navigation'
import { withSaveArea } from './with-saveArea'
import { withClientAuth } from '@user/app/providers/with-clientAuth'
import { withHostAuth } from '@host/app/providers/with-hostAuth'
import { withClientApi } from '@user/app/providers/with-clientApi'
import { withHostApi } from '@host/app/providers/with-hostApi'

export const withProviders = compose(
  withNavigation,
  withSaveArea,

  //client
  withClientAuth,
  withClientApi,

  //host
  withHostAuth,
  withHostApi,
)
