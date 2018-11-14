import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux' // Connextion avec les composants
import rootReducer from './store/reducers/rootReducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk' // Allows to pass a function instead of an action, and dispatcher from this function
import {reduxFirestore, getFirestore} from 'redux-firestore' // provide redux binding to firestore databases
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase' //provide binding to the firebase servivces
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), //applyMiddleware(thunk)) - retourne une fonctions quand une actiosn est créée qui va pouvoir intéragir avec la BDD
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile:'users', attachAuthIsReady: true})
    )
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
});



