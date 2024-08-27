import { AppLayout } from './layout/AppLayout'
import Navigation from './navigation'
import { withProviders } from './providers/with-providers'

function App() {
  return (
    <AppLayout>
      <Navigation />
    </AppLayout>
  )
}

export const RootApp = withProviders(App)
