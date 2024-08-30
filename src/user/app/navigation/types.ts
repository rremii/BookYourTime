import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

export type ProfileNavigationParam = {
  Root: undefined
  HostPreview: undefined
}

export type SearchNavigationParam = {
  Root: undefined
  HostPreview: { hostId: string }
}

export type ClientRootNavigationParam = {
  Search: undefined
  Booking: undefined
  Profile: undefined
}
export type AuthNavigationParam = {
  SignUp: undefined
  SignIn: undefined
  Root: BottomTabNavigationProp<ClientRootNavigationParam>
}
