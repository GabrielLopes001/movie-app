import { Text, View } from 'react-native'

type MovieDetailsProps = {
  title: string
  description: string
  status: string
  releasedData: string
  duration: string
  genres: string[]
}

export function MovieDetails({
  title,
  description,
  status,
  releasedData,
  duration,
  genres = [],
}: MovieDetailsProps) {
  return (
    <View>
      <Text className="text-center text-3xl font-bold tracking-wider text-white">
        {title}
      </Text>
      <Text className="text-center text-base font-semibold text-neutral-400">
        {status} / {releasedData} / {duration} min
      </Text>
      {genres.map((genre, index) => {
        return (
          <View key={index} className="mx-4 flex-row justify-center space-x-2">
            <Text className="text-center text-base font-semibold text-neutral-400">
              {genre.name}
            </Text>
          </View>
        )
      })}
      <Text className="mx-4 text-center tracking-wide text-neutral-400">
        {description}
      </Text>
    </View>
  )
}
