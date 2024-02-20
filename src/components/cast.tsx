import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { image185 } from '@/api/moviedb'

type CastProps = {
  cast: string[]
  navigation?: () => void
}

export function Cast({ cast = [], navigation }: CastProps) {
  return (
    <View className="my-4">
      <Text className="mx-4 mb-5 text-lg text-white"> Top Cast </Text>
      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }}>
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                className="mr-4 items-center"
                onPress={() => navigation.navigate('person', person)}
              >
                <View className="h-20 w-20 items-center overflow-hidden rounded-full border border-neutral-400">
                  <Image
                    className="h-24 w-20 rounded-2xl"
                    source={{ uri: image185(person?.profile_path) }}
                  />
                </View>
                <Text className="mt-1 text-xs text-white">
                  {person?.character}
                </Text>
                <Text className="mt-1 text-xs text-neutral-400">
                  {person?.name}
                </Text>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    </View>
  )
}
