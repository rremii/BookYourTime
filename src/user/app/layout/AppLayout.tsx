import { FC, PropsWithChildren, useEffect } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { ModalProvider } from '@shared/moduls/modals/ModalProvider'
import { useModal } from '@shared/moduls/modals/useModal'
import { SearchFilters } from '@user/features/searchFilters.tsx/SearchFilters'

interface Props extends PropsWithChildren {}
export const AppLayout: FC<Props> = ({ children }) => {
  const insets = useSafeAreaInsets()

  const { bottom, left, right, top } = insets

  return (
    <View
      style={
        styles({
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
          paddingTop: top,
        }).pageLayout
      }
    >
      <ModalProvider>{children}</ModalProvider>
    </View>
  )
}

const styles = ({
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: {
  paddingTop: number
  paddingBottom: number
  paddingLeft: number
  paddingRight: number
}) =>
  StyleSheet.create({
    pageLayout: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#1B1B1B',
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
    },
  })
