import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import AIcon from 'react-native-vector-icons/AntDesign'
import SocialAuth from '../src/components/SocialAuth';
import { styles, theme } from '../theme';
import { useNavigation } from '@react-navigation/native';
import TextHeader from '../src/components/TextHeader';

const Authentication = () => {
    const [phoneNo, setPhoneNo] = useState('')
    const [countryCode, setCountryCode] = useState('PK')
    const [callingCode, setCallingCode] = useState(92)
    const [visibilityOfCountry, setVisibilityOfCountry] = useState(false)

    const navigation = useNavigation();

    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCallingCode(Number.parseInt(country.callingCode[0]))
    }

    const textHandler = text => {
        setPhoneNo(text)
    }

    const visibilityHandler = () => {
        setVisibilityOfCountry(!visibilityOfCountry)
    }

    return (
        <View style={styles.background} className='flex-1'>
            {/* Heading */}

            <TextHeader heading='Enter Phone Number' paragragh='Please confirm your country code and enter your phone number' />

            {/* Input Sections */}

            <View className=' mx-4 mt-10 space-y-2'>

                <Text style={{ fontSize: wp(4.5) }} className='text-white font-semibold'>
                    Phone Number
                </Text>

                <View  className='flex-row justify-between space-x-2'>
                    <TouchableOpacity  style={{borderColor:theme.btn ,...styles.inputBackground}} onPress={visibilityHandler} className='px-2 py-1 border rounded-xl flex-row items-center'>
                        <CountryPicker
                            {...{
                                countryCode,
                                onSelect
                            }}
                            visible={visibilityOfCountry}
                            theme={DARK_THEME}
                        />
                        <Text style={{ fontSize: wp(4.3) }} className='text-white font-semibold text-center'>{"+"+callingCode}</Text>
                        <AIcon name='down' size={18} color='#fff' />
                    </TouchableOpacity>


                    <TouchableOpacity style={{borderColor:theme.btn ,...styles.inputBackground}}  className='flex-1 px-2 py-1 border rounded-xl'>
                        <TextInput
                            placeholder='Enter Your Phone Number'
                            placeholderTextColor={theme.inputPlaceholder}
                            onChangeText={textHandler}
                            keyboardType='numeric'
                            value={phoneNo}
                            className='text-white font-medium'
                            style={{ fontSize: wp(4.3) }}
                        />
                    </TouchableOpacity>

                </View>
            </View>

            {/* Social Authentication */}
            <SocialAuth />

            {/* Bottom Button */}

            <TouchableOpacity  onPress={()=>navigation.navigate('OTP')}  style={{...styles.btn, width: wp(30) }} className='mt-20 p-2 self-center rounded-xl'>
                <Text style={{ fontSize: wp(5) }} className='text-white font-semibold text-center'>Next</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Authentication