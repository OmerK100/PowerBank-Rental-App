import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Google from '../newIcons/Google.svg'
import Facebook from '../newIcons/Facebook.svg'
import { firebaseApp } from '../FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin'
import { useNavigation } from '@react-navigation/native'
import * as Keychain from 'react-native-keychain'
import { getAuth } from 'firebase/auth'
import auth, { firebase } from '@react-native-firebase/auth'

/*
  Login screen - Form for the user to login with several options:
  Firebase authentication
  Google authentication (not implemented yet)
  Apple authentication (not implemnted yet)
  Option for facebook was discarded
*/

const Login = () => {

  
  const navigation: any = useNavigation();
  const [changedInputEmail, setChangedInputEmail] = useState(""); // Form input states
  const [changedInputPassword, setChangedInputPassword] = useState("");
  const authRegular: any = getAuth(firebaseApp);

  async function handleLoginPress() {
    try {
      const response = await signInWithEmailAndPassword(authRegular, changedInputEmail, changedInputPassword); // Attempting sign in through Firebase authentication
      setCredentialsRegular(changedInputEmail, response.user.uid); // Saving the login credentials within user's phone in a secured manner (keychain) for future auto login


      firebase.auth().onAuthStateChanged((usere) => {
        console.log(usere);
        if (usere) {
          console.log(usere.uid);
        } else {
          console.log('aaabbbbb')
        }
      })

      navigation.navigate('Map'); // Back to map
    } catch (err: any) {
      console.log(err);
      alert('Sign in failed, email or password fields may be incorrect!')
    }
  }

  async function setCredentialsRegular(username, uid) {
    await Keychain.setGenericPassword(username, uid);
  }

  async function setCredentialsGoogle(token) {
    await Keychain.setGenericPassword("googleUser", token);
  }

  function handleSignupTitlePress() { // Move to sign up
    navigation.navigate('Signup');
  }

  function handleChangeEmail(text) { // Change of email state
    setChangedInputEmail(text)
  }

  function handleChangePassword(text) { // Change of password state
    setChangedInputPassword(text)
  }

  /*************************************************************************************************************************************************************** */

  async function handleGoogleAPIsignUp() { // For Google login, not ready yet
    
    
    /*try {
      GoogleSignin.configure({
        offlineAccess: false,
        webClientId: '757260617197-8p8ohhdc36d8j981bhk3dfhv68pjb6vg.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
      console.log(111)
      auth().signInWithCredential(googleCredentials);
      return userInfo;
    } catch (error) {
      console.log(error)
    }
  
return ;*/


try {

  GoogleSignin.configure({
    webClientId: '757260617197-8p8ohhdc36d8j981bhk3dfhv68pjb6vg.apps.googleusercontent.com',
    scopes: ['profile', 'email']
  });

      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  console.log(idToken);

  setCredentialsGoogle(googleCredential.token);

  console.log(321412)

  //const user = firebase.auth().currentUser;

  //console.log(user);

  /*user?.providerData.forEach((userinfo) => {
    console.log(userinfo);
  })*/

  firebase.auth().onAuthStateChanged((userrr) => {
    console.log(userrr);
    if (userrr) {
      console.log(userrr.uid);
    } else {
      console.log('aaa')
    }
  })


  navigation.navigate('Map');
  

  // Sign-in the user with the credential
  //return auth().signInWithCredential(googleCredential);

} catch (err) {
  console.log(err);
}
    
return ;

  }



  /*************************************************************************************************************************************************************** */

  return ( // Component
    <ImageBackground style={styles.container} source={require('../newImages/Rectangle.png')} imageStyle={{borderTopLeftRadius: 115, borderTopRightRadius: 115}} /* Main view */ >

      <View style={styles.options} /* Top nav bar */ >
        <View>
          <Text style={styles.loginText}>Log in</Text>
          <View style={styles.loginUnderline}></View>
        </View>
        <TouchableOpacity onPress={() => handleSignupTitlePress()}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.nestedContainer} /* Form body */ >

        <View style={styles.inputs} /* Inputs */ >
          <TextInput 
            style={styles.inputField} 
            placeholder='email' 
            placeholderTextColor='lightgray'
            onChangeText={text => handleChangeEmail(text)}
            value={changedInputEmail}
          >
          </TextInput>
          <TextInput 
            style={styles.inputField} 
            placeholder='password'
            placeholderTextColor='lightgray'
            onChangeText={text => handleChangePassword(text)}
            value={changedInputPassword}
          >
          </TextInput>
        </View>

        <TouchableOpacity onPress={() => handleLoginPress()}>
          <ImageBackground style={styles.loginButton} source={require('../newImages/rectButton.png')} imageStyle={{borderRadius: 35}}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </ImageBackground>
        </TouchableOpacity> 
        <Text style={styles.dashedLine} accessible={false}>------------------------------------------------</Text>
        <Text style={styles.connectText}>or connect with</Text>
        <View style={styles.externalLoginView} /* External sign in methods, not ready yet */ >
          <TouchableOpacity onPress={() => handleGoogleAPIsignUp()}>
            <Google/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Facebook/>
          </TouchableOpacity>
        </View>

      </View>

    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({ // Style

  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  options: {
    marginTop: 53,
    marginLeft: 33,
    flexDirection: 'row'
  },

  loginText: {
    color: '#3D003E',
    fontSize: 32,
    fontFamily: 'MontserratSemiBold'
  },

  signupText: {
    color: '#3D003E',
    opacity: 0.3,
    fontSize: 21,
    marginLeft: 30,
    marginTop: 15,
    fontFamily: 'MontserratSemiBold'
  },

  loginUnderline: {
    width: 50,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 3,
    marginTop: 2,
    marginLeft: 2
  },

  nestedContainer: {
    position: 'absolute',
    marginTop: 0.15 * Dimensions.get('window').height,
    height: 0.85 * Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  inputs: {
    marginTop: 60,
    marginRight: 5
  },

  inputField: {
    marginTop: 30,
    borderBottomWidth: 1,  
    borderColor: 'rgba(199, 199, 204, 0.5)',
    fontSize: 21,
    width: 300,
    fontFamily: 'MontserratRegular',
    color: '#3D003E'
  },

  loginButton: {
    marginTop: 60,
    width: Dimensions.get('window').width - 75,
    height: 65,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },

  loginButtonText: {
    fontSize: 21,
    fontFamily: 'MontserratRegular',
    color: '#3D003E'
  },

  dashedLine: {
    marginTop: 45,
    fontSize: 15,
    color: '#3D003E',
    fontFamily: 'MontserratRegular',
    opacity: 0.3
  },

  connectText: {
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'MontserratRegular',
    color: '#3D003E',
    opacity: 0.3
  },

  externalLoginView: {
    marginTop: 100,
    flexDirection: 'row',
    gap: 35,
    alignItems: 'center',
  },

  googleIcon: {
    borderWidth: 1,
    borderColor: 'black'
  }

});