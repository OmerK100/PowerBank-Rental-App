import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'

import GetStarted from './newComponents/GetStarted'
import OnboardingComponent from './newComponents/OnboardingComponent'

import Locate1 from './newImages/Locate1.png'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from './newComponents/Map'
import Login from './newComponents/Login'
import Signup from './newComponents/Signup'
import Verification from './discardedComponents/Verification'
import Settings from './newComponents/Settings'
import PowerStationData from './discardedComponents/PowerStationData'
import ScannerQR from './newComponents/ScannerQR'

import Orientation from 'react-native-orientation-locker'

import AsyncStorage from '@react-native-async-storage/async-storage'


import * as Keychain from 'react-native-keychain';
import RentalHistory from './newComponents/RentalHistory'
import AboutsUs from './newComponents/AboutsUs'
import Support from './newComponents/Support'

import Help from './newComponents/Help'



import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import PaymentMethod from './newComponents/PaymentMethod'

/*const firebaseConfig = {
  apiKey: "AIzaSyD7GgHlOB2oNKJWTBlR9YxkI6q1ECB9Yso",
  authDomain: "inpower-d5fc9.firebaseapp.com",
  databaseURL: "https://inpower-d5fc9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "inpower-d5fc9",
  storageBucket: "inpower-d5fc9.appspot.com",
  messagingSenderId: "757260617197",
  appId: "1:757260617197:web:5601f93fe90fd5866d93e4",
  measurementId: "G-B5WHEX6MXL"
};

const app = initializeApp(firebaseConfig);*/
//const db = getFirestore(app);
//const analytics = getAnalytics(app);

//addDoc(collection(db, "stations"), {name: 'omer', country: 'il'});


const Stack = createNativeStackNavigator();

//Orientation.lockToPortrait();




const App = () => {

  function renderIntroduction(passed: any) {
    if (passed === "") {
      return 
    }
    if (passed === 'true') {
      return (
         <NavigationContainer>
         <Stack.Navigator initialRouteName='Map'>
           <Stack.Screen name='Map' options={{headerShown: false}}>
             {() => <Map/>}
           </Stack.Screen>

           <Stack.Screen name='Login' options={{headerShown: false}}>
             {() => <Login/>}
           </Stack.Screen>

           <Stack.Screen name='Signup' options={{headerShown: false}}>
             {() => <Signup/>}
           </Stack.Screen>

           <Stack.Screen name='Settings' options={{headerShown: false}} component={Settings}>
            
           </Stack.Screen>

           <Stack.Screen name='RentalHistory' options={{headerShown: false}} component={RentalHistory}>
            
           </Stack.Screen>

           <Stack.Screen name='AboutUs' options={{headerShown: false}} component={AboutsUs}>
            
           </Stack.Screen>

           <Stack.Screen name='Support' options={{headerShown: false}} component={Support}>
            
           </Stack.Screen>

           <Stack.Screen name='Help' options={{headerShown: false}} component={Help}>
            
           </Stack.Screen>

           <Stack.Screen name='PaymentMethod' options={{headerShown: false}} component={PaymentMethod}>
            
           </Stack.Screen>

         </Stack.Navigator>  
        </NavigationContainer>
   
        
       )
    }

    console.log("here")

    return (<NavigationContainer>
      <Stack.Navigator initialRouteName='Onboard1'>
        <Stack.Screen name='Onboard1' options={{headerShown: false}}>
          {() => <OnboardingComponent onboardNum={1} chosenIndicator={1} title='Locate' text='Find your nearest charging spot anywhere in Israel with just one tap' setStorage={saveIntroduction} getStorage={getIntroduction}
           setPassed={setPassedIntroduction} passed={passedIntroduction}
           
           />}
        </Stack.Screen>
        <Stack.Screen name='Onboard2' options={{headerShown: false}}>
          {() => <OnboardingComponent onboardNum={2} chosenIndicator={2} title='Unlock' text='Quickly scan the QR code to release a Powerbank and start charging immediately' setStorage={saveIntroduction} 
          getStorage={getIntroduction} setPassed={setPassedIntroduction} passed={passedIntroduction} />}
        </Stack.Screen>
        <Stack.Screen name='Onboard3' options={{headerShown: false}}>
          {() => <OnboardingComponent onboardNum={3} chosenIndicator={3} title='Charge' text="Power up on the go and return the Powerbank to any station when you're finished" setStorage={saveIntroduction} getStorage={getIntroduction}
           setPassed={setPassedIntroduction} passed={passedIntroduction} />}
        </Stack.Screen>
        <Stack.Screen name='Map' options={{headerShown: false}}>
          {() => <Map/>}
        </Stack.Screen>
      </Stack.Navigator>  
     </NavigationContainer>)
    
  
    
  }
  


  const [passedIntroduction, setPassedIntroduction] = useState("false");

  const [x, setX] = useState("");

  async function saveIntroduction(flag) {
    try{ 
      console.log(777)
      console.log(passedIntroduction)
      await AsyncStorage.setItem('alreadyIntroduced', flag)
    } catch (err) {
      console.log(err);
    }
  }

  
  
  async function getIntroduction() {
    try {
      console.log(passedIntroduction)
      console.log(475)
      var x = await AsyncStorage.getItem('alreadyIntroduced')
      //console.log(x)
      if (x === 'fff') {
        //console.log(4)
      }
      return x;
    } catch (err) {
      console.log(err);
    }
  }
  
  useMemo(() => {
    getIntroduction().then((data) =>{
      console.log(data)
      console.log(87)
      if (data === 'true') {
        setX("true")
        //setPassedIntroduction("true");
      } else {
        setX("false")
      }
    }
      
    )
    
    //console.log(x)
    /*setPassedIntroduction("true");*/
    /*saveIntroduction().then(() => {
      var x = getIntroduction().then(() => {console.log(x)})
      }
    )  */
    
  }, []);


  return (
    renderIntroduction(x)

    

   


    /* <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

      <Stack.Screen 
        name='Login'
        component={Login}
        options={{headerShown: false}}
        />

<Stack.Screen 
        name='Signup'
        component={Signup}
        options={{headerShown: false}}
        />

      </Stack.Navigator>
        
     </NavigationContainer>*/

     /*<View>
      <Demo setStorage={saveIntroduction} getStorage={getIntroduction} setPassed={setPassedIntroduction} passed={passedIntroduction}/>
      <Text>{passedIntroduction}</Text>
     </View>*/
    

    //<PowerStationData/>

     /*<NavigationContainer>
      <Stack.Navigator initialRouteName='Map'>
        <Stack.Screen 
          name='Map' 
          options={{headerShown: false}}
          component={Map}
          
          />

<Stack.Screen 
          name='Settings' 
          options={{headerShown: false}}
          component={Settings}
          
          />

<Stack.Screen 
          name='ScannerQR' 
          options={{headerShown: false}}
          component={ScannerQR}
          
          />
         
       
      </Stack.Navigator>  
     </NavigationContainer>*/
    
  )
}

export default App;
const styles = StyleSheet.create({
})