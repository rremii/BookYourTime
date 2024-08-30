import { useTheme } from '@shared/moduls/theme'
import { LabelWithEdit } from '@shared/ui/LabelWithEdit'
import { Children, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { nameSchema } from './nameSchema'
import { Theme } from '@shared/moduls/theme/types'
import { useModal } from '@shared/moduls/modals/useModal'
import { Toast } from '@shared/ui/Toast'
import { useGetMe } from '@host/entities/host/model/useGetMe'
import { useUpdateMe } from '@host/entities/host/model/useUpdateMe'

export const ChangeName = () => {
  const { host } = useGetMe()
  const { colors } = useTheme()
  const { updateMe } = useUpdateMe()
  const { openModal } = useModal()

  const [validError, setValidError] = useState('')
  const resetError = () => setValidError('')
  const [name, setName] = useState(host?.firstName || '')
  const reset = () => setName(host?.firstName || '')

  useEffect(() => {
    if (!host || validError) return
    updateMe({ id: host.id, firstName: name })
  }, [name])

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
  }, [validError, name])

  const onChange = (newName: string) => {
    setName(newName)
    nameSchema.validate(newName).catch((err) => {
      reset()
      setValidError(err.errors[0])
    })
  }

  const styles = getStyles(colors)
  return (
    <LabelWithEdit onChange={onChange} label={name} labelStyle={styles.label} />
  )
}
const getStyles = (colors: Theme) =>
  StyleSheet.create({
    label: {
      color: colors.color_standart_text,
    },
  })
