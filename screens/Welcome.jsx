import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { styles, theme } from '../theme';


const Welcome = () => {
    const navigation = useNavigation();
    return (
        <View className='flex-1'>
            <Image className='flex-[0.5] relative' style={{ width: wp(100), height: hp(50) }} resizeMode='cover' source={require('../src/image/welcome.jpg')} />
            <View style={styles.background} className='flex-[0.5] justify-between rounded-tl-3xl rounded-tr-3xl -mt-4'>
                    <View className='mx-4 my-6'>
                        <Text style={{fontSize:wp(8)}} className='text-white  font-bold tracking-widest'>
                            Stay connected{"\n"}with your friends{"\n"}and family
                        </Text>
                    </View>
                    <View className='flex-row mx-4 -mt-16 space-x-2 items-center'>
                        <Image source={require('../src/image/check-fill.png')} />
                        <Text style={{fontSize:wp(4)}} className='text-white font-semibold tracking-widest'>Secure, private messaging</Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Authentication')}
                    style={styles.btn}
                      className='bg-white mx-4 p-4 my-4 items-center rounded-full'
                      activeOpacity={0.5}>
                        <Text style={{fontSize:wp(5)}} className='text-white font-semibold tracking-widest'> Get Started</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome