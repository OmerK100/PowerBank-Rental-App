/*
  Getting Started component, simple component with an image, and two buttons at the bottom.
*/


import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native' // Imports
import React from 'react'

const GetStarted = () => { // Component itself
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        source={require('../newImages/inpower.png')}
      />
      <TouchableOpacity style={styles.getStartedButton}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.alreadyHaveAccountButton}>
        <Text style={styles.alreadyHaveAccountLeftText}>Already have an account?</Text>
        <Text style={styles.alreadyHaveAccountRightText}>   Log in</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({ // Design

  container: {
    backgroundColor: '#181F38',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center'
  },
  
  imageLogo: {
    height: 0.7 * Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    marginTop: 70
  },

  getStartedButton: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 60,
    borderRadius: 35,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18
  },

  getStartedText: {
    color: '#3D003E',
    fontSize: 20,
    fontFamily: 'MontserratRegular'
  },

  alreadyHaveAccountButton: {
    flexDirection: 'row',
    marginTop: 20
  },

  alreadyHaveAccountLeftText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'MontserratRegular'
  },

  alreadyHaveAccountRightText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'MontserratSemiBold'
  }

})