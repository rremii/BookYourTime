import { useTheme } from '@shared/moduls/theme'
import { StyleSheet, Text, View } from 'react-native'

type ProfileStatusType = 'user' | 'host'

interface Props {
  status: ProfileStatusType
}

export const ProfileStatus = ({ status }: Props) => {
  const { colors } = useTheme()

  return (
    <View>
      <Text style={[styles.text, { color: colors.color_standart_text }]}>
        Your status: {status}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
