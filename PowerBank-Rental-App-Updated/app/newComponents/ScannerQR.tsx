import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'

import CompassRegIocn from '../newIcons/compassRegIcon.svg'
import UnlockBoldIcon from '../newIcons/unlockBoldIcon.svg'
import SettingsRegIcon from '../newIcons/settingsRegIcon.svg'


const ScannerQR = () => {

 /* function marker(color: string, size: string | number, borderLength: string | number, thickness: number = 2, borderRadius: number = 0): JSX.Element {
    return <View style={{ height: size, width: size }}>
      <View style={{ position: 'absolute', height: borderLength, width: borderLength, top: 0, left: 0, borderColor: color, borderTopWidth: thickness, borderLeftWidth: thickness, borderTopLeftRadius: borderRadius }}></View>
      <View style={{ position: 'absolute', height: borderLength, width: borderLength, top: 0, right: 0, borderColor: color, borderTopWidth: thickness, borderRightWidth: thickness, borderTopRightRadius: borderRadius }}></View>
      <View style={{ position: 'absolute', height: borderLength, width: borderLength, bottom: 0, left: 0, borderColor: color, borderBottomWidth: thickness, borderLeftWidth: thickness, borderBottomLeftRadius: borderRadius }}></View>
      <View style={{ position: 'absolute', height: borderLength, width: borderLength, bottom: 0, right: 0, borderColor: color, borderBottomWidth: thickness, borderRightWidth: thickness, borderBottomRightRadius: borderRadius }}></View>
    </View>
  }*/


  /*<QRCodeScanner
      cameraContainerStyle={{height: 200}}
      cameraStyle={{width: 300}}
      onRead={(data) => alert(data)}
      reactivate={true}
      reactivateTimeout={1000}
      //customMarker={marker('white', '60%', '25%', 6, 20)}
      bottomContent={
        <View>
        <ImageBackground
        style={styles.textView}
        source={require('../newImages/rectangleQRScanner.png')}
      >
        <Text style={styles.scanText}>Scan QR code on the InPower Unit</Text>
  
      </ImageBackground>

<View style={styles.bottomNav}>
<TouchableOpacity>
  <CompassRegIocn/>
</TouchableOpacity>
<View>
  <UnlockBoldIcon/>
  <View style={styles.underline}></View>
</View>
<TouchableOpacity>
  <SettingsRegIcon/>
</TouchableOpacity>
</View>
</View>
      }
    />*/

  return (
    <View style={styles.container}>



<ImageBackground
  style={styles.scanArea}
  source={require('../newImages/rer2.png')}
>

<QRCodeScanner
      cameraContainerStyle={{alignSelf: 'center'}}
      cameraStyle={{width: 210, height: 140}}
      onRead={(data) => alert(data)}
      reactivate={true}
      reactivateTimeout={1000}
      //customMarker={marker('white', '60%', '25%', 6, 20)}
    
  />



</ImageBackground>





<View>
        <ImageBackground
        style={styles.textView}
        source={require('../newImages/rectangleQRScanner.png')}
      >
        <Text style={styles.scanText}>Scan QR code on the InPower Unit</Text>
  
      </ImageBackground>

<View style={styles.bottomNav}>
<TouchableOpacity>
  <CompassRegIocn/>
</TouchableOpacity>
<View>
  <UnlockBoldIcon/>
  <View style={styles.underline}></View>
</View>
<TouchableOpacity>
  <SettingsRegIcon/>
</TouchableOpacity>
</View>
</View>


    </View>
    
  )
}

export default ScannerQR

const styles = StyleSheet.create({

  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    
    backgroundColor: 'rgba(0, 0, 0, 0.69)'
  },

  textView: {
    //marginTop: Dimensions.get('window').height - 220,
    
    width: Dimensions.get('window').width - 104,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  scanText: {
    fontSize: 17,
    fontFamily: 'MontserratRegular',
    color: '#FFFFFF',
    textAlign: 'center',
    width: '80%'
  },

  bottomNav: {
    width: Dimensions.get('window').width - 80,
    height: 60,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    //marginTop: Dimensions.get('window').height - 250,
    backgroundColor: 'white',
    //position: 'absolute',
    
    //shadowOffset: { width: 10, height: 10 },   ios
    //shadowColor: 'black',   ios
    //shadowOpacity: 1,  ios
    elevation: 3,  // android
    
    //zIndex:999, ios
  },

  underline: {
    height: 7,
    width: 42,
    backgroundColor: '#00F5FF',
    borderRadius: 5,
    marginTop: 3
  },

  scanArea: {
    marginTop: 50,
    marginBottom: 50,
    height: 380,
    width: 265
  }

})