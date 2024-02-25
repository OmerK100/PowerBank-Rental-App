import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React, { useState, useRef } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import ArrowDown from '../newIcons/arrowDown.svg'
import Google from '../newIcons/Google.svg'
import Facebook from '../newIcons/Facebook.svg'
import CheckIcon from '../newIcons/check_icon.svg'
import LinearGradient from 'react-native-linear-gradient'
import LeftArrow from '../newIcons/chevron-left.svg'


const Verification = ({navigation}: any, props) => {

  const ref2 = useRef<TextInput>(null);
  const ref3 = useRef<TextInput>(null);
  const ref4 = useRef<TextInput>(null);

  function handleNoSMS() {

  }

  function handleContinue() {
    console.log(props.passed)
      props.setPassed("true");
      console.log(8775)
      console.log(props.passed)
  }
  
  return (
    <ImageBackground style={styles.container} source={require('../newImages/Rectangle.png')} imageStyle={{borderTopLeftRadius: 115, borderTopRightRadius: 115}}>
      <View style={styles.options}>
        <TouchableOpacity>
          <LeftArrow/>
        </TouchableOpacity>
        <Text style={styles.titleText}>Verification</Text> 
      </View>
      <View style={styles.nestedContainer}>
        <View style={styles.inputsContainer}>
          <TextInput 
            keyboardType='numeric' 
            style={styles.input} 
            placeholder='1' 
            placeholderTextColor='rgba(199, 199, 204, 0.5)' 
            maxLength={1} textAlign='center'
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key !== 'Backspace') {
                ref2.current?.focus();
              }
            }}
          />
          <TextInput
            ref={ref2}
            keyboardType='numeric' 
            style={styles.input} 
            placeholder='1' 
            placeholderTextColor='rgba(199, 199, 204, 0.5)' 
            maxLength={1} textAlign='center'
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key !== 'Backspace') {
                ref3.current?.focus();
              }
            }}
          />
          <TextInput
            ref={ref3}
            keyboardType='numeric' 
            style={styles.input} 
            placeholder='1' 
            placeholderTextColor='rgba(199, 199, 204, 0.5)' 
            maxLength={1} textAlign='center'
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key !== 'Backspace') {
                ref4.current?.focus();
              }
            }}
          />
          <TextInput
            ref={ref4}
            keyboardType='numeric' 
            style={styles.input} 
            placeholder='1' 
            placeholderTextColor='rgba(199, 199, 204, 0.5)' 
            maxLength={1} textAlign='center'
          />
        </View>
        <Text style={styles.textToAdd1}>xxxxxxxxxxxx</Text>
        <Text style={styles.textToAdd2}>User's phone number displayed here</Text>
        <TouchableOpacity onPress={() => handleNoSMS()}>
          <Text style={styles.noSMSmessage}>Didn't receive SMS?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleContinue()}>
          <ImageBackground style={styles.continueButton} source={require('../newImages/rectButton.png')} imageStyle={{borderRadius: 35}}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </ImageBackground>
        </TouchableOpacity> 
      </View>
    </ImageBackground>
  )
}

export default Verification

const styles = StyleSheet.create({

  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    borderTopRightRadius: 115,
    borderTopLeftRadius: 115,
  },

  options: {
    marginTop: 43,
    marginLeft: 33,
  },

  titleText: {
    fontSize: 32,
    color: '#3D003E',
    fontFamily: 'MontserratSemiBold'
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

  inputsContainer: {
    marginTop: 60,
    flexDirection: 'row',
    gap: 20
  },

  input: {
    width: 60,
    borderBottomWidth: 1.5,
    borderColor: '#C7C7CC',
    color: '#3D003E',
    fontSize: 32,
    fontFamily: 'MontserratRegular'
  },

  textToAdd1: {
    marginTop: 27
  },

  textToAdd2: {
    marginTop: 30
  },

  noSMSmessage: {
    color: '#04D6E3',
    marginTop: 15
  },

  continueButton: {
    marginTop: 60,
    width: Dimensions.get('window').width - 75,
    height: 65,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },

  continueButtonText: {
    fontSize: 21,
    fontFamily: 'MontserratRegular',
    color: '#3D003E'
  }

})