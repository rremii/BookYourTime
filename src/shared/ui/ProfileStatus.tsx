import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { StyleSheet, Text, View } from 'react-native'

type ProfileStatusType = 'user' | 'host'

interface Props {
  status: ProfileStatusType
}

export const ProfileStatus = ({ status }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  return (
    <View>
      <Text style={styles.text}>
        Your status: {status}
      </Text>
    </View>
  )
}

const getStyles = (colors: Theme) => StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.color_standart_text
  },
})
