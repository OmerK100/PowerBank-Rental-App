import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import Field from './Field';

import * as Keychain from 'react-native-keychain';


function InputComponents(props) {

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    phone: '',
    newPassword: '',
    confirmPassword: ''
  });

  function handleOnChange(text, input) {
    setInputs(prevState => ({...prevState, [input]: text}));
  }

  const buttonText = props.buttonText;
  delete props[buttonText];
  let propsArr: any[] = [];
  
  for (const obj in props) {
    if (Object.keys(props[obj]).length === 2) {
      propsArr.push(props[obj]);
    }
  }

  async function submitPressed() {
    if (buttonText === 'Log In') {

      console.log(inputs.username)
      console.log(inputs.password)


      console.log(4356443434)



      let registerData = {username: inputs.username, password: inputs.password}
      console.log('aaaa')
      fetch("http://192.168.1.195:4000/login", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(registerData),
      }).then(res => {
        console.log(res)
        setCredentials(inputs.username, inputs.password)
      })
      
      
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
       // ADD THIS THROW error
        throw error;
      });





    } else if (buttonText === 'Sign Up') {

      props.setButtonState(true)

      console.log(inputs.username)
      console.log(inputs.password)
      console.log(inputs.phone)

      let registerData = {username: inputs.username, password: inputs.password, phone: inputs.phone}
      console.log('aaaa')
      fetch("http://192.168.1.195:4000/register", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(registerData),
      }).then(res => {console.log(res)})
      
      
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
       // ADD THIS THROW error
        throw error;
      });
    } else if (buttonText === 'Next') {

      console.log(inputs.newPassword)
      console.log(333)
      console.log(inputs.confirmPassword)

    }
  }

  async function setCredentials(username, password) {
    await Keychain.setGenericPassword(username, password);
  }

  return (
    <View style={styles.container}>

      {
        propsArr.map((item, index) => {
          switch(item.name) {
            case 'Username':
              return <Field state={inputs.username} funcState={handleOnChange} obj={item} key={index}/>;
            case 'Password':
              return <Field state={inputs.password} funcState={handleOnChange} obj={item} key={index}/>;
            case 'Phone Number':
              return <Field state={inputs.phone} funcState={handleOnChange} obj={item} key={index}/>;
            case 'New Password':
              return <Field state={inputs.newPassword} funcState={handleOnChange} obj={item} key={index}/>;
            case 'Confirm Password':
              return <Field state={inputs.confirmPassword} funcState={handleOnChange} obj={item} key={index}/>;
          }
        })
      }

      <TouchableOpacity style={styles.button} onPress={() => submitPressed()}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 30,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    backgroundColor: 'white',
    padding: 50,
    gap: 30
  },

  input: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
    opacity: 0.5
  },

  inputPressed: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
    opacity: 1
  },

  icon: {
    marginTop: 13,
    marginRight: 13
  },

  button: {
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 50
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }

})

export default InputComponents