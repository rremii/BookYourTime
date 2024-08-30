import {AuthProvider} from '@host/entities/auth/model/AuthProvider'
import {FC} from 'react'

export const withHostAuth =
  (Component: FC): FC =>
  (props) => {
    return (
      <AuthProvider>
        <Component {...props} />
      </AuthProvider>
    )
  }
