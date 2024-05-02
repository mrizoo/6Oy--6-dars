import { Form, useActionData } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useSignup } from "../hooks/useSignup";
import FormInput from "../components/FormInput";
import { useEffect } from "react";
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
  const { signUpWithGoogle } = useSignup();

  return (
    <div className="min-h-screen grid place-content-center w-full">
      <div className="mb-3">
        <Form method="post">
          <FormInput label="Display Name" type="text" name="displayName" />
          <FormInput label="Email" type="email" name="email" />
          <FormInput label="Image" type="url" name="image" />
          <FormInput label="Password" type="password" name="password" />
        </Form>
        <button type="submit" className="btn btn-primary w-full mt-3">
          Submit
        </button>
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
      </div>
    </div>
  );
}

export default Signup;
