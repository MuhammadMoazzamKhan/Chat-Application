import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../theme';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity)
const Button = ({btnClick, setBtnClick,title,onPress}) => {

    const animatedWidth= useSharedValue(200);
    const animatedRadius= useSharedValue(12);

    const animatedStyle = useAnimatedStyle(()=>{
        return{
            width:animatedWidth.value,
            borderRadius:animatedRadius.value
        }
    })

    const animationActivity = ()=>{
        if (animatedWidth.value === 200) {
            animatedWidth.value = withTiming(55,{duration:500})
            animatedRadius.value = withTiming(9999,{duration:500})
            setBtnClick(true)
        } else {
            animatedWidth.value = withTiming(200,{duration:500})
            animatedRadius.value = withTiming(12,{duration:500})
            setBtnClick(false)
        }
    }

    return (
        <AnimatedBtn onPress={()=>{animationActivity();onPress()}} style={[ {...styles.btn ,padding:10,alignSelf:'center'},animatedStyle ]}>
        {btnClick?<ActivityIndicator color='white' size={'large'} />: <Text style={{ fontSize: wp(5) }} className='text-white font-semibold text-center'>{title}</Text>}
        </AnimatedBtn>
    )
}

export default Button