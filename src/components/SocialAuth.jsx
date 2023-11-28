import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';

const SocialAuth = () => {
  return (
    <View className='mx-4 mt-6 flex-row justify-center items-center space-x-10'>
      <TouchableOpacity activeOpacity={0.5}>
        <LottieView
          style={{ width: wp(10.8), height: hp(10.8) }}
          source={require('../image/GoogleLogo.json')} autoPlay loop />
      </TouchableOpacity >
      <TouchableOpacity activeOpacity={0.5}>
        <LottieView
          style={{ width: wp(13), height: hp(13) }}
          source={require('../image/FacebookLogo.json')} autoPlay loop />
      </TouchableOpacity>
    </View>
  )
}

export default SocialAuth