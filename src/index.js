import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseContext } from './Store/FirebaseContext';
import firebase from './Firebase/config'

ReactDOM.render(
 <FirebaseContext.Provider value={{firebase}}>
    <App />
    </FirebaseContext.Provider>
,document.getElementById('root'));


