import { StyleSheet, Text, View } from 'react-native'

type ProfileStatusType = 'user' | 'host'

interface Props {
  status: ProfileStatusType
}

export const ProfileStatus = ({ status }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your status: {status}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
})
