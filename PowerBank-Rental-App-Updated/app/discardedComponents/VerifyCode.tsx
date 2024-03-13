import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

function VerifyCode(props) {
  return (

    <Modal animationIn={'slideInUp'} isVisible={props.state} backdropColor='black'>

        <View style={styles.modalContainer}>

          <View style={styles.modalTopView}>

            <Image
              style={styles.modalMessageImage}
              source={require('../images/sms.jpg')}
            />

            <Text style={styles.modalTextTop}>SMererererererS verification sent</Text>

            <Text style={styles.modalTextBottom}>
              Check your messages and enter the porvided code to continue
            </Text>

          </View>

          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Next</Text>
          </TouchableOpacity>

        </View>

      </Modal>
    
  )
}

const styles = StyleSheet.create({

  modalContainer: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 400,
    width: 350,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
  },

  modalTopView: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  modalMessageImage: {
    width: 150,
    height: 150
  },

  modalTextTop: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20
  },

  modalTextBottom: {
    textAlign: 'center',
    width: 250,
    opacity: 0.7
  },

  modalButton: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 20,
    marginTop: 15
  },

  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }

})

export default VerifyCode