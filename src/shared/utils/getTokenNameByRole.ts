import { Roles } from '@shared/entities/auth/types'

export const getTokenNameByRole = (role: Roles) => {
  switch (role) {
    case 'client':
      return 'client-token'
    case 'host':
      return 'host-token'
    default:
      return 'client-token'
  }
}
