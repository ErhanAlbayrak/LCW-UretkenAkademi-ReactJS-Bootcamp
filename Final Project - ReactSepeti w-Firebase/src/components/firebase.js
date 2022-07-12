import { initializeApp } from "firebase/app";
import {
     GoogleAuthProvider,
      getAuth, 
      signInWithPopup, 
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      sendPasswordResetEmail,
      signOut,
    } from "firebase/auth";
    import {
          getFirestore,
           query,
            getDocs,
              collection,
               where,
                addDoc,
            } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAIkAzEgv2t715I9yA-nR2VNAEiiARqfuA",
    authDomain: "reactsepeticom.firebaseapp.com",
    projectId: "reactsepeticom",
    storageBucket: "reactsepeticom.appspot.com",
    messagingSenderId: "933257674451",
    appId: "1:933257674451:web:39d573e004d712a8fcde26",
    measurementId: "G-7RNVLG7QCW"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  const logout = () => {
    debugger;
    signOut(auth);
  };

  

  export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };