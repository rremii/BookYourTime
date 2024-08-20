import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { SearchHeader } from '@user/features/searchHeader/SearchHeader'
import { HostCard } from '@user/features/hostCard/HostCard'

export const Search = () => {
  const cards = new Array(10).fill(0)
  return (
    <View style={styles.container}>
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
    backgroundColor: '#F4F4F5',
  },
  cardContainer: {
    paddingTop: '20%',
    paddingBottom: '20%',
    gap: 20,
  },
})
