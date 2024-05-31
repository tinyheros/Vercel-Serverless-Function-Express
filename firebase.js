import { initializeApp } from "firebase/app";
import { child, getDatabase, ref, update } from "firebase/database";

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

export const getPlayer = async (address) => {
  const dbRef = ref(db);
  try {
    const snapshot = await get(child(db, `players/${address}`));
    if (snapshot.exists()) {
      return {
        data: snapshot.val(),
        message: "Player data retrieved",
        status: 200
      };
    } else {
      return {
        message: "No data available",
        status: 404
      };
    }
  } catch (error) {
    console.error("Error getting player data:", error.message);
    return {
      message: error.message,
      status: 400
    };
  }
};
