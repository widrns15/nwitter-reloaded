import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATNsLLaOPQ4jrUIyDhRW9K3wMRuFMZItA",
  authDomain: "nwitter-reloaded-450d3.firebaseapp.com",
  projectId: "nwitter-reloaded-450d3",
  storageBucket: "nwitter-reloaded-450d3.appspot.com",
  messagingSenderId: "774734146271",
  appId: "1:774734146271:web:db2cfbf01a10bbc7d7976a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
