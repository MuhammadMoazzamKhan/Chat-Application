import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import AIcon from 'react-native-vector-icons/AntDesign'
import SocialAuth from '../src/components/SocialAuth';
import { styles, theme } from '../theme';
import { useNavigation } from '@react-navigation/native';
import TextHeader from '../src/components/TextHeader';
import auth from '@react-native-firebase/auth';
import Button from '../src/components/Button';

const Authentication = () => {
    const [btnClick, setBtnClick] = useState(false)
    const [phoneNo, setPhoneNo] = useState('')
    const [error, setError] = useState(null)
    const [countryCode, setCountryCode] = useState('PK')
    const [callingCode, setCallingCode] = useState(92)
    const [visibilityOfCountry, setVisibilityOfCountry] = useState(false)
    const [confirm, setConfirm] = useState(null)

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
    console.log(confirm)


    async function signInWithPhoneNumber() {
        try {
            const phoneNumber = ("+" + callingCode + phoneNo).toString();
            if (callingCode && phoneNo.length > 9) {
                setError("")
                const confirmation = await auth().signInWithPhoneNumber("+923140039815");
                setConfirm(confirmation);
                console.log(phoneNumber)
                //   navigation.navigate('OTP',confirmation)
            } else if (phoneNo.length === 0) {
                setError(`* Enter Your Number please`)
            } else {
                setError(`* This number ${phoneNumber} does not exsist!`)
            }
        } catch (error) {
            console.log(error)
            setError(error)
        }
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

                <View className='flex-row justify-between space-x-2'>
                    <TouchableOpacity style={{ borderColor: theme.btn, ...styles.inputBackground }} onPress={visibilityHandler} className='px-2 py-1 border rounded-xl flex-row items-center'>
                        <CountryPicker
                            {...{
                                countryCode,
                                onSelect
                            }}
                            visible={visibilityOfCountry}
                            theme={DARK_THEME}
                        />
                        <Text style={{ fontSize: wp(4.3) }} className='text-white font-semibold text-center'>{"+" + callingCode}</Text>
                        <AIcon name='down' size={18} color='#fff' />
                    </TouchableOpacity>


                    <TouchableOpacity style={{ borderColor: theme.btn, ...styles.inputBackground }} className='flex-1 px-2 py-1 border rounded-xl'>
                        <TextInput
                            placeholder='Enter Your Phone Number'
                            placeholderTextColor={theme.inputPlaceholder}
                            onChangeText={textHandler}
                            keyboardType='numeric'
                            value={phoneNo}
                            maxLength={10}
                            className='text-white font-medium'
                            style={{ fontSize: wp(4.3) }}
                        />
                    </TouchableOpacity>
                </View>
                {error && <Text style={{ fontSize: wp(4) }} className='text-red-500 font-semibold self-center'>{error}</Text>}
            </View>

            {/* Social Authentication */}
            <SocialAuth />

            {/* Bottom Button */}
            <View className='flex-1 justify-center'>
                <Button title='Next' onPress={signInWithPhoneNumber} btnClick={btnClick} setBtnClick={setBtnClick} />
            </View>

        </View>
    )
}

export default Authentication