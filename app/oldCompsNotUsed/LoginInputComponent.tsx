import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';




function LoginInputComponent() {

  const [pressedInputIn1, setPressedInputIn1] = useState(true);
  const [pressedInputIn2, setPressedInputIn2] = useState(true);

  function Icon(props) {
    if (props.pressedIn) {
      return <FontAwesome style={styles.icon} name={props.name} size={18}/>
    }
  
    return;
  }

  function inputIn(which: number) {
    if (which === 1) {
      setPressedInputIn1(false);
    } else {
      setPressedInputIn2(false);
    }
  }

  function inputOut(which) {
    if (which === 1) {
      setPressedInputIn1(true);
    } else {
      setPressedInputIn2(true);
    }
  }

  return (
    <View style={styles.container}>

      <View style={pressedInputIn1? styles.input : styles.inputPressed}>
        <Icon pressedIn={pressedInputIn1} name='user'/>
        <TextInput placeholder='Username' onFocus={() => inputIn(1)} onBlur={() => inputOut(1)}/>
      </View>

      <View style={pressedInputIn2? styles.input : styles.inputPressed}>
      <Icon pressedIn={pressedInputIn2} name='lock'/>
        <TextInput placeholder='Password' onFocus={() => inputIn(2)} onBlur={() => inputOut(2)}/>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
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

export default LoginInputComponent