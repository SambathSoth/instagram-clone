// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9LMM-PaxOmVs68edf1252MpnjjMqS4mM',
  authDomain: 'instagram-clone-ded6a.firebaseapp.com',
  projectId: 'instagram-clone-ded6a',
  storageBucket: 'instagram-clone-ded6a.appspot.com',
  messagingSenderId: '259297682129',
  appId: '1:259297682129:web:7fd05e3f3a3390874edbf0',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
