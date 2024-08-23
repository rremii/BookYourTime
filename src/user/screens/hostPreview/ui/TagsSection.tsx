import { Tag } from '@shared/ui/Tag'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { useTheme } from '@shared/moduls/theme/useTheme'

export const TagsSection = () => {
  const { colors } = useTheme()

  return (
    <>
      <Text
        style={[styles.sectionTitle, { color: colors.color_section_title }]}
      >
        Tags
      </Text>
      <View style={[styles.sectionContainer, styles.paddingSection]}>
        <Tag>Frontend</Tag>
        <Tag>Frontend</Tag>
        <Tag>Frontend</Tag>
      </View>
    </>
  )
}
