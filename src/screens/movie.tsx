import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, View } from 'react-native'

import { Cast } from '@/components/cast'
import { Header } from '@/components/header'
import { MovieDetails } from '@/components/movie-details'
import { MovieList } from '@/components/movie-list'

const { width, height } = Dimensions.get('window')

export function Movie() {
  const navigation = useNavigation()
  const [cast, setCast] = useState([1, 2, 3, 4])
  const [similarmovies, setSimilarmovies] = useState([1, 2, 3, 4])

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
            source={require('../assets/movieImage.png')}
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
        <MovieDetails />
      </View>

      <Cast cast={cast} navigation={navigation} />
      <MovieList title="Similar Movies" data={similarmovies} />
    </ScrollView>
  )
}
