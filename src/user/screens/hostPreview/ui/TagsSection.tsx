import { Tag } from '@shared/ui/Tag'
import { styles } from './styles'
import { Text, View } from 'react-native'

export const TagsSection = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Tags</Text>
      <View style={[styles.sectionContainer, styles.paddingSection]}>
        <Tag>Frontend</Tag>
        <Tag>Frontend</Tag>
        <Tag>Frontend</Tag>
      </View>
    </>
  )
}
