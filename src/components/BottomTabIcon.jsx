import { View, Text } from 'react-native'
import React from 'react'
import EIcon from 'react-native-vector-icons/Entypo'
import FIcon from 'react-native-vector-icons/FontAwesome'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../theme'


const BottomTabIcon = ({ route, isFocused }) => {

    const renderIcon = (route, isFocused)=>{
    
        switch (route) {
            case "Home":
                return <EIcon name='chat' size={20} color={isFocused?theme.background:'#fff'} />
                break;
            case "GroupChat":
                return <FIcon name='group' size={20} color={isFocused?theme.background:'#fff'} />
                break;
            case "Search":
                return <FIcon name='search' size={20} color={isFocused?theme.background:'#fff'} />
                break;
            case "Profile":
                return <MIcon name='card-account-details' size={20} color={isFocused?theme.background:'#fff'} />
                break;
            default:
                break;
        }
    
    }
    return (
        <View>
            {renderIcon( route, isFocused)}
        </View>
    )
}

export default BottomTabIcon