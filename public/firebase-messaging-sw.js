// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyCu39EZDuRhIDPlQpSblBNNHF7xv6CRnr4",
    authDomain: "thebtians110.firebaseapp.com",
    projectId: "thebtians110",
    storageBucket: "thebtians110.appspot.com",
    messagingSenderId: "390768363416",
    appId: "1:390768363416:web:cf7fba2ffe2ad76e2c4ded",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});