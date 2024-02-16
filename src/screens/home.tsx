import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline'
import { SafeAreaView } from 'react-native-safe-area-context'

import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from '@/api/moviedb'
import { MovieList } from '@/components/movie-list'
import { TrendingMovies } from '@/components/trending-movies'
import { MoviesDataDTO } from '@/dtos/movies/movies-data-dto'

export function Home() {
  const [trending, setTrending] = useState<MoviesDataDTO[]>(
    [] as MoviesDataDTO[],
  )
  const [upcoming, setUpcoming] = useState<MoviesDataDTO[]>(
    [] as MoviesDataDTO[],
  )
  const [toprated, setToprated] = useState<MoviesDataDTO[]>(
    [] as MoviesDataDTO[],
  )

  const navigation = useNavigation()

  useEffect(() => {
    getTrendingMovies()
    getUpcomingMovies()
    getTopRatedMovies()
  }, [])

  async function getTrendingMovies() {
    const data = await fetchTrendingMovies()
    // console.log(data)
    if (data && data.results) {
      setTrending(data.results)
    }
  }
  async function getUpcomingMovies() {
    const data = await fetchUpcomingMovies()
    // console.log(data)
    if (data && data.results) {
      setUpcoming(data.results)
    }
  }
  async function getTopRatedMovies() {
    const data = await fetchTopRatedMovies()
    // console.log(data)
    if (data && data.results) {
      setToprated(data.results)
    }
  }

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
        {trending.length > 0 && <TrendingMovies data={trending} />}
        <MovieList titlePage="Upcoming" data={upcoming} />
        <MovieList titlePage="Top Rated" data={toprated} />
      </ScrollView>
    </View>
  )
}
