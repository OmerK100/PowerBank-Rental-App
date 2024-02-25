import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const RegisterInputs = () => {
  return (
    <View>
      <View style={styles.inputView}>

        <TextInput style={styles.inputField} placeholder='Enter your full name' />

        <TextInput style={styles.inputField} placeholder='Enter your email address' />

        <TextInput style={styles.inputField} placeholder='Create a user name' />

        <TextInput style={styles.inputField} placeholder='Create a password'/>

        <TouchableOpacity style={styles.submitButton}>
          <Text>
            Submit
          </Text>
        </TouchableOpacity>

      </View>
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



export default RegisterInputs