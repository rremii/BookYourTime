import { Tag } from '@shared/ui/Tag'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { TagsPicker } from '@shared/moduls/tagsPicker/TagsPicker'
import { useState } from 'react'
import { useTheme } from '@shared/moduls/theme/useTheme'

interface Props {
  isEditing?: boolean
}

export const TagsSection = ({ isEditing }: Props) => {
  const { colors } = useTheme()

  const [tags, setTags] = useState<string[]>(['Frontend', 'Backend'])

  const handleChange = (tags: string[]) => {
    setTags(tags)
  }

  return (
    <>
      {isEditing ? (
        <>
          <Text
            style={[styles.sectionTitle, { color: colors.color_section_title }]}
          >
            Tags:
          </Text>
          <View style={[styles.sectionContainer, { marginTop: 5 }]}>
            <TagsPicker onChange={handleChange} tags={tags} />
          </View>
        </>
      ) : (
        <>
          <Text
            style={[styles.sectionTitle, { color: colors.color_section_title }]}
          >
            Tags
          </Text>
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
