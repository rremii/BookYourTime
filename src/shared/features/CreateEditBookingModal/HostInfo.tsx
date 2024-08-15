import { View, Text } from 'react-native'
import { Avatar } from '@shared/ui/Avatar'
import { Tag } from '@shared/ui/Tag'
import { StyleSheet } from 'react-native'

export const HostInfo = () => {
  return (
    <View style={{ alignItems: 'center', gap: 10 }}>
      <Text style={styles.hostInfoTitle}>Host info:</Text>
      <Avatar size={75} color={'#13d95c3d'} />
      <Text style={styles.name}>Jon Doue</Text>
      <Text style={styles.specialty}>Software Engineer</Text>
      <View style={styles.tagsContainer}>
        <Tag>Frontend</Tag>
        <Tag>Frontend</Tag>
        <Tag>Frontend</Tag>
        <Tag>Frontend</Tag>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  hostInfoTitle: {
    fontSize: 18,
    marginBottom: 5,
    width: '100%',
  },
  hostName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  nameContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 20,
    marginBottom: 5,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
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
