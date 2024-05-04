import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { GlobalContext } from "../context/useGlobal";
import { useContext } from "react";

function useLogin() {
  const { dispatch } = useContext(GlobalContext);

  const loginWithEmailAndPassword = (actionData) => {
    signInWithEmailAndPassword(auth, actionData.email, actionData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOG_IN", payload: user });
        toast.success("WELCOME");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.success(errorMessage);
        const errorMessage = error.message;
      });
  };

  return { loginWithEmailAndPassword };
}

export { useLogin };
