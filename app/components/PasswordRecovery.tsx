import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LoginInputComponent from './LoginInputComponent';
import InputComponents from './InputComponents';

function PasswordRecovery() {

  return (
    <View style={styles.container}>

      <View style={styles.absoluteBackground}></View>

      <View style={styles.topTextView}>
        <Text style={styles.topText1}>Create a new password</Text>
        <Text style={styles.topText2}>Remember to use a strong password{'\n'}that cannot be forgotten</Text>
      </View>

      <InputComponents
        obj1={{name: 'New Password', icon: 'lock'}}
        obj2={{name: 'Confirm Password', icon: 'lock'}} 
        buttonText='Next'
      />

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

  topText1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },

  topText2: {
    color: 'white',
    fontSize: 14,
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

export default PasswordRecovery