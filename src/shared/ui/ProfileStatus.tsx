import { StyleSheet, Text, View } from 'react-native'

type ProfileStatusType = 'user' | 'host'

interface Props {
  status: ProfileStatusType
}

export const ProfileStatus = ({ status }: Props) => {
  return (
    <View>
      <Text style={styles.text}>Your status: {status}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
})
