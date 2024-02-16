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
import { MoviesDataDTO } from '@/dtos/movies/movies-data-dto'

type MovieListProps = {
  titlePage: string
  data: MoviesDataDTO[]
}

const { width, height } = Dimensions.get('window')

export function MovieList({ data, titlePage }: MovieListProps) {
  const navigation = useNavigation()
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
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push('movie', item)}
            >
              <View className="mr-4 space-y-1">
                <Image
                  source={{ uri: image185(item.poster_path) }}
                  style={{ width: width * 0.33, height: height * 0.22 }}
                  className="rounded-3xl"
                />
                <Text className="ml-1 text-neutral-500">
                  {item.title.length > 14
                    ? item.title.slice(0, 14) + '...'
                    : item.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )
        })}
      </ScrollView>
    </View>
  )
}
