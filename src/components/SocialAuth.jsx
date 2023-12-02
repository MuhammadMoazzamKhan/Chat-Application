import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';

// GoogleSignin
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, signInWithCredential  } from '@react-native-firebase/auth';

// Facebook Auth
// import { LoginManager, AccessToken,Settings } from 'react-native-fbsdk-next';

GoogleSignin.configure({
  webClientId: '1081219860319-9hl22037ggpuku3s4mbu5vkpckpheg1j.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
});

// Settings.setAppID('1081219860319-9hl22037ggpuku3s4mbu5vkpckpheg1j.apps.googleusercontent.com');



const SocialAuth = () => {

  const [first, setfirst] = useState()



  // const onFacebookButtonPress = async () => {
  //   try {
  //     // Attempt login with permissions
  //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  //     if (result.isCancelled) {
  //       throw 'User cancelled the login process';
  //     }

  //     // Once signed in, get the users AccessToken
  //     const data = await AccessToken.getCurrentAccessToken();

  //     if (!data) {
  //       throw 'Something went wrong obtaining access token';
  //     }

  //     // Create a Firebase credential with the AccessToken
  //     const facebookCredential = FacebookAuthProvider.credential(data.accessToken);

  //     // Sign-in the user with the credential
  //     return signInWithCredential(facebookCredential);
  //   } catch (error) {
  //     console.log("error----->" , error)
  //   }
  // }






  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = GoogleAuthProvider.credential(idToken);
      setfirst(googleCredential);
      return signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };




  return (
    <View className='mx-4 mt-6 flex-row justify-center items-center space-x-10'>
      <TouchableOpacity activeOpacity={0.5} onPress={signIn}>
        <LottieView
          style={{ width: wp(10.8), height: hp(10.8) }}
          source={require('../image/GoogleLogo.json')} autoPlay loop />
      </TouchableOpacity >
      <TouchableOpacity activeOpacity={0.5}>
        <LottieView
          style={{ width: wp(13), height: hp(13) }}
          source={require('../image/FacebookLogo.json')} autoPlay loop />
      </TouchableOpacity>
    </View>
  )
}

export default SocialAuth