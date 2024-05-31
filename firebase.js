import { initializeApp } from "firebase/app";
import { child, getDatabase, onValue, ref, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBEGNbRqVYMKRCYWwz__vLaCdgXFMAJY28",
  authDomain: "tiny-heros.firebaseapp.com",
  projectId: "tiny-heros",
  storageBucket: "tiny-heros.appspot.com",
  messagingSenderId: "494887546965",
  appId: "1:494887546965:web:1fcc5c1ead42f498d164dc"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const updatePlayer = async (data) => {
  try {
    await update(ref(db, 'players/' + data.address), {
      ...data
    });
    return {
      message: "Player updated",
      status: 200
    };
  } catch (error) {
    console.error("Error updating player:", error.message);
    return {
      message: error.message,
      status: 400
    };
  }
};

child

export const getPlayer = async (data) => {
  let response;
  const Ref = ref(db, 'players/' + data.address);
  onValue(Ref, (snapshot) => {
    response = snapshot.val();
  });
  return response

};
