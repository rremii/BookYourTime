import { Avatar } from '@shared/ui/Avatar'
import { styles } from './styles'
import { View, Text } from 'react-native'

export const HostProfile = () => {
  return (
    <>
      <Avatar size={150} color={'#13d95c3d'} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Jon Doue</Text>
      </View>
      <Text style={styles.specialty}>Software Engineer</Text>
    </>
  )
}
