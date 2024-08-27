import { createStackNavigator } from '@react-navigation/stack'
import { SearchNavigationParam } from './types'
import { Search } from '@user/screens/search/Search'
import { HostPreview } from '@user/screens/hostPreview/HostPreview'
import { useTheme } from '@shared/moduls/theme'

const SearchStack = createStackNavigator<SearchNavigationParam>()

export const SearchNavigation = () => {
  const { colors } = useTheme()

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
          headerStyle: {
            //FIX THE HEIGHT
            backgroundColor: colors.bcColor_standart_container,
          },
          headerTitleStyle: {
            color: colors.color_standart_text,
          },
        }}
        name="HostPreview"
        component={HostPreview}
      />
    </SearchStack.Navigator>
  )
}
