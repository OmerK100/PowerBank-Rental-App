import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import IonIcon from 'react-native-vector-icons/Ionicons'

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import SettingComponent from './SettingComponent';

import ProfileComponent from './ProfileComponent';

import MapBottomNav from './MapBottomNav';

function Settings({navigation, route}: any) {

  function homePress() {
    navigation.goBack();
  }

  return (

    <View>

      <View style={styles.topView}>

        <View style={styles.title}>
          <Text style={styles.titleText}>Settings</Text>
        </View>

        <View>

          <ProfileComponent/>

          <Text style={styles.settingsText}>Settings</Text>

          <SettingComponent name='Rental History' iconName='history' marginLeftFromIcon={15}/>
          <SettingComponent name='Invite Friends For Reward!' iconName='share' marginLeftFromIcon={15}/>
          <SettingComponent name='Help' iconName='help' marginLeftFromIcon={32}/>
          <SettingComponent name='About Us' iconName='user' marginLeftFromIcon={20}/>

        </View>

      </View>

      <MapBottomNav 
      navigation={navigation} 
      navigationFunction={homePress}
      settingsStyle={{opacity: 0.5, backgroundColor: 'white'}} 
      mapStyle={{}}
      settingsDisabled={true}
      mapDisabled={false}
      />

    </View>

    /*<View style={styles.container}>

      <View style={styles.namePicContainer}>

        <Image 
          style={styles.profilePic}
          source={require('../images/Unknown_person.jpg')}
        />

        <Text>
          name
        </Text>

      </View>

      <View style={styles.settingOptionsContainer}>

        <View style={styles.settingOptionView}>
          <TouchableOpacity style={styles.settingOptionButton}>
            <Text style={styles.settingOptionText}>
              Profile Settings
            </Text>
          </TouchableOpacity>
        </View >

        <View>
          <TouchableOpacity style={styles.settingOptionButton}>
            <Text style={styles.settingOptionText}>
              Order History
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.settingOptionButton}>
            <Text style={styles.settingOptionText}>
              Invite Friends For Reward!
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.settingOptionButton}>
            <Text style={styles.settingOptionText}>
              Help
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.settingOptionButtonBottom}>
            <Text style={styles.settingOptionText}>
              About Us
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>*/


  )
}

const styles = StyleSheet.create({

  

  /*container: {
    height: Dimensions.get('window').height,
    justifyContent: 'space-around',
    alignItems: 'center',
  },*/

  namePicContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
    marginTop: 70
  },

  settingOptionsContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 50,
    marginBottom: 30
  },

  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 100
  },

  settingOptionView: {

  },

  settingOptionButton: {
    width: Dimensions.get('window').width,
    justifyContent: 'flex-start',
    borderTopWidth: 5
  },

  settingOptionButtonBottom: {
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width,
    borderTopWidth: 5,
    borderBottomWidth: 5
  },

  settingOptionText: {
    marginLeft: 60
  },







  topView: {
    height: Dimensions.get('window').height,
  },

  title: {
    borderWidth: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: '#000080',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleText: {
    color: '#000080',
    fontSize: 26,
    fontWeight: 'bold'
  },

  settingsText: {
    marginTop: 28,
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 30
  },

})

export default Settings