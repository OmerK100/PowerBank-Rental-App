import React from 'react';
import type {PropsWithChildren} from 'react';

import Login from './Login';

import LoginInputs from './LoginInputs';

import RegisterInputs from './RegisterInputs';


import Map from './Map';

import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Settings from './Settings';
import QRscanner from './QRscanner';
import LoginNew from './LoginNew';
import RegisterNew from './RegisterNew';
import PasswordRecovery from './PasswordRecovery';

import SettingsLogin from './SettingsLogin';
import LoginMain from './LoginMain';

const Stack = createNativeStackNavigator();

/*<Stack.Screen 
        name='PasswordRecovery'
        component={PasswordRecovery}
        options={{title: ''}}
        />*/

function App() {
  return (
    
    
    /*<NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

      <Stack.Screen 
        name='Login'
        component={Login}
        options={{headerShown: false}}
        />
      <Stack.Screen 
        name='LoginInputs'
        component={LoginInputs}
        options={{title: 'Log In'}}
        />

<Stack.Screen 
        name='RegisterInputs'
        component={RegisterInputs}
        options={{title: 'Register'}}
        />
        </Stack.Navigator>  
     </NavigationContainer>*/



     <NavigationContainer>
      <Stack.Navigator initialRouteName='Settings'>

      <Stack.Screen 
        name='Map'
        component={Map}
        options={{headerShown: false}}
        />

<Stack.Screen 
        name='LoginMain'
        component={LoginMain}
        options={{headerShown: false}}
        />

<Stack.Screen 
        name='LoginNew'
        component={LoginNew}
        options={{headerShown: false}}
        />
      <Stack.Screen 
        name='RegisterNew'
        component={RegisterNew}
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name='Settings'
        component={Settings}
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name='QRscanner'
        component={QRscanner}
        options={{title: 'Scan QR'}}
        />

        </Stack.Navigator>  
     </NavigationContainer>



     /*<NavigationContainer>
      <Stack.Navigator initialRouteName='LoginNew'>

      <Stack.Screen 
        name='LoginNew'
        component={LoginNew}
        options={{headerShown: false}}
        />
      <Stack.Screen 
        name='RegisterNew'
        component={RegisterNew}
        options={{headerShown: false}}
        />

        </Stack.Navigator>  
     </NavigationContainer>*/

     



     

    
  );
}

export default App;





/*import React from 'react';
import type {PropsWithChildren} from 'react'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change thisfgxgxgxgxg
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;*/
