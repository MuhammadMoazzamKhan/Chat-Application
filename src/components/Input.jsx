import { View, Text,TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { styles, theme } from '../../theme'
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Input = (props) => {
    return (
        <View className='w-full'>
            <TouchableOpacity className='w-full border rounded-xl px-2 my-1' style={{borderColor:theme.btn ,...styles.inputBackground}} >
                <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor={theme.inputPlaceholder}
                    {...props}
                    className='text-white font-semibold rounded-xl'
                    style={style.input}
                />
            </TouchableOpacity>
            {props.error &&
                <Text style={style.errorText} className='text-red-500 font-bold m-1'>
                    * {props.error}
                </Text>
            }
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        fontSize: wp(4.3)
    },
    errorText: {
        fontSize: wp(3.5)
    }
})

export default Input