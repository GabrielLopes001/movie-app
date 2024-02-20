import { useNavigation } from '@react-navigation/native'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { image185 } from '@/api/moviedb'
import { PersonDataDTO } from '@/dtos/movies/person-data-dtos'
import { AppRoutesNavigationProps } from '@/routes'

import { ProfileDefault } from './profile-default'

type CastProps = {
  cast: PersonDataDTO[]
  navigation: () => void
}

export function Cast({ cast = [] }: CastProps) {
  const navigation = useNavigation<AppRoutesNavigationProps>()

  return (
    <View className="my-4">
      <Text className="mx-4 mb-5 text-lg text-white"> Top Cast </Text>
      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }}>
        {cast &&
          cast.map(({ id = '', character, name, profilePath }, index) => {
            return (
              <TouchableOpacity
                key={index}
                className="mr-4 items-center"
                onPress={() => navigation.navigate('person', { id })}
              >
                <View className="h-20 w-20 items-center overflow-hidden rounded-full border border-neutral-400">
                  <Image
                    className="h-24 w-20 rounded-2xl"
                    source={{
                      uri: image185(profilePath) || <ProfileDefault />,
                    }}
                    alt="profile"
                  />
                </View>
                <Text className="mt-1 text-xs text-white">{character}</Text>
                <Text className="mt-1 text-xs text-neutral-400">{name}</Text>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    </View>
  )
}
