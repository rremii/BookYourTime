import { Tag } from '@shared/ui/Tag'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { TagsPicker } from '@shared/moduls/tagsPicker/TagsPicker'
import { useState } from 'react'
import { useTheme } from '@shared/moduls/theme'
import { UpdateHostValues } from '../Profile'

interface Props {
  isEditing?: boolean
  onChange: (tags: UpdateHostValues['tags']) => void
  tags?: UpdateHostValues['tags']
}

export const TagsSection = ({ isEditing, onChange, tags = [] }: Props) => {
  const { colors } = useTheme()

  const handleChange = (tags: string[]) => {
    onChange(tags)
  }

  return (
    <>
      <Text
        style={[styles.sectionTitle, { color: colors.color_section_title }]}
      >
        Tags:
      </Text>
      {isEditing ? (
        <View style={[styles.sectionContainer, { marginTop: 5 }]}>
          <TagsPicker onChange={handleChange} tags={tags} />
        </View>
      ) : (
        <View style={[styles.sectionContainer, styles.paddingSection]}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </View>
      )}
    </>
  )
}
