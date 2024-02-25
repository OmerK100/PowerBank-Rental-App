import React from 'react';
import type {PropsWithChildren} from 'react'; 
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  TextInput
} from 'react-native';


function LoginInputs() {
  return (
    <View style={styles.inputView}>

      <TextInput style={styles.inputField} placeholder='Enter your user name' />

      <TextInput style={styles.inputField} placeholder='Enter your password'/>

      <TouchableOpacity style={styles.submitButton}>
        <Text>
          Submit
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  inputView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  inputField: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 10
  },

  submitButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    margin: 20
  }
});

export default LoginInputs