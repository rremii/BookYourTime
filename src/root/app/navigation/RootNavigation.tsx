import {RootNavigationParam} from './types'
import React from 'react'
import {Welcome} from 'src/root/screens/welcome/Welcome'
import {createStackNavigator, StackNavigationOptions,} from '@react-navigation/stack'
import ClientRootNavigation from '@user/app/navigation'
import HostRootNavigation from '@host/app/navigation'

const RootStack = createStackNavigator<RootNavigationParam>()

const RootNavigation = () => {
  const routes: {
    name: keyof RootNavigationParam
    component: React.FC
  }[] = [
    {
      name: 'Welcome',
      component: Welcome,
    },
    {
      name: 'Client',
      component: ClientRootNavigation,
    },
    {
      name: 'Host',
      component: HostRootNavigation,
    },
  ]

  return (
    <RootStack.Navigator
      screenOptions={StackOptions}
      initialRouteName={'Welcome'}
    >
      {routes.map((route, index) => (
        <RootStack.Screen
          key={index}
          name={route.name}
          component={route.component}
        />
      ))}
    </RootStack.Navigator>
  )
}
export default RootNavigation
const StackOptions: StackNavigationOptions = {
  headerShown: false,
}
