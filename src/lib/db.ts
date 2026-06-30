import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc
} from 'firebase/firestore';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { db, auth } from './firebase';

export {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  db,
  auth
};
export type { User };
