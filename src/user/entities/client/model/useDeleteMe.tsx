import {useMutation} from '@tanstack/react-query'
import {clientApi} from '../api/api'
import {useEffect} from 'react'
import {useModal} from '@shared/moduls/modals/useModal'
import {Toast} from '@shared/ui/Toast'
import * as SecureStore from 'expo-secure-store'
import {getTokenNameByRole} from '@shared/utils/getTokenNameByRole'
import {navigateToWelcome} from '@root/app/providers/with-navigation'
import {Roles} from '@shared/entities/auth/types'

export const useDeleteMe = () => {
  const { openModal } = useModal()

  const {
    data: client,
    mutate: mutateMe,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: clientApi.deleteMe,
  })

  useEffect(() => {
    if (!isSuccess) return

    SecureStore.deleteItemAsync(getTokenNameByRole(Roles.CLIENT)).then(() => {
      openModal({
        name: 'Toast',
        duration: 2000,
        modal: Toast,
        props: { children: 'Account deleted', type: 'warn' },
      })
      navigateToWelcome()
    })
  }, [isSuccess])
  useEffect(() => {
    if (!error) return

    openModal({
      name: 'Toast',
      duration: 2000,
      modal: Toast,
      props: { children: 'Could not delete account', type: 'error' },
    })
  }, [error])

  const deleteMe = () => {
    mutateMe()
  }

  return { deleteMe, client, isPending, isSuccess, error }
}
