import {createNavigationContainerRef, NavigationContainer,} from '@react-navigation/native'
import React, {FC} from 'react'
import {RootNavigationParam} from '../navigation/types'

export const navigationContRef =
  createNavigationContainerRef<RootNavigationParam>()

export const withNavigation = (Component: FC): FC => {
  return (props) => {
    return (
      <NavigationContainer ref={navigationContRef}>
        <Component {...props} />
      </NavigationContainer>
    )
  }
}

//TODO
export function navigateToWelcome() {
  if (navigationContRef.isReady()) {
    navigationContRef.navigate('Welcome')
  }
}
