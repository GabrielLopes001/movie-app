import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, View } from 'react-native'

import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  image500,
} from '@/api/moviedb'
import { Cast } from '@/components/cast'
import { Header } from '@/components/header'
import { MovieDetails } from '@/components/movie-details'
import { MovieList } from '@/components/movie-list'
import { MoviesDataDTO } from '@/dtos/movies/movies-data-dto'
import { PersonDataDTO } from '@/dtos/movies/person-data-dtos'
import { AppRoutesNavigationProps } from '@/routes'

const { width, height } = Dimensions.get('window')

export function Movie() {
  const { params: item } = useRoute()
  const navigation: navigationPerson = useNavigation<AppRoutesNavigationProps>()
  const [cast, setCast] = useState([] as PersonDataDTO[])
  const [similarmovies, setSimilarmovies] = useState([] as MoviesDataDTO[])
  const [movie, setMovie] = useState({} as MoviesDataDTO)

  useEffect(() => {
    getMovieDetail(item?.id)
    getMovieCredits(item?.id)
    getSimilarMovies(item?.id)
  }, [item])

  async function getMovieDetail(id: string) {
    const data = await fetchMovieDetails(id)
    if (data) setMovie(data)
  }

  async function getMovieCredits(id: string) {
    const data = await fetchMovieCredits(id)
    if (data && data.cast) setCast(data.cast)
  }

  async function getSimilarMovies(id) {
    const data = await fetchSimilarMovies(id)
    if (data && data.results) setSimilarmovies(data.results)
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">
        <SafeAreaView className="absolute z-20">
          <Header />
        </SafeAreaView>
        <View>
          <Image
            source={{ uri: image500(movie?.posterPath) }}
            style={{ width, height: height * 0.55 }}
            alt="poster"
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>

      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        <MovieDetails
          title={movie?.title}
          overview={movie?.overview}
          status={movie?.status}
          releaseDate={movie?.releaseDate?.split('-')[0]}
          runtime={movie?.runtime}
          genres={movie?.genres}
        />
      </View>

      <Cast cast={cast} navigation={navigation} />
      <MovieList titlePage="Similar Movies" data={similarmovies} />
    </ScrollView>
  )
}
