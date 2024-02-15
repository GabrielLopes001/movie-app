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

type MovieListProps = {
  title: string
  data: number[]
}

const { width, height } = Dimensions.get('window')

export function MovieList({ title, data }: MovieListProps) {
  const navigation = useNavigation()
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between">
        <Text className="text-xl text-white">{title}</Text>
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
                  source={require('../assets/movieImage.png')}
                  style={{ width: width * 0.33, height: height * 0.22 }}
                  className="rounded-3xl"
                />
                <Text className="ml-1 text-neutral-500">Movie Name</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        })}
      </ScrollView>
    </View>
  )
}
