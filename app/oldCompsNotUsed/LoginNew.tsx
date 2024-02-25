import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import LoginInputComponent from './LoginInputComponent';
import InputComponents from './InputComponents';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PreVerifyModal from './PreVerifyModal';
import SendPhoneModal from './SendPhoneModal';



function LoginNew({navigation}: any) {

  const [forgotPassPressed, setForgotPassPressed] = useState(false);

  function registerPress() {
    navigation.navigate('RegisterNew');
  }

  function forgotPasswordPress() {
    //navigation.navigate('PasswordRecovery');
    setForgotPassPressed(true);
  }

  return (
    <View style={styles.container}>

      <SendPhoneModal state={forgotPassPressed}/>

      <View style={styles.absoluteBackground}></View>

      <View style={styles.topTextView}>
        <Text style={styles.topText}>Welcome Back,</Text>
        <Text style={styles.topText}>Glad to see you!</Text>
      </View>

      <InputComponents 
        obj1={{name: 'Username', icon: 'user'}} 
        obj2={{name: 'Password', icon: 'lock'}} 
        buttonText='Log In'
      />

      <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => forgotPasswordPress()}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.register} onPress={() => registerPress()}>

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
    position: 'relative'
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
  }

})

export default LoginNew