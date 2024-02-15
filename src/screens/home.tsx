import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline'
import { SafeAreaView } from 'react-native-safe-area-context'

import { MovieList } from '@/components/movie-list'
import { TrendingMovies } from '@/components/trending-movies'

export function Home() {
  const [trending, setTrending] = useState([1, 2, 3])
  const [upcoming, setUpcoming] = useState([1, 2, 3])
  const [toprated, setToprated] = useState([1, 2, 3])

  const navigation = useNavigation()

  return (
    <View className="flex-1 bg-neutral-900">
      <SafeAreaView className="-mb-2">
        <StatusBar style="light" />
        <View className="mx-4 flex-row items-center justify-between ">
          <Bars3BottomLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-3xl font-bold text-white">Movie</Text>
          <TouchableOpacity onPress={() => navigation.navigate('search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TrendingMovies data={trending} />
        <MovieList title="Upcoming" data={upcoming} />
        <MovieList title="Top Rated" data={toprated} />
      </ScrollView>
    </View>
  )
}
