import { AuthNavigationParam, HostRootNavigationParam } from './types'
import React, { useContext } from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
  TransitionSpecs,
} from '@react-navigation/stack'
import { SignIn } from '@host/screens/signIn/SignIn'
import { SignUp } from '@host/screens/signUp/SignUp'
import RootNavigation from './RootNavigation'
import { AuthContext } from '@host/entities/auth/authStore'

const AuthStack = createStackNavigator<AuthNavigationParam>()

const AuthNavigation = () => {
  // const { isLoggedIn } = useContext(AuthContext)
  const isLoggedIn = true

  const routes: {
    name: keyof AuthNavigationParam
    component: React.FC
  }[] = isLoggedIn
    ? [
        {
          name: 'Root',
          component: RootNavigation,
        },
      ]
    : [
        {
          name: 'SignIn',
          component: SignIn,
        },
        {
          name: 'SignUp',
          component: SignUp,
        },
      ]

  return (
    <AuthStack.Navigator screenOptions={StackOptions} initialRouteName="Root">
      {routes.map((route, index) => (
        <AuthStack.Screen
          key={index}
          name={route.name}
          component={route.component}
        />
      ))}
    </AuthStack.Navigator>
  )
}
export default AuthNavigation
const StackOptions: StackNavigationOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
}
