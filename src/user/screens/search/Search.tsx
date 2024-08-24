import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { SearchHeader } from '@user/features/searchHeader/SearchHeader'
import { HostCard } from '@user/features/hostCard/HostCard'
import { useTheme } from '@shared/moduls/theme'

export const Search = () => {
  const { colors } = useTheme()

  const cards = new Array(10).fill(0)
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.bcColor_standart_container },
      ]}
    >
      <SearchHeader />
      <FlatList
        contentContainerStyle={styles.cardContainer}
        data={cards}
        renderItem={({ item }) => <HostCard />}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    paddingTop: '20%',
    paddingBottom: '20%',
    gap: 20,
  },
})
