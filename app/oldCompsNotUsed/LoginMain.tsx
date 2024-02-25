import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import LoginInputComponent from './LoginInputComponent';
import InputComponents from './InputComponents';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PreVerifyModal from './PreVerifyModal';
import SendPhoneModal from './SendPhoneModal';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import { LoginButton, AccessToken } from 'react-native-fbsdk-next';

import { LoginManager } from "react-native-fbsdk-next";

import Google from '../images/google-logo.svg';
import Facebook from '../images/facebook-logo.svg'



GoogleSignin.configure(
  {webClientId: '327977086428-ppo185f31jnhpoflfqbagbkc4dckdar3.apps.googleusercontent.com'}
);


/*
<LoginButton
          onLoginFinished={
            (error, result: any) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data: any) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          
          onLogoutFinished={() => console.log("logout.")}/>

*/


function LoginMain({navigation}: any) {


  

// Somewhere in your code
async function signInGoogle() {
  try {
    await GoogleSignin.hasPlayServices();
    /*const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });*/
    console.log('aaaaaa')
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken)
    console.log('bbbbbbb')
    /*const googleCred = GoogleAuthProvider.credential(idToken);*/
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log(1)
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log(2)
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log(3)
    } else {
      console.log(4)
      console.log(error)
      // some other error happened
    }
  }
};



  function signInFacebook() {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result: any) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }


  function logInMyAccount() {
    navigation.navigate('LoginNew');
  }

  function signUpAccount() {
    navigation.navigate('RegisterNew');
  }




  return (

    <View style={styles.container}>


      <View style={styles.absoluteBackground}></View>

      <View style={styles.topTextView}>
        <Text style={styles.topText}>Welcome Back,</Text>
        <Text style={styles.topText}>Glad to see you!</Text>
      </View>

      <View style={styles.optionsContainer}>

        <TouchableOpacity style={styles.googleButton} onPress={() => signInGoogle()}>
          <Google style={styles.googleIcon} height={30} width={30}/>
          <Text style={styles.googleText}>Log in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButton} onPress={() => signInFacebook()}>
          <Facebook style={styles.facebookIcon} height={30} width={30}/>
          <Text style={styles.facebookText}>Log in with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logAccount} onPress={() => logInMyAccount()}>
          <Text style={styles.loginTextLeft}>Log In</Text>
          <Text style={styles.loginTextRight}> with your account</Text>
        </TouchableOpacity> 

      </View>



      

      



      <TouchableOpacity style={styles.register} onPress={() => signUpAccount()}>

        <View style={styles.horizontalLine}></View>

        <Text style={styles.noAccountText}>Don't have an account?</Text>
        <Text style={styles.signUpText}>   Sign Up</Text>

        <View style={styles.horizontalLine}></View>

      </TouchableOpacity>

    </View>
    
  )
}

const styles = StyleSheet.create({

  container: {
    position: 'relative',
    alignItems: 'center',
  },

  absoluteBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    backgroundColor: 'lightblue',
    position: 'absolute'
  },

  topTextView: {
    marginLeft: 40,
    marginTop: 70
  },

  topText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },

  optionsContainer: {
    marginTop: 40,
    backgroundColor: '#E7E7E7',
    height: 350,
    width: 350,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  googleButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    width: 260,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    gap: 10
  },

  googleIcon: {
    marginTop: 2,
    marginLeft: 7
  },

  googleText: {
    color: 'black',
    fontSize: 18,
    marginRight: 29
  },

  facebookButton: {
    backgroundColor: '#1877F2',
    flexDirection: 'row',
    borderRadius: 10,
    width: 260,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 5
  },

  facebookIcon: {
    marginBottom: 5
  },

  facebookText: {
    color: 'white',
    fontSize: 18
  },

  gg: {
    
  },

  forgotPasswordButton: {
    alignSelf: 'center',
    marginTop: 20
  },

  forgotPasswordText: {
    fontWeight: 'bold',
    opacity: 0.5
  },

  register: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    opacity: 0.5,
    marginTop: Dimensions.get('window').height - 50,
  },

  horizontalLine: {
    width: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 8,
    opacity: 0.4
  },

  noAccountText: {
    fontWeight: 'bold',
    marginLeft: 10
  },

  signUpText: {
    fontWeight: 'bold',
    color: 'blue',
    marginRight: 10
  },

  logAccount: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    opacity: 0.5,
  },

  loginTextLeft: {
    fontWeight: 'bold',
    color: 'blue'
  },

  loginTextRight: {
    fontWeight: 'bold'
  }

})

export default LoginMain