import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyBb5BdUKRPZWZyNHdaZnx7uHpJdBmqYHIs",
    authDomain: "fricon-testing.firebaseapp.com",
    databaseURL: "https://fricon-testing.firebaseio.com",
    projectId: "fricon-testing",
    storageBucket: "fricon-testing.appspot.com",
    messagingSenderId: "160071014312",
    appId: "1:160071014312:web:20af406692083e188baf9d"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
