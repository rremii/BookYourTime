import { useTheme } from '@shared/moduls/theme'
import { LabelWithEdit } from '@shared/ui/LabelWithEdit'
import { useGetMe } from '@user/entities/client/model/useGetMe'
import { Children, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { nameSchema } from './nameSchema'
import { Theme } from '@shared/moduls/theme/types'
import { useUpdateMe } from '@user/entities/client/model/useUpdateMe'
import { useModal } from '@shared/moduls/modals/useModal'
import { Toast } from '@shared/ui/Toast'

export const ChangeName = () => {
  const { client } = useGetMe()
  const { colors } = useTheme()
  const { updateMe } = useUpdateMe()
  const { openModal } = useModal()

  const [validError, setValidError] = useState('')
  const resetError = () => setValidError('')
  const [name, setName] = useState(client?.firstName || '')
  const reset = () => setName(client?.firstName || '')

  useEffect(() => {
    if (!client || validError) return
    updateMe({ id: client.id, firstName: name })
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
