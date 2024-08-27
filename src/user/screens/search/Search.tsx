import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { SearchHeader } from '@user/features/searchHeader/SearchHeader'
import { HostCard } from '@user/features/hostCard/HostCard'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'

export const Search = () => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  const cards = new Array(10).fill(0)
  
  return (
    <View
      style={styles.container}
    >
      <SearchHeader />
      <FlatList
        contentContainerStyle={styles.cardContainer}
        data={cards}
        renderItem={({ item }) => <HostCard />}
      />
    </View>
  )
}

const getStyles = (colors: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bcColor_standart_container
  },
  cardContainer: {
    paddingTop: '20%',
    paddingBottom: '20%',
    gap: 20,
  },
})
