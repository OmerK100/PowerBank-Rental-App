import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LeftArrow from '../newIcons/chevron-left.svg'
import PaymentArrow from '../newIcons/arrowPayment.svg'

const PaymentMethod = ({navigation}: any) => {

  function handleBackPress() {
    navigation.goBack();
  }

  return (
    <ImageBackground style={styles.container} source={require('../newImages/Rectangle.png')}>
      <View style={styles.topView}>
        <TouchableOpacity>
          <LeftArrow style={styles.arrowIcon} onPress={() => handleBackPress()}/>
        </TouchableOpacity>
        <Text style={styles.titleText}>Payment Method</Text>
      </View>
      <View style={styles.nestedContainer}>
        <View style={styles.inNestedView}>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.paymentButton}>
            <Text style={styles.paymentText}>Payment</Text>
            <PaymentArrow style={styles.paymentArrow}/>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
        </View>
      </View>
    </ImageBackground>
  )
}

export default PaymentMethod

const styles = StyleSheet.create({

  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  topView: {
    marginTop: 43,
  },

  titleText: {
    fontSize: 32,
    color: '#FFFFFF',
    fontFamily: 'MontserratSemiBold',
    marginLeft: 32,
    marginTop: 7
  },

  arrowIcon: {
    marginTop: 5,
    marginLeft: 30
  },

  nestedContainer: {
    position: 'absolute',
    marginTop: 0.33 * Dimensions.get('window').height,
    height: 0.67 * Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    borderTopLeftRadius: 50,
    backgroundColor: '#FFFFFF',
  },

  inNestedView: {
    marginTop: 100,
    alignItems: 'center',
    gap: 22
  },

  paymentButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 348
  },

  paymentText: {
    fontSize: 21,
    color: '#3D003E',
    fontFamily: 'MontserratRegular',
  },

  paymentArrow: {
    marginTop: 11
  },

  horizontalLine: {
    width: 348,
    height: 1,
    backgroundColor: 'rgba(199, 199, 204, 0.5)',
  }

});