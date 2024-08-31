import { BtnParams } from '@shared/ui/UIButton/types'
import { FC } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Pressable,
} from 'react-native'

export interface DangerBtnProps extends BtnParams {
  withSpinner?: boolean
  mainColor?: string
  activeColor?: string
  subColor?: string
}

type StyleParams = {
  pending?: boolean
  mainColor?: string
  activeColor?: string
  subColor?: string
}

export const DangerBtn: FC<DangerBtnProps> = ({
  pending,
  btnStyles,
  onPress,
  textStyles,
  children,
  withSpinner = false,
  ...colors
}) => {
  const styles = getStyles({ pending, ...colors })
  return (
    <Pressable
      disabled={pending}
      onPress={onPress}
      style={[styles.btn, btnStyles]}
    >
      {withSpinner && pending ? (
        <ActivityIndicator
          size="small"
          animating={true}
          color={colors.subColor}
        />
      ) : (
        <Text style={[styles.text, textStyles]}>{children}</Text>
      )}
    </Pressable>
  )
}

const getStyles = ({
  pending,
  activeColor,
  mainColor,
  subColor,
}: StyleParams) =>
  StyleSheet.create({
    btn: {
      backgroundColor: pending ? activeColor : mainColor,
      borderRadius: 10,
      padding: 25,
      paddingTop: 7,
      justifyContent: 'center',

      paddingBottom: 7,
    },
    text: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '500',
      color: subColor,
    },
  })
