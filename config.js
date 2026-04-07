// GORUN Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ4On6mmMYp7430PavpxlsYUdrU-B7ozM",
    authDomain: "life-gps-2c6d1.firebaseapp.com",
    projectId: "life-gps-2c6d1",
    databaseURL: "https://life-gps-2c6d1-default-rtdb.firebaseio.com/",
    storageBucket: "life-gps-2c6d1.firebasestorage.app",
    messagingSenderId: "739534835153",
    appId: "1:739534835153:web:77e6b1f6650fba5d7624f0"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
const auth = firebase.auth();