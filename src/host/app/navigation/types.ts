import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
export type HostRootNavigationParam = {
  Booking: undefined
  Profile: undefined
}

export type SettingsNavigationParam = {
  Profile: undefined
  Settings: undefined
}

export type AuthNavigationParam = {
  SignUp: undefined
  SignIn: undefined
  Root: BottomTabNavigationProp<HostRootNavigationParam>
}
