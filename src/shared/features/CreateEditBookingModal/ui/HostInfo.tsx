import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from '@shared/ui/Avatar'
import { Tag } from '@shared/ui/Tag'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'

export const HostInfo = () => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  return (
    <View style={styles.container}>
      <Text style={styles.hostInfoTitle}>Host info:</Text>
      <Avatar size={75} color={colors.color_standart_avatar} />
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
const getStyles = (colors: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      gap: 10,
    },
    hostInfoTitle: {
      fontSize: 16,
      marginBottom: 5,
      width: '100%',
      color: colors.color_standart_text,
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
      color: colors.color_name,
    },
    specialty: {
      marginTop: 5,
      marginBottom: 5,
      fontSize: 18,
      color: colors.color_specialty,
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
