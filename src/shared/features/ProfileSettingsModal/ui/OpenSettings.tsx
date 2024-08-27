import { Theme } from '@shared/moduls/theme/types'
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import SettingsIcon from '@icons/settings.svg'
import { useTheme } from '@shared/moduls/theme'
import { useModal } from '@shared/moduls/modals/useModal'
import { ProfileSettingsModal } from '../ProfileSettingsModal'

export const OpenSettings = () => {
  const { colors } = useTheme()
  const { openModal } = useModal()

  const openSettings = () => {
    openModal({ name: 'ProfileSettings', modal: ProfileSettingsModal })
  }

  return (
    <TouchableOpacity onPress={openSettings}>
      <SettingsIcon color={colors.color_fill_icon} />
    </TouchableOpacity>
  )
}
