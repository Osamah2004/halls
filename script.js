// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZihKyU3Ls7-EXrPQ4pn3yVoaGQO98TEE",
    authDomain: "halls-locations.firebaseapp.com",
    projectId: "halls-locations",
    storageBucket: "halls-locations.firebasestorage.app",
    messagingSenderId: "787903310415",
    appId: "1:787903310415:web:4b07edc57c786f50b2183a",
    measurementId: "G-M99D71EL0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export async function getArrayFromCollection() {
    const docRef = doc(db, "COMPUTER", "H1"); // Replace "your-doc-id" with the actual document ID
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        const myArray = data.collections; // Replace "yourArrayField" with the actual array field name
        return myArray;
    } else {
        console.log("No such document!");
    }
}