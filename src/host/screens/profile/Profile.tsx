import { Avatar } from '@shared/ui/Avatar'
import { LabelWithEdit } from '@shared/ui/LabelWithEdit'
import { ProfileStatus } from '@shared/ui/ProfileStatus'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { WorkingHours } from './ui/WorkingHours'
import { WorkingDays } from './ui/WorkingDays'
import { BreakTime } from './ui/BreakTime'
import { TagsSection } from './ui/TagsSection'
import { useEffect, useState } from 'react'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { OpenSettings } from '@shared/features/ProfileSettingsModal/ui/OpenSettings'
import { ChangeName } from '@host/features/changeName/ChangeName'
import { ChangeLastName } from '@host/features/changeLastName/ChangeLastName'
import { useGetMe } from '@host/entities/host/model/useGetMe'
import { Host, WorkDays } from '@shared/entities/host/types'
import { useUpdateMe } from '@host/entities/host/model/useUpdateMe'
import { UpdateHostDto } from '@host/entities/host/types'
import { DeleteAccount } from '@host/features/deleteAccount/DeleteAccount'

export interface UpdateHostValues extends Partial<Host> {}

// const host: Host = {
//   id: '12321',
//   name: 'test',
//   lastName: 'test',
//   tags: ['test'],
//   workHours: [{ from: '10:00', to: '11:00' }],
//   workDays: [WorkDays.Friday],
// }
export const Profile = () => {
  const { host } = useGetMe()
  const { colors } = useTheme()
  const { updateMe, isSuccess } = useUpdateMe()
  const [isEditing, setIsEditing] = useState(false)

  const [updatedHost, setUpdatedHost] = useState<UpdateHostValues>({
    tags: host?.tags,
    workHours: host?.workHours,
    workDays: host?.workDays,
  })

  useEffect(() => {
    if (!host) return
    setUpdatedHost({
      tags: host?.tags,
      workHours: host?.workHours,
      workDays: host?.workDays,
    })
  }, [host])

  const onChange =
    (property: keyof UpdateHostValues) =>
    (value: UpdateHostValues[keyof UpdateHostValues]) => {
      setUpdatedHost({ ...updatedHost, [property]: value })
    }

  const startEditing = () => {
    setIsEditing(true)
  }

  const submitEditing = () => {
    if (!host) return

    console.log(updatedHost)
    const dto: UpdateHostDto = {
      id: host?.id,
      tags: updatedHost.tags,
      workHours: updatedHost.workHours,
      workDays: updatedHost.workDays,
    }

    updateMe(dto)

    setIsEditing(false)
  }

  const styles = getStyles(colors)
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ProfileStatus status="host" />
        <OpenSettings />
      </View>
      <ScrollView contentContainerStyle={styles.subContainer}>
        <View style={styles.avatar}>
          <Avatar
            borderWidth={3}
            size={150}
            color={colors.color_standart_avatar}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textLabel}>Name:</Text>
          <ChangeName />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textLabel}>Last name:</Text>
          <ChangeLastName />
        </View>
        <View style={styles.widthEntire}>
          <WorkingHours
            onChange={onChange('workHours')}
            workingHours={updatedHost?.workHours}
            isEditing={isEditing}
          />

          <WorkingDays
            onChange={onChange('workDays')}
            workingDays={updatedHost?.workDays}
            isEditing={isEditing}
          />

          <BreakTime isEditing={isEditing} />

          <TagsSection
            onChange={onChange('tags')}
            tags={updatedHost?.tags}
            isEditing={isEditing}
          />
        </View>
      </ScrollView>

      <View style={styles.btnContainer}>
        {isEditing ? (
          <>
            <UIButton
              type="filled"
              onPress={submitEditing}
              mainColor={colors.bcColor_btn_filled}
              subColor={colors.color_btn_filled}
              activeColor={colors.bcColor_btn_filled_active}
            >
              Save
            </UIButton>
          </>
        ) : (
          <>
            <UIButton
              onPress={startEditing}
              type="simple"
              mainColor={colors.borderColor_standart}
              activeColor={colors.borderColor_active}
            >
              Edit
            </UIButton>
            <DeleteAccount />
          </>
        )}
      </View>
    </View>
  )
}

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    container: {
      height: '97%',
      backgroundColor: colors.bcColor_standart_container,
    },
    subContainer: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: colors.bcColor_standart_container,
    },
    widthEntire: {
      width: '100%',
    },
    headerContainer: {
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '100%',
    },

    avatar: {
      marginTop: 20,
      marginBottom: 30,
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
      color: colors.color_standart_text,
    },
    btnContainer: {
      width: '100%',
      gap: 10,
      flexDirection: 'row',
      marginTop: 10,
      padding: 10,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: colors.bcColor_standart_container,
    },
    btnSimple: {
      backgroundColor: colors.bcColor_button,
      borderColor: colors.borderColor_standart,
    },
    label: {
      color: colors.color_standart_text,
    },
  })
