// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5V-pTjBxGjjl5JgyUV227_22hEMI2wBY",
    authDomain: "angular-tic-tac-toe-pwa-12335.firebaseapp.com",
    projectId: "angular-tic-tac-toe-pwa-12335",
    storageBucket: "angular-tic-tac-toe-pwa-12335.appspot.com",
    messagingSenderId: "249548957376",
    appId: "1:249548957376:web:c04ce77c50287cb4a4ef25",
    measurementId: "G-D29BH8KCTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);