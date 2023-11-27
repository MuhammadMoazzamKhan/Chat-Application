import { View, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { styles } from '../../theme';

const TextHeader = ({ heading, paragragh, no}) => {
    return (
        <View className='items-center mx-4 space-y-1'>
            <Text style={{ fontSize: wp(6) }} className='text-white font-bold mt-40'>{heading}</Text>
            <Text style={{ fontSize: wp(4) }} className='text-gray-300 font-semibold text-center tracking-wide'>{paragragh}{no && <Text style={styles.text} className='font-bold'>{'+'+ no}</Text>}</Text>
        </View>
    )
}

export default TextHeader