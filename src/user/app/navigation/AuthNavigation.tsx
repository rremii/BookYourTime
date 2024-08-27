import { AuthNavigationParam } from './types'
import React, { useContext, useEffect } from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack'
import RootNavigation from './RootNavigation'
import { SignIn } from '@user/screens/signIn/SignIn'
import { SignUp } from '@user/screens/signUp/SignUp'
import { ClientAuthContext } from '@user/entities/auth/model/authStore'
import { useAuth } from '@user/entities/auth/model/useAuth'
import * as SecureStore from 'expo-secure-store'

const AuthStack = createStackNavigator<AuthNavigationParam>()

const AuthNavigation = () => {
  useAuth()

  const { isLoggedIn } = useContext(ClientAuthContext)

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
