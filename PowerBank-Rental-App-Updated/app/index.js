/**
 * @format
 */


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';



//addDoc(collection(db, "stations"), {name: 'omer', country: 'il'})

AppRegistry.registerComponent(appName, () => App);

//export {db};
