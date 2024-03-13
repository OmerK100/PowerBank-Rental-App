import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Modal from 'react-native-modal'
import Field from './Field'

function SendPhoneModal(props) {

  const [inputs, setInputs] = useState({
    phone: ''
  });

  function handleOnChange(text, input) {
    setInputs(prevState => ({...prevState, [input]: text}));
  }

  return (
    
    <Modal animationIn={'slideInUp'} isVisible={props.state} backdropColor='black'>

        <View style={styles.modalContainer}>

          <View style={styles.modalTopView}>

            <Text style={styles.modalTextTop}>Password Recovery</Text>
          
            <Text style={styles.modalTextBottom}>
              Enter your phone number to recover your password
            </Text>

            <Field state={inputs.phone} funcState={handleOnChange} obj={{name: 'Phone Number', icon: 'phone'}} key={1}/>

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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    gap: 80
  },

  modalTopView: {
    gap: 10
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

export default SendPhoneModal