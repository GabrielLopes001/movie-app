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

const { width, height } = Dimensions.get('window')

export function Movie() {
  const { params: item } = useRoute()
  const navigation = useNavigation()
  const [cast, setCast] = useState([])
  const [similarmovies, setSimilarmovies] = useState([])
  const [movie, setMovie] = useState({})

  useEffect(() => {
    // console.log('item id', item?.id)
    // console.log('genre0', item?.genres)
    getMovieDetail(item.id)
    getMovieCredits(item.id)
    getSimilarMovies(item.id)
  }, [item])

  async function getMovieDetail(id) {
    const data = await fetchMovieDetails(id)
    if (data) setMovie(data)
  }

  async function getMovieCredits(id) {
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
            source={{ uri: image500(movie?.poster_path) }}
            style={{ width, height: height * 0.55 }}
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
          description={movie?.overview}
          status={movie?.status}
          releasedData={movie?.release_date?.split('-')[0]}
          duration={movie?.runtime}
          genres={movie?.genres}
        />
      </View>

      <Cast cast={cast} navigation={navigation} />
      <MovieList titlePage="Similar Movies" data={similarmovies} />
    </ScrollView>
  )
}
