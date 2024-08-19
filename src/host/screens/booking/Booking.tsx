import { HostCard } from '@user/features/hostCard/HostCard'
import { View, Text, FlatList } from 'react-native'
import { Header } from '../../features/CalendarSlider/ui/Header'
import { StyleSheet } from 'react-native'
import { BookingCard } from '@user/features/bookingCard/BookingCard'
import { CalendarSlider } from '../../features/CalendarSlider/CalendarSlider'

export const Booking = () => {
  return (
    <View style={{ flex: 1 }}>
      <CalendarSlider />
    </View>
  )
}
