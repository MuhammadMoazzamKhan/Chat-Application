import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { styles, theme } from '../theme'
import FIcon from "react-native-vector-icons/FontAwesome"
import AIcon from "react-native-vector-icons/AntDesign"
import Input from '../src/components/Input'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'


const Profile = () => {

    const navigation = useNavigation();


    return (
        <View style={styles.background} className='flex-1 items-center'>
            <TouchableOpacity activeOpacity={.7} style={{height:100,width:100}} className='mt-20 rounded-full items-center justify-center '>
                <FIcon name='user-circle' color='#fff' size={80} />
                <View className='absolute bottom-0 right-1'>
                <AIcon name='pluscircle' color={theme.text} size={25} />
                </View>
            </TouchableOpacity>

            {/* Input */}
            
            <View className='w-full p-5 my-10'>
                    <Input placeholder='First Name' />
                    <Input placeholder='Last Name (Optional)' />
            </View>



            {/* Bottom Button */}
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ ...styles.btn, width: wp(30) }} className='mt-36 p-2 self-center rounded-xl'>
                <Text style={{ fontSize: wp(5) }} className='text-white font-semibold text-center'>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile