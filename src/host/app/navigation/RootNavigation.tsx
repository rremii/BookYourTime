import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { HostRootNavigationParam } from './types'
import React from 'react'
import ProfileIcon from '@icons/profile.svg'
import BookingIcon from '@icons/calendar.svg'
import { Booking } from '@host/screens/booking/Booking'
import { Profile } from '@host/screens/profile/Profile'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'

interface BottomTabIconProps {
  focused: boolean
  color: string
  size: number
}

const RootBottomTabs = createBottomTabNavigator<HostRootNavigationParam>()

const RootNavigation = () => {
  const { colors } = useTheme()

  const routes: {
    name: keyof HostRootNavigationParam
    component: React.FC
    icon: (props: BottomTabIconProps) => JSX.Element
  }[] = [
    {
      name: 'Booking',
      component: Booking,
      icon: (props: BottomTabIconProps) => (
        <BookingIcon height={24} width={24} color={props.color} />
      ),
    },
    {
      name: 'Profile',
      component: Profile,
      icon: (props: BottomTabIconProps) => (
        <ProfileIcon height={24} width={24} color={props.color} />
      ),
    },
  ]

  const options = getRootBottomTabsOptions(colors)
  return (
    <RootBottomTabs.Navigator
      screenOptions={options}
      initialRouteName="Booking"
    >
      {routes.map((route, index) => (
        <RootBottomTabs.Screen
          key={index}
          options={{
            tabBarIcon: route.icon,
          }}
          name={route.name}
          component={route.component}
        />
      ))}
    </RootBottomTabs.Navigator>
  )
}
export default RootNavigation

const getRootBottomTabsOptions = (
  colors: Theme, //TODO we can recieve specific theme colors but i think its not necessary
): BottomTabNavigationOptions => ({
  headerShown: false,

  tabBarStyle: {
    paddingBottom: 7,
    paddingTop: 7,

    height: 60,
    backgroundColor: colors.bcColor_tabBar,
    borderTopColor: colors.borderTopColor_tabBar,
    borderTopWidth: 1,
  },
  tabBarItemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0,
  },
  tabBarLabelStyle: {
    fontSize: 13,
  },
  tabBarIconStyle: {
    height: 10,
    width: 10,
  },

  tabBarActiveTintColor: colors.color_tabBar_active,
  tabBarInactiveTintColor: colors.color_tabBar_inactive,
})
