import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Person } from '@/screens/person'
import { Search } from '@/screens/search'

import { Home } from '../screens/home'
import { Movie } from '../screens/movie'

const { Navigator, Screen } = createNativeStackNavigator()

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
