import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RentalComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Transaction ID: XXXXXXXXXXX</Text>
      <View style={styles.dataView}>
        <Text style={styles.dataLeft}>Date</Text>
        <Text style={styles.dataRight}>01/03/2024</Text>
      </View>
      <View style={styles.dataView}>
        <Text style={styles.dataLeft}>Location</Text>
        <Text style={styles.dataRight}>Technion..</Text>
      </View>
      <View style={styles.dataView}>
        <Text style={styles.dataLeft}>Rental Time</Text>
        <Text style={styles.dataRight}>00:55:10</Text>
      </View>
      <View style={styles.dataView}>
        <Text style={styles.dataLeft}>Cost</Text>
        <Text style={styles.dataRight}>5₪</Text>
      </View>
    </View>
  )
}

export default RentalComponent

const styles = StyleSheet.create({

  container: {
    marginTop: 43,
    borderRadius: 30,
    height: 230,
    width: 350,
    elevation: 15,
    backgroundColor: '#FFFFFF'
  },

  titleText: {
    fontSize: 20,
    fontFamily: 'MontserratRegular',
    color: '#3D003E',
    textAlign: 'center'
  },

  dataView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  dataLeft: {
    fontSize: 20,
    fontFamily: 'MontserratRegular',
    color: '#3D003E'
  },

  dataRight: {
    fontSize: 15,
    fontFamily: 'MontserratSemiBold',
    color: '#3D003E',
    textAlign: 'center',
    backgroundColor: 'blue',
    borderRadius: 20
  }

})