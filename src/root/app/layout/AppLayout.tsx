import { FC, PropsWithChildren } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ModalProvider } from '@shared/moduls/modals/ModalProvider'

interface Props extends PropsWithChildren {}

export const AppLayout: FC<Props> = ({ children }) => {
  const insets = useSafeAreaInsets()

  const { bottom, left, right, top } = insets
  const styles = getStyles(bottom, left, right, top)

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <ModalProvider>{children}</ModalProvider>
      </View>
    </View>
  )
}

const getStyles = (bottom: number, left: number, right: number, top: number) =>
  StyleSheet.create({
    container: {
      paddingTop: top,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
      flex: 1,
    },
    modalContainer: {
      flex: 1,
    },
  })
