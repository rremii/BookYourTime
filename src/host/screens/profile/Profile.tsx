import { Avatar } from '@shared/ui/Avatar'
import { LabelWithEdit } from '@shared/ui/LabelWithEdit'
import { ProfileStatus } from '@shared/ui/ProfileStatus'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { WorkingHours } from './ui/WorkingHours'
import { WorkingDays } from './ui/WorkingDays'
import { BreakTime } from './ui/BreakTime'
import { TagsSection } from './ui/TagsSection'
import { useState } from 'react'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useTheme } from '@shared/moduls/theme'

export const Profile = () => {
  const { colors } = useTheme()
  const [isEditing, setIsEditing] = useState(false)

  const startEditing = () => {
    setIsEditing(true)
  }

  const submitEditing = () => {
    setIsEditing(false)
  }

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.bcColor_standart_container },
      ]}
    >
      <View
        style={[
          styles.subContainer,
          { backgroundColor: colors.bcColor_standart_container },
        ]}
      >
        <View style={{ width: '100%' }}>
          <ProfileStatus status="host" />
        </View>

        <View style={{ marginTop: 20, marginBottom: 30 }}>
          <Avatar
            borderWidth={3}
            size={150}
            color={colors.color_standart_avatar}
          />
        </View>

        <View style={styles.textContainer}>
          <Text
            style={[styles.textLabel, { color: colors.color_standart_text }]}
          >
            Name:
          </Text>
          <LabelWithEdit
            label={'Artem'}
            labelStyle={{ color: colors.color_standart_text }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text
            style={[styles.textLabel, { color: colors.color_standart_text }]}
          >
            Last name:
          </Text>
          <LabelWithEdit
            label={'Romanov'}
            labelStyle={{ color: colors.color_standart_text }}
          />
        </View>
        <View style={{ width: '100%' }}>
          <WorkingHours isEditing={isEditing} />

          <WorkingDays isEditing={isEditing} />

          <BreakTime isEditing={isEditing} />

          <TagsSection isEditing={isEditing} />
        </View>
      </View>

      <View
        style={[
          styles.btnContainer,
          { backgroundColor: colors.bcColor_standart_container },
        ]}
      >
        {isEditing ? (
          <>
            <UIButton
              type="filled"
              onPress={submitEditing}
              btnStyles={{ backgroundColor: colors.bcColor_btn_filled }}
              textStyles={{ color: colors.color_btn_filled }}
            >
              Save
            </UIButton>
          </>
        ) : (
          <>
            <UIButton
              type="danger"
              btnStyles={{ backgroundColor: colors.bcColor_btn_danger }}
              textStyles={{ color: colors.color_btn_danger }}
            >
              Delete account
            </UIButton>
            <UIButton
              type="simple"
              onPress={startEditing}
              btnStyles={{
                backgroundColor: colors.bcColor_button,
                borderColor: colors.borderColor_standart,
              }}
              textStyles={{ color: colors.color_standart_text }}
            >
              Edit
            </UIButton>
          </>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  subContainer: {
    padding: 20,
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
