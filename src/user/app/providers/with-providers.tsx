import compose from 'compose-function'
import { withNavigation } from './with-navigation'

export const withProviders = compose(withNavigation)
