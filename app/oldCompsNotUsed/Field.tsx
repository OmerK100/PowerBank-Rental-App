import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

function Field(props) {

  const [pressedInputIn, setPressedInputIn] = useState(true);
  const [eyeState, setEyeState] = useState(false);

  function HidePassword() {
    if (props.obj.name === 'Password' && props.state !== '') {
      return <FontAwesome style={pressedInputIn === true? styles.eyeHidden : styles.eye} name={'eye'} size={18} onPress={eyePressed}/>
    }
  
    return;
  }

  function eyePressed() {
    setEyeState(prevState => !prevState)
  }

  function handle(text, name) {
    switch(name) {
      case 'Username':
        props.funcState(text, 'username');
        break;
      case 'Password':
        props.funcState(text, 'password');
        break;
      case 'Phone Number':
        props.funcState(text, 'phone');
        break;
      case 'New Password':
        props.funcState(text, 'newPassword');
        break;
      case 'Confirm Password':
        props.funcState(text, 'confirmPassword');
        break;
    }
  }

  function Icon(data) {
    if (data.pressedIn) {
      return <FontAwesome style={styles.icon} name={data.name} size={18}/>
    }
  
    return;
  }

  function inputIn() {
    setPressedInputIn(false);
  }

  function inputOut() {
    setPressedInputIn(true);
  }

  return (
    
    <View style={pressedInputIn? styles.input : styles.inputPressed}>
      <Icon pressedIn={pressedInputIn} name={props.obj.icon}/>
      <TextInput 
        secureTextEntry={props.obj.name === 'Password' && eyeState === false? true : false} 
        placeholder={props.obj.name} 
        onFocus={() => inputIn()} onBlur={() => inputOut()} 
        onChangeText={text => handle(text, props.obj.name)} 
        value={props.state}/>
      <HidePassword/>

    </View>

  )
}

const styles = StyleSheet.create({

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

  eye: {
    marginTop: 16,
    marginLeft: 134
  },

  eyeHidden: {
    marginTop: 16,
    marginLeft: 105
  }

})

export default Field