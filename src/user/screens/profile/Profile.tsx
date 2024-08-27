import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { Avatar } from '@shared/ui/Avatar'
import { LabelWithEdit } from '@shared/ui/LabelWithEdit'
import { ProfileHeader } from '@shared/ui/ProfileHeader'
import { ProfileStatus } from '@shared/ui/ProfileStatus'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { StyleSheet, Text, View } from 'react-native'

export const Profile = () => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  return (
    <View style={styles.container}>
      <ProfileHeader />
      <View style={styles.subContainer}>
        <View style={styles.entireWidth}>
          <ProfileStatus status="user" />
        </View>

        <View style={styles.marginAvatar}>
          <Avatar
            borderWidth={3}
            size={150}
            color={colors.color_standart_avatar}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textLabel}>Name:</Text>
          <LabelWithEdit label={'Artem'} labelStyle={styles.label} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textLabel}>Last name:</Text>
          <LabelWithEdit label={'Romanov'} labelStyle={styles.label} />
        </View>
      </View>

      <View style={styles.btnContainer}>
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

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bcColor_standart_container,
    },
    subContainer: {
      padding: 20,
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.bcColor_standart_container,
    },

    entireWidth: {
      width: '100%',
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
      color: colors.color_standart_text,
    },
    marginAvatar: {
      marginTop: 20,
      marginBottom: 30,
    },
    btnContainer: {
      width: '100%',

      marginTop: 10,
      padding: 10,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: colors.bcColor_standart_container,
    },
    label: {
      color: colors.color_standart_text,
    },
  })
