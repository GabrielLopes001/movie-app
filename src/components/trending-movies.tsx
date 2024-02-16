import { useNavigation } from '@react-navigation/native'
import {
  Dimensions,
  Image,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { image500 } from '@/api/moviedb'
import { MoviesDataDTO } from '@/dtos/movies/movies-data-dto'

type TrendingMoviesProps = {
  data: MoviesDataDTO[]
}

type MovieCardProps = {
  item: MoviesDataDTO
  handleClick: () => void
}

const { width, height } = Dimensions.get('window')

export function TrendingMovies({ data }: TrendingMoviesProps) {
  const navigation = useNavigation()
  function handleMovieList(item) {
    navigation.navigate('movie', item)
  }
  return (
    <View className="mb-8">
      <Text className="mx-4 mb-5 text-xl text-white">Trending</Text>
      <Carousel
        data={data}
        firstItem={1}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={() => handleMovieList(item)} />
        )}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  )
}

const MovieCard = ({ item, handleClick }: MovieCardProps) => {
  return (
    <TouchableNativeFeedback onPress={handleClick}>
      <Image
        source={{ uri: image500(item.poster_path) }}
        style={{ width: width * 0.6, height: height * 0.4 }}
        className="rounded-3xl"
      />
    </TouchableNativeFeedback>
  )
}
