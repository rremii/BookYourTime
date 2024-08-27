import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from '@shared/ui/Avatar'

export const ClientInfo = () => {
  return (
    <View style={{ alignItems: 'center', gap: 10 }}>
      <Text style={styles.hostInfoTitle}>client info:</Text>
      <Avatar size={75} color={'#13d95c3d'} />
      <Text style={styles.name}>Jon Doue</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  hostInfoTitle: {
    fontSize: 16,
    marginBottom: 5,
    width: '100%',
  },

  nameContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 20,
    marginBottom: 5,
  },
  name: {
    fontSize: 25,
    fontWeight: 'semibold',
    color: '#000',
  },
  specialty: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    color: '#585455',
  },
  tagsContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    rowGap: 5,
    columnGap: 7,
    flexWrap: 'wrap',
    maxWidth: '70%',
  },
})
