import { FC, PropsWithChildren, useEffect } from 'react'
import { View } from 'react-native'
import { ModalProvider } from '@shared/moduls/modals/ModalProvider'

interface Props extends PropsWithChildren {}
export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ModalProvider>{children}</ModalProvider>
    </View>
  )
}
