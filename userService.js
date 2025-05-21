import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { firebaseConfig } from './firebase.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addUser(data) {
  try {
    const docRef = await addDoc(collection(db, "users"), data);
    return docRef.id;
  } catch (error) {
    alert("Erro ao adicionar usuário: " + error.message);
  }
}
