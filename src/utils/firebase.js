import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBjdQUz_xX_Xm47Us5fk6v649Yb4VmNWDA",
  authDomain: "my-personal-web-6c856.firebaseapp.com",
  databaseURL: "https://my-personal-web-6c856.firebaseio.com",
  projectId: "my-personal-web-6c856",
  storageBucket: "my-personal-web-6c856.appspot.com",
  messagingSenderId: "825270418784",
  appId: "1:825270418784:web:552f2a0503bcea3e547205",
});

var db = firebaseApp.database().ref("contacts");

export { db };
