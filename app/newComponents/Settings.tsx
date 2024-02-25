import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'


import IonIcon from 'react-native-vector-icons/Ionicons'

import MapView, {Marker} from 'react-native-maps';
import React, { useEffect, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';

import { NativeStackScreenProps } from '@react-navigation/native-stack';



import DropShadow from 'react-native-drop-shadow'

import CompassRegIcon from '../newIcons/compassRegIcon.svg'
import SettingsBoldIcon from '../newIcons/settingsBoldIcon.svg'
import UnlockRegIcon from '../newIcons/unlockRegIcon.svg'
import LogoutIcon from '../newIcons/log-out.svg'

import { useNavigation } from '@react-navigation/native'

import * as Keychain from 'react-native-keychain';


const Settings = ({route, navigation}: any) => { // Settings screen

  //const navigation: any = useNavigation();

  function pressMap() {
    navigation.goBack();
  }

  async function handleLogOut() { // Handling different options presses
    await Keychain.resetGenericPassword();
    navigation.goBack();
  }

  function handleRentalHistoryPress() {
    navigation.navigate('RentalHistory')
  }

  function handleSupportPress() {
    navigation.navigate('Support')
  }

  function handleAboutUsPress() {
    navigation.navigate('AboutUs')
  }

  return ( // Component
    <ImageBackground style={styles.container} source={require('../newImages/Rectangle.png')}>


      <View style={styles.settingsContainer}>
        <View style={styles.settingsContainerTop}>
          <View>
            <Text style={styles.userCredsText}>{route.params.username}</Text>
          </View>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.setting} onPress={() => handleRentalHistoryPress()}>
            <Text style={styles.settingText}>Rental History</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.setting}>
            <Text style={styles.settingText}>Payment Method</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.setting}>
            <Text style={styles.settingText}>Invite Friends</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.setting}>
            <Text style={styles.settingText}>Help</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.setting} onPress={() => handleSupportPress()}>
            <Text style={styles.settingText}>Support</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.setting} onPress={() => handleAboutUsPress()}>
            <Text style={styles.settingText}>About Us</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
        </View>
        <TouchableOpacity style={styles.settingsContainerBottom} onPress={() => handleLogOut()}>
          <LogoutIcon />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.bottomNav}>
        <TouchableOpacity  onPress={() => pressMap()}>
          <CompassRegIcon/>
          
        </TouchableOpacity>
        <TouchableOpacity>
          <UnlockRegIcon/>
        </TouchableOpacity>
        <View>
          <SettingsBoldIcon style={styles.settingsIcon}/>
          <View style={styles.underline}></View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Settings

const styles = StyleSheet.create({ // Design

  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center'
  },

  settingsContainer: {
    borderRadius: 48,
    height: 0.76 * Dimensions.get('window').height,
    width: 0.87 * Dimensions.get('window').width,
    backgroundColor: 'white',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 75
  },

  settingsContainerTop: {
    gap: 15,
    marginTop: 7
  },

  setting: {
    width: 295,
  },

  horizontalLine: {
    width: 295,
    height: 1,
    backgroundColor: 'rgba(199, 199, 204, 0.5)'
  },

  userCredsText: {
    fontSize: 15,
    fontFamily: 'MontserratRegular',
    color: '#3D003E'
  },

  settingText: {
    fontSize: 21,
    fontFamily: 'MontserratRegular',
    color: '#3D003E'
  },

  settingsContainerBottom: {
    marginBottom: -13,
    flexDirection: 'row',
    gap: 15,
  },

  logoutText: {
    fontSize: 21,
    fontFamily: 'MontserratRegular',
    color: '#3D003E'
  },

  bottomNav: {
    width: Dimensions.get('window').width - 80,
    height: 60,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height - 75,
    backgroundColor: 'white',
    position: 'absolute',
    
    //shadowOffset: { width: 10, height: 10 },   ios
    //shadowColor: 'black',   ios
    //shadowOpacity: 1,  ios
    elevation: 3,  // android
    //zIndex:999, ios
  },

  settingsIcon: {
    marginTop: 10,
  },

  underline: {
    height: 7,
    width: 42,
    backgroundColor: '#00F5FF',
    borderRadius: 5,
    marginTop: 3
  },

})