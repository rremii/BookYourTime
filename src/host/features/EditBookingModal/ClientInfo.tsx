import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from '@shared/ui/Avatar'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { Client } from '@shared/entities/client/types'

interface Props {
  clientInfo?: Client
}

export const ClientInfo = ({ clientInfo }: Props) => {
  const { firstName, id, lastName } = clientInfo || {}

  const { colors } = useTheme()
  const styles = getStyles(colors)

  return (
    <View style={styles.container}>
      <Text style={styles.hostInfoTitle}>client info:</Text>
      <Avatar size={75} color={colors.color_standart_avatar} />
      <Text style={styles.name}>
        {firstName} {lastName}
      </Text>
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

    nameContainer: {
      flexDirection: 'row',
      gap: 5,
      marginTop: 20,
      marginBottom: 5,
    },
    name: {
      fontSize: 25,
      fontWeight: 'semibold',
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
