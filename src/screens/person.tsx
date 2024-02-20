import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { fetchPersonDetails, fetchPersonMovies, image342 } from '@/api/moviedb'
import { ActorDetail } from '@/components/actor-detail'
import { Header } from '@/components/header'
import { MovieList } from '@/components/movie-list'

const { width, height } = Dimensions.get('window')

export function Person() {
  const [personMovies, setPersonMovies] = useState([])
  const [person, setPerson] = useState({})
  const { params: item } = useRoute()

  useEffect(() => {
    getPersonDetails(item.id)
    getPersonMovies(item.id)
  }, [item])

  async function getPersonDetails(id) {
    const data = await fetchPersonDetails(id)
    if (data) setPerson(data)
  }

  async function getPersonMovies(id) {
    const data = await fetchPersonMovies(id)
    if (data && data.cast) setPersonMovies(data.cast)
  }
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
      showsHorizontalScrollIndicator={false}
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
            source={{ uri: image342(person.profile_path) }}
            style={{ height: height * 0.43, width: width * 0.74 }}
          />
        </View>
      </View>

      <ActorDetail
        name={person?.name}
        place={person.place_of_birth}
        popularity={person.popularity}
        department={person.known_for_department}
        birthday={person.birthday}
        biography={person.biography}
        gender={person.gender}
      />

      <MovieList titlePage="Movies" data={personMovies} />
    </ScrollView>
  )
}
