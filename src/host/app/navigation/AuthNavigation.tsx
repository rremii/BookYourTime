import { AuthNavigationParam, HostRootNavigationParam } from './types'
import React, { useContext, useEffect } from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack'
import { SignIn } from '@host/screens/signIn/SignIn'
import { SignUp } from '@host/screens/signUp/SignUp'
import RootNavigation from './RootNavigation'
import { HostAuthContext } from '@host/entities/auth/model/authStore'
import { useAuth } from '@host/entities/auth/model/useAuth'

const AuthStack = createStackNavigator<AuthNavigationParam>()

const AuthNavigation = () => {
  useAuth()

  const { isLoggedIn } = useContext(HostAuthContext)

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
    <AuthStack.Navigator initialRouteName="Root" screenOptions={StackOptions}>
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
