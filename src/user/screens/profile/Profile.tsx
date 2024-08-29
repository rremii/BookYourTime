import { OpenSettings } from '@shared/features/ProfileSettingsModal/ui/OpenSettings'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { Avatar } from '@shared/ui/Avatar'
import { LabelWithEdit } from '@shared/ui/LabelWithEdit'
import { ProfileStatus } from '@shared/ui/ProfileStatus'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useGetMe } from '@user/entities/client/model/useGetMe'
import { ChangeLastName } from '@user/features/changeLastName/ChangeLastName'
import { ChangeName } from '@user/features/changeName/ChangeName'
import { DeleteAccount } from '@user/features/deleteAccount/DeleteAccount'
import { Controller, useForm } from 'react-hook-form'
import { StyleSheet, Text, View } from 'react-native'

export const Profile = () => {
  const { colors } = useTheme()

  const styles = getStyles(colors)
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headerContainer}>
          <ProfileStatus status="user" />
          <OpenSettings />
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
          <ChangeName />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textLabel}>Last name:</Text>
          <ChangeLastName />
        </View>
      </View>

      <View style={styles.btnContainer}>
        <DeleteAccount />
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

    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
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
