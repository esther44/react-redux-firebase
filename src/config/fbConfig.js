import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDSO54PYJcwF4jUES9oFfKxWg4SPffM_YM",
    authDomain: "net-ninja-marioplan-c1b32.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-c1b32.firebaseio.com",
    projectId: "net-ninja-marioplan-c1b32",
    storageBucket: "net-ninja-marioplan-c1b32.appspot.com",
    messagingSenderId: "4135268790"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;