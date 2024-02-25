import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

function ProfileComponent(props) {
  return (
    
    <View style={styles.mainContainer}>

      <View style={styles.leftContainer}>

        <Image
          style={styles.profilePicture}
          source={require('../images/Unknown_person.jpg')}
        />

        <View style={styles.leftContainerView}>

          <Text style={styles.personalName}>To be removed</Text>
          <Text style={styles.userName}>Omer</Text>

        </View>

      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

    </View>

  )
}

const styles = StyleSheet.create({

  mainContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around', 
  },

  leftContainer: {
    flexDirection: 'row'
  },

  profilePicture: {
    height: 80,
    width: 80,
    borderRadius: 100,
    borderWidth: 0.2,
    borderColor: '#000080'
  },

  leftContainerView: {
    marginLeft: 10,
    marginTop: 18
  },

  personalName: {
    fontWeight: 'bold',
  },

  userName: {
    fontSize: 12
  },

  editButton: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#000080',
    
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }

})

export default ProfileComponent