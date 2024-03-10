// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC4k6Qv3eYD7a2RF5zfeZW0BzO8kED5uJA",
//   authDomain: "react-pwa-6f857.firebaseapp.com",
//   projectId: "react-pwa-6f857",
//   storageBucket: "react-pwa-6f857.appspot.com",
//   messagingSenderId: "301566148405",
//   appId: "1:301566148405:web:b1fe59efacabdd7d7b967c",
//   measurementId: "G-ZLVZG33V4F",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyC4k6Qv3eYD7a2RF5zfeZW0BzO8kED5uJA",
  authDomain: "react-pwa-6f857.firebaseapp.com",
  projectId: "react-pwa-6f857",
  storageBucket: "react-pwa-6f857.appspot.com",
  messagingSenderId: "301566148405",
  appId: "1:301566148405:web:b1fe59efacabdd7d7b967c",
  measurementId: "G-ZLVZG33V4F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const registerHandler = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("Registration successful");

    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const loginHandler = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful");
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logOut = async () => {
  await signOut(auth);
  toast.success("Logout successful");
  return true;
};

export default app;
