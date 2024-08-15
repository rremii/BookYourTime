import { Tag } from '@shared/ui/Tag/Tag'
import { Tags } from '@shared/ui/Tag/types'
import { styles } from './styles'
import { View, Text } from 'react-native'

export const TagsSection = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Tags</Text>
      <View style={[styles.sectionContainer, styles.paddingSection]}>
        <Tag value={Tags.BACKEND} />
        <Tag value={Tags.FRONTEND} />
        <Tag value={Tags.FULLSTACK} />
      </View>
    </>
  )
}
