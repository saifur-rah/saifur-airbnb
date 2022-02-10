// import { FirebaseAdapter } from "@next-auth/firebase-adapter";
// import NextAuth from "next-auth";
// import "firebase/firestore"

// import firebase from "firebase/app"


// import GoogleProvider from "next-auth/providers/google";
// //import Providers from "next-auth/providers"
// import { db } from "../../../firebase";
// import { Firestore } from "firebase/firestore";
// //  const firestore = (
// //      firebase.getApps[0] ?? firebase.initializeApp(firebaseConfig)
// //    ).firestore()

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     // ...add more providers here
//   ],
//   //adapter: FirebaseAdapter(db),
//   //adapter: FirebaseAdapter(db),

  
// // firebaseConfig = {
// //     apiKey: "AIzaSyC7c96hb_ELX89sJVSQP80t9AXgxQD2sG4",
// //     authDomain: "saifur-airbnb.firebaseapp.com",
// //     projectId: "saifur-airbnb",
// //     storageBucket: "saifur-airbnb.appspot.com",
// //     messagingSenderId: "592728108263",
// //     appId: "1:592728108263:web:f585ae4ef9cd902f59c642"
// //   },
// });
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
})