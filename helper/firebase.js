// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyCvt5t6G_KSsY_ucaV4LhbqiZ1QuBtRalg",
    authDomain: "all-in-one-full-stack.firebaseapp.com",
    projectId: "all-in-one-full-stack",
    storageBucket: "all-in-one-full-stack.appspot.com",
    messagingSenderId: "929796514876",
    appId: "1:929796514876:web:a1782ae2d552d2c63e8f39",
    measurementId: "G-RFNV9VH54F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);