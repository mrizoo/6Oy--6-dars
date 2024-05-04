import { Link, Form, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { useSignup } from "../hooks/useSignup";
import "../hooks/useLogin";
import { useLogin } from "../hooks/useLogin";
export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const { signUpWithGoogle } = useSignup();
  const { loginWithEmailAndPassword } = useLogin();
  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      loginWithEmailAndPassword(actionData);
    }
  }, [actionData]);
  return (
    <div className="min-h-screen grid place-content-center w-full">
      <div className="mb-3">
        <Form method="post">
          <h1 className="text-4xl font-bold text-center">Login</h1>

          <FormInput label="Email" type="email" name="email" />

          <FormInput label="Password" type="password" name="password" />
          <button type="submit" className="btn btn-primary w-full mt-3">
            Submit
          </button>
        </Form>
      </div>
      <div>
        <button
          onClick={signUpWithGoogle}
          type="button"
          className="btn btn-secondary w-full"
        >
          <FaGoogle className="h-5 w-5" />
          Login
        </button>
        <p className="mt-4 text-center">
          Do not have account yet ?
          <Link to="/signup" className="link link-primary ml-3">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
