import { Avatar } from '@shared/ui/Avatar'
import { BtnDanger } from '@shared/ui/BtnDanger'
import { LabelWithEdit } from '@shared/ui/LabelWithEdit'
import { ProfileStatus } from '@shared/ui/ProfileStatus'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { WorkingHours } from './ui/WorkingHours'
import { WorkingDays } from './ui/WorkingDays'
import { BreakTime } from './ui/BreakTime'
import { TagsSection } from './ui/TagsSection'
import { useState } from 'react'
import { BtnSimple } from '@shared/ui/BtnSimple'
import { BtnFilled } from '@shared/ui/BtnFilled'

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)

  const startEditing = () => {
    setIsEditing(true)
  }

  const submitEditing = () => {
    setIsEditing(false)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        <View style={{ width: '100%' }}>
          <ProfileStatus status="host" />
        </View>

        <View style={{ marginTop: 20, marginBottom: 30 }}>
          <Avatar borderWidth={3} size={150} color={'#0a853777'} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textLabel}>Name:</Text>
          <LabelWithEdit label={'Artem'} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textLabel}>Last name:</Text>
          <LabelWithEdit label={'Romanov'} />
        </View>
        <View style={{ width: '100%' }}>
          <WorkingHours isEditing={isEditing} />

          <WorkingDays isEditing={isEditing} />

          <BreakTime isEditing={isEditing} />

          <TagsSection isEditing={isEditing} />
        </View>
      </View>

      <View style={styles.btnContainer}>
        {isEditing ? (
          <>
            <BtnFilled onPress={submitEditing}>Save</BtnFilled>
          </>
        ) : (
          <>
            <BtnDanger>Delete account</BtnDanger>
            <BtnSimple onPress={startEditing}>Edit</BtnSimple>
          </>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {},
  subContainer: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },

  textContainer: {
    flexDirection: 'row',
    gap: 20,
    width: '100%',
    paddingLeft: 40,
    marginBottom: 10,
  },
  textLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  btnContainer: {
    width: '100%',
    gap: 10,
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
})
