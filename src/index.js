import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyDdqvP47pOeNtRggZJcxGOJKpyi7s_ZaPo",
  authDomain: "task-manager-43d9a.firebaseapp.com",
  projectId: "task-manager-43d9a",
  storageBucket: "task-manager-43d9a.appspot.com",
  messagingSenderId: "650092523205",
  appId: "1:650092523205:web:34d9f12abd57c4155c4aac"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
