
importScripts(
  'https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js'
)
firebase.initializeApp({ "apiKey": "AIzaSyALh33Rlq_HE5dpbgfGPmgaReOzufDR8gs", "authDomain": "test-2e208.firebaseapp.com", "projectId": "test-2e208", "storageBucket": "test-2e208.appspot.com", "messagingSenderId": "749220235486", "appId": "1:749220235486:web:d0133f00805b7bb2dd9a4f", "measurementId": "G-H7JDR60QV8" })

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

self.addEventListener('push', function (e) {
  data = e.data.json();
  console.log("🚀 ~ file: firebase-messaging-sw.js ~ line 31 ~ data", data)


  var options = {
    body: data.notification.body,
    icon: data.notification.icon,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [

    ]
  };
  e.waitUntil(
    self.registration.showNotification(data.notification.title, options)
  );
});