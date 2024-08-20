import { NavigationContainer } from '@react-navigation/native'
import React, { FC } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const withNavigation = (Component: FC): FC => {
  return (props) => {
    return (
      <NavigationContainer>
        <Component {...props} />
      </NavigationContainer>
    )
  }
}
