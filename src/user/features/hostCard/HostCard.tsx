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
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { Host } from '@shared/entities/host/types'

interface Props extends Host {}

export const HostCard = ({ ...host }: Props) => {
  const navigation = useNavigation<StackNavigationProp<SearchNavigationParam>>()
  const { colors } = useTheme()

  const goToHostPreview = () => {
    navigation.navigate('HostPreview', {
      hostId: host.id,
    })
  }
  const styles = getStyles(colors)
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={goToHostPreview}
      style={styles.container}
    >
      <View style={styles.subContainer}>
        <Avatar size={50} color={colors.color_standart_avatar} />
        <View style={styles.textInfoContainer}>
          <Text style={styles.name}>
            {host?.firstName} {host?.lastName}
          </Text>
          <Text style={styles.specialty}>{host?.info}</Text>
        </View>
      </View>
      <View style={styles.workingDaysContainer}>
        <CalendarIcon
          width={20}
          height={20}
          color={colors.color_calendar_icon}
        />
        {host?.workDays?.map((day) => <WorkingDay key={day}>{day}</WorkingDay>)}
      </View>
      <View style={styles.tagsContainer}>
        <TagIcon width={20} height={20} color={colors.color_tag_icon} />
        {host?.tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </View>
    </TouchableOpacity>
  )
}

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    container: {
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
      width: '90%',
      marginLeft: '5%',
      borderColor: colors.borderColor_shadow,
      backgroundColor: colors.bcColor_card,

      shadowColor: colors.color_standart_shadow,
      elevation: 5,
    },
    subContainer: {
      flexDirection: 'row',
    },
    textInfoContainer: {
      marginLeft: 10,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 18,
      color: colors.color_name,
    },
    specialty: {
      fontSize: 15,
      color: colors.color_specialty,
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
      backgroundColor: colors.bcColor_tag,
      borderRadius: 5,
      padding: 5,
    },
  })
