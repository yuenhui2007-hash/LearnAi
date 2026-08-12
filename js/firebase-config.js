// firebase-config.js
// Firebase project: caie-dropdown

const firebaseConfig = {
  apiKey: "AIzaSyB7nCLHb04eGs-5eRkE5Cb_QYxNBv0HO98",
  authDomain: "caie-dropdown.firebaseapp.com",
  projectId: "caie-dropdown",
  storageBucket: "caie-dropdown.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
