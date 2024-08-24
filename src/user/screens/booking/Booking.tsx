import { FlatList, StyleSheet, View } from 'react-native'
import { Header } from './Header'
import { BookingCard } from '@user/features/bookingCard/BookingCard'
import { useTheme } from '@shared/moduls/theme'

export const Booking = () => {
  const { colors } = useTheme()
  const data = new Array(10).fill(0)

  return (
    <View>
      <Header>Your bookings</Header>

      <FlatList
        contentContainerStyle={[
          styles.listContainer,
          { backgroundColor: colors.bcColor_standart_container },
        ]}
        data={data}
        renderItem={() => <BookingCard />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 70,
    paddingTop: 20,
    gap: 10,
  },
})
