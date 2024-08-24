import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from '@shared/ui/Avatar'
import { Tag } from '@shared/ui/Tag'
import { useTheme } from '@shared/moduls/theme'

export const HostInfo = () => {
  const { colors } = useTheme()

  return (
    <View style={{ alignItems: 'center', gap: 10 }}>
      <Text
        style={[styles.hostInfoTitle, { color: colors.color_standart_text }]}
      >
        Host info:
      </Text>
      <Avatar size={75} color={colors.color_standart_avatar} />
      <Text style={[styles.name, { color: colors.color_name }]}>Jon Doue</Text>
      <Text style={[styles.specialty, { color: colors.color_specialty }]}>
        Software Engineer
      </Text>
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
    fontSize: 16,
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
  },
  specialty: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
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
