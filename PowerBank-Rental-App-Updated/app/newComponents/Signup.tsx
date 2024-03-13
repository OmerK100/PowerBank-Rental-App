import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Google from '../newIcons/Google.svg'
import Facebook from '../newIcons/Facebook.svg'
import CheckIcon from '../newIcons/check_icon.svg'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import * as Keychain from 'react-native-keychain'
import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin'
import firebaseApp from '../FirebaseConfig'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import auth from '@react-native-firebase/auth'

/*
  Sign up screen - Form for the user to sign up with several options:
  Firebase authentication
  Google authentication (not implemented yet)
  Apple authentication (not implemnted yet)
  Option for facebook was discarded
  Each new user account will be saved in our Firebase backend, and also will have a document for rental history
*/

const Signup = () => {

  const navigation: any = useNavigation();
  const db = getFirestore(firebaseApp); // Firestore databas
  const [changedInputEmail, setChangedInputEmail] = useState(""); // Input states, phone and name were discarded
  const [changedInputPassword, setChangedInputPassword] = useState("");
  const authRegular: any = getAuth(firebaseApp);


  const MINIMAL_PASSWORD_LENGTH = 8;

  async function handleSignupPress() { // Sign up through Firebase authentication
    try {
      if (changedInputPassword.length < MINIMAL_PASSWORD_LENGTH) {
        alert('Password too short!');
        return;
      }
      const response = await createUserWithEmailAndPassword(authRegular, changedInputEmail, changedInputPassword);
      await setDoc(doc(db, 'users', response.user.uid), {rentals: []}); // Create document in firestore for future rentals of the new user
      setCredentialsRegular(changedInputEmail, changedInputPassword); // Saving the sign up credentials within user's phone in a secured manner (keychain) for future auto login
      navigation.navigate('Map'); // Back to map
    } catch (err: any) {
      alert('Sign up failed!');
    }
  }

  async function setCredentialsRegular(username, password) {
    await Keychain.setGenericPassword(username, password);
  }

  async function setCredentialsGoogle(token) {
    await Keychain.setGenericPassword("", token);
  }

  function handleLoginTitlePress() { // Move to login
    navigation.navigate('Login');
  }

  function handleChangeEmail(text) { // Change of email state
    setChangedInputEmail(text)
  }

  function handleChangePassword(text) { // Change of password state
    setChangedInputPassword(text)
  }

  function handleGoogleAPIsignUpgg() {
    //signInWithRedirect(auth, new GoogleAuthProvider()).then(result=> console.log(result)).catch(err => console.log(1))
  }

  /*************************************************************************************************************************************************************** */

  async function handleGoogleAPIsignUp() { // For Google sign up, not ready yet
    
    
     /* try {
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
      }*/

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


  setCredentialsGoogle(googleCredential.token);


  navigation.navigate('Map');

  // Sign-in the user with the credential
  //return auth().signInWithCredential(googleCredential);

} catch (err) {
  console.log(err);
}
    
return ;

  }

//}

  /*************************************************************************************************************************************************************** */

  return ( // Component
    <ImageBackground style={styles.container} source={require('../newImages/Rectangle.png')} imageStyle={{borderTopLeftRadius: 115, borderTopRightRadius: 115}} /* Main view */ >

      <View style={styles.options} /* Top nav bar */ >
        <TouchableOpacity onPress={() => {handleLoginTitlePress()}}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.signupText}>Sign up</Text>
          <View style={styles.loginUnderline}></View>
        </View>
      </View>

      <View style={styles.nestedContainer} /* Form body */ >

        <View style={styles.inputs} /* Inputs */>
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
       
        <TouchableOpacity onPress={() => handleSignupPress()}>
          <ImageBackground style={styles.signUpButton} source={require('../newImages/rectButton.png')} imageStyle={{borderRadius: 35}}>
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </ImageBackground>
        </TouchableOpacity> 
        <Text style={styles.dashedLine} accessible={false}>------------------------------------------------</Text>
        <Text style={styles.connectText}>or connect with</Text>
        <View style={styles.externalLoginView} /* External sign up methods, not ready yet */>
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

export default Signup

const styles = StyleSheet.create({ // Style

  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  options: {
    marginTop: 53,
    marginLeft: 33,
    flexDirection: 'row',
  },

  loginText: {
    color: '#3D003E',
    opacity: 0.3,
    fontSize: 21,
    fontFamily: 'MontserratSemiBold',
    marginTop: 15,
  },

  signupText: {
    color: '#3D003E',
    fontSize: 32,
    fontFamily: 'MontserratSemiBold',
    marginLeft: 30,
  },

  loginUnderline: {
    width: 50,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 3,
    marginTop: 2,
    marginLeft: 32
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

  signUpText: {
    marginTop: 30,
    fontSize: 15,
    color: '#3D003E',
    fontFamily: 'MontserratRegular',
    opacity: 0.3
  },

  signUpButton: {
    marginTop: 60,
    width: Dimensions.get('window').width - 75,
    height: 65,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },

  signUpButtonText: {
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