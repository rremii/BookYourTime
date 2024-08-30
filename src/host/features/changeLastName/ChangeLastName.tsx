import { useTheme } from '@shared/moduls/theme'
import { LabelWithEdit } from '@shared/ui/LabelWithEdit'
import { Children, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Theme } from '@shared/moduls/theme/types'
import { useModal } from '@shared/moduls/modals/useModal'
import { Toast } from '@shared/ui/Toast'
import { lastNameSchema } from './lastNameSchema'
import { useGetMe } from '@host/entities/host/model/useGetMe'
import { useUpdateMe } from '@host/entities/host/model/useUpdateMe'

export const ChangeLastName = () => {
  const { host } = useGetMe()
  const { colors } = useTheme()
  const { updateMe } = useUpdateMe()
  const { openModal } = useModal()

  const [validError, setValidError] = useState('')
  const resetError = () => setValidError('')
  const [lastName, setLastName] = useState(host?.lastName || '')
  const reset = () => setLastName(host?.lastName || '')

  useEffect(() => {
    if (!host || validError) return
    updateMe({ id: host.id, lastName })
  }, [lastName])

  useEffect(() => {
    if (!validError) return
    openModal({
      name: 'Toast',
      duration: 2000,
      modal: Toast,
      props: { children: validError, type: 'error' },
    })

    const timer = setTimeout(() => {
      resetError()
      clearTimeout(timer)
    }, 2000)
  }, [validError, lastName])

  const onChange = (newName: string) => {
    setLastName(newName)
    lastNameSchema.validate(newName).catch((err) => {
      reset()
      setValidError(err.errors[0])
    })
  }

  const styles = getStyles(colors)
  return (
    <LabelWithEdit
      onChange={onChange}
      label={lastName}
      labelStyle={styles.label}
    />
  )
}
const getStyles = (colors: Theme) =>
  StyleSheet.create({
    label: {
      color: colors.color_standart_text,
    },
  })
