import { AppLayout } from './layout/AppLayout'
import Navigation from './navigation'
import { withProviders } from './providers/with-providers'

function UserApp() {
  return (
    <AppLayout>
      <Navigation />
    </AppLayout>
  )
}

export default withProviders(UserApp)
