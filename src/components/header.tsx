import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, View } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'

export function Header() {
  const navigation = useNavigation()
  return (
    <View className="w-full flex-row items-center justify-between px-4">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="rounded-xl bg-orange-400 p-1"
      >
        <ChevronLeftIcon color="white" size="28" strokeWidth={2.5} />
      </TouchableOpacity>
      <TouchableOpacity>
        <HeartIcon size="35" color="white" />
      </TouchableOpacity>
    </View>
  )
}
