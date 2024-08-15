import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ProfileIcon from '@icons/profile.svg'
import React from 'react'
import CalendarIcon from '@icons/calendar.svg'
import TagIcon from '@icons/tag.svg'
import { Avatar } from '@shared/ui/Avatar'
import { WorkingDay } from '@shared/ui/WorkingDay'
import { Tags } from '@shared/ui/Tag/types'
import { Tag } from '@shared/ui/Tag/Tag'
import { SearchNavigationParam } from '@user/app/navigation/types'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { BtnFilled } from '@shared/ui/BtnFilled'

export const HostCard = () => {
  const navigation = useNavigation<StackNavigationProp<SearchNavigationParam>>()

  const goToHostPreview = () => {
    console.log('go to host preview')
    navigation.navigate('HostPreview')
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={goToHostPreview}
      style={styles.container}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Avatar size={50} color={'#13d95c3d'} />
        <View style={styles.textInfoContainer}>
          <Text style={styles.name}>Jon Doue</Text>
          <Text style={styles.specialty}>Software Engineer</Text>
        </View>
      </View>
      <View style={styles.workingDaysContainer}>
        <CalendarIcon width={20} height={20} color={'#6E6E77'} />
        <WorkingDay>Monday,</WorkingDay>
        <WorkingDay>Tuesday,</WorkingDay>
        <WorkingDay>Wednesday</WorkingDay>
      </View>
      <View style={styles.tagsContainer}>
        <TagIcon width={20} height={20} color={'#8E898A'} />
        <Tag value={Tags.BACKEND} />
        <Tag value={Tags.FULLSTACK} />
        <Tag value={Tags.FRONTEND} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderColor: '#0000002c',
    borderRadius: 10,
    borderWidth: 1,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#FFFFFF',

    shadowColor: '#0A8537',
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
    color: '#8E898A',
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
    backgroundColor: '#F4F4F5',
    borderRadius: 5,
    padding: 5,
  },
})
