import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/outline'

const { width, height } = Dimensions.get('window')

export function Search() {
  const [results, setResults] = useState([1, 2, 3, 4])
  const navigation = useNavigation()
  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <View className="mx-4 mb-3 flex-row items-center justify-between rounded-full border border-neutral-500">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          className="flex-1 pb-1 pl-6 text-base font-semibold tracking-wide text-white"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('home')}
          className="m-1 rounded-full bg-neutral-500 p-3"
        >
          <XMarkIcon size="25" color="white" />
        </TouchableOpacity>
      </View>

      {results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="ml-1 font-semibold text-white">
            Results {results.length}
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('movie')}
                  key={index}
                >
                  <View className="mb-4 space-y-2">
                    <Image
                      source={require('../assets/movieImage.png')}
                      style={{ width: width * 0.44, height: height * 0.3 }}
                    />
                    <Text className="ml-1 text-neutral-300">Movie Name</Text>
                  </View>
                </TouchableWithoutFeedback>
              )
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row  justify-center">
          <Text className="text-center text-xl text-neutral-400">
            Movies Empty
          </Text>
        </View>
      )}
    </SafeAreaView>
  )
}
