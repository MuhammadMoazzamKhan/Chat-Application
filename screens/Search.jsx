import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from '../theme';
import LottieView from 'lottie-react-native';

const Search = () => {
  const [user, setUser] = useState([]);

  const UserList = ({ index }) => {
    const borderBottom = index + 1 !== user.length;
    return (
      <TouchableOpacity borderBottom className={`py-3 flex-row justify-between ${borderBottom ? 'border-b border-b-yellow-800' : ''} `}>
        <View className='flex-row items-center space-x-2'>
          <Image style={{ width: wp(12), height: hp(7) }} source={require('../src/image/UserProfile.png')} className='rounded-full' />
          <View>
            <Text style={{ fontSize: wp(4) }}
              className='text-white font-bold'>
              Maciej Kowalski
            </Text>
            <Text style={{ fontSize: wp(3.3) }}
              className='text-neutral-400 font-semibold '>
              maciej.kowalski@email.com
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: wp(3.6) }}
          className='text-white font-bold'>
          8:24
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView className='flex-1' style={styles.background}>
      <View className='flex-row mx-4 items-center space-x-4 mt-4'>
        <View className='flex-1 flex-row justify-between items-center bg-[#00000040] rounded-2xl'>
          <TextInput placeholder='Search' placeholderTextColor="white" className='flex-1 pl-4 py-3 text-white font-semibold text-base' />
          <TouchableOpacity className='bg-[#565E70] p-3 rounded-xl'>
            <Icon name='search' size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View className='flex-1 rounded-tr-full mb-14' >
        <View className='flex-1 mx-4 my-3'>
          <Text style={{ fontSize: wp(4) }} className='font-extrabold text-white tracking-wide mb-1'>Result</Text>

         { user.length > 0 ? (<FlatList
            showsVerticalScrollIndicator={false}
            data={user}
            renderItem={UserList}
            scrollEnabled={true}
            keyExtractor={(item, index) => index.toString()}
            automaticallyAdjustKeyboardInsets
          />):(
            <View className=' flex-1 items-center justify-center' >
            <LottieView
            style={{ width: wp(100), height: hp(65) }}
            source={require('../src/image/EmptyResult.json')} autoPlay loop />
          </View>
          )}

        </View>
      </View>

    </SafeAreaView>
  )
}

export default Search