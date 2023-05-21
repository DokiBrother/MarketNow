// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCicdMAHXA1usnZ62M6jkTjW4w3B2l0Txw",
  authDomain: "marketnow-63a1e.firebaseapp.com",
  projectId: "marketnow-63a1e",
  storageBucket: "marketnow-63a1e.appspot.com",
  messagingSenderId: "141646838647",
  appId: "1:141646838647:web:b926e4cd8afaeae48d3f72",
  measurementId: "G-KTH4E5JD34",
};



// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};
