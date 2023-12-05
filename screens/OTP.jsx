import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React , {useEffect} from 'react'
import { styles, theme } from '../theme'
import TextHeader from '../src/components/TextHeader';
import OTPTextInput from 'react-native-otp-textinput'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';



const OTP = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    console.log(item)
  }, [item])
  return (
    <View style={styles.background} className='flex-1'>
      {/* Heading */}
      {/* <TextHeader heading='Enter Verification Code' paragragh='We have sent you an SMS with the code to ' no={number} /> */}

      {/* OPT View */}
      <View className='mx-4 my-14'>
        <OTPTextInput tintColor='#ee8886' offTintColor='#ffbc65'
          textInputStyle={style.OTPInput} containerStyle={style.OTPContainer} />
      </View>
      <View className='flex-1 justify-center'>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ borderColor: theme.text, ...styles.btn, width: wp(40) }} className='py-2 px-4 self-center rounded-xl'>
          <Text style={{ fontSize: wp(5) }} className='text-white font-semibold text-center'>Resend code</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  OTPContainer: {
    marginHorizontal: 60,
  },
  OTPInput: {
    backgroundColor: '#7a2d41',
    color: 'white',
    fontWeight: '700',
    borderWidth: 1,
    borderRadius: 10,
    borderBottomWidth: 1,
    backgroundColor: theme.inputBackground
  }
});

export default OTP