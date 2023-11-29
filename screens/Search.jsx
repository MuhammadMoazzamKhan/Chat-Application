import { View, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Search = () => {
  return (
    <View className='flex-row mx-4 items-center space-x-4 mt-2'>
        <View className='flex-1 flex-row justify-between items-center bg-[#00000040] rounded-2xl'>
          <TextInput placeholder='Search' placeholderTextColor="white" className='flex-1 pl-4 py-3 text-white font-semibold text-base' />
          <TouchableOpacity className='bg-[#565E70] p-2 rounded-xl'>
            <Icon name='search' size={28} color="#fff" />
          </TouchableOpacity>
    </View>
    </View>
  )
}

export default Search