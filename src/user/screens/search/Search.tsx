import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SearchHeader } from '@user/features/searchHeader/SearchHeader'
import { HostCard } from '@user/features/hostCard/HostCard'
import { useModal } from '@shared/moduls/modals/useModal'
import { SearchFilters } from '@user/features/searchFilters.tsx/SearchFilters'
import {
  BookingModalType,
  CreateEditBookingModal,
} from '@shared/features/CreateEditBookingModal'

export const Search = () => {
  const { openModal } = useModal()

  useEffect(() => {
    openModal<{
      type: BookingModalType
    }>({
      name: 'CreateEditBooking',
      modal: CreateEditBookingModal,
      props: { type: 'create' },
    })
  }, [])

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
