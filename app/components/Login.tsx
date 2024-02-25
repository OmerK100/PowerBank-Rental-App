import React from 'react';
import type {PropsWithChildren} from 'react'; 
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import LoginInputs from './LoginInputs';

import RegisterInputs from './RegisterInputs';

import { NativeStackScreenProps } from '@react-navigation/native-stack';





function Login({navigation}: any) {

  function loginPress() {
    navigation.navigate('LoginInputs');
  }

  function registerPress() {
    navigation.navigate('RegisterInputs');
  }

  return <SafeAreaView>

    <View style={styles.topView}>
      <Text style={styles.topText}>
        Log In
      </Text>
    </View>

    <View style={styles.imageView}>
      <Image  
        style={styles.logo}
        source={require('../images/inpower.jpg')}
      />
    </View>

    <View style={styles.buttonsView}>
      <TouchableOpacity style={styles.button} onPress={() => loginPress()}>
        <Text style={styles.buttonText}>
          Log In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => registerPress()}>
        <Text style={styles.buttonText}>
          Register
        </Text>
      </TouchableOpacity>
    </View>

  </SafeAreaView>

}

const styles = StyleSheet.create({
  topView: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: 'lightblue'
  },

  topText: {
    fontSize: 25,
    color: 'lightblue'
  },

  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },

  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,

    // Add elevation effect, shadow...
  },

  buttonsView: {
    marginTop: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    backgroundColor: 'lightblue',
    width: 200,
    height: 70,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 20
  }
});

export default Login;