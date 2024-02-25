/*
  Onboarding component, simple component with a background image and navigation buttons at the bottom.
  We use 3 onboards with a different image according to a prop number,
  also the position of the screen indicator is determined by a prop number.
*/


import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native'



const OnboardingComponent = (props: any) => {

  const navigation: any = useNavigation();

  function onboardImage() { // Each different time the component is loaded with new prop paramters to insert a different image.
    if (props.onboardNum === 1) {
      return (
        <Image 
        style={styles.locateImage} 
        source={require('../newImages/Locate1.png')}
        />
      )
    } else if (props.onboardNum === 2) {
      return (
        <Image 
        style={styles.locateImage} 
        source={require('../newImages/Locate2.png')}
        />
      )
    }

    return (
      <Image 
        style={styles.locateImage} 
        source={require('../newImages/Locate3.png')}
      />
    )
  }

  function handleNext() { // Handling changing of screen
    if (props.onboardNum === 1) {
      navigation.navigate('Onboard2');
    } else if (props.onboardNum === 2) {
      navigation.navigate('Onboard3');
    } else {
      //console.log(props.passed)
      //props.setPassed("true");
      props.setStorage("true");
      navigation.dispatch(
        CommonActions.reset({
          routes: [{name: 'Map'}]
        })
      );
    }
  }

  function handleSkip() {
    //console.log(props.passed)
    //props.setPassed("true");
    props.setStorage("true");
    navigation.dispatch(
      CommonActions.reset({
        routes: [{name: 'Map'}]
      })
    );
  }

  return ( // Component itself
    <View>
      {onboardImage()}
      <ImageBackground style={styles.locateImageWhiteExtension} source={require('../newImages/LocateWhiteBottom.png')}>
        <Text style={styles.locateText}>{props.title}</Text>
        <Text style={styles.xxxText}>xxxxxxxx</Text>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={() => handleSkip()}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <View style={styles.indicatorDotView}>
            <Text style={props.chosenIndicator === 1 ? styles.indicatorDotBlack : styles.indicatorDotGray}>•</Text>
            <Text style={props.chosenIndicator === 2 ? styles.indicatorDotBlack : styles.indicatorDotGray}>•</Text>
            <Text style={props.chosenIndicator === 3 ? styles.indicatorDotBlack : styles.indicatorDotGray}>•</Text>
          </View>
          <TouchableOpacity onPress={() => handleNext()}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default OnboardingComponent

const styles = StyleSheet.create({ // Design

  locateImage: {
    height: 0.65 * Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  locateImageWhiteExtension: {
    height: 0.35 * Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },

  locateText: {
    fontSize: 32,
    color: '#3D003E',
    marginTop: 30,
    fontFamily: 'MontserratSemiBold'
  },

  xxxText: {
    fontSize: 21,
    color: '#3D003E',
    marginTop: 20,
    fontFamily: 'MontserratRegular'
  },

  bottomView: {
    flexDirection: 'row',
    marginTop: 70,
    width: Dimensions.get('window').width,
    justifyContent: 'space-around',
  },

  indicatorDotView: {
    flexDirection: 'row',
    marginBottom: 30,
    gap: 8
  },

  indicatorDotGray: {
    color: '#D8D8D8',
    fontSize: 55
  },

  indicatorDotBlack: {
    color: '#3D003E',
    fontSize: 55
  },

  skipText: {
    fontSize: 15,
    color: '#3D003E',
    marginTop: 28,
    marginRight: 30,
    fontFamily: 'MontserratRegular'
  },

  nextText: {
    fontSize: 15,
    color: '#3D003E',
    marginTop: 28,
    marginLeft: 30,
    fontFamily: 'MontserratSemiBold'
  }

})