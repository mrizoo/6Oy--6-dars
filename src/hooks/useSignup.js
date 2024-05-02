import { useContext } from "react";
import { GlobalContext } from "../context/useGlobal";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";
import { useActionData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
// const notify = () => toast.success("Welcome");

function useSignup() {
  const actionData = useActionData();

  const { dispatch } = useContext(GlobalContext);
  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        dispatch({ type: "LOG_IN", payload: user });
        toast.success("WELCOME");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const registerWithEmailAndPassword = () => {};

  return { signUpWithGoogle, registerWithEmailAndPassword };
}

export { useSignup };
