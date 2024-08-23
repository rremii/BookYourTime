import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CalendarIcon from '@icons/calendar.svg'
import TagIcon from '@icons/tag.svg'
import { Avatar } from '@shared/ui/Avatar'
import { WorkingDay } from '@shared/ui/WorkingDay'
import { Tag } from '@shared/ui/Tag'
import { SearchNavigationParam } from '@user/app/navigation/types'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '@shared/moduls/theme/useTheme'

export const HostCard = () => {
  const { colors } = useTheme()
  const navigation = useNavigation<StackNavigationProp<SearchNavigationParam>>()

  const goToHostPreview = () => {
    navigation.navigate('HostPreview')
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={goToHostPreview}
      style={[
        styles.container,
        {
          borderColor: colors.borderColor_shadow,
          backgroundColor: colors.bcColor_card,
          shadowColor: colors.color_standart_shadow,
        },
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Avatar size={50} color={colors.color_standart_avatar} />
        <View style={styles.textInfoContainer}>
          <Text style={[styles.name, { color: colors.color_name }]}>
            Jon Doue
          </Text>
          <Text style={[styles.specialty, { color: colors.color_specialty }]}>
            Software Engineer
          </Text>
        </View>
      </View>
      <View style={styles.workingDaysContainer}>
        <CalendarIcon
          width={20}
          height={20}
          color={colors.color_calendar_icon}
        />
        <WorkingDay>Monday,</WorkingDay>
        <WorkingDay>Tuesday,</WorkingDay>
        <WorkingDay>Wednesday</WorkingDay>
      </View>
      <View style={styles.tagsContainer}>
        <TagIcon width={20} height={20} color={colors.color_tag_icon} />
        <Tag>Frontend</Tag>
        <Tag>Frontend</Tag>
        <Tag>Frontend</Tag>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    width: '90%',
    marginLeft: '5%',

    elevation: 5,
  },
  textInfoContainer: {
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  specialty: {
    fontSize: 15,
  },

  workingDaysContainer: {
    marginTop: 10,
    marginBottom: 7,
    flexDirection: 'row',
    gap: 5,
  },

  tagsContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#F4F4F5', //colors.bcColor_tag
    borderRadius: 5,
    padding: 5,
  },
})
