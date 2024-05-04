import { Form, Link, useActionData } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useSignup } from "../hooks/useSignup";
import FormInput from "../components/FormInput";
import { useEffect } from "react";
import SubmitBtn from "../components/SubmitBtn";
//context

export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("displayName");
  let email = formData.get("email");
  let image = formData.get("image");
  let password = formData.get("password");
  return { name, email, image, password };
};

function Signup() {
  const { signUpWithGoogle, registerWithEmailAndPassword } = useSignup();
  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      registerWithEmailAndPassword(actionData);
    }
  }, [actionData]);
  return (
    <div className="min-h-screen grid place-content-center w-full">
      <div className="mb-3">
        <Form method="post">
          <h1 className="text-4xl font-bold text-center">Signup</h1>
          <FormInput label="Display Name" type="text" name="displayName" />
          <FormInput label="Email" type="email" name="email" />
          <FormInput label="Image" type="url" name="image" />
          <FormInput label="Password" type="password" name="password" />
          <div className="mt-4">
            <SubmitBtn onClick={registerWithEmailAndPassword} text="Submit" />
          </div>
        </Form>
      </div>
      <div>
        <button
          onClick={signUpWithGoogle}
          type="button"
          className="btn btn-secondary w-full"
        >
          <FaGoogle className="h-5 w-5" />
          SignUp
        </button>
        <p className="mt-4 text-center">
          Already registered ?
          <Link to="/login" className="link link-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
