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

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import firebaseApp from '../FirebaseConfig'
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'
import { firebase } from '@react-native-firebase/auth';




const Settings = ({route, navigation}: any) => {

  useEffect(() => { // On map render
    console.log(1111122222)
    
    const db = getFirestore(firebaseApp); // Connect to Firestore
    async function add() { // Fetch stations data from Firestore to dispaly on user's screen
      try {
        const users = await getDocs(collection(db, 'users')); // Call to Firestore
        users.forEach((doc) => { // Push data into marker array
            console.log(doc.data());
        });
        //setLoaded(true); // Render the map now
      } catch (err) {
        console.log(err)
      }
    }
    add();
  }, []);

  //const navigation: any = useNavigation();

  function menuNavigate(where: string) {
    navigation.navigate(where);
  }

  function pressMap() {
    navigation.goBack();
  }

  async function handleLogOut() {

    const creds = await Keychain.getGenericPassword();

    /*if (creds.username === "googleUser") {
      await Keychain.resetGenericPassword();
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }*/

    await Keychain.resetGenericPassword();
    try {
      
      
      var a = await firebase.auth().currentUser;
      console.log(a);
      console.log(3211452)

      

      await GoogleSignin.signOut();
      //await GoogleSignin.revokeAccess();
    } catch (err) {
      console.log(err)
    }


    /*if (a.username === "") {

    }*/

    navigation.goBack();
  }

  /*function handleRentalHistoryPress() { // Replaced with menuNavigate which takes a parameter for screen
    navigation.navigate('RentalHistory')
  }

  function handleSupportPress() {
    navigation.navigate('Support')
  }

  function handleAboutUsPress() {
    navigation.navigate('AboutUs')
  }*/

  return (
    <ImageBackground style={styles.container} source={require('../newImages/Rectangle.png')}>


      <View style={styles.settingsContainer}>
        <View style={styles.settingsContainerTop}>
          <View>
            <Text style={styles.userCredsText}>{route.params.username === "googleUser" ? "" : route.params.username}</Text>
          </View>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.setting} onPress={() => menuNavigate('RentalHistory')}>
            <Text style={styles.settingText}>Rental History</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.setting} onPress={() => menuNavigate('PaymentMethod')} /* To be changed probably */>
            <Text style={styles.settingText}>Payment Method</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.setting}>
            <Text style={styles.settingText}>Invite Friends</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.setting} onPress={() => menuNavigate('Help')}>
            <Text style={styles.settingText}>Help</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.setting} onPress={() => menuNavigate('Support')}>
            <Text style={styles.settingText}>Support</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}/>
          <TouchableOpacity style={styles.setting} onPress={() => menuNavigate('AboutUs')}>
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

const styles = StyleSheet.create({

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