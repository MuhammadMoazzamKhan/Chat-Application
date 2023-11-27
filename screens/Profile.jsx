import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import TextHeader from '../src/components/TextHeader'

const Profile = () => {
  return (
    <View style={styles.background} className='flex-1'>

      {/* Heading */}
      <TextHeader heading='Enter Verification Code' paragragh='We have sent you an SMS with the code to '/>

    </View>
  )
}

export default Profile