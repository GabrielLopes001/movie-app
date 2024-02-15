import { Text, View } from 'react-native'

export function ActorDetail() {
  return (
    <View className="mt-6">
      <Text className="text-center text-3xl font-bold text-white">Gabriel</Text>
      <Text className="text-center text-base  text-neutral-500">
        São Paulo, Brazil
      </Text>

      <View className="mx-1 mt-6 flex-row items-center justify-between rounded-full bg-neutral-700 p-4">
        <View className="items-center border-r-2 border-r-neutral-400 px-2">
          <Text className="font-semibold text-white"> Gender</Text>
          <Text className="text-sm text-neutral-300"> Masc</Text>
        </View>
        <View className="items-center border-r-2 border-r-neutral-400 px-2">
          <Text className="font-semibold text-white"> Birthday</Text>
          <Text className="text-sm text-neutral-300"> 2001-06-20</Text>
        </View>
        <View className="items-center border-r-2 border-r-neutral-400 px-2">
          <Text className="font-semibold text-white"> Know for</Text>
          <Text className="text-sm text-neutral-300"> Student</Text>
        </View>
        <View className="items-center px-2">
          <Text className="font-semibold text-white"> Popularity</Text>
          <Text className="text-sm text-neutral-300"> 20.18</Text>
        </View>
      </View>

      <View className="my-6 space-y-2">
        <Text className="text-lg text-white">Biography</Text>
        <Text className="tracking-wide text-neutral-400">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          nihil ullam facilis ipsam repudiandae, fugiat, excepturi impedit quos
          corporis labore id quam neque totam adipisci nam repellendus,
          praesentium quisquam earum?
        </Text>
      </View>
    </View>
  )
}
