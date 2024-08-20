import { HostRootNavigationParam } from '@host/app/navigation/types'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { ClientRootNavigationParam } from '@user/app/navigation/types'

export type RootNavigationParam = {
  Welcome: undefined
  Host: BottomTabNavigationProp<HostRootNavigationParam>
  Client: BottomTabNavigationProp<ClientRootNavigationParam>
}
