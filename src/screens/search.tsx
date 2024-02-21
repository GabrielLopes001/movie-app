import { useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/outline'

import { fetchSearchMovie, image342 } from '@/api/moviedb'
import { MovieDataDTO } from '@/dtos/movies/movies-data-dto'
import { AppNavigationRoutesProps } from '@/routes'

const { width, height } = Dimensions.get('window')

export function Search() {
  const [results, setResults] = useState([] as MovieDataDTO[])
  const navigation = useNavigation<AppNavigationRoutesProps>()

  function handleSearch(value: string) {
    if (value && value.length > 2) {
      fetchSearchMovie({
        query: value,
        include_adult: false,
        language: 'en-US',
        page: 1,
      }).then((data) => {
        setResults(data.results)
      })
    }
  }

  const handleTextBounce = useCallback(handleSearch, [])
  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <View className="mx-4 mb-3 flex-row items-center justify-between rounded-full border border-neutral-500">
        <TextInput
          onChangeText={handleTextBounce}
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          className="flex-1 pb-1 pl-6 text-base font-semibold tracking-wide text-white"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('home')}
          className="m-1 rounded-full bg-neutral-500 p-3"
        >
          <XMarkIcon size="25" color="white" />
        </TouchableOpacity>
      </View>

      {results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="ml-1 font-semibold text-white">
            Results {results.length}
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {results.map(({ id, poster_path: posterPath, title }, index) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('movie', { id })}
                  key={index}
                >
                  <View className="mb-4 space-y-2">
                    <Image
                      source={{ uri: image342(posterPath) }}
                      style={{ width: width * 0.44, height: height * 0.3 }}
                      alt="poster"
                    />
                    <Text className="ml-1 text-neutral-300">{title}</Text>
                  </View>
                </TouchableWithoutFeedback>
              )
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row  justify-center">
          <Text className="text-center text-xl text-neutral-400">
            Movies Empty
          </Text>
        </View>
      )}
    </SafeAreaView>
  )
}
