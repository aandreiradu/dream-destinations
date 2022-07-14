import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD18n1vmwmaQ6tL0Q1Ty0Y52dXv5rbzHWE",
  authDomain: "destinations-c3b84.firebaseapp.com",
  projectId: "destinations-c3b84",
  storageBucket: "destinations-c3b84.appspot.com",
  messagingSenderId: "9579258029",
  appId: "1:9579258029:web:ed4638593cc19d1d04e624",
};

const firebaseApp = initializeApp(firebaseConfig);

// firestore
export const db = getFirestore();

export const getTrendingDestinations = async () => {
  const collectionRef = collection(db, "summer-2022-trending");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((snapshot) => {
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  });
};

export const getCategories = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((category) => {
    return {
      id: category.id,
      ...category.data(),
    };
  });
};
