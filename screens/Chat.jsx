import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IIcon from 'react-native-vector-icons/Ionicons'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'


const Chat = () => {
  const navigation = useNavigation();

  const [chats, setChats] = useState([1, 2, 3, 4, 5])

  const navigate = () => {
    navigation.goBack();
  }
  // #fff1bf
  return (
    <SafeAreaView className='flex-1'>
      {/* Header */}
      <View style={style.header} >
        <TouchableOpacity onPress={navigate} className='mt-4 flex-row items-center space-x-1'>
          <IIcon name='chevron-back-outline' size={20} color='#fff' />
          <FastImage style={{ width: wp(8), height: hp(5) }} source={require('../src/image/UserProfile.png')} className='rounded-full' />
          <Text style={{ fontSize: wp(4.5) }} className='font-semibold text-white'>Vicky Aurthor</Text>
        </TouchableOpacity>
      </View>
      
      {/* Messages */}
      <View className=' flex-1 -mt-6 rounded-tr-3xl rounded-tl-3xl' style={styles.background}>
      <View className='mx-2 mt-3 space-y-2'>
      <Text  style={{fontSize:wp(3.8)}} className='text-white self-center font-normal tracking-wider'>Yesturday</Text>
        <View style={{width:wp(80)}} className='bg-[#ffe1cc] rounded-b-xl rounded-tr-xl py-1 px-2'> 
          <Text  style={{fontSize:wp(3.8)}} className='text-black leading-5 font-medium tracking-wider'>Hello</Text>
          <Text style={{fontSize:wp(3.5)}} className='text-black self-end font-normal tracking-wider'>80:00</Text>
        </View>
        <View style={{width:wp(80)}} className='bg-[#ffe1cc] rounded-b-xl rounded-tr-xl p-2'> 
          <Text  style={{fontSize:wp(3.8)}} className='text-black leading-5 font-medium tracking-wider'>React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities. Wikipedia</Text>
          <Text style={{fontSize:wp(3.5)}} className='text-black self-end font-normal tracking-wider'>80:00</Text>
        </View>
        <View style={{width:wp(80)}} className='bg-[#fff1bf] rounded-b-xl rounded-tl-xl p-2 self-end'> 
          <Text  style={{fontSize:wp(3.8)}} className='text-black leading-5 font-medium tracking-wider'>React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities. Wikipedia</Text>
          <Text style={{fontSize:wp(3.5)}} className='text-black self-end font-normal tracking-wider'>80:00</Text>
        </View>
      </View>

        {/* Message Input */}
        <View className='w-full absolute bottom-0'>
          <View className='mx-2 mb-1 flex-row justify-between items-center bg-[#00000040] rounded-2xl'>
            <TextInput placeholder='Message' placeholderTextColor="white" className='flex-1 pl-4 py-3 text-white font-semibold text-base' />
            <TouchableOpacity className='bg-[#565E70] p-3 rounded-xl'>
              <Icon name='send' size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  header:
    { width: wp(100), height: hp(12), backgroundColor: '#000' },
})

export default Chat