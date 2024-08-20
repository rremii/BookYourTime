import { FC, PropsWithChildren, useEffect } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { ModalProvider } from '@shared/moduls/modals/ModalProvider'
import { useModal } from '@shared/moduls/modals/useModal'
import { SearchFilters } from '@user/features/searchFilters.tsx/SearchFilters'

interface Props extends PropsWithChildren {}
export const AppLayout: FC<Props> = ({ children }) => {
  return <View style={{ flex: 1 }}>{children}</View>
}
