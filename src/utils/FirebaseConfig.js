import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDBeYTU9DffgJzqm11rMI96nCWSVYUVDFk",
  authDomain: "offerdhamaka.firebaseapp.com",
  databaseURL: "https://offerdhamaka.firebaseio.com",
  projectId: "offerdhamaka",
  storageBucket: "offerdhamaka.appspot.com",
  messagingSenderId: "787226436881",
  appId: "1:787226436881:web:4413816f7129a05d6f58b0",
  measurementId: "G-V64RYXPB30",
});

export const auth = app.auth();
export default app;
