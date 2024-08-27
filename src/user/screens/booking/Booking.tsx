import { FlatList, StyleSheet, View } from 'react-native'
import { Header } from './Header'
import { BookingCard } from '@user/features/bookingCard/BookingCard'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'

export const Booking = () => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  const data = new Array(10).fill(0)

  return (
    <View>
      <Header>Your bookings</Header>

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={data}
        renderItem={() => <BookingCard />}
      />
    </View>
  )
}
const getStyles = (colors: Theme) => StyleSheet.create({
  listContainer: {
    paddingBottom: 70,
    paddingTop: 20,
    gap: 10,
    backgroundColor: colors.bcColor_standart_container 
  },
})
