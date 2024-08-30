import {Tag} from '@shared/ui/Tag'
import {styles} from './styles'
import {Text, View} from 'react-native'
import {useTheme} from '@shared/moduls/theme'
import {Host} from '@shared/entities/host/types'

interface Props {
  tags?: Host['tags']
}

export const TagsSection = ({ tags }: Props) => {
  const { colors } = useTheme()

  return (
    <>
      <Text
        style={[styles.sectionTitle, { color: colors.color_section_title }]}
      >
        Tags
      </Text>
      <View style={[styles.sectionContainer, styles.paddingSection]}>
        {tags?.map((tag, index) => <Tag key={tag}>{tag}</Tag>)}
      </View>
    </>
  )
}
