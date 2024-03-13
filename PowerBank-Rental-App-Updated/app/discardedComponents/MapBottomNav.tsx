import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'

function MapBottomNav(props) {



  

  return (

    <View style={styles.bottomNav}>

      <TouchableOpacity disabled={props.mapDisabled} style={[styles.button, /*styles.pressed*/props.mapStyle]} onPress={() => props.navigationFunction()}>
        <IonIcon name="home" size={30} color="#900" />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity disabled={props.settingsDisabled} style={[styles.button, /*styles.pressed*/props.settingsStyle]} onPress={() => props.navigationFunction()}>
        <IonIcon name="settings" size={30} color="#900" />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

    </View>

  )
}

const styles = StyleSheet.create({

  bottomNav: {
    marginTop: 'auto',
    backgroundColor: '#EDE6D6',
    //backgroundColor: '#1C1C1C',
    //backgroundColor: '#63e5ff',
    flexDirection: 'row',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000080'
  },

  button: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 30,
    height: 50
  },

  buttonText: {
    marginTop: 4,
    marginLeft: 5,
    color: '#900'
  },

  pressed: {
    opacity: 0.5,
    backgroundColor: 'white'
  }

})

export default MapBottomNav
