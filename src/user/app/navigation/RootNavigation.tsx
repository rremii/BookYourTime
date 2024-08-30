import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Profile} from '../../screens/profile/Profile'
import {Booking} from '../../screens/booking/Booking'
import React from 'react'
import SearchIcon from '@icons/search.svg'
import ProfileIcon from '@icons/profile.svg'
import BookingIcon from '@icons/calendar.svg'
import {SearchNavigation} from './SearchNavigation'
import {ClientRootNavigationParam} from './types'
import {useTheme} from '@shared/moduls/theme'

interface BottomTabIconProps {
  focused: boolean
  color: string
  size: number
}

const RootBottomTabs = createBottomTabNavigator<ClientRootNavigationParam>()

const RootNavigation = () => {
  const { colors } = useTheme()

  const routes: {
    name: keyof ClientRootNavigationParam
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
      name: 'Search',
      component: SearchNavigation,
      icon: (props: BottomTabIconProps) => (
        <SearchIcon height={24} width={24} color={props.color} />
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

  return (
    <RootBottomTabs.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          paddingBottom: 7,
          paddingTop: 7,

          height: 60,

          borderTopColor: colors.borderTopColor_tabBar,
          backgroundColor: colors.bcColor_tabBar,
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
      }}
      initialRouteName="Search"
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
