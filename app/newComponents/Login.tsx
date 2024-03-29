import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import ArrowDown from '../newIcons/arrowDown.svg'
import Google from '../newIcons/Google.svg'
import Facebook from '../newIcons/Facebook.svg'
import CheckIcon from '../newIcons/check_icon.svg'
import LinearGradient from 'react-native-linear-gradient'

import { FIREBASE_AUTH } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin'

import { useNavigation } from '@react-navigation/native'

import * as Keychain from 'react-native-keychain'



/*<SelectList
            setSelected={(val) => setSelected(val)}
            maxHeight={300}
            data={data}
            placeholder='050'
            search={false}
            inputStyles={{fontSize: 21, color: selected !== "" ? '#3D003E' : 'lightgray'}}
            fontFamily='MontserratRegular'
            dropdownStyles={{position: 'absolute', marginTop: 60, width : 126, zIndex: 999, backgroundColor: '#FFFFFF'}}
            dropdownTextStyles={{fontSize: 21}}
            boxStyles={{borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 1,  borderRadius: 0, width: 126, borderColor: 'rgba(199, 199, 204, 0.5)', position: 'relative'}}
            arrowicon={<ArrowDown style={styles.arrowDown} height={22} width={22}/>}
          />
          <View style={styles.rightInputView}>
            <TextInput 
              style={styles.rightNumberInput} 
              keyboardType='numeric' 
              placeholder='1234567' 
              placeholderTextColor='lightgray'
              onChangeText={text => handleChangeNumber(text)} 
              value={changedInputNumber}
              maxLength={7}
            >
            </TextInput> */


const Login = () => {

  const navigation: any = useNavigation();

  const [changedInputEmail, setChangedInputEmail] = useState("") // States

  const [changedInputPassword, setChangedInputPassword] = useState("")

  const auth: any = FIREBASE_AUTH;

  const [changedInputNumber, setChangedInputNumber] = useState("")

  const [selected, setSelected] = useState("");

  function addCheckIcon(number) { // If data is inseretd correctly, show a check icon
    if (number.length === 7 && selected !== "") {
      return <CheckIcon style={styles.checkIcon}/>
    }

    return
  }

  async function handleLoginPress() { // Authenticate login with firebase api
    try {
      const response = await signInWithEmailAndPassword(auth, changedInputEmail, changedInputPassword);
      console.log(44444444444444444444444444444444);
      console.log(response);

      setCredentials(changedInputEmail, changedInputPassword);

      

    } catch (err: any) {
      console.log(err)
      alert('sign in failed')
    }
  }

  async function setCredentials(username, password) { // Save login credentials on user's device for next time he loads the app
    console.log(3333)
    await Keychain.setGenericPassword(username, password);
  }

  function handleSignupTitlePress() { // State changes on form
    navigation.navigate('Signup');
  }

  function handleChangeNumber(number) {
    setChangedInputNumber(number);
  }

  function handleChangeEmail(text) {
    setChangedInputEmail(text)
  }

  function handleChangePassword(text) {
    setChangedInputPassword(text)
  }

  async function handleGoogleAPIsignUp() { // Google api for Google sign up to be added
    
    
    try {
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
  
return ;

}

  const data = [
    {key: '1', value: '050'},
    {key: '2', value: '052'},
    {key: '3', value: '053'},
    {key: '4', value: '054'},
    {key: '5', value: '055'},
    {key: '6', value: '058'},
  ];

  return ( // Component
    <ImageBackground style={styles.container} source={require('../newImages/Rectangle.png')} imageStyle={{borderTopLeftRadius: 115, borderTopRightRadius: 115}}>
      <View style={styles.options}>
        <View>
          <Text style={styles.loginText}>Log in</Text>
          <View style={styles.loginUnderline}></View>
        </View>
        <TouchableOpacity onPress={() => handleSignupTitlePress()}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nestedContainer}>
        <View style={styles.inputs}>
          
<View>

        <TextInput 
              style={styles.rightNumberInput} 
              //keyboardType='numeric' 
              //placeholder='1234567'
              placeholder='email' 
              placeholderTextColor='lightgray'

              onChangeText={text => handleChangeEmail(text)}
              //onChangeText={text => handleChangeNumber(text)}
              value={changedInputEmail}
              //value={changedInputNumber}
              //maxLength={7}
            >
            </TextInput>

            <TextInput 
              style={styles.rightNumberInput} 
              //keyboardType='numeric' 
              //placeholder='1234567'
              placeholder='password'
              placeholderTextColor='lightgray'

              onChangeText={text => handleChangePassword(text)}
              //onChangeText={text => handleChangeNumber(text)} 
              value={changedInputPassword}
              //value={changedInputNumber}
              //maxLength={7}
            >
            </TextInput>


            <View style={styles.checkIconView}>
              {addCheckIcon(changedInputNumber)}
            </View>
          </View>
        </View>
        <Text style={styles.logPhoneText}>Log in with your phone number</Text>
        <TouchableOpacity onPress={() => handleLoginPress()}>
          <ImageBackground style={styles.loginButton} source={require('../newImages/rectButton.png')} imageStyle={{borderRadius: 35}}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </ImageBackground>
        </TouchableOpacity> 
        <Text style={styles.dashedLine} accessible={false}>------------------------------------------------</Text>
        <Text style={styles.connectText}>or connect with</Text>
        <View style={styles.externalLoginView}>
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

const styles = StyleSheet.create({ // Design

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
    flexDirection: 'row',
    gap: 20,
    marginTop: 110 ,
    marginRight: 5
  },

  arrowDown: {
    marginTop: 5,
    height: 50,
    width: 50,
  },

  rightInputView: {
    flexDirection: 'row'
  },

  rightNumberInput: {
    borderBottomWidth: 1,  
    borderColor: 'rgba(199, 199, 204, 0.5)',
    fontSize: 21,
    width: 114,
    fontFamily: 'MontserratRegular',
    color: '#3D003E'
  },

  checkIconView: {
    borderBottomWidth: 1,  
    borderColor: 'rgba(199, 199, 204, 0.5)',
    width: 100
  },

  checkIcon: {
    marginTop: 16,
    marginLeft: 60
  },

  logPhoneText: {
    marginTop: 30,
    fontSize: 15,
    color: '#3D003E',
    fontFamily: 'MontserratRegular',
    opacity: 0.3
  },

  loginButton: {
    marginTop: 45,
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

})