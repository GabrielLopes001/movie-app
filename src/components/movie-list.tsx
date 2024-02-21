import { useNavigation } from '@react-navigation/native'
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { image185 } from '@/api/moviedb'
import { MovieDataDTO } from '@/dtos/movies/movies-data-dto'
import { AppNavigationRoutesProps } from '@/routes'

type MovieListProps = {
  titlePage: string
  data: MovieDataDTO[]
}

const { width, height } = Dimensions.get('window')

export function MovieList({ data, titlePage }: MovieListProps) {
  const navigation = useNavigation<AppNavigationRoutesProps>()
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between">
        <Text className="text-xl text-white">{titlePage}</Text>
        <TouchableOpacity>
          <Text className="text-lg text-orange-400">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map(({ id, poster_path: posterPath, title }, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push('movie', { id })}
            >
              <View className="mr-4 space-y-1">
                <Image
                  source={{ uri: image185(posterPath) }}
                  style={{ width: width * 0.33, height: height * 0.22 }}
                  className="rounded-3xl"
                  alt="poster"
                />
                <Text className="ml-1 text-neutral-500">
                  {title.length > 14 ? title.slice(0, 14) + '...' : title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )
        })}
      </ScrollView>
    </View>
  )
}
