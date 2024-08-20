import { Tag } from '@shared/ui/Tag'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { TagsPicker } from '@shared/moduls/tagsPicker/TagsPicker'
import { useState } from 'react'

interface Props {
  isEditing?: boolean
}

export const TagsSection = ({ isEditing }: Props) => {
  const [tags, setTags] = useState<string[]>(['Frontend', 'Backend'])

  const handleChange = (tags: string[]) => {
    setTags(tags)
  }

  return (
    <>
      {isEditing ? (
        <>
          <Text style={styles.sectionTitle}>Tags:</Text>
          <View style={[styles.sectionContainer, { marginTop: 5 }]}>
            <TagsPicker onChange={handleChange} tags={tags} />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.sectionTitle}>Tags</Text>
          <View style={[styles.sectionContainer, styles.paddingSection]}>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </View>
        </>
      )}
    </>
  )
}
