import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux' //Divise le reducer et organise l'état par section
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase' // Connect React and Redux to Firebase

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;