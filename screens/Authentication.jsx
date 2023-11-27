import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CountryPicker from 'react-native-country-picker-modal'
import AIcon from 'react-native-vector-icons/AntDesign'
import SocialAuth from '../src/components/SocialAuth';
import { styles } from '../theme';

const Authentication = () => {
    const [phoneNo, setPhoneNo] = useState('')
    const [countryCode, setCountryCode] = useState('PK')
    const [country, setCountry] = useState(null)
    const [withCountryNameButton, setWithCountryNameButton] = useState(false)
    const [withFlag, setWithFlag] = useState(true)
    const [withEmoji, setWithEmoji] = useState(true)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState(false)
    const [withCallingCode, setWithCallingCode] = useState(false)
    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
    }
    const textHandler = text => {
        setPhoneNo(text)
    }
    return (
        <View style={styles.background} className='flex-1'>
            <View className='items-center mx-4 space-y-1'>
                <Text style={{ fontSize: wp(5.7) }} className='text-white font-bold mt-40'>Enter Phone Number</Text>
                <Text style={{ fontSize: wp(3.5) }} className='text-gray-300 font-semibold text-center'>Please confirm your country code and enter your phone number</Text>
            </View>
            <View className=' mx-4 mt-10 space-y-2'>
                <Text style={{ fontSize: wp(4.3) }} className='text-white font-semibold'>
                    Phone Number
                </Text>
                <View className='flex-row justify-between space-x-2'>
                    <TouchableOpacity className='px-2 py-1 border border-gray-400 rounded-xl flex-row items-center'>
                        <Text style={{ fontSize: wp(4) }} className='text-white font-semibold'>🏁 +92</Text>
                        <AIcon name='down' size={20} color='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-1 px-2 py-1 border border-gray-400 rounded-xl'>
                        <TextInput
                            placeholder='Enter Your Phone Number'
                            placeholderTextColor={'white'}
                            onChangeText={textHandler}
                            keyboardType='numeric'
                            value={phoneNo}
                            className='text-white font-semibold'
                            style={{ fontSize: wp(4) }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Social Authentication */}
            <SocialAuth />

            <TouchableOpacity style={{...styles.btn,width:wp(30)}} className='mt-36 p-2 self-center rounded-xl'>
             <Text style={{ fontSize: wp(5) }}  className='text-white font-semibold text-center'>Next</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Authentication