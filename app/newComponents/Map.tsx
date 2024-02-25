import { View, Text, StyleSheet, Dimensions, TouchableOpacity, PermissionsAndroid, Image, ImageBackground } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'

import MapView, {Marker} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions'

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';

import Geolocation from '@react-native-community/geolocation';

import { NativeStackScreenProps } from '@react-navigation/native-stack';



import DropShadow from 'react-native-drop-shadow'

import CompassBoldIocn from '../newIcons/compassBoldIcon.svg'
import UnlockRegIcon from '../newIcons/unlockRegIcon.svg'
import SettingsRegIcon from '../newIcons/settingsRegIcon.svg'

import BatteryFull from '../newIcons/battery-full.svg'
import DownArrow from '../newIcons/DownArrow.svg'

import BatteryEmpty from '../newIcons/battery-empty.svg'
import UpArrow from '../newIcons/UpArrow.svg'

import Route from '../newIcons/route.svg'
import RightArrow from '../newIcons/RightArrow.svg'

import BottomSheet, {BottomSheetBackdrop, BottomSheetView} from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native'

import * as Keychain from 'react-native-keychain'






const Map = () => {

  const custom = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]

  const [x, setX]: any = useState(null)

  const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};


  const navigation: any = useNavigation();

  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [isOpen2, setIsOpen2] = useState(false);

  const [pressedMarker, setPressedMarker] = useState(false)


  const sheetRef2 = useRef<BottomSheet>(null);

  const snapPoints = ["37%"];

  const snapPoints2 = ["17%"];

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  const [position2, setPosition2] = useState({
    latitude: 32.7732,
    longitude: 35.0231,
    latitudeDelta: 0.0421,
    longitudeDelta: 0.0421,
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


  function pressScanToCharge() {
    navigation.navigate('ScannerQR');
  }
  

  


  

  // callbacks
  /*const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);*/
  

  

  async function pressSettings() {
    //navigation.navigate('Settings');
    //navigation.navigate('Login');

    //await props.keychain.resetGenericPassword();
    const credentials = await getCredentials();

    console.log(credentials);

    if (credentials === false) { // no user signed in
      navigation.navigate('Signup');
    } else {
      console.log(credentials.username);
      navigation.navigate('Settings', {username: credentials.username});
    }

    
  }

  async function getCredentials() {
    const credentials: any = await Keychain.getGenericPassword();
    return credentials;
  }

  
  const pressScan = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  const timerPressed = useCallback((index) => {
    sheetRef2.current?.snapToIndex(index);
    setIsOpen2(true);
  }, []);

  function renderDirection() {
    if (x !== null) {
      return (<MapViewDirections
        origin={position}
        destination={x}
        strokeWidth={3}
        strokeColor='hotpink'
        apikey={'AIzaSyB7PvMs49_majblTXZ14CcpkfAVf1BuJh4'} // api key..
      />
    )
    }
  }
 

  return (
    <GestureHandlerRootView style={styles.container}>
      <MapView
      mapPadding={{bottom: -10, top: 0, right: 0, left: 0}}
      style={styles.map/*, pressedMarker === true ? {height: Dimensions.get('window').height} : {height: 1 * Dimensions.get('window').height}*/}
      customMapStyle={custom}
      initialRegion={position}
      showsUserLocation={true}
      showsMyLocationButton={false}
      followsUserLocation={true}
      showsCompass={false}
      scrollEnabled={true}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={true}
      moveOnMarkerPress={true}
     >
        
  {renderDirection()}
       <Marker
       title='Yor are here'
       description='This is a description'
       coordinate={position}
       
       />

<Marker
       title='Technion'
       description='This is a description2'
       coordinate={position2}
       onPress={(event: any) => {
        setPressedMarker(true);
        pressScan(0);
setX(position2)

      }}
       />
       
      </MapView>
    
      {isOpen && <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={{borderTopLeftRadius: 90, borderTopRightRadius: 90}}
        enablePanDownToClose={true}
        enableOverDrag={false}
       onClose={() => {setIsOpen(false); setPressedMarker(false);}}
       backgroundComponent={null}
       handleIndicatorStyle={{display: 'none'}}
      >
        <BottomSheetView>
          <ImageBackground
            style={styles.cardBottomSheetImage}
            source={require('../newImages/Card.png')}
          >

            

            <Text style={styles.placeName}>שם המקום</Text>
            <Text style={styles.placeLocation}>כתובת המקום</Text>

            <View style={styles.iconsView}>
              <View style={styles.batteryView}>
                <BatteryFull/>
                <DownArrow style={styles.arrowDownIcon}/>
                <Text>?</Text>
              </View>

              <View style={styles.batteryView}>
                <BatteryEmpty/>
                <UpArrow style={styles.arrowUpIcon}/>
                <Text>?</Text>
              </View>
              

              

              <TouchableOpacity style={styles.routeView} /*onPress={(event) => {setX(event.nativeEvent.coordinate)}}*/>
                <Route/>
                <RightArrow style={styles.arrowRightIcon}/>
              </TouchableOpacity>

            </View>

            <Text style={styles.hoursTitle}>working hours:</Text>

            <View style={styles.hoursView}>
              <Text style={styles.hoursText}>Actual working hours</Text>
            </View>

            <TouchableOpacity style={styles.scanChargeButton} onPress={() => pressScanToCharge()}>
              <Text style={styles.scanChargeText}>Scan To Charge</Text>
            </TouchableOpacity>

          </ImageBackground>
        </BottomSheetView>

      </BottomSheet>}



      {isOpen2 && <BottomSheet
        ref={sheetRef2}
        snapPoints={snapPoints2}
        backgroundStyle={{borderTopLeftRadius: 90, borderTopRightRadius: 90, alignItems: 'center', justifyContent: 'center'}}
        enablePanDownToClose={true}
       onClose={() => setIsOpen2(false)}
       backgroundComponent={null}
       handleIndicatorStyle={{display: 'none'}}
       style={{marginHorizontal: Dimensions.get("screen").width*0.1}}
       
      >
        <BottomSheetView>
          <ImageBackground
            style={styles.cardBottomSheetImage}
            source={require('../newImages/Card.png')}
          
          >

            

            <Text>Timer</Text>
            

          </ImageBackground>
        </BottomSheetView>

      </BottomSheet>}


      
      <View style={[styles.bottomNav, isOpen === true ? {display: 'none'} : {position: 'absolute'}]}>
        <TouchableOpacity onPress={() => timerPressed(0)}>
          <CompassBoldIocn style={styles.compassIcon}/>
          <View style={styles.underline}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressScanToCharge()}>
          <UnlockRegIcon/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressSettings()}>
          <SettingsRegIcon/>
        </TouchableOpacity>
      </View>

  
    
      </GestureHandlerRootView>
  )
}

