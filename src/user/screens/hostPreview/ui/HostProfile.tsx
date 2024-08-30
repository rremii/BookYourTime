import { Avatar } from '@shared/ui/Avatar'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { useTheme } from '@shared/moduls/theme'
import { Host } from '@shared/entities/host/types'

interface Props {
  firstName?: Host['firstName']
  lastName?: Host['lastName']
  info?: Host['info']
}

export const HostProfile = ({ firstName, info, lastName }: Props) => {
  const { colors } = useTheme()

  return (
    <>
      <Avatar size={150} color={colors.color_standart_avatar} />
      <View style={styles.nameContainer}>
        <Text style={[styles.name, { color: colors.color_name }]}>
          {firstName} {lastName}
        </Text>
      </View>
      <Text style={[styles.specialty, { color: colors.color_specialty }]}>
        {info}
      </Text>
    </>
  )
}
