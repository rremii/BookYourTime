import React from 'react'
import ProfileIcon from '@icons/profile.svg'
import { View, StyleSheet } from 'react-native'

interface Props {
  rounded?: boolean
  size?: number
  color?: string
  borderWidth?: number
}

export const Avatar = ({
  color = '#000',
  rounded = true,
  size = 50,
  borderWidth = 2,
}: Props) => {
  const styles = getStyles(color, rounded, size, borderWidth)

  const iconSize = rounded ? size - 20 : size
  return (
    <View style={styles.container}>
      <ProfileIcon color={color} width={iconSize} height={iconSize} />
    </View>
  )
}
const getStyles = (
  color: string,
  rounded: boolean,
  size: number,
  borderWidth: number,
) =>
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      borderColor: color,
      borderWidth: rounded ? borderWidth : 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
