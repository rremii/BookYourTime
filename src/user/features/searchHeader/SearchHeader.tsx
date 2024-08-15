import { TextInput, TouchableOpacity, View } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import React from 'react'
import SearchIcon from '@icons/search.svg'
import FilterIcon from '@icons/filter.svg'
import { useModal } from '@shared/moduls/modals/useModal'
import { SearchFilters } from '../searchFilters.tsx/SearchFilters'

export const SearchHeader = () => {
  const { openModal } = useModal()

  const openFilters = () => {
    openModal({ name: 'SearchFilters', modal: SearchFilters })
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchIcon
          style={styles.searchIcon}
          width={24}
          height={24}
          color={'black'}
        />
        <TextInput placeholder="Search for the host" style={styles.input} />
      </View>
      <TouchableOpacity onPress={openFilters} style={styles.filterBtn}>
        <FilterIcon width={24} height={24} color={'black'} />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    zIndex: 1,
    position: 'absolute',
    top: 15,
    left: '2.5%',
    right: 0,
    height: 50,
    backgroundColor: '#fff',
    paddingRight: 10,

    borderColor: '#6e6e7728',
    borderWidth: 1,
    borderRadius: 50,
    width: '95%',

    shadowColor: '#0A8537',
    elevation: 3,
  },
  inputContainer: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 50,
    color: 'black',
  },
  filterBtn: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    left: 15,
    position: 'absolute',
  },
})
