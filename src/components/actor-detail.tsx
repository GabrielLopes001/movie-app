import { Text, View } from 'react-native'

import { PersonPropsDTO } from '@/dtos/movies/person-data-dto'

type ActorDetailsProps = PersonPropsDTO

export function ActorDetail({
  name,
  placeOfBirth,
  popularity,
  department,
  birthday,
  biography,
  gender,
}: ActorDetailsProps) {
  return (
    <View className="mt-6">
      <Text className="text-center text-3xl font-bold text-white">{name}</Text>
      <Text className="text-center text-base  text-neutral-500">
        {placeOfBirth}
      </Text>

      <View className="mx-1 mt-6 flex-row items-center justify-between rounded-full bg-neutral-700 p-4">
        <View className="items-center border-r-2 border-r-neutral-400 px-2">
          <Text className="font-semibold text-white"> Gender</Text>
          <Text className="text-sm text-neutral-300">
            {gender === 1 ? 'Female' : 'Masc'}
          </Text>
        </View>
        <View className="items-center border-r-2 border-r-neutral-400 px-2">
          <Text className="font-semibold text-white"> Birthday</Text>
          <Text className="text-sm text-neutral-300"> {birthday}</Text>
        </View>
        <View className="items-center border-r-2 border-r-neutral-400 px-2">
          <Text className="font-semibold text-white"> Know for</Text>
          <Text className="text-sm text-neutral-300"> {department}</Text>
        </View>
        <View className="items-center px-2">
          <Text className="font-semibold text-white"> Popularity</Text>
          <Text className="text-sm text-neutral-300">{popularity}%</Text>
        </View>
      </View>

      <View className="my-6 space-y-2">
        <Text className="text-lg text-white">Biography</Text>
        <Text className="tracking-wide text-neutral-400">{biography}</Text>
      </View>
    </View>
  )
}
