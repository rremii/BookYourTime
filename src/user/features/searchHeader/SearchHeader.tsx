import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SearchIcon from '@icons/search.svg'
import FilterIcon from '@icons/filter.svg'
import { useModal } from '@shared/moduls/modals/useModal'
import { SearchFilters } from '../searchFilters.tsx/SearchFilters'
import { useTheme } from '@shared/moduls/theme/useTheme'

export const SearchHeader = () => {
  const { colors } = useTheme()

  const { openModal } = useModal()

  const openFilters = () => {
    openModal({ name: 'SearchFilters', modal: SearchFilters })
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.bcColor_search,
          borderColor: colors.borderColor_searchHeader,
          shadowColor: colors.color_standart_shadow,
        },
      ]}
    >
      <View style={styles.inputContainer}>
        <SearchIcon
          style={styles.searchIcon}
          width={24}
          height={24}
          color={colors.color_search_icon}
        />
        <TextInput
          placeholderTextColor={'white'}
          placeholder="Search for the host"
          style={[styles.input, { color: colors.color_input }]}
        />
      </View>
      <TouchableOpacity onPress={openFilters} style={styles.filterBtn}>
        <FilterIcon width={24} height={24} color={colors.color_filter_icon} />
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
    paddingRight: 10,

    borderWidth: 1,
    borderRadius: 50,
    width: '95%',

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
