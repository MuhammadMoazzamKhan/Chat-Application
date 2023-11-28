import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'
import FIcon from 'react-native-vector-icons/FontAwesome6'
import { styles } from '../theme';

const Home = () => {
  const [user, setUser] = useState([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]);

  const UserList = ({index}) => {
    const borderBottom = index+1 !== user.length;
    return (
      <TouchableOpacity borderBottom className={`py-3 flex-row justify-between ${borderBottom ? 'border-b border-b-yellow-800':''} `}>
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
    <View className='flex-1' style={styles.background}>
      {/* Header */}
      <SafeAreaView>
        <Image source={require('../src/image/ChatHome.jpg')} resizeMode='cover' style={{ width: wp(100), height: hp(18), opacity: .6 }} />
        <View className='absolute flex-row items-center mx-4 mt-4 space-x-3'>
          <Image style={{ width: wp(12), height: hp(7) }} source={require('../src/image/Icon.png')} />
          <Text style={{ fontSize: wp(6.5) }} className='font-extrabold text-white tracking-widest'>Martina Wolna</Text>
        </View>
      </SafeAreaView>


      {/* Chat List */}

      <View className='flex-1 rounded-tr-full -mt-11' style={styles.background} >
        <View className='flex-1 mx-4 my-3 '>
          <Text style={{ fontSize: wp(5.4) }} className='font-extrabold text-white tracking-wide mb-2 mt-1'>Chatrooms</Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={user}
            renderItem={UserList}
            scrollEnabled={true}
            keyExtractor={(item, index) => index.toString()}
            automaticallyAdjustKeyboardInsets
          />

        </View>
      </View>

    </View>
  )
}



export default Home