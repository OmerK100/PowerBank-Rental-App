import { View, Text, StyleSheet, Dimensions, TouchableOpacity, PermissionsAndroid, Image } from 'react-native'
import WebView from 'react-native-webview';

import IonIcon from 'react-native-vector-icons/Ionicons'

import MapView, {Marker} from 'react-native-maps';
import React, { useEffect, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import MapBottomNav from './MapBottomNav';
import * as Keychain from 'react-native-keychain';


/*<TouchableOpacity>
        <IonIcon name="rocket" size={30} color="#900" />
        <Text>Scan QR</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <IonIcon name="rocket" size={30} color="#900" />
        <Text>Settings</Text>
      </TouchableOpacity>*/

function Map({navigation}: any) {

  //const [loggedIn, setLoggedIn] = useState(false);

  async function settingsPress() {

    /*if (loggedIn === true) {
      console.log(5455)
      
    } else {

      
      console.log(54524)

      

      const credentials = await getCredentials()
      console.log(credentials)
    if (credentials) {
      console.log(
       credentials.username + " " + credentials.password
      );

    } else {
      console.log(2)
    }


    navigation.navigate('SettingsLogin', {loggedIn: loggedIn}, {setLoggedIn: setLoggedIn});*/

    

  

    const credentials = await getCredentials();

    if (credentials.username !== undefined && credentials.password !== undefined) {
      /*console.log(credentials.username)
      console.log(credentials.password)*/

     
      console.log(credentials.username)
      console.log(credentials.password)

      navigation.navigate('Settings', {username: credentials.username});
    } else {
      console.log(credentials.username)
      console.log(credentials.password)
      navigation.navigate('LoginMain'/*, {loggedIn: loggedIn}, {setLoggedIn: setLoggedIn}*/);
    }

  }

  async function getCredentials() {
    const credentials: any = await Keychain.getGenericPassword();
    return credentials;
  }

  async function getUserProfileData(username, password) {

  }

  


  const [pressedLocSwitch, setPressedLocSwitch] = useState(true);

  function pressLoc() {
    setPressedLocSwitch(!pressedLocSwitch)
  }

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    })
  }, []);


  function QRpress() {
    navigation.navigate('QRscanner');
  }

  /*<MapView
      style={styles.map}
      initialRegion={position}
      showsUserLocation={true}
      showsMyLocationButton={true}
      followsUserLocation={true}
      showsCompass={true}
      scrollEnabled={true}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={true}>
       <Marker
       title='Yor are here'
       description='This is a description'
       coordinate={position}/>
  </MapView>*/




  return (
    
      /*<WebView 
        source={{
          uri: 'https://www.google.com/maps'
        }}
        style={styles.map}

        <WebView
   style={styles.webview}
   source={{uri: 'https://www.google.com/maps'}}
   javaScriptEnabled={true}
   domStorageEnabled={true}
   startInLoadingState={false}
   scalesPageToFit={true} />
      />*/

      //mapPadding={true}

    <View style={styles.container}>

<MapView
      style={styles.map}
      initialRegion={position}
      showsUserLocation={pressedLocSwitch}
      showsMyLocationButton={true}
      followsUserLocation={true}
      showsCompass={true}
      scrollEnabled={true}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={true}>
       <Marker
       title='Yor are here'
       description='This is a description'
       coordinate={position}/>
  </MapView>

        <TouchableOpacity style={styles.scanButton} onPress={() => QRpress()}>
        <IonIcon name="scan" size={30} color="#900" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.userLocationButton} onPress={() => pressLoc()}>
        <IonIcon name="location" size={30} color="#900" />
        </TouchableOpacity>
  
      <MapBottomNav 
      navigation={navigation} 
      navigationFunction={settingsPress}
      settingStyle={{}} 
      mapStyle={{opacity: 0.5, backgroundColor: 'white'}}
      settingsDisabled={false}
      mapDisabled={true}
      />

    </View>
      

   
   


    
  )
}

const styles = StyleSheet.create({

  scanButton: {
    backgroundColor: '#EDE6D6',
    position: 'absolute',
    marginTop: 500,
    marginLeft: 320,
    padding: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000080'
  },

  userLocationButton: {
    backgroundColor: '#EDE6D6',
    position: 'absolute',
    marginTop: 590,
    marginLeft: 320,
    padding: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000080'
  }, 

  container: {
    justifyContent: 'space-between',
    height: Dimensions.get('window').height,
  },
  
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    //width: 100,
    //height: 100,
    position: 'relative'
  },

  webview: {
    flex: 1,
    backgroundColor: 'yellow',
    width: 400,
    height: 400
  }

});

export default Map