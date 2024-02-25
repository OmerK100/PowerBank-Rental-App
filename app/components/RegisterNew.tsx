import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import LoginInputComponent from './LoginInputComponent';

import InputComponents from './InputComponents';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PreVerifyModal from './PreVerifyModal';

import VerifyCode from './VerifyCode';

function RegisterNew({navigation}: any) {

  const [signUpPressed, setSignUpPressed] = useState(false);

  const [nextPressed, setNextPressed] = useState(false);

  function logInPress() {
    navigation.goBack();
  }
  /*<View style={styles.absoluteBackground}></View>
  
  
  style={[signUpPressed? {} : {position: 'relative'}]}
  
  , signUpPressed ? {} : {position: 'absolute'}
  
  */

  return (
    <View style={styles.container}>

      <View style={styles.absoluteBackground}></View>

      <PreVerifyModal state={signUpPressed} setStateSignUp={setSignUpPressed} setStateNext={setNextPressed}/>

      <VerifyCode state={nextPressed}/>

      <View style={styles.topTextView}>
        <Text style={styles.topText}>Create Account</Text>
        <Text style={styles.topText}>To get started</Text>
      </View>

      <InputComponents 
        obj1={{name: 'Username', icon: 'user'}} 
        obj2={{name: 'Password', icon: 'lock'}}
        obj3={{name: 'Phone Number', icon: 'phone'}} 
        buttonText='Sign Up'
        setButtonState={setSignUpPressed}
      />

      <TouchableOpacity style={styles.logIn} onPress={() => logInPress()}>

        <View style={styles.horizontalLine}></View>

        <Text style={styles.haveAccountText}>Already have an account?</Text>
        <Text style={styles.logInText}>   Log In</Text>

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

  logIn: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height - 50,
    opacity: 0.5
  },

  horizontalLine: {
    width: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 8,
    opacity: 0.4
  },

  haveAccountText: {
    fontWeight: 'bold',
    marginLeft: 10
  },

  logInText: {
    fontWeight: 'bold',
    color: 'blue',
    marginRight: 10
  }

})

export default RegisterNew