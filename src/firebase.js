// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu39EZDuRhIDPlQpSblBNNHF7xv6CRnr4",
  authDomain: "thebtians110.firebaseapp.com",
  projectId: "thebtians110",
  storageBucket: "thebtians110.appspot.com",
  messagingSenderId: "390768363416",
  appId: "1:390768363416:web:cf7fba2ffe2ad76e2c4ded",
  measurementId: "G-RY00XS6E76"
};

// Initialize Firebase
const initFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const messaging = getMessaging(initFirebase);

export const getPermission = (setTokenFound) => {
    return getToken(messaging, {vapidKey: 'BADcMG2bD2vUbY5_auu04NEwthkHPUwvA-cEVXiNBBN8AuceFCjdVl87Juu-TKuw8JY-cvcQ6_xL7E2oCuosdZc'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});

export default initFirebase;