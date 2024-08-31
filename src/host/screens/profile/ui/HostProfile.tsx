import {Avatar} from '@shared/ui/Avatar'
import {styles} from './styles'
import {Text, View} from 'react-native'
import {useTheme} from '@shared/moduls/theme'

export const HostProfile = () => {
  const { colors } = useTheme()

  return (
    <>
      <Avatar size={150} color={colors.color_standart_avatar} />
      <View style={styles.nameContainer}>
        <Text style={[styles.name, { color: colors.color_name }]}>
          Jon Doue
        </Text>
      </View>
      <Text style={[styles.specialty, { color: colors.color_specialty }]}>
        Software Engineer
      </Text>
    </>
  )
}
