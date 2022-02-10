import firebase from "firebase/app";
import "firebase/firestore"
//import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyC7c96hb_ELX89sJVSQP80t9AXgxQD2sG4",
    authDomain: "saifur-airbnb.firebaseapp.com",
    projectId: "saifur-airbnb",
    storageBucket: "saifur-airbnb.appspot.com",
    messagingSenderId: "592728108263",
    appId: "1:592728108263:web:f585ae4ef9cd902f59c642"
  };
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app(); 
  const db = app.firestore();
  export  {db};