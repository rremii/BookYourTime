import { AuthNavigationParam } from './types'
import React, { useContext, useEffect } from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack'
import RootNavigation from './RootNavigation'
import {
  ClientAuthContext,
  HostAuthContext,
} from '@shared/entities/auth/authStore'
import { SignIn } from '@user/screens/signIn/SignIn'
import { SignUp } from '@user/screens/signUp/SignUp'

const AuthStack = createStackNavigator<AuthNavigationParam>()

const AuthNavigation = () => {
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