export default Map

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  map: {
    width: Dimensions.get('window').width,
    height: 1.25 * Dimensions.get('window').height,
    //bottom: -40
   // height: 100,
   // width: 100

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
    //position: 'absolute',
    
    //shadowOffset: { width: 10, height: 10 },   ios
    //shadowColor: 'black',   ios
    //shadowOpacity: 1,  ios
    elevation: 3,  // android
    
    //zIndex:999, ios
  },

  compassIcon: {
    marginTop: 8
  },

  underline: {
    height: 7,
    width: 42,
    backgroundColor: '#00F5FF',
    borderRadius: 5,
    marginTop: 3
  },

  cardBottomSheetImage: {
    height: 0.37 * Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90
  },

  placeName: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 7
  },

  placeLocation: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 10,
    color: '#FFFFFF',
    marginTop: -20
  },

  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width
  },

  batteryView: {
    flexDirection: 'row'
  },

  arrowDownIcon: {
    marginLeft: -10,
    marginTop: 5
  },

  arrowUpIcon: {
    marginLeft: -21,
    marginTop: 5
  },

  routeView: {
    flexDirection: 'row',
  },

  arrowRightIcon: {
    marginTop: 24,
    marginLeft: -5
  },

  routeText: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 10,
    color: '#FFFFFF',
    //marginBottom: 20
  },

  hoursTitle: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: -4
  },

  hoursView: {
    width: 180,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 35,
    marginTop: -20
  },

  hoursText: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 10,
    color: '#FFFFFF'
  },

  scanChargeButton: {
    width: 150,
    height: 40,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },

  scanChargeText: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 13,
    color: '#000000'
  }

})