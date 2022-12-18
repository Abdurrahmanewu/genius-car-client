// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAYdzg1-KGB-KRL6dpQN4Y3RdbIzG7gykk',
    authDomain: 'genius-car-54802.firebaseapp.com',
    projectId: 'genius-car-54802',
    storageBucket: 'genius-car-54802.appspot.com',
    messagingSenderId:'189441230527',
    appId: '1:189441230527:web:63a10e09b198422903e80'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;