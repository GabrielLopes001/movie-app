import { Text, View } from 'react-native'

export function MovieDetails() {
  return (
    <View>
      <Text className="text-center text-3xl font-bold tracking-wider text-white">
        Movie Name
      </Text>
      <Text className="text-center text-base font-semibold text-neutral-400">
        Released
      </Text>
      <View className="mx-4 flex-row justify-center space-x-2">
        <Text className="text-center text-base font-semibold text-neutral-400">
          Action
        </Text>
        <Text className="text-center text-base font-semibold text-neutral-400">
          Comedy
        </Text>
      </View>
      <Text className="mx-4 text-center tracking-wide text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, non
        veniam nemo quae id voluptas magnam tempora cupiditate laudantium
        laboriosam voluptatibus eaque pariatur recusandae fugiat obcaecati,
        molestias quas. Amet, repudiandae!
      </Text>
    </View>
  )
}
