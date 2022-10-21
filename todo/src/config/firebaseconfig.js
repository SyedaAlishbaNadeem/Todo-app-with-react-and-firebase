// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc_xMdZ4FRuPygb6YnMGNodfJ1E38fTqk",
  authDomain: "todo-with-react-sign-or-log-in.firebaseapp.com",
  projectId: "todo-with-react-sign-or-log-in",
  storageBucket: "todo-with-react-sign-or-log-in.appspot.com",
  messagingSenderId: "163407150801",
  appId: "1:163407150801:web:a36f0e526c589572814ff0",
  measurementId: "G-3VB8RYWY0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;
