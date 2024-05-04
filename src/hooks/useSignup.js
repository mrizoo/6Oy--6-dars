import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/useGlobal";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";
import { useActionData } from "react-router-dom";
import toast from "react-hot-toast";

function useSignup() {
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
        toast.success(errorMessage);
      });
  };
  const registerWithEmailAndPassword = (actionData) => {
    console.log(actionData);
    createUserWithEmailAndPassword(auth, actionData.email, actionData.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(auth.currentUser, {
          displayName: actionData.name,
          photoURL: actionData.image,
        });
        dispatch({ type: "LOG_IN", payload: user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.success(errorMessage);
      });
  };

  return { signUpWithGoogle, registerWithEmailAndPassword };
}

export { useSignup };
