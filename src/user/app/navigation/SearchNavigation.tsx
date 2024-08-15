import { createStackNavigator } from '@react-navigation/stack'
import { SearchNavigationParam } from './types'
import { Search } from '@user/screens/search/Search'
import { HostPreview } from '@user/screens/hostPreview/ui/HostPreview'

const SearchStack = createStackNavigator<SearchNavigationParam>()

export const SearchNavigation = () => {
  return (
    <SearchStack.Navigator initialRouteName="Root">
      <SearchStack.Screen
        options={{ headerShown: false }}
        name="Root"
        component={Search}
      />
      <SearchStack.Screen
        options={{
          headerTitle: 'Host Preview',
        }}
        name="HostPreview"
        component={HostPreview}
      />
    </SearchStack.Navigator>
  )
}
