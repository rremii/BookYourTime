import { FlatList, StyleSheet, View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { SearchHeader } from '@user/features/searchHeader/SearchHeader'
import { HostCard } from '@user/features/hostCard/HostCard'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { HostFilterContext } from '@user/entities/host/model/filtersStore'
import { useGetHosts } from '@user/entities/host/model/useGetHosts'

export const Search = () => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  const { ...filters } = useContext(HostFilterContext)
  const { hosts } = useGetHosts(filters)

  return (
    <View style={styles.container}>
      <SearchHeader />

      {!hosts?.length ? (
        <Text style={styles.noHostsText}>No hosts found</Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.cardContainer}
          data={hosts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HostCard {...item} />}
        />
      )}
    </View>
  )
}

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    container: {
      paddingTop: '20%',
      flex: 1,
      backgroundColor: colors.bcColor_standart_container,
    },
    cardContainer: {
      paddingBottom: '20%',
      gap: 20,
    },
    noHostsText: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 20,
      color: colors.color_standart_text,
    },
  })
