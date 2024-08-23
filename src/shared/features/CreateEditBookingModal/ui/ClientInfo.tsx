import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from '@shared/ui/Avatar'
import { useTheme } from '@shared/moduls/theme/useTheme'

export const ClientInfo = () => {
  const { colors } = useTheme()

  return (
    <View style={{ alignItems: 'center', gap: 10 }}>
      <Text
        style={[styles.hostInfoTitle, { color: colors.color_standart_text }]}
      >
        client info:
      </Text>
      <Avatar size={75} color={colors.color_standart_avatar} />
      <Text style={[styles.name, { color: colors.color_name }]}>Jon Doue</Text>
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
  },
  specialty: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    color: '#585455', //colors.color_specialty
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
