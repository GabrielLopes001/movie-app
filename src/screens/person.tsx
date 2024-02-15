import { useState } from 'react'
import { Dimensions, Image, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ActorDetail } from '@/components/actor-detail'
import { Header } from '@/components/header'
import { MovieList } from '@/components/movie-list'

const { width, height } = Dimensions.get('window')

export function Person() {
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4])
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView>
        <Header />
      </SafeAreaView>

      <View
        className="flex-row justify-center"
        style={{
          shadowColor: 'gray',
          shadowRadius: 40,
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 1,
        }}
      >
        <View className="h-72 w-72 items-center overflow-hidden rounded-full border border-neutral-400">
          <Image
            source={require('../assets/movieImage.png')}
            style={{ height: height * 0.43, width: width * 0.74 }}
          />
        </View>
      </View>

      <ActorDetail />

      <MovieList title="Movies" data={personMovies} />
    </ScrollView>
  )
}
