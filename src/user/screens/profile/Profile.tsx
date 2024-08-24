import { useTheme } from '@shared/moduls/theme'
import { Avatar } from '@shared/ui/Avatar'
import { LabelWithEdit } from '@shared/ui/LabelWithEdit'
import { ProfileStatus } from '@shared/ui/ProfileStatus'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { StyleSheet, Text, View } from 'react-native'

export const Profile = () => {
  const { colors } = useTheme()

  return (
    <View
      style={[
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
          <ProfileStatus status="user" />
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
      </View>

      <View
        style={[
          styles.btnContainer,
          { backgroundColor: colors.bcColor_standart_container },
        ]}
      >
        <UIButton
          type="danger"
          btnStyles={{ backgroundColor: colors.bcColor_btn_danger }}
          textStyles={{ color: colors.color_btn_danger }}
        >
          Delete account
        </UIButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 15,
  },
  textLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnContainer: {
    width: '100%',

    marginTop: 10,
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
})
