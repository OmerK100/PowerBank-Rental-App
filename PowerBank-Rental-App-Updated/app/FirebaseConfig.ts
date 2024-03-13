// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7GgHlOB2oNKJWTBlR9YxkI6q1ECB9Yso",
  authDomain: "inpower-d5fc9.firebaseapp.com",
  databaseURL: "https://inpower-d5fc9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "inpower-d5fc9",
  storageBucket: "inpower-d5fc9.appspot.com",
  messagingSenderId: "757260617197",
  appId: "1:757260617197:web:5601f93fe90fd5866d93e4",
  measurementId: "G-B5WHEX6MXL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

/*const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})*/

const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

//const analytics = getAnalytics(firebaseApp);


export {firebaseApp, auth};