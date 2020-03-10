import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyAKK2Hb8GJXTmMYxLHu7gQojVNlJuDJk8E",
    authDomain: "fir-test-336e9.firebaseapp.com",
    databaseURL: "https://fir-test-336e9.firebaseio.com",
    projectId: "fir-test-336e9",
    storageBucket: "fir-test-336e9.appspot.com",
    messagingSenderId: "460755730721",
    appId: "1:460755730721:web:dcb59be44d031e5aa37e60",
    measurementId: "G-0RKZ8LPFL0"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
