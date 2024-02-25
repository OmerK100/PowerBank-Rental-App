import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LeftArrow from '../newIcons/chevron-left.svg'

const AboutsUs = ({navigation}: any) => {

  function handleBackPress() {
    navigation.goBack();
  }

  return (
    <ImageBackground style={styles.container} source={require('../newImages/Rectangle.png')}>
      <View style={styles.topView}>
        <TouchableOpacity>
          <LeftArrow style={styles.arrowIcon} onPress={() => handleBackPress()}/>
        </TouchableOpacity>
        <Text style={styles.titleText}>Rental History</Text>
      </View>
      <View style={styles.nestedContainer}>
        <Text>בשנת 2023 חשבנו להביא לעולם את המוצר שנקרא inpower שמטרתו ..</Text>
      </View>
    </ImageBackground>
  )
}

export default AboutsUs

const styles = StyleSheet.create({

  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  topView: {
    flexDirection: 'row',
    marginTop: 43,
  },

  titleText: {
    fontSize: 21,
    color: '#FFFFFF',
    fontFamily: 'MontserratSemiBold',
    marginLeft: 69.7,
  },

  arrowIcon: {
    marginTop: 5,
    marginLeft: 30
  },

  nestedContainer: {
    position: 'absolute',
    marginTop: 0.13 * Dimensions.get('window').height,
    height: 0.87 * Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    borderTopLeftRadius: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

})