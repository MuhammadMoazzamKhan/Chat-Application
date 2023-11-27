import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView, FlatList,KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'
import FIcon from 'react-native-vector-icons/FontAwesome6'

const Home = () => {
  const [user, setUser] = useState([1, 2, 3, 4])
  return (
    <View className='flex-1 bg-[#292f3f]'>
      <SafeAreaView className='flex-row items-center mx-4 mt-4 space-x-3'>
        <Image style={{ width: wp(10), height: hp(6) }} source={require('../src/image/Icon.png')} />
        <Text className='text-bold text-2xl text-white tracking-wide font-medium'>Martina Wolna</Text>
      </SafeAreaView>
      <View className='flex-row mx-4 items-center space-x-4 mt-2'>
        <View className='flex-1 flex-row justify-between items-center bg-[#00000040] rounded-2xl'>
          <TextInput placeholder='Search' placeholderTextColor="white" className='flex-1 pl-4 py-3 text-white font-semibold text-base' />
          <TouchableOpacity className='bg-[#565E70] p-2 rounded-xl'>
            <Icon name='search' size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className='bg-[#03A9F1] p-3 rounded-lg'>
          <FIcon name='plus' size={18} color="#fff" />
        </TouchableOpacity>
      </View>
      <View className='mx-4 my-3'>
        <Text className='text-bold text-xl text-white tracking-wide mb-2'>Chatrooms</Text>
        <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'
        >
          <FlatList
            data={user}
            renderItem={UserList}
            automaticallyAdjustKeyboardInsets
          />

        </ScrollView>
      </View>
    </View>
  )
}

const UserList = () => {
  return (
    <TouchableOpacity className='-my-3 flex-row justify-between items-center space-x-1'>
      <View className='flex-row items-center'>
      <Image style={{ width: wp(14), height: hp(14) }} source={require('../src/image/UserProfile.png')}/>
      <View className='-mt-3'>
        <Text className='text-white font-semibold text-lg'>Maciej Kowalski</Text>
        <Text className='text-neutral-400 font-semibold '>maciej.kowalski@email.com</Text>
      </View>
      </View>
      <Text className='text-white font-semibold text-lg -mt-8'>8:24</Text>
    </TouchableOpacity>
  )
}

export default Home