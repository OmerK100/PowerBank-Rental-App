import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import Arrow from '../images/arrow-icon.svg'


function SettingComponent(props: any) {
  return (
    <TouchableOpacity style={styles.mainContainer}>

      <View style={styles.leftContainer}>

        <FontAwesome name={props.iconName} size={30} color='#900'/>

        <Text style={[styles.settingName, {marginLeft: props.marginLeftFromIcon}]}>{props.name}</Text>

      </View>

      <View style={styles.arrowIcon}>
        <Arrow height={15} width={15} fill='#900'/>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginLeft: 30, 
  },

  leftContainer: {
    flexDirection: 'row',
  },

  settingName: {
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 16
  },

  arrowIcon: {
    marginRight: 30,
    marginTop: 8,
    borderColor: '#900',
    borderWidth: 1,
    backgroundColor: 'rgba(153, 0, 0, 0.3)',
    padding: 4,
    borderRadius: 50,
  }

})

export default SettingComponent