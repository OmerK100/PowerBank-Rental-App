import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'




import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





import Settings from './Settings';
import QRscanner from './QRscanner';
import LoginNew from './LoginNew';
import RegisterNew from './RegisterNew';
import PasswordRecovery from './PasswordRecovery';

import MapBottomNav from './MapBottomNav';

import * as Keychain from 'react-native-keychain';



function SettingsLogin({navigation, route}: any) {

  function homePress() {
    navigation.goBack();
  }

  async function handleLogin() {

    //navigation.navigate('LoginNew');

    await setCredentials('fgdgsgsfaasfdsfs', 'fdfsgdgdsg');
    //route.params.setLoggedIn(true)

    
  }

  async function setCredentials(username, password) {
    await Keychain.setGenericPassword(username, password);
  }



  return (
    <View style={styles.container}>
      <Text>SettingsLogin</Text>
      <TouchableOpacity onPress={() => handleLogin()}>
        <Text>
          Login to view settings
        </Text>
      </TouchableOpacity>

      <MapBottomNav 
      navigation={navigation} 
      navigationFunction={homePress}
      settingsStyle={{opacity: 0.5, backgroundColor: 'white'}} 
      mapStyle={{}}
      settingsDisabled={true}
      mapDisabled={false}
      />

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    height: Dimensions.get('window').height,
  }

})

export default SettingsLogin