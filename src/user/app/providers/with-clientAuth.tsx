import {AuthProvider} from '@user/entities/auth/model/AuthProvider'
import {FC} from 'react'

export const withClientAuth =
  (Component: FC): FC =>
  (props) => {
    return (
      <AuthProvider>
        <Component {...props} />
      </AuthProvider>
    )
  }
