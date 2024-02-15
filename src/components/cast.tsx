import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

type CastProps = {
  cast: number[]
  navigation: () => void
}

export function Cast({ cast, navigation }: CastProps) {
  return (
    <View className="my-4">
      <Text className="mx-4 mb-5 text-lg text-white"> Top Cast </Text>
      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }}>
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('person', person)}
                className="mr-4 items-center"
              >
                <View className="h-20 w-20 items-center overflow-hidden rounded-full border border-neutral-400">
                  <Image
                    className="h-24 w-20 rounded-2xl"
                    source={require('../assets/movieImage.png')}
                  />
                </View>
                <Text className="mt-1 text-xs text-white">John doe</Text>
                <Text className="mt-1 text-xs text-neutral-400">John doe</Text>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    </View>
  )
}
