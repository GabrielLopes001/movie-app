import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { Person } from '@/screens/person'
import { Search } from '@/screens/search'

import { Home } from '../screens/home'
import { Movie } from '../screens/movie'

type AppRoutesProps = {
  home: undefined
  movie: { id: number }
  person: { id: string }
  search: undefined
}

export type AppNavigationRoutesProps = NativeStackNavigationProp<AppRoutesProps>

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesProps>()

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="movie" component={Movie} />
        <Screen name="person" component={Person} />
        <Screen name="search" component={Search} />
      </Navigator>
    </NavigationContainer>
  )
}
