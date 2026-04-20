import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAA0UgXG_HW75bEEpvvI_NEack7zn2F7lw",
  authDomain: "dearmarentcar.firebaseapp.com",
  projectId: "dearmarentcar",
  storageBucket: "dearmarentcar.firebasestorage.app",
  messagingSenderId: "344952342808",
  appId: "1:344952342808:web:66a8c4eac96a0a4a43f66d",
};

// Initialize Firebase only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };